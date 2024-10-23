

'use client'

import React, { useEffect, useRef, useState, FormEvent } from "react";
import axios from 'axios';
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/Footer";
import Link from "next/link";

// Define the interface for a house
interface House {
    id: number;
    type: string;
    location: string;
    bedroom: string;
    price: string;
    image: string;
    description: string;
}

// Function to shuffle the houses array
const shuffleArray = (array: House[]) => {
    return array.sort(() => Math.random() - 0.5);
};

const Page = () => {
    const [houses, setHouses] = useState<House[]>([]);
    const [error, setError] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const [isDropdownOpenType, setIsDropdownOpenType] = useState(false);
    const [isDropdownOpenLocation, setIsDropdownOpenLocation] = useState(false);
    const [isDropdownOpenPrice, setIsDropdownOpenPrice] = useState(false);
    const [isDropdownOpenBedroom, setIsDropdownOpenBedroom] = useState(false);

    const [type, setType] = useState("");
    const [location, setLocation] = useState("");
    const [price, setPrice] = useState("");
    const [bedroom, setBedroom] = useState("");

    const dropdownRefs = {
        type: useRef<HTMLDivElement>(null),
        location: useRef<HTMLDivElement>(null),
        price: useRef<HTMLDivElement>(null),
        bedroom: useRef<HTMLDivElement>(null),
    };



    const handlePropertySelect = (type: React.SetStateAction<string>) => {
        setType(type);
        setIsDropdownOpenType(false);
    };

    const handleLocationSelect = (location: React.SetStateAction<string>) => {
        setLocation(location);
        setIsDropdownOpenLocation(false);
    };

    const handlePriceSelect = (price: React.SetStateAction<string>) => {
        setPrice(price);
        setIsDropdownOpenPrice(false);
    };

    const handleBedroomSelect = (bedroom: React.SetStateAction<string>) => {
        setBedroom(bedroom);
        setIsDropdownOpenBedroom(false);
    };
    
    const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setSearchTerm(e.target.value);
    };



    const handleSearch = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
    
        // Log inputs for debugging purposes
        console.log("Search Input:", { type, location, bedroom, price });
    
        // Ensure at least one field is filled to avoid unnecessary API calls
        if (!type && !location && !bedroom && !price) {
            setError('Please select at least one filter criteria.');
            return;
        }
    
        try {
            // Fetch all houses data from the API
            const response = await axios.get('https://elbis-api.onrender.com/type/tier1');
    
            // Filter the fetched houses based on selected criteria
            const filteredHouses = response.data.filter((house: House) => {
                return (
                    (!type || house.type === type) &&
                    (!location || house.location === location) &&
                    (!bedroom || house.bedroom === bedroom) &&
                    (!price || house.price === price)
                );
            });
    
            // Check if any filtered results exist
            if (filteredHouses.length > 0) {
                setHouses(filteredHouses);
                setError('');
            } else {
                setHouses([]);
                setError('No properties found based on your search criteria.');
            }
        } catch (error) {
            setError('Error fetching houses from the API');
            console.error(error);
        }
    };
    


    return (
        <div>
            <Navbar />
            <section className='mt-32'>
                <div className="w-full lg:w-[1200px] mx-auto p-4 bg-[#fff] shadow-[0_4px_10px_0_rgba(0,0,0,0.25)] rounded-[8px]">
                    <div className='pb-3 text-[#271785] text-[16px] leading-[24px] tracking-[-0.3px] font-normal'>
                        Search for available properties
                    </div>

                    <form onSubmit={handleSearch}>
                        <div className="relative w-full mb-4">
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={handleInputChange}
                                className="w-full p-3 pl-10 bg-[#F7F7F7] text-[#000] rounded-lg placeholder-[#C6C6C6] focus:outline-none"
                                placeholder="Search for my apartment"
                            />
                            <img
                                src="/assets/szh.svg"
                                alt="Search Icon"
                                className="absolute left-3 top-3 h-5 w-5"
                            />
                        </div>


                        {/* Dropdown Section */}
                        <div className="grid grid-cols-5 gap-36">
                            <div ref={dropdownRefs.type} className="relative lg:w-[232px] text-[#3A3A3A] lg:text-[16px]">
                                <div
                                    className="w-full p-3 pr-8 bg-white border border-gray-300 rounded flex items-center justify-between cursor-pointer"
                                    onClick={() => setIsDropdownOpenType(!isDropdownOpenType)}
                                >
                                    <div className="flex items-center">
                                        <img
                                            src="/assets/home.png"
                                            alt="Property Icon"
                                            className="w-5 h-5 mr-2"
                                        />
                                        <span>{type || "Property Type"}</span>
                                    </div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`w-5 h-5 pointer-events-none transition-transform duration-200 ${isDropdownOpenType ? 'rotate-180' : ''}`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </div>
                                {isDropdownOpenType && (
                                    <div className="absolute left-0 right-0 top-full mt-1 w-full bg-white border border-gray-300 rounded shadow-lg z-10 divide-y divide-gray-300">
                                        <div className="p-3 cursor-pointer hover:bg-gray-100" onClick={() => handlePropertySelect("")}>Tier 1</div>
                                    </div>
                                )}
                            </div>

                            <div ref={dropdownRefs.location} className="relative lg:w-[232px] text-[#3A3A3A] lg:text-[16px]">
                                <div
                                    className="w-full p-3 pr-8 bg-white border border-gray-300 rounded flex items-center justify-between cursor-pointer"
                                    onClick={() => setIsDropdownOpenLocation(!isDropdownOpenLocation)}
                                >
                                    <div className="flex items-center">
                                        <img
                                            src="/assets/Location.png"
                                            alt="Location Icon"
                                            className="w-5 h-5 mr-2"
                                        />
                                        <span>{location || "Location"}</span>
                                    </div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`w-5 h-5 pointer-events-none transition-transform duration-200 ${isDropdownOpenLocation ? 'rotate-180' : ''}`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </div>
                                {isDropdownOpenLocation && (
                                    <div className="absolute left-0 right-0 top-full mt-1 w-full bg-white border border-gray-300 rounded shadow-lg z-10 divide-y divide-gray-300">
                                        <div className="p-3 cursor-pointer hover:bg-gray-100" onClick={() => handleLocationSelect("Port-Harcourt")}>Port-Harcourt</div>
                                        <div className="p-3 cursor-pointer hover:bg-gray-100" onClick={() => handleLocationSelect("Obi-Akpor")}>Obi-Akpor</div>
                                        <div className="p-3 cursor-pointer hover:bg-gray-100" onClick={() => handleLocationSelect("Oyigbo")}>Oyigbo</div>
                                    </div>
                                )}
                            </div>

                            <div ref={dropdownRefs.bedroom} className="relative lg:w-[232px] text-[#3A3A3A] lg:text-[16px]">
                                <div
                                    className="w-full p-3 pr-8 bg-white border border-gray-300 rounded flex items-center justify-between cursor-pointer"
                                    onClick={() => setIsDropdownOpenBedroom(!isDropdownOpenBedroom)}
                                >
                                    <div className="flex items-center">
                                        <img
                                            src="/assets/bedroom.png"
                                            alt="Bedroom Icon"
                                            className="w-5 h-5 mr-2"
                                        />
                                        <span>{bedroom || "Bedrooms"}</span>
                                    </div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`w-5 h-5 pointer-events-none transition-transform duration-200 ${isDropdownOpenBedroom ? 'rotate-180' : ''}`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </div>
                                {isDropdownOpenBedroom && (
                                    <div className="absolute left-0 right-0 top-full mt-1 w-full bg-white border border-gray-300 rounded shadow-lg z-10 divide-y divide-gray-300">
                                        <div className="p-3 cursor-pointer hover:bg-gray-100" onClick={() => handleBedroomSelect("1")}>1</div>
                                        <div className="p-3 cursor-pointer hover:bg-gray-100" onClick={() => handleBedroomSelect("2")}>2</div>
                                        <div className="p-3 cursor-pointer hover:bg-gray-100" onClick={() => handleBedroomSelect("3")}>3</div>
                                    </div>
                                )}
                            </div>

                            <div ref={dropdownRefs.price} className="relative lg:w-[232px] text-[#3A3A3A] lg:text-[16px]">
                                <div
                                    className="w-full p-3 pr-8 bg-white border border-gray-300 rounded flex items-center justify-between cursor-pointer"
                                    onClick={() => setIsDropdownOpenPrice(!isDropdownOpenPrice)}
                                >
                                    <div className="flex items-center">
                                        <img
                                            src="/assets/price.png"
                                            alt="Price Icon"
                                            className="w-5 h-5 mr-2"
                                        />
                                        <span>{price || "Price"}</span>
                                    </div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`w-5 h-5 pointer-events-none transition-transform duration-200 ${isDropdownOpenPrice ? 'rotate-180' : ''}`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </div>
                                {isDropdownOpenPrice && (
                                    <div className="absolute left-0 right-0 top-full mt-1 w-full bg-white border border-gray-300 rounded shadow-lg z-10 divide-y divide-gray-300">
                                        <div className="p-3 cursor-pointer hover:bg-gray-100" onClick={() => handlePriceSelect("#100,000")}>#100,000</div>
                                        <div className="p-3 cursor-pointer hover:bg-gray-100" onClick={() => handlePriceSelect("#120,000")}>₦120,000</div>
                                        <div className="p-3 cursor-pointer hover:bg-gray-100" onClick={() => handlePriceSelect("#180,000")}>#180,000</div>
                                    </div>
                                )}
                            </div>

                            {/* button */}
                            <button
                                type="submit"
                                className="flex items-center text-white rounded-[8px] lg:w-[122px]"
                                style={{
                                    backgroundImage: "linear-gradient(90deg, #271785 0%, #0CD851 100%)",
                                }}
                            >
                                <span className="ml-6">Search</span>
                                <img
                                    src="/assets/searchs.png"
                                    alt="Search Icon"
                                    className="w-5 h-5 ml-2 "
                                />
                            </button>

                        </div>

                    </form>

                </div>

            </section>

            {/* header text 2 */}
            <div>
                <div className="mt-[50px] h-[44px] w-full lg:w-[1200px] mx-auto ">
                    <h2 className="text-[28px] leading[44px] font-semibold">Property For Rent in Oyigbo, Rivers state, Nigeria.</h2>
                    <p className="text-[16px] leading[32px] font-normal text-[#7D7D7D] tracking-[0.5px]">Property For Rent in Oyigbo, Rivers state, Nigeria.</p>
                </div>
                <br /> <br />

                <div className="p-5">
                    {error && <p className="text-red-500">{error}</p>}

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto lg:w-[1114px]">

                        {houses.map((house) => (

                            <Link key={house.id} href={`/Rent?id=${house.id}`} passHref>

                                <div className="border border-[#C6C6C6] rounded-[16px] h-auto pt-4 p-4 hover:scale-105 transition-transform cursor-pointer">
                                    <img src={house.image} alt={house.location} className="w-full h-48 object-cover rounded-[8px]" />
                                    <br />

                                    <h2 className="text-[28px] leading-[44px] text-[#271785] font-semibold font-inter mb-[10px]">{house.price}</h2>

                                    <p className="text-[#3A3A3A] font-normal tracking-[-0.03px]">{house.bedroom} bedroom Apartment in {house.location}</p>

                                    <div className="mt-4">
                                        <p className="text-[#7D7D7D] font-normal text-[14px] tracking-[1%] leading-[24px]">{house.description}</p>

                                        <h3 className="mt-4 flex items-center text-[#717070] font-normal text-[16px] leading-[24px]">

                                            <img
                                                src="/assets/Location.png"
                                                alt="Location Icon"
                                                className="w-5 h-5 mr-2 quality={100} "
                                            />
                                            {house.location}
                                        </h3>


                                    </div>
                                </div>


                            </Link>


                        ))}


                    </div>

                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Page;



