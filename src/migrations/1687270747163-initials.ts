import { MigrationInterface, QueryRunner } from "typeorm";

export class Initials1687270747163 implements MigrationInterface {
    name = 'Initials1687270747163'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "comments" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "comment" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "userToId" uuid, "userFromId" uuid, CONSTRAINT "PK_8bf68bc960f2b69e818bdb90dcb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(200) NOT NULL, "email" character varying(127) NOT NULL, "password" character varying NOT NULL, "isRecruiter" boolean NOT NULL DEFAULT false, "city" character varying, "schooling" character varying, "vacancy" character varying, "isWork" boolean, "linkedin" character varying, "github" character varying, "portfolio" character varying, "techId" uuid, CONSTRAINT "REL_1b0e92cd4ce24b5e15735417f5" UNIQUE ("techId"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "techs" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "html" boolean NOT NULL DEFAULT false, "css" boolean NOT NULL DEFAULT false, "js" boolean NOT NULL DEFAULT false, "react" boolean NOT NULL DEFAULT false, "ts" boolean NOT NULL DEFAULT false, "angular" boolean NOT NULL DEFAULT false, "vuejs" boolean NOT NULL DEFAULT false, "php" boolean NOT NULL DEFAULT false, "c" boolean NOT NULL DEFAULT false, "sass" boolean NOT NULL DEFAULT false, "node" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_8ab2729ee26c5893090fb7b1b2b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_35b01d5e3180b8e9b5b58b0d461" FOREIGN KEY ("userToId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_48c9f8b7979b180bcab499d2ea8" FOREIGN KEY ("userFromId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_1b0e92cd4ce24b5e15735417f52" FOREIGN KEY ("techId") REFERENCES "techs"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_1b0e92cd4ce24b5e15735417f52"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_48c9f8b7979b180bcab499d2ea8"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_35b01d5e3180b8e9b5b58b0d461"`);
        await queryRunner.query(`DROP TABLE "techs"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "comments"`);
    }

}
