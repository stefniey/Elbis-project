'use client'
import { useState, useEffect, FormEvent } from "react";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/Footer";
import Chatbox from '../components/ChatBox/Chatbox'
import "./globals.css";
import Aos from 'aos';
import 'aos/dist/aos.css';
import 'boxicons/css/boxicons.min.css';


const Page = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');  //search button for section1 Declaration
  const [dropdown, setDropdown] = useState<string>("");    //dropdown for section 7 Declaration



  const [propertyType, setPropertyType] = useState("");   //dropdown for section 7 Declaration
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); //dropdown for section1 Declaration


  //search button for section 1 function
  const handleSearch = (event: FormEvent<HTMLFormElement>): void => {
    // Handle the search logic here
  };


  //dropdown for section 7 function
  const toggleDropdown = (dropdownName: string) => {
    // logic
    setDropdown(dropdown === dropdownName ? "" : dropdownName);
  };


  //dropdown for section1 function
  const handlePropertySelect = (type: string) => {
    // logic
    setPropertyType(type);
    setIsDropdownOpen(false);
  };



  // useEffect section
  useEffect(() => {
    if (typeof window !== "undefined") {
      const L = require('leaflet');

      const mapContainer = document.getElementById('map') as HTMLElement | null;

      if (mapContainer) {
        if (mapContainer.hasAttribute('data-leaflet-map')) return;

        const map = L.map(mapContainer, {
          center: [6.5244, 3.3792], // Center on Lagos
          zoom: 10,
          layers: [
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
              maxZoom: 19,
              attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            })
          ]
        });

        const cities = [
          { name: 'Lagos', coordinates: [6.5244, 3.3792] },
          { name: 'Abuja', coordinates: [9.0579, 7.49508] },
          { name: 'Port Harcourt', coordinates: [4.8157, 7.0495] }
        ];

        cities.forEach(city => {
          L.marker(city.coordinates).addTo(map)
            .bindPopup(`<b>${city.name}</b>`)
            .openPopup();
        });

        mapContainer.setAttribute('data-leaflet-map', 'true');
      }
    }
    // Aos implementation
    Aos.init({
      duration: 1000,
    });
  }, []);


  // return to the web interface
  return (
    <div className="flex flex-col">

      {/* navbar */}
      <Navbar />

      <div className="flex-grow bg-[#FFF]">
        <Chatbox />

        {/*hero section*/}
        <section className=" mx-auto p-4 mt-24 mb-6 md:mt-36 md:mb-6 lg:mt-36 lg:mb-6 flex flex-col lg:flex-row  lg:w-[1200px]">

          <div>

            <div data-aos="fade-right" className="bg-[url('/assets/map.svg')] bg-cover bg-center lg:w-[680px]">

              <div className="container mx-auto px-1 lg:px-10">
                <h2 className="text-[36px] lg:text-[48px] font-bold leading-[44px] lg:leading-[56px] text-left mb-3 lg:mb-5 w-[350px] lg:w-[450px] h-[132px] lg:h-auto md:text-[36px] md:w-full
                "
                  style={{ color: '#271785' }}>
                  <span style={{ color: '#10D80C' }}> Rent</span> Affordable <br />
                  Houses and
                  <span style={{ color: '#10D80C' }}> Locate</span> <br />
                  them Quickly
                </h2>


                <p className="text-[14px] lg:text-[18px] font-normal leading-[22px] lg:leading-[28px] tracking-[-0.01em] text-left mb-4 w-[350px] lg:w-[601px] h-[70px] lg:h-auto font-poppins text-[#3A3A3A] md:mx-auto md:w-[100%] md:text-[18px] ">
                  Discover and lease Affordable, quality homes
                  effortlessly with ELBIS, your trusted platform for
                  budget-friendly housing
                </p>



              </div>

            </div>

          </div>

          {/* image div */}
          <div data-aos="fade-left" className="image w-full lg:w-[584.2px] lg:h-[355.2px] ">
            <img
              src="/assets/heropic.svg"
              className="w-full h-auto md:w-[684.2px] md:h-[455.2px] lg:w-[684.2px] lg:h-[355.2px] md:mx-auto"
              alt="House"
            />
          </div>


        </section>

        {/* section 1 */}
        <div className="w-full lg:w-[1200px] mx-auto p-4 bg-[#fff] shadow-lg border rounded-[8px]">
          <form onSubmit={handleSearch}>
            {/* Search Input and Button */}
            <div className="flex items-center w-full mb-4">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-3 bg-[#F7F7F7] text-[#000] rounded-l-lg placeholder-[#C6C6C6] focus:outline-none"
                placeholder="Search for my apartment"
              />

            </div>

            {/* Dropdown Section */}
            <div className="grid grid-cols-5 gap-36">

              <div className="relative lg:w-[232px] text-[background: #3A3A3A] lg:text-[16px]">
                {/* Dropdown Toggle */}
                <div
                  className="w-full p-3 pr-8 bg-white border border-gray-300 rounded flex items-center justify-between cursor-pointer"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <div className="flex items-center">
                    <img
                      src="/assets/home.png"
                      alt="Property Icon"
                      className="w-5 h-5 mr-2"
                    />
                    <span>{propertyType || "Property Type"}</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-5 h-5 pointer-events-none transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''
                      }`}
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

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute left-0 right-0 top-full mt-1 w-full bg-white border border-gray-300 rounded shadow-lg z-10 divide-y divide-gray-300">
                    <div
                      className="p-3 cursor-pointer hover:bg-gray-100"
                      onClick={() => handlePropertySelect("Tier 1")}
                    >
                      Tier 1
                    </div>
                    <div
                      className="p-3 cursor-pointer hover:bg-gray-100"
                      onClick={() => handlePropertySelect("Tier 2")}
                    >
                      Tier 2
                    </div>
                    <div
                      className="p-3 cursor-pointer hover:bg-gray-100"
                      onClick={() => handlePropertySelect(" Tier 3")}
                    >
                      Tier 3
                    </div>
                    <div
                      className="p-3 cursor-pointer hover:bg-gray-100"
                      onClick={() => handlePropertySelect("Random")}
                    >
                      Random
                    </div>
                  </div>
                )}
              </div>


              <div className="relative lg:w-[232px] text-[background: #3A3A3A] lg:text-[16px]">
                {/* Dropdown Toggle */}
                <div
                  className="w-full p-3 pr-8 bg-white border border-gray-300 rounded flex items-center justify-between cursor-pointer"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <div className="flex items-center">
                    <img
                      src="/assets/home.png"
                      alt="Property Icon"
                      className="w-5 h-5 mr-2"
                    />
                    <span>{propertyType || "Property Type"}</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-5 h-5 pointer-events-none transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''
                      }`}
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

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute left-0 right-0 top-full mt-1 w-full bg-white border border-gray-300 rounded shadow-lg z-10 divide-y divide-gray-300">
                    <div
                      className="p-3 cursor-pointer hover:bg-gray-100"
                      onClick={() => handlePropertySelect("Tier 1")}
                    >
                      Tier 1
                    </div>
                    <div
                      className="p-3 cursor-pointer hover:bg-gray-100"
                      onClick={() => handlePropertySelect("Tier 2")}
                    >
                      Tier 2
                    </div>
                    <div
                      className="p-3 cursor-pointer hover:bg-gray-100"
                      onClick={() => handlePropertySelect(" Tier 3")}
                    >
                      Tier 3
                    </div>
                    <div
                      className="p-3 cursor-pointer hover:bg-gray-100"
                      onClick={() => handlePropertySelect("Random")}
                    >
                      Random
                    </div>
                  </div>
                )}
              </div>


              <div className="relative lg:w-[232px] text-[background: #3A3A3A] lg:text-[16px]">
                {/* Dropdown Toggle */}
                <div
                  className="w-full p-3 pr-8 bg-white border border-gray-300 rounded flex items-center justify-between cursor-pointer"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <div className="flex items-center">
                    <img
                      src="/assets/home.png"
                      alt="Property Icon"
                      className="w-5 h-5 mr-2"
                    />
                    <span>{propertyType || "Property Type"}</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-5 h-5 pointer-events-none transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''
                      }`}
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

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute left-0 right-0 top-full mt-1 w-full bg-white border border-gray-300 rounded shadow-lg z-10 divide-y divide-gray-300">
                    <div
                      className="p-3 cursor-pointer hover:bg-gray-100"
                      onClick={() => handlePropertySelect("Tier 1")}
                    >
                      Tier 1
                    </div>
                    <div
                      className="p-3 cursor-pointer hover:bg-gray-100"
                      onClick={() => handlePropertySelect("Tier 2")}
                    >
                      Tier 2
                    </div>
                    <div
                      className="p-3 cursor-pointer hover:bg-gray-100"
                      onClick={() => handlePropertySelect(" Tier 3")}
                    >
                      Tier 3
                    </div>
                    <div
                      className="p-3 cursor-pointer hover:bg-gray-100"
                      onClick={() => handlePropertySelect("Random")}
                    >
                      Random
                    </div>
                  </div>
                )}
              </div>


              <div className="relative lg:w-[232px] text-[background: #3A3A3A] lg:text-[16px]">
                {/* Dropdown Toggle */}
                <div
                  className="w-full p-3 pr-8 bg-white border border-gray-300 rounded flex items-center justify-between cursor-pointer"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <div className="flex items-center">
                    <img
                      src="/assets/home.png"
                      alt="Property Icon"
                      className="w-5 h-5 mr-2"
                    />
                    <span>{propertyType || "Property Type"}</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-5 h-5 pointer-events-none transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''
                      }`}
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

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute left-0 right-0 top-full mt-1 w-full bg-white border border-gray-300 rounded shadow-lg z-10 divide-y divide-gray-300">
                    <div
                      className="p-3 cursor-pointer hover:bg-gray-100"
                      onClick={() => handlePropertySelect("Tier 1")}
                    >
                      Tier 1
                    </div>
                    <div
                      className="p-3 cursor-pointer hover:bg-gray-100"
                      onClick={() => handlePropertySelect("Tier 2")}
                    >
                      Tier 2
                    </div>
                    <div
                      className="p-3 cursor-pointer hover:bg-gray-100"
                      onClick={() => handlePropertySelect(" Tier 3")}
                    >
                      Tier 3
                    </div>
                    <div
                      className="p-3 cursor-pointer hover:bg-gray-100"
                      onClick={() => handlePropertySelect("Random")}
                    >
                      Random
                    </div>
                  </div>
                )}
              </div>


              <button
                type="submit"
                className=" text-white rounded-[8px] lg:w-[122px]"  style={{backgroundImage:"linear-gradient(90deg, #271785 0%, #0CD851 100%)"
              }}
              >
                Search
              </button>

            </div>

          </form>
        </div>

        {/* Section 2 */}
        <div className="container mx-auto px-4 py-2">

          {/* header */}
          <div className="container mx-auto px-4 py-12 flex flex-col items-center justify-center">
            <p className="rounded-full bg-[#F7F7F7] border text-black text-[14px] p-4 text-center">
              GET STARTED IN MINUTES
            </p>
            <br />

            <p className="font-bold text-[24px] text-center">
              Rent all levels of apartments
            </p>
          </div>

          {/* content */}
          <div className="justify-items-center items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-3">

            <div data-aos="fade-up" className="w-full max-w-[378px] h-auto rounded-[16px] p-[16px] border border-[#C6C6C6]">
              <p className="w-[318px] h-[34px] text-[28px] leading-[36px] font-semibold text-[#271785]">Tier 1</p>
              <br />
              <p className="text-[14px] text-[#3A3A3A] leading-[22px] tracking-[-1%] font-normal lg:text-[15px] lg:w-[346px]">
                High level apartments with best roads, active light supply and most expensive.
              </p>
              <br />

              <div className="relative lg:w-[346px]">
                <img
                  src="/assets/house1.jpg"
                  className="h-[252px] rounded-[8px] lg:w-[346px] lg:h-[252px]object-cover"
                  alt="House"
                />

                <a href="/Tier-1" className="top-[64%] left-[85%] lg:left-[85%] md:left-[82%] absolute transform -translate-x-1/2">
                  <div className="rounded-full w-[20vw] h-[20vw] max-w-[90px] max-h-[90px] flex items-center justify-center p-2" style={{ background: '#0A0042B2' }}>
                    <img src="/assets/arrow-w.png" alt="" className=" w-[21.42px] h-[26.25px]" />
                  </div>
                </a>
              </div>
            </div>

            <div data-aos="fade-up" className="w-full max-w-[378px] h-auto rounded-[16px] p-[16px] border border-[#C6C6C6]">
              <p className="w-[318px] h-[34px] text-[28px] leading-[36px] font-semibold text-[#271785]">Tier 2</p>
              <br />
              <p className="text-[14px] text-[#3A3A3A] leading-[22px] tracking-[-1%] font-normal lg:text-[15px] lg:w-[346px]">
                Mid level apartments with good roads, semi-active light supply and mid expensive.
              </p>
              <br />

              <div className="relative lg:w-[346px]">
                <img
                  src="/assets/house1.jpg"
                  className="h-[252px] rounded-[8px] lg:w-[346px] lg:h-[252px]object-cover"
                  alt="House"
                />

                <a href="/Tier-1" className="top-[64%] left-[85%] lg:left-[85%] md:left-[82%] absolute transform -translate-x-1/2">
                  <div className="rounded-full w-[20vw] h-[20vw] max-w-[90px] max-h-[90px] flex items-center justify-center p-2" style={{ background: '#0A0042B2' }}>
                    <img src="/assets/arrow-w.png" alt="" className=" w-[21.42px] h-[26.25px]" />
                  </div>
                </a>
              </div>
            </div>


            <div data-aos="fade-up" className="w-full max-w-[378px] h-auto rounded-[16px] p-[16px] border border-[#C6C6C6]">
              <p className="w-[318px] h-[34px] text-[28px] leading-[36px] font-semibold text-[#271785]">Tier 3</p>
              <br />
              <p className="text-[14px] text-[#3A3A3A] leading-[22px] tracking-[-1%] font-normal lg:text-[15px] lg:w-[346px]">
                Normal level apartments with manageable roads, semi-active light supply affordable.
              </p>
              <br />

              <div className="relative lg:w-[346px]">
                <img
                  src="/assets/house1.jpg"
                  className="h-[252px] rounded-[8px] lg:w-[346px] lg:h-[252px]object-cover"
                  alt="House"
                />

                <a href="/Tier-1" className="top-[64%] left-[85%] lg:left-[85%] md:left-[82%] absolute transform -translate-x-1/2">
                  <div className="rounded-full w-[20vw] h-[20vw] max-w-[90px] max-h-[90px] flex items-center justify-center p-2" style={{ background: '#0A0042B2' }}>
                    <img src="/assets/arrow-w.png" alt="" className=" w-[21.42px] h-[26.25px]" />
                  </div>
                </a>
              </div>
            </div>


          </div>

        </div>

        {/* Section 3 */}

        
        {/* <div className="container mx-auto px-4 py-12">
          <div className="container mx-auto px-4 py-12 flex flex-col items-center justify-center">
            <p className="rounded-full bg-[#F7F7F7] border text-black text-[14px] p-4 text-center">
              AVAILABLE PRODUCTS
            </p>
            <br />
            <p className="font-bold text-[24px] text-center">
              Utilities you may like
            </p>
          </div>

          
            <div className="scroll-content animate-scroll" style={{ display: 'inline-block' }}>
            <div className="scroll-content" style={{ display: 'flex' }}>

              <div className="bg-[#F7F7F7] rounded-[16px] p-[16px] shadow-md inline-block" style={{ border: "1px solid #C6C6C6", width: '315px', height: '478px', marginRight: '20px', whiteSpace: 'normal' }}>
                <h3 className="text[24px] mb-2 font-normal leading[24px]"><span style={{ color: '#271785' }}>LED TV</span></h3>
                <p style={{ whiteSpace: 'normal', wordWrap: 'break-word', wordBreak: 'break-word', lineHeight: '24px', fontWeight: '400px', letterSpacing: '0.5px', color: '#3A3A3A', fontSize: '16px' }}>
                  Amani 40 Inch FHD LED Television New Version + 2 years Warranty
                </p>

                <h2
                  style={{
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: '#271785',
                    fontWeight: '700',
                    fontSize: '36px',
                    lineHeight: '44px',
                    font: 'poppins',
                    padding: '20px 0',
                  }}
                >
                  N190,000
                </h2>

                <img
                  src="/assets/item2.png"
                  style={{ width: '100%', height: 'auto', padding: '20px' }}
                  alt="Amani 40 Inch FHD LED TV"
                />
              </div>

              <div className="bg-[#F7F7F7] rounded-[16px] p-[16px] shadow-md inline-block" style={{ border: "1px solid #C6C6C6", width: '315px', height: '478px', marginRight: '20px', whiteSpace: 'normal' }}>
                <h3 className="text[24px] mb-2 font-normal leading[24px]"><span style={{ color: '#271785' }}>AIR CONDITIONER</span></h3>
                <p style={{ whiteSpace: 'normal', wordWrap: 'break-word', wordBreak: 'break-word', lineHeight: '24px', fontWeight: '400px', letterSpacing: '0.5px', color: '#3A3A3A', fontSize: '16px' }}>
                  Hisense 1.5HP Inverter Split Copper Air Conditioner
                </p>

                <h2
                  style={{
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: '#271785',
                    fontWeight: '700',
                    fontSize: '36px',
                    lineHeight: '44px',
                    font: 'poppins',
                    padding: '20px 0',
                  }}
                >
                  N435,000
                </h2>

                <img
                  src="/assets/item1.png"
                  style={{ width: '100%', height: 'auto', padding: '20px' }}
                  alt="Amani 40 Inch FHD LED TV"
                />
              </div>

              <div className="bg-[#F7F7F7] rounded-[16px] p-[16px] shadow-md inline-block" style={{ border: "1px solid #C6C6C6", width: '315px', height: '478px', marginRight: '20px', whiteSpace: 'normal' }}>
                <h3 className="text[24px] mb-2 font-normal leading[24px]"><span style={{ color: '#271785' }}>LED TV</span></h3>
                <p style={{ whiteSpace: 'normal', wordWrap: 'break-word', wordBreak: 'break-word', lineHeight: '24px', fontWeight: '400px', letterSpacing: '0.5px', color: '#3A3A3A', fontSize: '16px' }}>
                  Amani 40 Inch FHD LED Television New Version + 2 years Warranty
                </p>

                <h2
                  style={{
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: '#271785',
                    fontWeight: '700',
                    fontSize: '36px',
                    lineHeight: '44px',
                    font: 'poppins',
                    padding: '20px 0',
                  }}
                >
                  N190,000
                </h2>

                <img
                  src="/assets/item2.png"
                  style={{ width: '100%', height: 'auto', padding: '20px' }}
                  alt="Amani 40 Inch FHD LED TV"
                />
              </div>

              <div className="bg-[#F7F7F7] rounded-[16px] p-[16px] shadow-md inline-block" style={{ border: "1px solid #C6C6C6", width: '315px', height: '478px', marginRight: '20px', whiteSpace: 'normal' }}>
                <h3 className="text[24px] mb-2 font-normal leading[24px]"><span style={{ color: '#271785' }}>WAHSHINE MACHINE</span></h3>
                <p style={{ whiteSpace: 'normal', wordWrap: 'break-word', wordBreak: 'break-word', lineHeight: '24px', fontWeight: '400px', letterSpacing: '0.5px', color: '#3A3A3A', fontSize: '16px' }}>
                  Hisense 5kg Washing Machine With One Year Warranty
                </p>

                <h2
                  style={{
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: '#271785',
                    fontWeight: '700',
                    fontSize: '36px',
                    lineHeight: '44px',
                    font: 'poppins',
                    padding: '20px 0',
                  }}
                >
                  N118,000
                </h2>

                <img
                  src="/assets/item1.png"
                  style={{ width: '100%', height: 'auto', padding: '20px' }}
                  alt="Amani 40 Inch FHD LED TV"
                />
              </div>

              <div className="bg-[#F7F7F7] rounded-[16px] p-[16px] shadow-md inline-block" style={{ border: "1px solid #C6C6C6", width: '315px', height: '478px', marginRight: '20px', whiteSpace: 'normal' }}>
                <h3 className="text[24px] mb-2 font-normal leading[24px]"><span style={{ color: '#271785' }}>LED TV</span></h3>
                <p style={{ whiteSpace: 'normal', wordWrap: 'break-word', wordBreak: 'break-word', lineHeight: '24px', fontWeight: '400px', letterSpacing: '0.5px', color: '#3A3A3A', fontSize: '16px' }}>
                  Amani 40 Inch FHD LED Television New Version + 2 years Warranty
                </p>

                <h2
                  style={{
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: '#271785',
                    fontWeight: '700',
                    fontSize: '36px',
                    lineHeight: '44px',
                    font: 'poppins',
                    padding: '20px 0',
                  }}
                >
                  N190,000
                </h2>

                <img
                  src="/assets/item2.png"
                  style={{ width: '100%', height: 'auto', padding: '20px' }}
                  alt="Amani 40 Inch FHD LED TV"
                />
              </div>

            </div>


            <style jsx>{`
@keyframes scroll {
0% {
transform: translateX(70%);

}
100% {
transform: translateX(-100%);
}
}
.animate-scroll {
animation: scroll 15s linear infinite;
}
`}</style>
          </div>

          <br /> <br />

          <a href="/" className="inline-flex items-center">
            <button className="rounded-[10px] px-6 py-4 bg-gradient-to-r from-[#271785] to-[#0CD851] text-white flex items-center">
              <b className="text-[20px]">
                Explore
              </b>
              <img src="/assets/arrow-w.png" alt="Forward Arrow" className="ml-4" />
            </button>
          </a>

        </div> */}

        <div className="container mx-auto px-4 py-12 overflow-x-hidden">
          <div className="container mx-auto px-4 py-12 flex flex-col items-center justify-center">
            <p className="rounded-full bg-[#F7F7F7] border text-black text-[14px] p-4 text-center">
              AVAILABLE PRODUCTS
            </p>
            <br />
            <p className="font-bold text-[24px] text-center">
              Utilities you may like
            </p>
          </div>

          <div className="scroll-content animate-scroll" style={{ display: 'flex', overflowX: 'hidden' }}>
            <div className="scroll-content" style={{ display: 'flex', gap: '20px' }}>

              <div className="bg-[#F7F7F7] rounded-[16px] p-[16px] shadow-md inline-block" style={{ border: "1px solid #C6C6C6", width: '315px', height: '478px', marginRight: '20px', whiteSpace: 'normal' }}>
                <h3 className="text[24px] mb-2 font-normal leading[24px]"><span style={{ color: '#271785' }}>LED TV</span></h3>
                <p style={{ whiteSpace: 'normal', wordWrap: 'break-word', wordBreak: 'break-word', lineHeight: '24px', fontWeight: '400px', letterSpacing: '0.5px', color: '#3A3A3A', fontSize: '16px' }}>
                  Amani 40 Inch FHD LED Television New Version + 2 years Warranty
                </p>

                <h2
                  style={{
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: '#271785',
                    fontWeight: '700',
                    fontSize: '36px',
                    lineHeight: '44px',
                    font: 'poppins',
                    padding: '20px 0',
                  }}
                >
                  N190,000
                </h2>

                <img
                  src="/assets/item2.png"
                  style={{ width: '100%', height: 'auto', padding: '20px' }}
                  alt="Amani 40 Inch FHD LED TV"
                />
              </div>

              <div className="bg-[#F7F7F7] rounded-[16px] p-[16px] shadow-md inline-block" style={{ border: "1px solid #C6C6C6", width: '315px', height: '478px', marginRight: '20px', whiteSpace: 'normal' }}>
                <h3 className="text[24px] mb-2 font-normal leading[24px]"><span style={{ color: '#271785' }}>AIR CONDITIONER</span></h3>
                <p style={{ whiteSpace: 'normal', wordWrap: 'break-word', wordBreak: 'break-word', lineHeight: '24px', fontWeight: '400px', letterSpacing: '0.5px', color: '#3A3A3A', fontSize: '16px' }}>
                  Hisense 1.5HP Inverter Split Copper Air Conditioner
                </p>

                <h2
                  style={{
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: '#271785',
                    fontWeight: '700',
                    fontSize: '36px',
                    lineHeight: '44px',
                    font: 'poppins',
                    padding: '20px 0',
                  }}
                >
                  N435,000
                </h2>

                <img
                  src="/assets/item1.png"
                  style={{ width: '100%', height: 'auto', padding: '20px' }}
                  alt="Amani 40 Inch FHD LED TV"
                />
              </div>

              <div className="bg-[#F7F7F7] rounded-[16px] p-[16px] shadow-md inline-block" style={{ border: "1px solid #C6C6C6", width: '315px', height: '478px', marginRight: '20px', whiteSpace: 'normal' }}>
                <h3 className="text[24px] mb-2 font-normal leading[24px]"><span style={{ color: '#271785' }}>LED TV</span></h3>
                <p style={{ whiteSpace: 'normal', wordWrap: 'break-word', wordBreak: 'break-word', lineHeight: '24px', fontWeight: '400px', letterSpacing: '0.5px', color: '#3A3A3A', fontSize: '16px' }}>
                  Amani 40 Inch FHD LED Television New Version + 2 years Warranty
                </p>

                <h2
                  style={{
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: '#271785',
                    fontWeight: '700',
                    fontSize: '36px',
                    lineHeight: '44px',
                    font: 'poppins',
                    padding: '20px 0',
                  }}
                >
                  N190,000
                </h2>

                <img
                  src="/assets/item2.png"
                  style={{ width: '100%', height: 'auto', padding: '20px' }}
                  alt="Amani 40 Inch FHD LED TV"
                />
              </div>

              <div className="bg-[#F7F7F7] rounded-[16px] p-[16px] shadow-md inline-block" style={{ border: "1px solid #C6C6C6", width: '315px', height: '478px', marginRight: '20px', whiteSpace: 'normal' }}>
                <h3 className="text[24px] mb-2 font-normal leading[24px]"><span style={{ color: '#271785' }}>WAHSHINE MACHINE</span></h3>
                <p style={{ whiteSpace: 'normal', wordWrap: 'break-word', wordBreak: 'break-word', lineHeight: '24px', fontWeight: '400px', letterSpacing: '0.5px', color: '#3A3A3A', fontSize: '16px' }}>
                  Hisense 5kg Washing Machine With One Year Warranty
                </p>

                <h2
                  style={{
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: '#271785',
                    fontWeight: '700',
                    fontSize: '36px',
                    lineHeight: '44px',
                    font: 'poppins',
                    padding: '20px 0',
                  }}
                >
                  N118,000
                </h2>

                <img
                  src="/assets/item1.png"
                  style={{ width: '100%', height: 'auto', padding: '20px' }}
                  alt="Amani 40 Inch FHD LED TV"
                />
              </div>

              <div className="bg-[#F7F7F7] rounded-[16px] p-[16px] shadow-md inline-block" style={{ border: "1px solid #C6C6C6", width: '315px', height: '478px', marginRight: '20px', whiteSpace: 'normal' }}>
                <h3 className="text[24px] mb-2 font-normal leading[24px]"><span style={{ color: '#271785' }}>LED TV</span></h3>
                <p style={{ whiteSpace: 'normal', wordWrap: 'break-word', wordBreak: 'break-word', lineHeight: '24px', fontWeight: '400px', letterSpacing: '0.5px', color: '#3A3A3A', fontSize: '16px' }}>
                  Amani 40 Inch FHD LED Television New Version + 2 years Warranty
                </p>

                <h2
                  style={{
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: '#271785',
                    fontWeight: '700',
                    fontSize: '36px',
                    lineHeight: '44px',
                    font: 'poppins',
                    padding: '20px 0',
                  }}
                >
                  N190,000
                </h2>

                <img
                  src="/assets/item2.png"
                  style={{ width: '100%', height: 'auto', padding: '20px' }}
                  alt="Amani 40 Inch FHD LED TV"
                />
              </div>

              <div className="bg-[#F7F7F7] rounded-[16px] p-[16px] shadow-md inline-block" style={{ border: "1px solid #C6C6C6", width: '315px', height: '478px', marginRight: '20px', whiteSpace: 'normal' }}>
                <h3 className="text[24px] mb-2 font-normal leading[24px]"><span style={{ color: '#271785' }}>LED TV</span></h3>
                <p style={{ whiteSpace: 'normal', wordWrap: 'break-word', wordBreak: 'break-word', lineHeight: '24px', fontWeight: '400px', letterSpacing: '0.5px', color: '#3A3A3A', fontSize: '16px' }}>
                  Amani 40 Inch FHD LED Television New Version + 2 years Warranty
                </p>

                <h2
                  style={{
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: '#271785',
                    fontWeight: '700',
                    fontSize: '36px',
                    lineHeight: '44px',
                    font: 'poppins',
                    padding: '20px 0',
                  }}
                >
                  N190,000
                </h2>

                <img
                  src="/assets/item2.png"
                  style={{ width: '100%', height: 'auto', padding: '20px' }}
                  alt="Amani 40 Inch FHD LED TV"
                />
              </div>
            </div>

            <style jsx>{`
      @keyframes scroll {
        0% { transform: translateX(100%); }
        100% { transform: translateX(-100%); }
      }
      .animate-scroll {
        animation: scroll 12s linear infinite;
        // display: flex;
       
      }

    `}</style>
          </div>

          <br /><br />

          <a href="/" className="inline-flex items-center">
            <button className="rounded-[10px] px-6 py-4 bg-gradient-to-r from-[#271785] to-[#0CD851] text-white flex items-center">
              <b className="text-[20px]">Explore</b>
              <img src="/assets/arrow-w.png" alt="Forward Arrow" className="ml-4" />
            </button>
          </a>
        </div>

        {/* section 4 */}
        <div className="mt-20 p-12 flex flex-col items-center lg:flex-col md:flex-col bg-[#3A3A3A] text-white">

          <section className=" md:flex lg:flex w-full ">
            <div className="flex-1 ">

              <br />
              <h3 className="font-bold text-[25px] mb-5"><span style={{ color: '#10D80C' }}>Partner</span> as an Agent / <br /> Landlord</h3>


              <div className="flex items-center mb-4">
                <img src="/assets/tick.svg" className="mr-4 rounded-full w-[30px] h-[30px]" />
                <p className="text-[14px] font-normal leading-[24px] text-[#F7F7F7] tracking-[0.5px]">Expand your reach and access more tenants.</p>
              </div>

              <div className="flex items-center mb-4">
                <img src="/assets/tick.svg" className="mr-4 rounded-full w-[30px] h-[30px]" />
                <p className="text-[14px] font-normal leading-[24px] text-[#F7F7F7] tracking-[0.5px]">Streamline consultancy with our efficient support.</p>
              </div>

              <div className="flex items-center mb-4">
                <img src="/assets/tick.svg" className="mr-4 rounded-full w-[30px] h-[30px]" />
                <p className="text-[14px] font-normal leading-[24px] text-[#F7F7F7] tracking-[0.5px] ">Build trust and attract business with our reputation.</p>
              </div>
              <br />

              <a href="/Patner" className="inline-flex items-center">
                <button className="rounded-[8px] w-[153.31px] h-[48px] px-6 py-4 bg-white text-black flex items-center">
                  <b className="text-[16px] text-[#000000] font-semibold leading-[24px] tracking-[0.03px] ">Continue</b>

                  <img src="/assets/arrow-r.png" alt="Forward Arrow" className="w-[23.31px] h-[26px] text-[border: 3px solid #000000] ml-4" />
                </button>
              </a>


            </div>

            <br />


            <div className="flex ">
              <img src="/assets/patner.svg" className="w-[350px] h-[350px] rounded-[360px]" />
            </div>

          </section>

          <br /> <br />

          <section className=" md:flex lg:flex w-full ">
            <div className="flex-1 ">

              <br />
              <h3 className="font-bold text-[25px] mb-5">
                <span style={{ color: '#10D80C' }}>Partner</span> as a Brand / <br /> Company
              </h3>

              <div className="flex items-center mb-4">
                <img src="/assets/tick.svg" className="mr-4 rounded-full w-[30px] h-[30px]" />
                <p className="text-[14px] font-normal leading-[24px] text-[#F7F7F7] tracking-[0.5px]">
                  Expand visibility and reach new audiences.
                </p>
              </div>

              <div className="flex items-center mb-4">
                <img src="/assets/tick.svg" className="mr-4 rounded-full w-[30px] h-[30px]" />
                <p className="text-[14px] font-normal leading-[24px] text-[#F7F7F7] tracking-[0.5px]">
                  Strengthen brand credibility and reputation.
                </p>
              </div>

              <div className="flex items-center mb-4">
                <img src="/assets/tick.svg" className="mr-4 rounded-full w-[30px] h-[30px]" />
                <p className="text-[14px] font-normal leading-[24px] text-[#F7F7F7] tracking-[0.5px]">
                  Access new growth opportunities.
                </p>
              </div>
              <br />

              <a href="/Patner" className="inline-flex items-center">
                <button className="rounded-[8px] w-[153.31px] h-[48px] px-6 py-4 bg-white text-black flex items-center">
                  <b className="text-[16px] text-[#000000] font-semibold leading-[24px] tracking-[0.03px] ">Continue</b>

                  <img src="/assets/arrow-r.png" alt="Forward Arrow" className="w-[23.31px] h-[26px] text-[border: 3px solid #000000] ml-4" />
                </button>
              </a>

            </div>

            <br />

            <div className="flex">
              <img src="/assets/image.png" className="w-[350px] h-[350px] rounded-[360px]" />
            </div>

          </section>

        </div>

        {/*section 5 */}
        <section>
          <div className="mx-auto mb-6 px-8 py-8 md:py-12 lg:pt-[32px] lg:pr-[120px] lg:pb-[32px] lg:pl-[120px]">
            <div className="flex justify-center">

              <div className="relative flex justify-center mb-6">
                {/* Image Background */}
                <img
                  src="/assets/Vector1.png"
                  alt="Background Image"
                  className="hidden md:absolute  md:block lg:w-[214px] md:h-[50px] md:left-[120.5px] lg:h-[60px] lg:left-[200.5px]"
                />

                {/* Heading */}
                <h2 className="font-bold p-2 text-[24px] text-center inline-block lg:text-[36px] lg:leading-[44px] relative z-10 ">
                  What our Customers <br /> Say About Us
                </h2>
              </div>

            </div>

            <div className="flex items-center justify-between">
              {/* Left Image */}
              <img
                src="/assets/group2.png"
                alt="Group of happy customers"
                className="hidden md:block w-1/4 lg:w-[281px] lg:h-[471px]"
              />

              {/* Center Content */}
              <div className="relative bg-[#F7F7F7] border p-10 rounded-lg mx-4 flex-1 w-[350px] lg:p-10 lg:w-[500px] lg:h-[205px]">

                <i className='bx bxs-quote-alt-left text-3xl text-gray-500 absolute top-0 left-0 ml-4 mt-2'></i>
                <p className="text-lg text-[#3A3A3A] text-center lg:text-[16px] lg:leading-[24px] lg:tracking-[0.5px] lg:pr-16 lg:pl-16">
                  Our Purpose is to provide Easy Life Services that will be hitch-free between landlords, tenants, load conveying vans, by creating a software platform where everyone can access and get his/her service with just a tap.
                </p>
                <i className='bx bxs-quote-alt-right text-3xl text-gray-500 absolute bottom-0 right-0 mr-4 mb-2'></i>
              </div>

              {/* Right Image */}
              <img
                src="/assets/group1.png"
                alt="Another group of customers enjoying the service"
                className="hidden  md:block w-1/4 lg:w-[281px] lg:h-[471px]"
              />
            </div>
          </div>
        </section>

        {/* section 6 */}
        <div className="relative flex flex-col items-center justify-center lg:w-[1440px]">
          <p className="font-bold text-[24px] p-6 text-center text-black">
            We've got you covered
          </p>

          <div className="lg:py-[20px]">
            <div
              id="map"
              className="w-[350px] h-[178px] lg:w-[1200px] lg:h-[419px] md:w-[700px] md:h-[319px] rounded-[16px]  "
            >
            </div>
          </div>

        </div>

        {/*section 7 */}
        <div className="flex justify-center p-10 flex-col md:flex-row  lg:flex-row gap-1 mb-5 lg:px-20 " data-aos="">

          <div className="flex-1 md:w-[384px] md:h-[224px] lg:w-[484px] lg:h-[224px]">
            <div className="">
              <p className="rounded-[16px] bg-[#F7F7F7] p-4 text-[16px] text-center inline-block ">
                FAQ
              </p>
              <h2 className="font-bold text-[24px] pt-3 pb-3 lg:text-[36px] lg:leading-[44px]">
                What would you like to <br />  know about ELBIS?
              </h2>
            </div>
            <p className="rounded-[16px] border-2 p-4 text-[16px] text-center inline-flex items-center mb-[20px] lg:mb-[0px]">
              <img src="/assets/message.png" className="h-[24px] w-[24px] mr-2" />
              Talk to us
            </p>

          </div>

          <div className="flex flex-col w-[350px] lg:w-[584px] lg:h-[228px] ">

            {/* Dropdown A */}
            <div className="mb-2 group">
              <button
                onClick={() => toggleDropdown("A")}
                className="flex items-center bg-gray-200 justify-between text-gray-700 px-6 py-6 rounded-[10px] w-full"
              >
                <span className="truncate">What is ELBIS Homes ng?</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="arrow-icon w-[24px] h-[24px]">
                  <path fillRule="evenodd" d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {dropdown === "A" && (
                <ul className="bg-white rounded-lg shadow-lg mt-2 w-full z-10 divide-y divide-gray-300">
                  <li className="py-2 px-4 text-center">Option A</li>
                  <li className="py-2 px-4 text-center">Option B</li>
                </ul>
              )}
            </div>

            {/* Dropdown B */}
            <div className="mb-2 group">
              <button
                onClick={() => toggleDropdown("B")}
                className="flex items-center bg-gray-200 justify-between text-gray-700 px-6 py-6 rounded-[10px] w-full"
              >
                <span className="truncate">What does it do?</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="arrow-icon w-[24px] h-[24px]">
                  <path fillRule="evenodd" d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {dropdown === "B" && (
                <ul className="bg-white rounded-lg shadow-lg mt-2 w-full z-10 divide-y divide-gray-300">
                  <li className="py-2 px-4 text-center">Option X</li>
                  <li className="py-2 px-4 text-center">Option Y</li>
                </ul>
              )}
            </div>

            {/* Dropdown C */}
            <div className="group">
              <button
                onClick={() => toggleDropdown("C")}
                className="flex items-center bg-gray-200 justify-between text-gray-700 px-6 py-6 rounded-[10px] w-full"
              >
                <span className="truncate">How much does it cost to rent an apartment?</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="arrow-icon w-[24px] h-[24px]">
                  <path fillRule="evenodd" d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {dropdown === "C" && (
                <ul className="bg-white rounded-lg shadow-lg mt-2 w-full z-10 divide-y divide-gray-300">
                  <li className="py-2 px-4 text-center">Option P</li>
                  <li className="py-2 px-4 text-center">Option Q</li>
                </ul>
              )}
            </div>
          </div>

        </div>

        {/* section 8 */}
        <div className="bg-[#3A3A3A] h-[128px] overflow-hidden relative">
          <div className="scroll-content flex items-center animate-scroll absolute inset-0">
            <div className="flex space-x-20 lg:space-x-60">
              <img src="/assets/1.png" className="w-[100px] h-[50px] object-contain" />
              <img src="/assets/2.png" className="w-[100px] h-[50px] object-contain" />
              <img src="/assets/3.png" className="w-[100px] h-[50px] object-contain" />
              <img src="/assets/4.png" className="w-[100px] h-[50px] object-contain" />
              <img src="/assets/5.png" className="w-[100px] h-[50px] object-contain" />
            </div>
          </div>

          <style jsx>{`
@keyframes scroll {
0% {
transform: translateX(100%);

}
100% {
transform: translateX(-100%);
}
}
.animate-scroll {
animation: scroll 15s linear infinite;
}
`}</style>

        </div>

        {/* section 9 */}
        <div className="flex flex-col md:flex-row md:justify-between">

          {/* Left Section: Sign Up Message */}
          {/* strictly for mobile */}
          <div className="lg:hidden block w-[350px] h-[144px] mb-5 lg:mb-0 lg:w-[642px] lg:h-[132px]  lg:bg-[#000]">
            <h2 className="text-[25px] leading-[36px] font-semibold p-10 mb-10 lg:text-[36px] lg:leading-[44px]">
              Sign up to follow  <span className="text-[#271785]">Elbis Homes ng,</span> for available housing <span className="text-[#10D80C]">updates. </span>
            </h2>
          </div>

          {/* stricyly for desktop */}
          <div className="hidden lg:block w-[350px] h-[144px] md:w-[642px] md:h-[132px] lg:w-[642px] lg:h-[132px]">
            <h2 className="text-[25px] leading-[36px] font-semibold p-10 md:text-[36px] md:leading-[44px lg:text-[36px] lg:leading-[44px]">
              Sign up to follow  <br /> <span className="text-[#271785]">Elbis Homes ng,</span> for available housing <span className="text-[#10D80C]">updates. </span>
            </h2>
          </div>

          {/* Right Section: Sign Up Form */}
          <div className="flex justify-center items-center p-10 md:w-[450px] md:h-[222px] lg:w-[450px] lg:h-[222px]">
            <div className="border-[8px] rounded-[16px] flex flex-col items-center space-y-4 w-[393px] h-[208px] md:h-[222px] md:mt-20 lg:h-[222px] lg:mt-20">
              <input
                type="text"
                placeholder=" Your Email"
                className="w-[90%] p-4 rounded-[10px] bg-[#F7F7F7] mt-6 placeholder:text-[#271785] mb-2"
              />
              <button className="w-[90%] h-[56px] text-white rounded-[8px] text-[16px] leading-[24px] tracking-[-0.03px] font-semibold bg-gradient-to-r from-[#271785] to-[#0CD851]">
                Sign Up
              </button>
            </div>
          </div>

        </div>

      </div >

      {/* footer */}
      < Footer />

    </div >

  );
};

export default Page;










