import 'reflect-metadata';
import { MikroDI } from './utils/types';
import { MikroORM, RequestContext } from "@mikro-orm/core"
import mikroConfig from './mikro-orm.config';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { SnippetEntity } from './entities/SnippetEntity';
import { Request, Response, NextFunction } from 'express';
import { PORT } from './utils/constants';
import { SnippetRouter } from './routes/SnippetRouter';

// reusing mikroORM request instances
export const DI = {} as MikroDI;

// expressJS setup
const app = require('./app.ts');

// middleware setup (ie. global loggers, service workers, live documentation, etc.)
(async () => {
  // mikroORM setup
  DI.orm = await MikroORM.init<PostgreSqlDriver>(mikroConfig);
  DI.em = DI.orm.em;
  DI.snippetRepository = DI.orm.em.getRepository(SnippetEntity);
  
  // forking mikroORM entity manager so their identity maps do not collide
  app.use((_req: Request, _res: Response, next: NextFunction) => {
    RequestContext.create(DI.orm.em, next);
  });

  app.use('/', SnippetRouter);
  app.use((_req: Request, res: Response) => res.status(404).json({ message: 'Route not found'}));
  
  DI.server = app.listen(PORT, () => {
    console.log(`express server started on localhost:${PORT}`)
  })
})();