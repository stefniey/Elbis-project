import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';


const Footer = () => {


    return (
        <footer className=" px-[40px] py-[10px] footer">
            {/* w-[431px] h-[181.12px] */}

            <div>
                <img src="/assets/logo.svg" alt="" className=' w-[100px] h-[41.12px]' />
            </div>

            <br />

            <div className='lg:flex lg:w-[1340px] lg:justify-between'>

                <p className='w-[350px] h-[44px] font-normal text-[14px] leading-[22px] tracking-[-1%]'>Suite 43b Chinda Plaza, Artillery, by Okporo road, Port Harcourt, Rivers state.</p>
                <br />

                <div>
                    <div className="flex mb-6">
                        <ul className="list-none flex space-x-8">
                            <li>
                                <a href="/" className="text-[#271785]">Company</a>
                            </li>
                            <li>
                                <a href="/" className="text-[#271785]">About</a>
                            </li>
                            <li>
                                <a href="/" className="text-[#271785]">Projects</a>
                            </li>
                            <li>
                                <a href="/" className="text-[#271785]">Team</a>
                            </li>
                        </ul>
                    </div>

                    <div className="flex justify-end">
                        <ul className="flex space-x-4">

                            <li>
                                <a href="https://x.com/elbishomesng?t=pqCNHt0AJV0Sa7iEoUkyEQ&s=09" className="block text-center">
                                    <div className="rounded-full bg-gray-200 p-2">
                                        <FaTwitter size={20} className="text-[#271785]" />
                                    </div>
                                </a>
                            </li>


                            <li>
                                <a href="#" className="block text-center">
                                    <div className="rounded-full bg-gray-200 p-2">
                                        <FaInstagram size={20} className="text-[#271785]" />
                                    </div>
                                </a>
                            </li>

                            <li>
                                <a href="https://www.facebook.com/people/Elbishomesng/61563783249653/" className="block text-center">
                                    <div className="rounded-full bg-gray-200 p-2">
                                        <FaFacebook size={20} className="text-[#271785]" />
                                    </div>
                                </a>
                            </li>

                        </ul>
                    </div>

                </div>
            </div>
            <br />


            <div className="flex items-center justify-center">

                {/* <div className="flex flex-col lg:flex-row lg:justify-between items-center space-y-4 lg:space-y-0 lg:space-x-20 rounded-t-lg border-t border-gray-300 p-2 w-[350px] lg:w-[1419px]">


                    <p className='hidden md:block text-[14px] leading-[22px] tracking-[-1%] text-[#7D7D7D] font-normal'>
                        All rights reserved. Copyrights © 2024 Ltd.
                    </p>


                    <div className="flex space-x-10">
                        <a href="" className='text-[14px] leading-[22px] tracking-[-1%] text-[#7D7D7D] font-normal'>Privacy Policy</a>
                        <a href="" className='text-[14px] leading-[22px] tracking-[-1%] text-[#7D7D7D] font-normal'>Terms of Service</a>
                    </div>

                    <p className='block lg:hidden text-[14px] leading-[22px] tracking-[-1%] text-[#7D7D7D] font-normal'>
                        All rights reserved. Copyrights © 2024 Ltd.
                    </p>


                </div> */}

                <div className="flex flex-col md:flex-row lg:flex-row md:justify-between lg:justify-between items-center space-y-4 md:space-y-0 lg:space-y-0 md:space-x-20 lg:space-x-20 rounded-t-lg border-t border-gray-300 p-2 w-[350px] md:w-[1419px] lg:w-[1419px]">

                    <p className='hidden md:block text-[14px] leading-[22px] tracking-[-1%] text-[#7D7D7D] font-normal'>
                        All rights reserved. Copyrights © 2024 Ltd.
                    </p>

                    <div className="flex space-x-10">
                        <a href="#" className='text-[14px] leading-[22px] tracking-[-1%] text-[#7D7D7D] font-normal'>Privacy Policy</a>
                        <a href="#" className='text-[14px] leading-[22px] tracking-[-1%] text-[#7D7D7D] font-normal'>Terms of Service</a>
                    </div>

                    <p className='block lg:hidden md:hidden text-[14px] leading-[22px] tracking-[-1%] text-[#7D7D7D] font-normal'>
                        All rights reserved. Copyrights © 2024 Ltd.
                    </p>

                </div>



            </div>


        </footer>
    );
};

export default Footer;


