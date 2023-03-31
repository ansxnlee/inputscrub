import 'reflect-metadata';
import http from "http";
import express from 'express';
import cors from 'cors';
import { EntityManager, EntityRepository, MikroORM, RequestContext } from "@mikro-orm/core"
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import mikroConfig from './mikro-orm.config';
import { CORSORIGIN } from './utils/constants';
import { SnippetEntity } from './entities/SnippetEntity';
import { SnippetRouter } from './routes/SnippetRouter';

// reusing mikroORM request instances
export const DI = {} as {
  server: http.Server;
  orm: MikroORM,
  em: EntityManager,
  snippetRepository: EntityRepository<SnippetEntity>,
};

// expressJS setup
export const app = express();
const PORT = process.env.PORT || 4000;

export const main = (async () => {
  // mikroORM setup
  DI.orm = await MikroORM.init<PostgreSqlDriver>(mikroConfig);
  DI.em = DI.orm.em
  DI.snippetRepository = DI.orm.em.getRepository(SnippetEntity);
  
  app.use(express.json());
  // forking mikroORM entity manager so their identity maps do not collide
  app.use((_req, _res, next) => {
    RequestContext.create(DI.orm.em, next);
  });

  const corsOptions = {
    origin: CORSORIGIN,
    optionsSuccessStatus: 200
  }
  app.use(cors(corsOptions));

  app.use('/', SnippetRouter);
  app.use((_req, res) => res.status(404).json({ message: 'Route not found'}));

  DI.server = app.listen(PORT, () => {
    console.log(`express server started on localhost:${PORT}`)
  })
})();