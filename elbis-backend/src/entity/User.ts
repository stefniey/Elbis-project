// import 'reflect-metadata';
// import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

// @Entity()
// export class User {
//     @PrimaryGeneratedColumn()
//     id: number | undefined;

//     @Column({ type: 'varchar', length: 50 })
//     name: string | undefined;

//     @Column({ type: 'varchar', length: 100, unique: true })
//     email: string | undefined;

//     @Column({ type: 'varchar', length: 255 })
//     password: string | undefined;

//     @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
//     created_at: Date | undefined;
// }

// database structure using type orm
import "reflect-metadata";
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    BeforeInsert,
} from "typeorm";

import * as bcrypt from "bcryptjs";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number | undefined;

    @Column({ type: "varchar", length: 50 })
    name: string | undefined;

    @Column({ type: "varchar", length: 100, unique: true })
    email: string | undefined;

    @Column({ type: "varchar", length: 255 })
    password: string | undefined;

    @BeforeInsert() // This decorator allows you to run code before the entity is inserted into the database
    async hashPassword() {
        if (this.password) {
            this.password = await bcrypt.hash(this.password, 10);
        }
    }
}

// import 'reflect-metadata';
// import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

// @Entity()
// export class User {
//     @PrimaryGeneratedColumn()
//     id: number | undefined;

//     @Column()
//     username: string | undefined;

//     @Column()
//     email: string | undefined;

//     @Column()
//     password: string | undefined;

//     @CreateDateColumn()
//     createdAt: Date | undefined;

//     @UpdateDateColumn()
//     updatedAt: Date | undefined;

// }
