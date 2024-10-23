// import React from 'react'
// import Navbar from '@/components/Navbar/navbar'
// import Footer from '@/components/Footer/Footer'

// const pages = () => {
//     return (
//         <div className='mt-10 '>
//             <Navbar />

//             <div className="container mx-auto px-4 py-12 mb-40 utilies">
//                 <div className="flex justify-center">
//                     <p className="rounded-full bg-gray-200 p-2 text-xs text-center inline-block">
//                         AVAILABLE PRODUCTS
//                     </p>
//                 </div>
//                 <p className="text-3xl mb-4 text-center p-8">Utilities you may like</p>

//                 <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">


//                     <div className="bg-gray-200 p-6 rounded-lg shadow-md">
//                         <h3 className="text-xl mb-2">LED TV</h3>
//                         <p>Amani 40 Inch FHD LED Television New Version + 2years Warranty</p>
//                         <p style={{
//                             background: 'linear-gradient(90deg, #271785 0%, #0CD851 100%)',
//                             WebkitBackgroundClip: 'text',
//                             WebkitTextFillColor: 'transparent',
//                         }}>
//                             N190,000
//                         </p>
//                         <img
//                             src="/assets/item 1.jpg"
//                             style={{ width: "100%", height: 'auto', padding: '20px' }}
//                             alt="House"
//                         />
//                     </div>

//                     <div data-aos="fade-up" className="bg-gray-200 p-6 rounded-lg shadow-md">
//                         <h3 className="text-xl mb-2">AIR CONDITIONER</h3>
//                         <p>Hisense 1.5HP Inverter Split Copper Air Conditioner</p>
//                         <p style={{
//                             background: 'linear-gradient(90deg, #271785 0%, #0CD851 100%)',
//                             WebkitBackgroundClip: 'text',
//                             WebkitTextFillColor: 'transparent',
//                         }}>
//                             N432,000
//                         </p>
//                         <img
//                             src="/assets/item 2.jpg"
//                             style={{ width: "100%", height: 'auto', padding: '20px' }}
//                             alt="House"
//                         />
//                     </div>

//                     <div data-aos="fade-up" className="bg-gray-200 p-6 rounded-lg shadow-md">
//                         <h3 className="text-xl mb-2">WASHING MACHINE</h3>
//                         <p>Hisense 5kg Top Load Twin Tub Washing Machine (WM503-WSPA) With One Year Warranty</p>
//                         <p style={{
//                             background: 'linear-gradient(90deg, #271785 0%, #0CD851 100%)',
//                             WebkitBackgroundClip: 'text',
//                             WebkitTextFillColor: 'transparent'
//                         }}>
//                             N191,000
//                         </p>
//                         <img
//                             src="/assets/item 3.jpg"
//                             style={{ width: "100%", height: 'auto', padding: '20px', }}
//                             alt="House"
//                         />
//                     </div>

//                     <div className="bg-gray-200 p-6 rounded-lg shadow-md">
//                         <h3 className="text-xl mb-2">LED TV</h3>
//                         <p>Amani 40 Inch FHD LED Television New Version + 2years Warranty</p>
//                         <p style={{
//                             background: 'linear-gradient(90deg, #271785 0%, #0CD851 100%)',
//                             WebkitBackgroundClip: 'text',
//                             WebkitTextFillColor: 'transparent',
//                         }}>
//                             N190,000
//                         </p>
//                         <img
//                             src="/assets/item 1.jpg"
//                             style={{ width: "100%", height: 'auto', padding: '20px' }}
//                             alt="House"
//                         />
//                     </div>

//                     <div data-aos="fade-up" className="bg-gray-200 p-6 rounded-lg shadow-md">
//                         <h3 className="text-xl mb-2">AIR CONDITIONER</h3>
//                         <p>Hisense 1.5HP Inverter Split Copper Air Conditioner</p>
//                         <p style={{
//                             background: 'linear-gradient(90deg, #271785 0%, #0CD851 100%)',
//                             WebkitBackgroundClip: 'text',
//                             WebkitTextFillColor: 'transparent',
//                         }}>
//                             N432,000
//                         </p>
//                         <img
//                             src="/assets/item 2.jpg"
//                             style={{ width: "100%", height: 'auto', padding: '20px' }}
//                             alt="House"
//                         />
//                     </div>

//                     <div data-aos="fade-up" className="bg-gray-200 p-6 rounded-lg shadow-md">
//                         <h3 className="text-xl mb-2">WASHING MACHINE</h3>
//                         <p>Hisense 5kg Top Load Twin Tub Washing Machine (WM503-WSPA) With One Year Warranty</p>
//                         <p style={{
//                             background: 'linear-gradient(90deg, #271785 0%, #0CD851 100%)',
//                             WebkitBackgroundClip: 'text',
//                             WebkitTextFillColor: 'transparent'
//                         }}>
//                             N191,000
//                         </p>
//                         <img
//                             src="/assets/item 3.jpg"
//                             style={{ width: "100%", height: 'auto', padding: '20px', }}
//                             alt="House"
//                         />
//                     </div>


//                 </div>
//             </div>


//             {/* footer */}
//             <Footer />
//         </div>
//     )
// }

// export default pages

import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar/navbar';
import Footer from '@/components/Footer/Footer';

const pages = () => {
    return (
        <div className='mt-10 '>
            <Navbar />

            <div className="container mx-auto px-4 py-12 mb-40 utilies">
                <div className="flex justify-center">
                    <p className="rounded-full bg-gray-200 p-2 text-xs text-center inline-block">
                        AVAILABLE PRODUCTS
                    </p>
                </div>
                <p className="text-3xl mb-4 text-center p-8">Utilities you may like</p>

                <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    <div className="bg-gray-200 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl mb-2">LED TV</h3>
                        <p>Amani 40 Inch FHD LED Television New Version + 2years Warranty</p>
                        <p style={{
                            background: 'linear-gradient(90deg, #271785 0%, #0CD851 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}>
                            N190,000
                        </p>
                        <Image
                            src="/assets/item.png"
                            width={500}
                            height={300}
                            layout="responsive"
                            objectFit="cover"
                            alt="House"
                        />
                    </div>

                    <div data-aos="fade-up" className="bg-gray-200 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl mb-2">AIR CONDITIONER</h3>
                        <p>Hisense 1.5HP Inverter Split Copper Air Conditioner</p>
                        <p style={{
                            background: 'linear-gradient(90deg, #271785 0%, #0CD851 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}>
                            N432,000
                        </p>
                        <Image
                            src="/assets/item1.png"
                            width={500}
                            height={300}
                            layout="responsive"
                            objectFit="cover"
                            alt="House"
                        />
                    </div>

                    <div data-aos="fade-up" className="bg-gray-200 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl mb-2">WASHING MACHINE</h3>
                        <p>Hisense 5kg Top Load Twin Tub Washing Machine (WM503-WSPA) With One Year Warranty</p>
                        <p style={{
                            background: 'linear-gradient(90deg, #271785 0%, #0CD851 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>
                            N191,000
                        </p>
                        <Image
                            src="/assets/item2.png"
                            width={500}
                            height={300}
                            layout="responsive"
                            objectFit="cover"
                            alt="House"
                        />
                    </div>

                    <div className="bg-gray-200 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl mb-2">LED TV</h3>
                        <p>Amani 40 Inch FHD LED Television New Version + 2years Warranty</p>
                        <p style={{
                            background: 'linear-gradient(90deg, #271785 0%, #0CD851 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}>
                            N190,000
                        </p>
                        <Image
                            src="/assets/item1.png"
                            width={500}
                            height={300}
                            layout="responsive"
                            objectFit="cover"
                            alt="House"
                        />
                    </div>

                    <div data-aos="fade-up" className="bg-gray-200 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl mb-2">AIR CONDITIONER</h3>
                        <p>Hisense 1.5HP Inverter Split Copper Air Conditioner</p>
                        <p style={{
                            background: 'linear-gradient(90deg, #271785 0%, #0CD851 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}>
                            N432,000
                        </p>
                        <Image
                            src="/assets/item.png"
                            width={500}
                            height={300}
                            layout="responsive"
                            objectFit="cover"
                            alt="House"
                        />
                    </div>

                    <div data-aos="fade-up" className="bg-gray-200 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl mb-2">WASHING MACHINE</h3>
                        <p>Hisense 5kg Top Load Twin Tub Washing Machine (WM503-WSPA) With One Year Warranty</p>
                        <p style={{
                            background: 'linear-gradient(90deg, #271785 0%, #0CD851 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>
                            N191,000
                        </p>
                        <Image
                            src="/assets/item1.png"
                            width={500}
                            height={300}
                            layout="responsive"
                            objectFit="cover"
                            alt="House"
                        />
                    </div>

                </div>
            </div>

            {/* footer */}
            <Footer />
        </div>
    );
}

export default pages;
