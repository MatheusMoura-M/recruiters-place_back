import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeUpdate,
  BeforeInsert,
  OneToMany,
} from "typeorm";
import { hashSync } from "bcryptjs";
import { Exclude } from "class-transformer";
import { Comments } from "./comments.entity";

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

  @OneToMany(() => Comments, (comment) => comment.users, {
    onDelete: "CASCADE",
  })
  comments: Comments[];

  @BeforeUpdate()
  @BeforeInsert()
  hashPassword() {
    this.password = hashSync(this.password, 10);
  }
}
