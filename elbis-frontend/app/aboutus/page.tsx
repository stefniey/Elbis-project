'use client'
import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/Footer";
import "../globals.css";
import Aos from 'aos';
import 'aos/dist/aos.css';
import 'boxicons/css/boxicons.min.css';


const Page = () => {
  const [dropdown, setDropdown] = useState<string>("");

  useEffect(() => {

    Aos.init({
      duration: 1000,
    });
  }, []);


  const toggleDropdown = (dropdownName: string) => {
    setDropdown(dropdown === dropdownName ? "" : dropdownName);
  };


  return (
    <div className="flex flex-col mb-10">
      <Navbar />

      <div className="flex-grow bg-[#FFF]">

        {/* section 1 */}
        <div className="container mx-auto px-4 py-12 flex flex-col items-center justify-center mt-24">

          <p className="rounded-[1000px] bg-[#F7F7F7] border text-[#333333] font-normal text-[14px] p-4 text-center leading-[22px] tracking-[-1%]">
            About US
          </p>
          <br />

          <h2 className="text-[24px] leading-[32px] font-bold text-center text-[#333333] tracking-[0.5px] lg:w-[503px] lg:text-[36px] lg:leading-[44px] lg:font-bold">
            Discover who we are
          </h2>

          <br />

          <div className="flex justify-center">
            <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 lg:w-[1201px]
            lg:h-[876.09px] lg:pt-[32px] lg:pr-[0px] lg:pb-[32px] lg:pl-[0px]">

              <img src="/assets/ab1.png" alt="" />
              <img src="/assets/ab2.png" alt="" />
              <img src="/assets/ab3.png" alt="" />
              <img src="/assets/ab4.png" alt="" />
              <img src="/assets/ab5.png" alt="" />
              <img src="/assets/ab6.png" alt="" />

            </div>
          </div>
        </div>

        {/* section 2 */}
        <div className="flex flex-col items-center justify-center w-full p-5 py-6 mx-auto lg:w-3/4 space-y-10">

          {/* our mission */}
          <div className="flex flex-col items-center space-y-6">
            <h2 className="text-[24px] leading-[32px] font-bold text-center text-[#333333] tracking-[0.5px] lg:w-[409px] lg:-h[44px]
            lg:text-[36px] lg:leading-[44px] ">
              Our Mission
            </h2>

            <div className="bg-[#F7F7F7] w-[350px] h-[196px] rounded-[16px] p-[32px] flex items-center justify-center
            lg:w-[1201px] lg:h-[112px] md:w-[700px] md:h-[112px]">
              <p className="text-center text-[#333333] text-[14px] leading[22px] tracking-[1%] font-normal lg:text-[16px] lg-leading[24px] lg:tracking-[0.5px]">
                Our purpose is to provide Easy Life Services that will be hitch-free between landlords, tenants, and load-conveying vans by creating a software platform where everyone can access and get services with just a tap.
              </p>
            </div>
          </div>

          {/* our vision */}
          <div className="flex flex-col items-center space-y-6">

            <div>
              <img
                src="/assets/Vector2.png"
                alt="Background Image"
                className="hidden md:absolute  md:block lg:w-[214px] md:h-[40px] md:left-[310.5px] lg:h-[50px] lg:left-[580.5px]"
              />
              <h2 className="text-[24px] leading-[32px] font-bold text-center text-[#333333] tracking-[0.5px] lg:w-[409px] lg:-h[44px]
            lg:text-[36px] lg:leading-[44px]">
                Our Vision
              </h2>
            </div>


            <div className="bg-[#F7F7F7] w-[350px] h-[196px] rounded-[16px] p-[32px] flex items-center justify-center md:w-[700px] md:h-[112px] 
              lg:w-[1201px] lg:h-[112px]">
              <p className="text-center text-[#333333] text-[14px] leading[22px] tracking-[1%] font-normal lg:text-[16px] lg-leading[24px] lg:tracking-[0.5px]">
                Our purpose is to provide Easy Life Services that will be hitch-free between landlords, tenants, and load-conveying vans by creating a software platform where everyone can access and get services with just a tap.
              </p>
            </div>
          </div>
        </div>

        {/* section 3*/}
        <div className="container mx-auto px-4 py-12 flex flex-col items-center justify-center">
          <p className="rounded-full bg-[#F7F7F7] border text-black text-[14px] p-4 text-center">
            Our Services
          </p>
          <br />

          <h2 className="font-bold text-[24px] leading-[32px] tracking[0.5px]  text-center lg:text-[32px] lg:leading-[44px] ">
            What we offer
          </h2>
          <br />

          {/* Dropdown Section */}
          <div className="flex flex-col items-center w-[350px] md:w-[600px] md:h-[296px] lg:w-[600px] lg:h-[296px] gap-4 md:gap-1">
            {/* Dropdown A */}
            <div className="mb-2 group w-full ">
              <button
                onClick={() => toggleDropdown("A")}
                className="flex items-center bg-[#F7F7F7] justify-between text-gray-700 px-6 py-6 rounded-[10px] w-full"
              >
                <span className="truncate">Apartment rentals</span>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="arrow-icon w-[24px] h-[24px]">
                  <path fillRule="evenodd" d="M8.293 4.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 11-1.414-1.414L13.586 12 8.293 6.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>

              </button>
              {dropdown === "A" && (
                <ul className=" bg-[#F7F7F7] rounded-lg shadow-lg mt-2 w-full z-10 divide-y divide-gray-300">
                  <li className="py-2 px-4 text-center">Option A</li>
                  <li className="py-2 px-4 text-center">Option B</li>
                </ul>
              )}
            </div>

            {/* Dropdown B */}
            <div className="mb-2 group w-full">
              <button
                onClick={() => toggleDropdown("B")}
                className="flex items-center bg-[#F7F7F7] justify-between text-gray-700 px-6 py-6 rounded-[10px] w-full"
              >
                <span className="truncate">Partnership </span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="arrow-icon w-[24px] h-[24px]">
                  <path fillRule="evenodd" d="M8.293 4.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 11-1.414-1.414L13.586 12 8.293 6.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>

              </button>
              {dropdown === "B" && (
                <ul className=" bg-[#F7F7F7] rounded-lg shadow-lg mt-2 w-full z-10 divide-y divide-gray-300">
                  <li className="py-2 px-4 text-center">Option X</li>
                  <li className="py-2 px-4 text-center">Option Y</li>
                </ul>
              )}
            </div>

            {/* Dropdown C */}
            <div className="group w-full">
              <button
                onClick={() => toggleDropdown("C")}
                className="flex items-center bg-[#F7F7F7] justify-between text-gray-700 px-6 py-6 rounded-[10px] w-full"
              >
                <span className="truncate">Consultation</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="arrow-icon w-[24px] h-[24px]">
                  <path fillRule="evenodd" d="M8.293 4.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 11-1.414-1.414L13.586 12 8.293 6.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>

              </button>
              {dropdown === "C" && (
                <ul className=" bg-[#F7F7F7] rounded-lg shadow-lg mt-2 w-full z-10 divide-y divide-gray-300">
                  <li className="py-2 px-4 text-center">Option P</li>
                  <li className="py-2 px-4 text-center">Option Q</li>
                </ul>
              )}
            </div>
          </div>
        </div>

        {/*section 4 */}
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

        {/*section 5 */}
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

        {/* section 6*/}
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

        {/* section 7 */}
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

      </div>


      <br />
      <Footer />
    </div>
  );
};

export default Page;





