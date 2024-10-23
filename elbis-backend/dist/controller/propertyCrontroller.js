"use strict";
// // src/controller/propertyController.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProperty = exports.updateProperty = exports.createProperty = exports.getPropertyById = exports.getProperties = void 0;
const typeorm_1 = require("typeorm");
const Property_1 = require("../entity/Property");
// Fetch all properties
const getProperties = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const propertyRepository = (0, typeorm_1.getRepository)(Property_1.Property);
    try {
        const properties = yield propertyRepository.find();
        res.json(properties);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching properties', error });
    }
});
exports.getProperties = getProperties;
// Fetch a property by ID
const getPropertyById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const propertyRepository = (0, typeorm_1.getRepository)(Property_1.Property);
    const { id } = req.params;
    try {
        const propertyId = parseInt(id, 10);
        const property = yield propertyRepository.findOne({ where: { id: propertyId } });
        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }
        res.json(property);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching property', error });
    }
});
exports.getPropertyById = getPropertyById;
// Create a new property
const createProperty = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const propertyRepository = (0, typeorm_1.getRepository)(Property_1.Property);
    const { propertyTitle, description, location, price, imageUrl } = req.body; // Updated field name
    try {
        const property = new Property_1.Property();
        property.propertyTitle = propertyTitle; // Updated field name
        property.description = description;
        property.location = location;
        property.price = price;
        property.imageUrl = imageUrl;
        yield propertyRepository.save(property);
        res.status(201).json({ message: 'Property created successfully', property });
    }
    catch (error) {
        res.status(400).json({ message: 'Error creating property', error });
    }
});
exports.createProperty = createProperty;
// Update a property by ID
const updateProperty = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const propertyRepository = (0, typeorm_1.getRepository)(Property_1.Property);
    const { id } = req.params;
    try {
        const propertyId = parseInt(id, 10);
        const property = yield propertyRepository.findOne({ where: { id: propertyId } });
        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }
        // Update fields
        const { propertyTitle, description, location, price, imageUrl } = req.body; // Updated field name
        property.propertyTitle = propertyTitle || property.propertyTitle; // Updated field name
        property.description = description || property.description;
        property.location = location || property.location;
        property.price = price || property.price;
        property.imageUrl = imageUrl || property.imageUrl;
        yield propertyRepository.save(property);
        res.json({ message: 'Property updated successfully', property });
    }
    catch (error) {
        res.status(400).json({ message: 'Error updating property', error });
    }
});
exports.updateProperty = updateProperty;
// Delete a property by ID
const deleteProperty = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const propertyRepository = (0, typeorm_1.getRepository)(Property_1.Property);
    const { id } = req.params;
    try {
        // Convert the id from string to number
        const propertyId = parseInt(id, 10);
        const property = yield propertyRepository.findOne({ where: { id: propertyId } });
        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }
        yield propertyRepository.remove(property);
        return res.json({ message: 'Property deleted successfully' }); // Return after sending response
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting property', error }); // Only send this in the catch block
    }
});
exports.deleteProperty = deleteProperty;
