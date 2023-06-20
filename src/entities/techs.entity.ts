import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { User } from "./user.entity";

@Entity("techs")
export class Techs {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ default: false })
  html: boolean;

  @Column({ default: false })
  css: boolean;

  @Column({ default: false })
  js: boolean;

  @Column({ default: false })
  react: boolean;

  @Column({ default: false })
  ts: boolean;

  @Column({ default: false })
  angular: boolean;

  @Column({ default: false })
  vuejs: boolean;

  @Column({ default: false })
  php: boolean;

  @Column({ default: false })
  c: boolean;

  @Column({ default: false })
  sass: boolean;

  @Column({ default: false })
  node: boolean;

  @OneToOne(() => User, (user) => user.id, { onDelete: "CASCADE" })
  user: User;
}
