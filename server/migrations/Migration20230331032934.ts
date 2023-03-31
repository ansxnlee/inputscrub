import { Migration } from '@mikro-orm/migrations';

export class Migration20230331032934 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "base_entity" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null);');

    this.addSql('create table "snippet_entity" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "sign" varchar(255) not null, "text" varchar(255) not null);');
  }

}
