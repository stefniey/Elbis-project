// // src/controller/propertyController.ts

// import { Request, Response } from 'express';
// import { getRepository } from 'typeorm';
// import { Property } from '../entity/Property';

// // Fetch all properties
// export const getProperties = async (req: Request, res: Response) => {
//     const propertyRepository = getRepository(Property);
//     try {
//         const properties = await propertyRepository.find();
//         res.json(properties);
//     } catch (error) {
//         res.status(500).json({ message: 'Error fetching properties', error });
//     }
// };

// // Fetch a property by ID
// export const getPropertyById = async (req: Request, res: Response) => {
//     const propertyRepository = getRepository(Property);
//     const { id } = req.params;

//     try {
//         // Convert the id from string to number
//         const propertyId = parseInt(id, 10);

//         // Use the number in the findOne method
//         const property = await propertyRepository.findOne({ where: { id: propertyId } });

//         if (!property) {
//             return res.status(404).json({ message: 'Property not found' });
//         }
//         res.json(property);
//     } catch (error) {
//         res.status(500).json({ message: 'Error fetching property', error });
//     }
// };

// // Create a new property
// export const createProperty = async (req: Request, res: Response) => {
//     const propertyRepository = getRepository(Property);
//     const { title, description, location, price, imageUrl } = req.body;

//     try {
//         const property = new Property();
//         property.title = title;
//         property.description = description;
//         property.location = location;
//         property.price = price;
//         property.imageUrl = imageUrl;

//         await propertyRepository.save(property);
//         res.status(201).json({ message: 'Property created successfully', property });
//     } catch (error) {
//         res.status(400).json({ message: 'Error creating property', error });
//     }
// };

// // Update a property by ID
// export const updateProperty = async (req: Request, res: Response) => {
//     const propertyRepository = getRepository(Property);
//     const { id } = req.params;

//     try {
//         // Convert the id from string to number
//         const propertyId = parseInt(id, 10);

//         const property = await propertyRepository.findOne({ where: { id: propertyId } });
//         if (!property) {
//             return res.status(404).json({ message: 'Property not found' });
//         }

//         // Update fields
//         const { title, description, location, price, imageUrl } = req.body;
//         property.title = title || property.title;
//         property.description = description || property.description;
//         property.location = location || property.location;
//         property.price = price || property.price;
//         property.imageUrl = imageUrl || property.imageUrl;

//         await propertyRepository.save(property);
//         res.json({ message: 'Property updated successfully', property });
//     } catch (error) {
//         res.status(400).json({ message: 'Error updating property', error });
//     }
// };

// // Delete a property by ID
// export const deleteProperty = async (req: Request, res: Response) => {
//     const propertyRepository = getRepository(Property);
//     const { id } = req.params;

//     try {
//         // Convert the id from string to number
//         const propertyId = parseInt(id, 10);

//         const property = await propertyRepository.findOne({ where: { id: propertyId } });
//         if (!property) {
//             return res.status(404).json({ message: 'Property not found' });
//         }

//         await propertyRepository.remove(property);
//         res.json({ message: 'Property deleted successfully' });
//     } catch (error) {
//         res.status(500).json({ message: 'Error deleting property', error });
//     }
// };




import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Property } from '../entity/Property';
import { error } from 'console';

// Fetch all properties
export const getProperties = async (req: Request, res: Response) => {
    const propertyRepository = getRepository(Property);
    try {
        const properties = await propertyRepository.find();
        res.json(properties);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching properties', error });
    }
};

// Fetch a property by ID
export const getPropertyById = async (req: Request, res: Response) => {
    const propertyRepository = getRepository(Property);
    const { id } = req.params;

    try {
        const propertyId = parseInt(id, 10);
        const property = await propertyRepository.findOne({ where: { id: propertyId } });

        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }
        res.json(property);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching property', error });
    }
};

// Create a new property
export const createProperty = async (req: Request, res: Response) => {
    const propertyRepository = getRepository(Property);
    const { propertyTitle, description, location, price, imageUrl } = req.body; // Updated field name

    try {
        const property = new Property();
        property.propertyTitle = propertyTitle; // Updated field name
        property.description = description;
        property.location = location;
        property.price = price;
        property.imageUrl = imageUrl;

        await propertyRepository.save(property);
        res.status(201).json({ message: 'Property created successfully', property });
    } catch (error) {
        res.status(400).json({ message: 'Error creating property', error });
    }
};

// Update a property by ID
export const updateProperty = async (req: Request, res: Response) => {
    const propertyRepository = getRepository(Property);
    const { id } = req.params;

    try {
        const propertyId = parseInt(id, 10);
        const property = await propertyRepository.findOne({ where: { id: propertyId } });
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

        await propertyRepository.save(property);
        res.json({ message: 'Property updated successfully', property });
    } catch (error) {
        res.status(400).json({ message: 'Error updating property', error });
    }
};

// Delete a property by ID
export const deleteProperty = async (req: Request, res: Response) => {
    const propertyRepository = getRepository(Property);
    const { id } = req.params;

    try {
        // Convert the id from string to number
        const propertyId = parseInt(id, 10);

        const property = await propertyRepository.findOne({ where: { id: propertyId } });
        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }

        await propertyRepository.remove(property);
        return res.json({ message: 'Property deleted successfully' }); // Return after sending response
    } catch (error) {
        res.status(500).json({ message: 'Error deleting property', error }); // Only send this in the catch block
    }
};
