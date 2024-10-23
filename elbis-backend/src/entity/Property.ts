// src/entity/Property.ts
import 'reflect-metadata'; 
// import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

// @Entity()
// export class Property {
//     @PrimaryGeneratedColumn()
//     id: number | undefined;

//     @Column()
//     title: string | undefined;

//     @Column()
//     location: string | undefined;

//     @Column('decimal') // Using decimal for price
//     price: number | undefined;

//     @Column('text') // Using text for longer descriptions
//     description: string | undefined;

//     @CreateDateColumn() // Automatically sets the date when the property is created
//     createdAt: Date | undefined;

//     @UpdateDateColumn() // Automatically updates the date when the property is modified
//     updatedAt: Date | undefined;
//     imageUrl: any;
// }


import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Property {
    @PrimaryGeneratedColumn()
    id: number | undefined;

    @Column({ type: 'varchar', length: 255 }) // Ensure title is defined as varchar
    title: string | undefined;

    @Column({ type: 'text', nullable: true }) // Use 'text' for descriptions if longer text is needed
    description: string | undefined;

    @Column({ type: 'varchar', length: 255 }) // Define location as varchar
    location: string | undefined;

    @Column({ type: 'decimal', precision: 10, scale: 2 }) // Use decimal for price
    price: number | undefined;

    @Column({ type: 'varchar', length: 255, nullable: true }) // Ensure imageUrl is defined as varchar
    imageUrl: string | undefined;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }) // If you need a timestamp
    created_at: Date | undefined;
    propertyTitle: any;
}
