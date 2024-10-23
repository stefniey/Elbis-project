"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Property = void 0;
// src/entity/Property.ts
require("reflect-metadata");
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
const typeorm_1 = require("typeorm");
let Property = class Property {
};
exports.Property = Property;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Object)
], Property.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }) // Ensure title is defined as varchar
    ,
    __metadata("design:type", Object)
], Property.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }) // Use 'text' for descriptions if longer text is needed
    ,
    __metadata("design:type", Object)
], Property.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }) // Define location as varchar
    ,
    __metadata("design:type", Object)
], Property.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2 }) // Use decimal for price
    ,
    __metadata("design:type", Object)
], Property.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }) // Ensure imageUrl is defined as varchar
    ,
    __metadata("design:type", Object)
], Property.prototype, "imageUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }) // If you need a timestamp
    ,
    __metadata("design:type", Object)
], Property.prototype, "created_at", void 0);
exports.Property = Property = __decorate([
    (0, typeorm_1.Entity)()
], Property);
