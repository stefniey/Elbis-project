"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./navbar.css";

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleDropdown = (index: number) => {
        setDropdownOpen(dropdownOpen === index ? null : index);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (


        <nav className="navbar bg-white w-full h-[81.12px] lg:w-[1439px] lg:h-[80.67px]">
            <div className="px-4 py-5 flex items-center justify-between ">

                {/* Logo */}
                <div className="text-lg font-bold">
                    <Link href="/" passHref>
                        <Image src="/assets/logo.svg" alt="logo" width={100} height={100} className="w-[100px] h-[41.2px]"/>
                    </Link>
                </div>

                {/* Hamburger Icon styling for Mobile */}
                <div className="block lg:hidden md:w-[100px] px-4">
                    <button
                        className="focus:outline-none"
                        onClick={toggleMobileMenu}
                    >
                        {!mobileMenuOpen ? (
                            <svg
                                className="w-[24px] h-[24px]" 
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="#292D32" 
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5} // 1.5px border
                                    d="M3 6h18M3 12h18M3 18h18"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="w-[24px] h-[24px]"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="#292D32" // Same color for the close icon
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5} // Keep consistent border width
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        )}
                    </button>
                </div>


                {/* sideNavigation links for mobile view and md*/}
                <div className="hidden lg:flex lg:justify-center lg:flex-grow">
                    <ul className="flex space-x-6">
                        <li>
                            <Link href="/" passHref>
                                <span className="link-hover-underline">
                                    Home
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/aboutus" passHref>
                                <span
                                    className="link-hover-underline"
                                >
                                    About Us
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/Rent" passHref>
                                <span
                                    className="link-hover-underline"
                                >
                                    Rent
                                </span>
                            </Link>
                        </li>

                        <li>
                            <Link href="/Patner" passHref>
                                <span
                                    className="link-hover-underline"
                                >
                                    Partner
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/Consult" passHref>
                                <span
                                    className="link-hover-underline"
                                >
                                    Consultation
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* desktop Login and Sign Up */}
                <div className="hidden lg:flex lg:space-x-4">
                    <Link href="/login">
                        <span
                            className="link-hover-underline"
                        >
                            Login
                        </span>
                    </Link>
                    <Link href="/register" passHref>
                        <span
                            className="lg:text-[16px] Lg:leading-[24px] lg:tracking-[0.03px]"
                            style={{
                                borderRadius: "8px",
                                padding: "10px 20px",
                                backgroundImage:
                                    "linear-gradient(90deg, #271785 0%, #0CD851 100%)",
                                color: "#FFFFFF",
                            }}
                        >
                            Sign Up
                        </span>
                    </Link>
                </div>
            </div>

            {/* Mobile Menu et links */}
            {mobileMenuOpen && (
                <div
                    className="lg:hidden fixed inset-0 z-40 bg-gray-900 bg-opacity-50"
                    onClick={closeMobileMenu}
                >
                    <div className="bg-white h-full w-3/4 fixed left-0 top-0 shadow-lg">
                        <div className="flex flex-col justify-center items-center h-full py-8">
                            <Link href="/" passHref>
                                <Image
                                    className="mr-40"
                                    src="/assets/logo.svg"
                                    alt="logo"
                                    width={100}
                                    height={100}
                                />
                            </Link>
                            <ul className="space-y-4 flex flex-col items-center p-20">
                                <li>
                                    <Link href="/" passHref>
                                        <span
                                            className="link-hover-underline"
                                        >
                                            Home
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/aboutus" passHref>
                                        <span
                                            className="link-hover-underline"
                                        >
                                            About Us
                                        </span>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/Rent" passHref>
                                        <span
                                            className="link-hover-underline"
                                        >
                                            Rent
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/Patner" passHref>
                                        <span
                                            className="link-hover-underline"
                                        >
                                            Partner
                                        </span>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/Consult" passHref>
                                        <span className="link-hover-underline"
                                        >
                                            Consultation
                                        </span>
                                    </Link>

                                </li>
                            </ul>

                            {/* mobile login and sign up */}
                            <div className="flex space-x-4 mt-auto w-[260px] h[54px] text-[16px]">

                                <Link href="/login" passHref>
                                    <span
                                        className="link-hover-underline"
                                    >
                                        Login
                                    </span>
                                </Link>

                                <Link href="/register" passHref>
                                    <span
                                        className=""
                                        style={{
                                            borderRadius: "8px",
                                            padding: "16px 32px 16px 32px",
                                            background: "linear-gradient(90deg, #271785 0%, #0CD851 100%)",
                                            color: "#FFFFFF",
                                        }}
                                    >
                                        Sign Up
                                    </span>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>


            )}
        </nav>


        
        
    );
};

export default Navbar;



