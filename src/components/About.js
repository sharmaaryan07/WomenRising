import React from 'react'
import Navbar from './Navbar';
import aboutImg from "./img/about.png";
import Footer from './Footer';


function About() {
    return (
        <>
            <div className="navbar">
                <Navbar />
            </div>

            {/* Main Div Start */}
            <div className='flex justify-center'>
                <div className='md:mx-6  md:mt-16 lg:mx-20 shadow-md  '>

                    {/* About Section Start */}
                    <section className={`text-gray-400  body-font bg-orange-50 `}>

                        <div className='text-center text-black text-4xl font-bold pt-10 '>
                            About <span className='text-orange-500' >us</span>
                        </div>


                        {/* Content Start */}
                        <div className="Content  py-14 mx-auto flex">

                            {/* Info Start */}
                            <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">

                                <div className="leading-relaxed text-lg font-[900]">

                                    <p >Women's Rising is an online platform designed to empower women by providing them with a platform to sell their handmade products. Our platform was created with the aim of helping women who are illiterate or not well-educated, and who are dependent on men for their livelihoods. We believe that every woman has the potential to earn a livelihood and become financially independent.<p />

                                        <br />

                                        <p className='text-center ml-14' >Our platform provides women with an opportunity to showcase their creativity and skills by selling their handmade products. Whether it's pickles, papad, bags, or any other creative product, we welcome all kinds of handmade products on our platform.</p>

                                        <br />

                                        <p >   We understand that many women face challenges in selling their handmade products. Women's Rising aims to address this challenge by providing an easy-to-use online platform that connects sellers with potential buyers. Our platform is designed to be user-friendly and easy to navigate, making it accessible to women of all ages and educational backgrounds.</p>
                                        <br />
                                        <p className='ml-14' >    At Women's Rising, we understand the importance of user privacy and security. We have implemented multiple security layers to ensure that our users' data and passwords are safe and secure.</p>
                                        <br />
                                        <p>    We believe that Women's Rising has the potential to create a positive impact in the lives of many women. Our platform can help women earn a livelihood and become financially independent, which can lead to greater self-esteem and confidence. We are committed to supporting women and helping them achieve their goals through our platform.</p>
                                    </p>
                                </div>
                            </div>
                            {/* Info End */}


                            {/* Image Start */}
                            <div className="img   hidden lg:block">
                                <img src={aboutImg} alt="" />
                            </div>
                            {/* Image End */}

                        </div>
                        {/* Content End */}


                    </section>
                    {/* About Section End */}

                </div>
            </div>
            {/* Main Div End */}


            <div className="footer">
                <Footer />
            </div>
        </>
    )
}

export default About
