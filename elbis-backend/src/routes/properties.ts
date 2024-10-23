// src/routes/propertyRoutes.ts
import { Router } from 'express';
import {
    getProperties,
    getPropertyById,
    createProperty,
    updateProperty,
    deleteProperty
} from '../controller/propertyCrontroller';

const router = Router();

// Define the routes for properties
router.get('/', getProperties); 
router.get('/:id', getPropertyById); // GET a property by ID
router.post('/', createProperty); // POST a new property
router.put('/:id', updateProperty); // PUT (update) a property by ID
router.delete('/:id', deleteProperty); // DELETE a property by ID

export default router;
