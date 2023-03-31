import { Entity, Property } from "@mikro-orm/core";
import { BaseEntity } from "./BaseEntity";

@Entity()
export class SnippetEntity extends BaseEntity {
  @Property()
  sign: string;

  @Property()
  text: string;

  constructor(sign: string, text: string) {
    super();
    this.sign = sign;
    this.text = text;
  }
}