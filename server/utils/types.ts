import http from "http";
import { EntityManager, EntityRepository, MikroORM } from "@mikro-orm/core"
import { SnippetEntity } from '../entities/SnippetEntity';

/**
 * @interface MikroOrm dependency injection container type
 * @field {http.Server} express http listener
 * @field {MikroORM} Helper class for bootstrapping MikroORM.
 * @field {EntityManager} central mikroORM access point
 * @field {snippetRepository} manager helper for snippet related queries
 */
export interface MikroDI {
  server: http.Server;
  orm: MikroORM,
  em: EntityManager,
  snippetRepository: EntityRepository<SnippetEntity>,
}
