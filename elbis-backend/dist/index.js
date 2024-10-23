"use strict";
// import 'reflect-metadata';
// import { createConnection } from 'typeorm';
// import express = require('express');
// // import cors from 'cors';
// const cors = require('cors'); 
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { User } from './entity/User';
// import userRouter from './routes/user';
// const app = express();
// const port = 3000;
// app.use(cors());
// app.use(express.json());
// app.use('/users', userRouter);
// createConnection().then(async connection => {
//   console.log('Connected to the database');
//   app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
//   });
// }).catch(error => console.log(error));
// import 'reflect-metadata';
// import { createConnection } from 'typeorm';
// import express = require('express');
// const cors = require('cors'); // Modified import
// import { User } from './entity/User';
// import userRouter from './routes/user';
// const app = express();
// const port = 3000;
// app.use(cors());
// app.use(express.json());
// app.use('/users', userRouter);
// createConnection().then(async connection => {
//   console.log('Connected to the database');
//   app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
//   });
// }).catch(error => console.log(error));
// import 'reflect-metadata';
// import { DataSource } from 'typeorm';
// import express = require('express');
// import * as cors from 'cors';
// import { User } from './entity/User';
// import userRouter from './routes/user';
// import * as dotenv from 'dotenv'; // Correct import
// // Load environment variables from .env file
// dotenv.config();
// const app = express();
// const port = 3000;
// // Create a new DataSource instance with connection options
// const AppDataSource = new DataSource({
//   type: 'postgres',
//   url: process.env.DATABASE_URL, 
//   entities: [User], 
//   synchronize: true, 
// });
// app.use(cors());
// app.use(express.json());
// app.use('/users', userRouter);
// // Initialize the DataSource and start the server
// AppDataSource.initialize()
//   .then(async () => {
//     console.log('Connected to the database');
//     app.listen(port, () => {
//       console.log(`Server is running on http://localhost:${port}`);
//     });
//   })
//   .catch((error) => console.log('Error connecting to the database:', error));
// import express = require('express');
// const app = express();
// const port = process.env.PORT || 3000; 
// // Simple route to test server
// app.get('/', (req, res) => {
//   res.send('Hello World');
// });
// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
// import 'reflect-metadata';
// import { DataSource } from 'typeorm';
// import express = require('express');
// import * as cors from 'cors';
// import * as dotenv from 'dotenv';
// import { User } from './entity/User';
// import userRouter from './routes/user';
// // Load environment variables from .env file
// dotenv.config();
// const app = express();
// const port = process.env.PORT || 3000; // Use environment variable for port
// // Create a new DataSource instance with connection options
// const AppDataSource = new DataSource({
//   type: 'postgres',
//   url: process.env.DATABASE_URL, 
//   entities: [User], 
//   synchronize: true,
// });
// app.use(cors());
// app.use(express.json());
// app.use('/user', userRouter);
// // Initialize the DataSource and start the server
// AppDataSource.initialize()
//   .then(() => {
//     console.log('Connected to the database');
//     app.listen(port, () => {
//       console.log(`Server is running on http://localhost:${port}`);
//     });
//   })
//   .catch((error) => console.error('Error connecting to the database:', error));
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const express = require("express");
const cors_1 = __importDefault(require("cors"));
const dotenv = __importStar(require("dotenv"));
const User_1 = require("./entity/User");
const Property_1 = require("./entity/Property"); // Import your Property entity
const user_1 = __importDefault(require("./routes/user"));
const properties_1 = __importDefault(require("./routes/properties")); // Import your property routes
// Load environment variables from .env file
dotenv.config();
const app = express();
const port = process.env.PORT || 3000; // Use environment variable for port
// Create a new DataSource instance with connection options
const AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    url: process.env.DATABASE_URL,
    entities: [User_1.User, Property_1.Property], // Add Property to entities array
    synchronize: true,
});
app.use((0, cors_1.default)());
app.use(express.json());
app.use('/user', user_1.default);
app.use('/api/properties', properties_1.default); // Add property routes
// Initialize the DataSource and start the server
AppDataSource.initialize()
    .then(() => {
    console.log('Connected to the database');
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
})
    .catch((error) => console.error('Error connecting to the database:', error));
