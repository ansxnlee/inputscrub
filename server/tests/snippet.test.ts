import { jest, describe, test, expect, beforeAll } from '@jest/globals';
import request from 'supertest';
import { MikroDI } from '../utils/types';
import { MikroORM, RequestContext } from "@mikro-orm/core"
import mikroConfig from '../mikro-orm.config';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { SnippetEntity } from '../entities/SnippetEntity';
import { SnippetRouter } from '../routes/SnippetRouter';
import { Request, Response, NextFunction } from 'express';

const app = require('../app');

// replace "realTimers" to accommodate for async functions
jest.useFakeTimers();

// bootstrap mikroORM into express
beforeAll(() => {
  const DI = {} as MikroDI;
  (async () => {
    DI.orm = await MikroORM.init<PostgreSqlDriver>(mikroConfig);
    DI.em = DI.orm.em
    DI.snippetRepository = DI.orm.em.getRepository(SnippetEntity);

    // forking mikroORM entity manager so their identity maps do not collide
    app.use((_req: Request, _res: Response, next: NextFunction) => {
      RequestContext.create(DI.orm.em, next);
    });
  })
})

describe('POST /', () => {
  // add related routes to be tested from express router
  beforeAll(() => {
    app.use('/', SnippetRouter);
    app.use((_req: Request, res: Response) => res.status(404).json({ message: 'Route not found'}));
  })
  test('should throw error code "invalid_type" if text is not a string', async () => {
    const res = await request(app)
      .post('/')
      .send({ text: 123 })
      .set('Accept', 'application/json')
    //expect(res.headers["Content-Type"]).toMatch(/json/);
    expect(res.status).toEqual(400);
  })
}) 
