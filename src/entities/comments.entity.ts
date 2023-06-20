import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./index";

@Entity("comments")
export class Comments {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => User, (user) => user.id, { cascade: true })
  userTo: User;

  @ManyToOne(() => User, (user) => user.id, { cascade: true })
  userFrom: User;

  @Column()
  comment: string;

  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  updatedAt: Date;
}
