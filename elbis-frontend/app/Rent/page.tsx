'use client'; // Indicates this component uses client-side rendering

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation'; // Import useSearchParams for getting query parameters
import axios from 'axios';

const Rent = () => {
    const searchParams = useSearchParams(); // Initialize useSearchParams
    const id = searchParams.get('id'); // Get the 'id' from the query parameters
    const [house, setHouse] = useState<any | null>(null); // State to hold house details
    const [loading, setLoading] = useState<boolean>(true); // Loading state
    const [error, setError] = useState<string | null>(null); // Error state

    useEffect(() => {
        const fetchHouseDetails = async () => {
            console.log(`House ID: ${id}`); // Log the House ID

            if (id) { // Check if id is defined
                try {
                    // Fetch house details from the API
                    const response = await axios.get(`https://elbis-api.onrender.com/?id=${id}`);
                    console.log('API Response:', response.data); // Log the entire API response

                    // Find the house with the matching ID in the response data
                    const apartment = response.data.find((house: { id: number }) => house.id === parseInt(id));

                    // Check if the apartment exists
                    if (apartment) {
                        setHouse(apartment); // Set house details in state

                        // Log the details of the house after fetching
                        console.log('House Details:', {
                            location: apartment.location,
                            description: apartment.description,
                            bedroom: apartment.bedroom,
                            price: apartment.price,
                            image: apartment.image,
                        });
                    } else {
                        setError('House not found.'); // Set error message if no data found
                    }
                } catch (error) {
                    console.error('Error fetching house details:', error);
                    setError('Failed to load house details.'); // Set error message
                } finally {
                    setLoading(false); // Update loading state
                }
            } else {
                setError('No house ID provided in the URL.'); // Handle case where ID is not provided
                setLoading(false); // Stop loading if there's no ID
            }
        };

        fetchHouseDetails(); // Fetch house details when the component mounts or id changes
    }, [id]); // Run effect when id changes

    // Show loading message while fetching data
    if (loading) {
        return <div className="text-center">Loading...</div>;
    }

    // Show error message if an error occurred or no ID is provided
    if (error) {
        return <div className="text-center text-red-600">{error}</div>;
    }

    // If house data is not found, display a message
    if (!house) {
        return <div className="text-center">House not found.</div>;
    }

    // Display the house details once loaded
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold">{house.location}</h1>
            <img
                src={house.image}
                alt={house.location}
                className="w-full h-48 object-cover rounded-md"
            />
            <p className="mt-2">{house.description}</p>
            <p className="mt-2">Bedrooms: {house.bedroom}</p>
            <p className="mt-2 text-green-600 font-semibold">Price: {house.price}</p>
        </div>
    );
};

export default Rent; // Ensure this is the default export
