import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeUpdate,
  BeforeInsert,
  OneToMany,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { getRounds, hashSync } from "bcryptjs";
import { Exclude } from "class-transformer";
import { Comments } from "./comments.entity";
import { iTechs } from "../interfaces/techs";
import { Techs } from "./techs.entity";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 200 })
  name: string;

  @Column({ length: 127 })
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column({ default: false })
  isRecruiter: boolean;

  @Column({ nullable: true })
  city: string;

  @Column({ nullable: true })
  schooling: string;

  @Column({ nullable: true })
  vacancy: string;

  @Column({ nullable: true })
  isWork: boolean;

  @Column({ nullable: true })
  linkedin: string;

  @Column({ nullable: true })
  github: string;

  @Column({ nullable: true })
  portfolio: string;

  @OneToOne(() => Techs, (tech) => tech.id, { onDelete: "CASCADE" })
  @JoinColumn()
  tech: Techs;

  @OneToMany(() => Comments, (comment) => comment.users, {
    onDelete: "CASCADE",
  })
  comments: Comments[];

  @BeforeInsert()
  @BeforeUpdate()
  hashPasssword() {
    const isEncripted = getRounds(this.password);

    if (!isEncripted) {
      this.password = hashSync(this.password, 10);
    }
  }
}
