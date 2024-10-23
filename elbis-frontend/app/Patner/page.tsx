// 'use client'
// import { useEffect, useState } from "react";
// import Navbar from "@/components/Navbar/navbar";
// import Footer from "@/components/Footer/Footer";
// import Aos from 'aos';
// import 'aos/dist/aos.css';

// const Partner = () => {
//     const [dropdown, setDropdown] = useState<string>("");

//     //   aos effect
//     useEffect(() => {
//         Aos.init({
//             duration: 1000,
//         });
//     }, []);

//     // Toggle function for dropdowns
//     const toggleDropdown = (dropdownName: string) => {
//         setDropdown(dropdown === dropdownName ? "" : dropdownName);
//     };

//     return (
//         <div className="flex flex-col min-h-screen patner">
//             <Navbar />

//             <div className="flex-grow bg-white">

//                 {/* First Section */}
//                 <div data-aos='fade-right' className="mt-32 text-center">
//                     <h1 className="text-4xl font-bold md:text-5xl" style={{ color: "#271785" }}>
//                         <span style={{ color: "#0CD851" }}> Join Us as</span> Landlords,  <br />
//                         Agents, & Brands
//                     </h1>

//                     <button className="rounded-2xl p-3 px-5 mt-10 text-white" style={{ background: 'linear-gradient(90deg, #271785, #0CD851)' }}>
//                         Get Started
//                     </button>
//                 </div>

//                 {/* Second Section */}
//                 <div className="mt-20 p-10 md:p-20 justify-between flex flex-col-reverse md:flex-row items-center" style={{ background: '#F7F7F7' }} data-aos="fade-up">
//                     <div className="flex-1 mt-10 md:mt-0">
//                         <h3 className="text-2xl md:text-3xl mb-5">Partner as an Agent / <br /> Landlord</h3>
//                         <p className="mb-5">Partner with Us as an Agent or Landlord for Seamless Collaboration</p>

//                         <div className="flex items-center mb-4">
//                             <img src="/assets/SVG.jpg" className="mr-4 rounded-full w-12 h-12" style={{ backgroundColor: '#271785' }} />
//                             <p>Expand your reach and access more tenants</p>
//                         </div>

//                         <div className="flex items-center mb-4">
//                             <img src="/assets/SVG.jpg" className="mr-4 rounded-full w-12 h-12" style={{ backgroundColor: '#271785' }} />
//                             <p>Streamline consultancy with our efficient support.</p>
//                         </div>

//                         <div className="flex items-center mb-4">
//                             <img src="/assets/SVG.jpg" className="mr-4 rounded-full w-12 h-12" style={{ backgroundColor: '#271785' }} />
//                             <p>Build trust and attract business with our reputation.</p>
//                         </div>

//                         <button className="rounded-full px-5 py-2 w-full md:w-auto" style={{ background: 'linear-gradient(90deg, #271785, #0CD851)' }}>Continue</button>
//                     </div>

//                     <div className="flex-1">
//                         <img src="/assets/span.jpg" className="w-full h-auto" />
//                     </div>
//                 </div>

//                 {/* Third Section */}
//                 <div className="mt-0 p-10 md:p-20 justify-between flex flex-col md:flex-row items-center" style={{ background: '#F7F7F7' }} data-aos="fade-up">

//                     <div className="flex-1 w-full md:w-auto mb-10 md:mb-0">
//                         <img src="/assets/span.png" className="w-full h-auto" />
//                     </div>

//                     <div data-aos='fade-up' className="flex-1 md:ml-10 lg:ml-48">
//                         <h3 className="text-2xl md:text-3xl mb-5">Partner as an Agent / <br /> Landlord</h3>
//                         <p className="mb-5">Partner with Us as an Agent or Landlord for Seamless Collaboration</p>

//                         <div className="flex items-center mb-4">
//                             <img src="/assets/SVG.jpg" className="mr-4 rounded-full w-12 h-12" style={{ backgroundColor: '#271785' }} />
//                             <p>Expand your reach and access more tenants</p>
//                         </div>

//                         <div className="flex items-center mb-4">
//                             <img src="/assets/SVG.jpg" className="mr-4 rounded-full w-12 h-12" style={{ backgroundColor: '#271785' }} />
//                             <p>Streamline consultancy with our efficient support.</p>
//                         </div>

//                         <div className="flex items-center mb-4">
//                             <img src="/assets/SVG.jpg" className="mr-4 rounded-full w-12 h-12" style={{ backgroundColor: '#271785' }} />
//                             <p>Build trust and attract business with our reputation.</p>
//                         </div>

//                         <button className="rounded-full px-5 py-2 w-full md:w-auto" style={{ background: 'linear-gradient(90deg, #271785, #0CD851)' }}>Continue</button>
//                     </div>
//                 </div>

//                 {/* Testimonies Section */}
//                 <div className="mx-auto mb-10 px-4 py-8 md:py-12" style={{ background: '#F7F7F7' }} data-aos="fade-up">
//                     <div className="flex justify-center mb-4">
//                         <p className="rounded-full p-2 text-xs text-center inline-block">
//                             TESTIMONIES
//                         </p>
//                     </div>

//                     <p className="text-2xl md:text-5xl text-center leading-relaxed md:leading-normal">
//                         Loved by people
//                         <span className="inline-flex items-center">
//                             <img src="/assets/profile1.jpg" className="h-6 w-6 md:h-8 md:w-8 object-cover rounded-full mx-1" />
//                             and finance
//                         </span>
//                         <br /> teams that
//                         <span className="inline-flex items-center">
//                             <img src="/assets/profile2.png" className="h-6 w-6 md:h-8 md:w-8 object-cover rounded-full mx-1" />
//                             care about their
//                         </span>
//                         <br />
//                         <span className="inline-flex items-center">
//                             <img src="/assets/profile3.png" className="h-6 w-6 md:h-8 md:w-8 object-cover rounded-full mx-1" />
//                             people and their finances
//                         </span>
//                     </p>
//                 </div>

//                 {/* FAQ Section */}
//                 <div className="flex justify-center items-center flex-col md:flex-row gap-1 md:gap-1 mb-10 px-4 md:px-40" data-aos="fade-up">

//                     <div className="p-5 md:p-10 flex-1">
//                         <div className="mb-10">
//                             <p className="rounded-full bg-gray-200 p-2 text-xs text-center inline-block mb-4">
//                                 FAQ
//                             </p>
//                             <h2 className="text-xl md:text-3xl pt-5 md:pt-10 pb-5 md:pb-10">
//                                 What would you like <br /> to know about ELBIS?
//                             </h2>
//                         </div>
//                         <p className="rounded-full border-2 p-2 text-xs text-center inline-flex items-center">
//                             <img src="/assets/mask.jpg" className="h-4 mr-2" />
//                             Talk to us
//                         </p>
//                     </div>

//                     <div className="flex flex-col w-full md:w-auto gap-4 md:gap-1">
                        
//                         {/* Dropdown A */}
//                         <div className="mb-4 group">
//                             <button
//                                 onClick={() => toggleDropdown("A")}
//                                 className="flex items-center bg-gray-200 justify-between text-gray-700 px-8 py-2 rounded-full w-full"
//                             >
//                                 <span className="truncate">What is ELBIS?</span>
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="arrow-icon w-4 h-4">
//                                     <path fillRule="evenodd" d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
//                                 </svg>
//                             </button>
//                             {dropdown === "A" && (
//                                 <ul className="bg-white rounded-lg shadow-lg mt-2 w-full z-10">
//                                     <li className="py-2 px-4 text-center">Option A</li>
//                                     <li className="py-2 px-4 text-center">Option B</li>
//                                     <li className="py-2 px-4 text-center">Option C</li>
//                                 </ul>
//                             )}
//                         </div>

//                         {/* Dropdown B */}
//                         <div className="mb-4 group">
//                             <button
//                                 onClick={() => toggleDropdown("B")}
//                                 className="flex items-center bg-gray-200 justify-between text-gray-700 px-8 py-2 rounded-full w-full"
//                             >
//                                 <span className="truncate">How does it do?</span>
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="arrow-icon w-4 h-4">
//                                     <path fillRule="evenodd" d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
//                                 </svg>
//                             </button>
//                             {dropdown === "B" && (
//                                 <ul className="bg-white rounded-lg shadow-lg mt-2 w-full z-10">
//                                     <li className="py-2 px-4 text-center">Option X</li>
//                                     <li className="py-2 px-4 text-center">Option Y</li>
//                                     <li className="py-2 px-4 text-center">Option Z</li>
//                                 </ul>
//                             )}
//                         </div>

//                         {/* Dropdown C */}
//                         <div className="group">
//                             <button
//                                 onClick={() => toggleDropdown("C")}
//                                 className="flex items-center bg-gray-200 justify-between text-gray-700 px-8 py-2 rounded-full w-full"
//                             >
//                                 <span className="truncate">How much does it cost to rent an apartment?</span>
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="arrow-icon w-4 h-4">
//                                     <path fillRule="evenodd" d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
//                                 </svg>
//                             </button>
//                             {dropdown === "C" && (
//                                 <ul className="bg-white rounded-lg shadow-lg mt-2 w-full z-10">
//                                     <li className="py-2 px-4 text-center">Option P</li>
//                                     <li className="py-2 px-4 text-center">Option Q</li>
//                                     <li className="py-2 px-4 text-center">Option R</li>
//                                 </ul>
//                             )}
//                         </div>
//                     </div>

//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// };

// export default Partner;

'use client'
import { useEffect, useState } from "react";
import Image from 'next/image';
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/Footer";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Partner = () => {
    const [dropdown, setDropdown] = useState<string>("");

    // aos effect
    useEffect(() => {
        Aos.init({
            duration: 1000,
        });
    }, []);

    // Toggle function for dropdowns
    const toggleDropdown = (dropdownName: string) => {
        setDropdown(dropdown === dropdownName ? "" : dropdownName);
    };

    return (
        <div className="flex flex-col min-h-screen patner">
            <Navbar />

            <div className="flex-grow bg-white">

                {/* First Section */}
                <div data-aos='fade-right' className="mt-32 text-center">
                    <h1 className="text-4xl font-bold md:text-5xl" style={{ color: "#271785" }}>
                        <span style={{ color: "#0CD851" }}> Join Us as</span> Landlords,  <br />
                        Agents, & Brands
                    </h1>

                    <button className="rounded-2xl p-3 px-5 mt-10 text-white" style={{ background: 'linear-gradient(90deg, #271785, #0CD851)' }}>
                        Get Started
                    </button>
                </div>

                {/* Second Section */}
                <div className="mt-20 p-10 md:p-20 justify-between flex flex-col-reverse md:flex-row items-center" style={{ background: '#F7F7F7' }} data-aos="fade-up">
                    <div className="flex-1 mt-10 md:mt-0">
                        <h3 className="text-2xl md:text-3xl mb-5">Partner as an Agent / <br /> Landlord</h3>
                        <p className="mb-5">Partner with Us as an Agent or Landlord for Seamless Collaboration</p>

                        <div className="flex items-center mb-4">
                            <Image src="/assets/SVG.jpg" alt="Expand your reach and access more tenants" className="mr-4 rounded-full w-12 h-12" style={{ backgroundColor: '#271785' }} width={48} height={48} />
                            <p>Expand your reach and access more tenants</p>
                        </div>

                        <div className="flex items-center mb-4">
                            <Image src="/assets/SVG.jpg" alt="Streamline consultancy with our efficient support." className="mr-4 rounded-full w-12 h-12" style={{ backgroundColor: '#271785' }} width={48} height={48} />
                            <p>Streamline consultancy with our efficient support.</p>
                        </div>

                        <div className="flex items-center mb-4">
                            <Image src="/assets/SVG.jpg" alt="Build trust and attract business with our reputation." className="mr-4 rounded-full w-12 h-12" style={{ backgroundColor: '#271785' }} width={48} height={48} />
                            <p>Build trust and attract business with our reputation.</p>
                        </div>

                        <button className="rounded-full px-5 py-2 w-full md:w-auto" style={{ background: 'linear-gradient(90deg, #271785, #0CD851)' }}>Continue</button>
                    </div>

                    <div className="flex-1">
                        <Image src="/assets/span.jpg" alt="Partner image" className="w-full h-auto" width={500} height={300} />
                    </div>
                </div>

                {/* Third Section */}
                <div className="mt-0 p-10 md:p-20 justify-between flex flex-col md:flex-row items-center" style={{ background: '#F7F7F7' }} data-aos="fade-up">

                    <div className="flex-1 w-full md:w-auto mb-10 md:mb-0">
                        <Image src="/assets/span.png" alt="Partner image" className="w-full h-auto" width={500} height={300} />
                    </div>

                    <div data-aos='fade-up' className="flex-1 md:ml-10 lg:ml-48">
                        <h3 className="text-2xl md:text-3xl mb-5">Partner as an Agent / <br /> Landlord</h3>
                        <p className="mb-5">Partner with Us as an Agent or Landlord for Seamless Collaboration</p>

                        <div className="flex items-center mb-4">
                            <Image src="/assets/SVG.jpg" alt="Expand your reach and access more tenants" className="mr-4 rounded-full w-12 h-12" style={{ backgroundColor: '#271785' }} width={48} height={48} />
                            <p>Expand your reach and access more tenants</p>
                        </div>

                        <div className="flex items-center mb-4">
                            <Image src="/assets/SVG.jpg" alt="Streamline consultancy with our efficient support." className="mr-4 rounded-full w-12 h-12" style={{ backgroundColor: '#271785' }} width={48} height={48} />
                            <p>Streamline consultancy with our efficient support.</p>
                        </div>

                        <div className="flex items-center mb-4">
                            <Image src="/assets/SVG.jpg" alt="Build trust and attract business with our reputation." className="mr-4 rounded-full w-12 h-12" style={{ backgroundColor: '#271785' }} width={48} height={48} />
                            <p>Build trust and attract business with our reputation.</p>
                        </div>

                        <button className="rounded-full px-5 py-2 w-full md:w-auto" style={{ background: 'linear-gradient(90deg, #271785, #0CD851)' }}>Continue</button>
                    </div>
                </div>

                {/* Testimonies Section */}
                <div className="mx-auto mb-10 px-4 py-8 md:py-12" style={{ background: '#F7F7F7' }} data-aos="fade-up">
                    <div className="flex justify-center mb-4">
                        <p className="rounded-full p-2 text-xs text-center inline-block">
                            TESTIMONIES
                        </p>
                    </div>

                    <p className="text-2xl md:text-5xl text-center leading-relaxed md:leading-normal">
                        Loved by people
                        <span className="inline-flex items-center">
                            <Image src="/assets/profile1.jpg" alt="Profile 1" className="h-6 w-6 md:h-8 md:w-8 object-cover rounded-full mx-1" width={32} height={32} />
                            and finance
                        </span>
                        <br /> teams that
                        <span className="inline-flex items-center">
                            <Image src="/assets/profile2.png" alt="Profile 2" className="h-6 w-6 md:h-8 md:w-8 object-cover rounded-full mx-1" width={32} height={32} />
                            care about their
                        </span>
                        <br />
                        <span className="inline-flex items-center">
                            <Image src="/assets/profile3.png" alt="Profile 3" className="h-6 w-6 md:h-8 md:w-8 object-cover rounded-full mx-1" width={32} height={32} />
                            people and their finances
                        </span>
                    </p>
                </div>

                {/* FAQ Section */}
                <div className="flex justify-center items-center flex-col md:flex-row gap-1 md:gap-1 mb-10 px-4 md:px-40" data-aos="fade-up">

                    <div className="p-5 md:p-10 flex-1">
                        <div className="mb-10">
                            <p className="rounded-full bg-gray-200 p-2 text-xs text-center inline-block mb-4">
                                FAQ
                            </p>
                            <h2 className="text-xl md:text-3xl pt-5 md:pt-10 pb-5 md:pb-10">
                                What would you like <br /> to know about ELBIS?
                            </h2>
                        </div>
                        <p className="rounded-full border-2 p-2 text-xs text-center inline-flex items-center">
                            <Image src="/assets/mask.jpg" alt="Talk to us" className="h-4 mr-2" width={16} height={16} />
                            Talk to us
                        </p>
                    </div>

                    <div className="flex flex-col w-full md:w-auto gap-4 md:gap-1">
                        
                        {/* Dropdown A */}
                        <div className="mb-4 group">
                            <button
                                onClick={() => toggleDropdown("A")}
                                className="flex items-center bg-gray-200 justify-between text-gray-700 px-8 py-2 rounded-full w-full"
                            >
                                <span className="truncate pr-4">Why ELBIS?</span>
                                <svg
                                    className={`w-4 h-4 transition-transform transform ${
                                        dropdown === "A" ? "rotate-180" : "rotate-0"
                                    }`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                                </svg>
                            </button>
                            {dropdown === "A" && (
                                <div className="flex justify-center bg-gray-100 mt-4 p-2 rounded-xl">
                                    <div className="px-4 py-2">
                                        <p>ELBIS offers the best solutions for...</p>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Dropdown B */}
                        <div className="mb-4 group">
                            <button
                                onClick={() => toggleDropdown("B")}
                                className="flex items-center bg-gray-200 justify-between text-gray-700 px-8 py-2 rounded-full w-full"
                            >
                                <span className="truncate pr-4">How to Partner?</span>
                                <svg
                                    className={`w-4 h-4 transition-transform transform ${
                                        dropdown === "B" ? "rotate-180" : "rotate-0"
                                    }`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                                </svg>
                            </button>
                            {dropdown === "B" && (
                                <div className="flex justify-center bg-gray-100 mt-4 p-2 rounded-xl">
                                    <div className="px-4 py-2">
                                        <p>Partnering with ELBIS is easy and...</p>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Dropdown C */}
                        <div className="mb-4 group">
                            <button
                                onClick={() => toggleDropdown("C")}
                                className="flex items-center bg-gray-200 justify-between text-gray-700 px-8 py-2 rounded-full w-full"
                            >
                                <span className="truncate pr-4">Benefits of Partnership</span>
                                <svg
                                    className={`w-4 h-4 transition-transform transform ${
                                        dropdown === "C" ? "rotate-180" : "rotate-0"
                                    }`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                                </svg>
                            </button>
                            {dropdown === "C" && (
                                <div className="flex justify-center bg-gray-100 mt-4 p-2 rounded-xl">
                                    <div className="px-4 py-2">
                                        <p>As a partner of ELBIS, you get access to...</p>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Partner;
