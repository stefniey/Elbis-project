"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/propertyRoutes.ts
const express_1 = require("express");
const propertyCrontroller_1 = require("../controller/propertyCrontroller");
const router = (0, express_1.Router)();
// Define the routes for properties
router.get('/', propertyCrontroller_1.getProperties); // GET all properties
router.get('/:id', propertyCrontroller_1.getPropertyById); // GET a property by ID
router.post('/', propertyCrontroller_1.createProperty); // POST a new property
router.put('/:id', propertyCrontroller_1.updateProperty); // PUT (update) a property by ID
router.delete('/:id', propertyCrontroller_1.deleteProperty); // DELETE a property by ID
exports.default = router;
