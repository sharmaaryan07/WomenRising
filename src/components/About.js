import React from 'react'
import Navbar from './Navbar';


function About(props) {
    return (
        <>
            <Navbar />

            <div className='flex justify-center'>
                <div className='md:mx-6  md:mt-16 lg:mx-20 shadow-md'>
                    <section className={`text-gray-400 bg-white body-font `}>
                        <div className="container px-5 py-24 mx-auto ">
                            <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-500 mb-8" viewBox="0 0 975.036 975.036">
                                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                </svg>
                                <p className="leading-relaxed text-lg font-semibold">Women's Rising is an online platform designed to empower women by providing them with a platform to sell their handmade products. Our platform was created with the aim of helping women who are illiterate or not well-educated, and who are dependent on men for their livelihoods. We believe that every woman has the potential to earn a livelihood and become financially independent.

                                    Our platform provides women with an opportunity to showcase their creativity and skills by selling their handmade products. Whether it's pickles, papad, bags, or any other creative product, we welcome all kinds of handmade products on our platform.

                                    We understand that many women face challenges in selling their handmade products. Women's Rising aims to address this challenge by providing an easy-to-use online platform that connects sellers with potential buyers. Our platform is designed to be user-friendly and easy to navigate, making it accessible to women of all ages and educational backgrounds.

                                    At Women's Rising, we understand the importance of user privacy and security. We have implemented multiple security layers to ensure that our users' data and passwords are safe and secure.

                                    We believe that Women's Rising has the potential to create a positive impact in the lives of many women. Our platform can help women earn a livelihood and become financially independent, which can lead to greater self-esteem and confidence. We are committed to supporting women and helping them achieve their goals through our platform.</p>
                                <span className="inline-block h-1 w-10 rounded bg-orange-500 mt-8 mb-6"></span>
                                <div className='grid grid-cols-2'>
                                    <div>
                                        <h2 className={`text-orange-500 font-medium title-font tracking-wider text-sm`}>Akshata Sharma</h2>
                                        <p className="text-gray-500">CEO   </p>
                                    </div>

                                    <div>

                                        <h2 className={`text-orange-500 font-medium title-font tracking-wider text-sm`}>Aryan Sharma</h2>
                                        <p className="text-gray-500">   Manager</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default About
