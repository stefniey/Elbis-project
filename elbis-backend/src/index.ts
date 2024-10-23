import 'reflect-metadata';
import { DataSource } from 'typeorm';
import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import { User } from './entity/User';
import { Property } from './entity/Property';
import userRouter from './routes/user';
import propertyRouter from './routes/properties';

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 4000; // Use environment variable for port

// Create a new DataSource instance with connection options
const AppDataSource = new DataSource({
    type: 'postgres',
    url: process.env.DATABASE_URL,
    entities: [User, Property], // Add Property to entities array
    synchronize: true,
});

// Middleware setup
app.use(cors());
app.use(express.json());

// Define a root route
app.get('/', (req, res) => {
    res.send('Welcome to the Property API!');
});

// User and Property routes
app.use('/user', userRouter); 
app.use('/api/properties', propertyRouter); // Add property routes

// Initialize the DataSource and start the server
AppDataSource.initialize()
    .then(() => {
        console.log('Connected to the database');
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    })
    .catch((error) => console.error('Error connecting to the database:', error));







// easy port setup    
// Import the express module
// const express = require('express');

// // Create an instance of an Express application
// const app = express();

// // Define a port to listen on
// const PORT = 4000;

// // Define a root route
// app.get('/', (req: any, res: { send: (arg0: string) => void; }) => {
//     res.send('Hello World!');
// });

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });
