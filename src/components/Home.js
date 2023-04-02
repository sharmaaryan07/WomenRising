import React, { useContext, useEffect } from 'react'
import { Link } from "react-router-dom";
import aboutImg from './img/aboutimg.png'
import 'tw-elements';
import { Carousel } from 'flowbite-react';
import gif1 from './img/Homec.png'
import aiImage from './img/aiImgae.png'
import gif2 from './img/gif2.gif'
import jobContext from '../context/product/jobContext';
import Jobscard from './Jobscard';
import productContext from '../context/product/productContext';
import Productitems from './Productitems';
import Navbar from './Navbar';
import Footer from './Footer';


export default function Home() {
  // this context is helping in passing api data of job
  const Context = useContext(jobContext)
  const { jobs, getJobs } = Context;

  const Context2 = useContext(productContext)
  const { products, getproduct } = Context2;

  useEffect(() => {
    // this function will get all the jobs that are available
    getJobs();
    // this function will get all the product that are available
    getproduct();
  })

  return (
    <div className='   '>
      <Navbar />

      {/* Top banner start */}
      <div className="banner  hidden lg:block  ">

        {/* Carousel Start */}

        <div className="h-56  lg:h-[40rem]  ">
          <Carousel slideInterval={140}>
            <div className='flex justify-center bg-gray-300 py-7'>
              <img
                src={gif1}
                className='w-[33rem]  '

                alt="womensRising"
              />
            </div>
            <img
              className='h-[45rem]'
              src={gif2}
              alt="women Empowerment"
            />
            <img
              src={aiImage}
              alt="WomenRising2"
            />
          </Carousel>
        </div>

        {/* Carousel End */}
      </div>
      {/* Top banner end */}

      <div className="container mx-auto">

        {/* ${isInViewport ? 'lefteffect' : ''} */}

        {/* About Us Start */}
        <div className={`aboutmain mt-11 ml-5 mr-5  md:grid md:grid-cols-2  md:mt-20 md:mb-20  lg:mt-[10rem] lg:mb-[10rem]  `}>

          {/*  Image start */}
          <div className={`aboutImg  flex justify-center  `}>
            <img src={aboutImg} alt="about us " className='w-[22rem]  md:w-[24rem]  lg:w-[26rem] lg:-mt-16 ' />
          </div>
          {/*  Image stop */}

          {/* Content start */}
          <div className="aboutContent space-y-4 md:mt-5      ">
            <h4 className='text-5xl font-bold ' >About <span className='text-orange-500 font-bold'>Us</span> </h4>

            <p className='text-lg'>Womens Rising is the best career platform to accelerate women’s careers. Womens Rising can connect to many illiterate womens/housewifes or whose who dont have work to do.</p>

            <p className='text-lg '>Our vision is to enable women to achieve their full potential by enabling them to start, restart and rise in their careers. Our motive is to do the best for womens who dont earn and want to earn some money by themselves.</p>

            <div className={`button `}>
              <Link to="/about" >
                <button type="button" className="border  focus:ring-1 focus:outline-none  font-semibold rounded-lg text-base  px-5 py-2.5 text-center mr-2 mb-2 border-orange-500 text-orange-500 hover:text-white hover:bg-orange-600 focus:ring-orange-800">
                  View More
                </button>
              </Link>
            </div>
          </div>
          {/* Content stop */}

        </div>
        {/* About Us End */}






        <div className={`feature  mt-14  mr-5 lg:mt-[10rem] lg:mb-[10rem]  `}>

          {/* Job start */}
          <div className={`job aboutImg space-y-5 rightEffect   `}>

            <div>
              <h4 className='text-5xl font-bold ' >Featured <span className='text-orange-500 font-bold'>Job</span> </h4>
            </div>

            <div className="jobCard  space-y-4 grid justify-center items-center  md:grid md:grid-cols-2 md:space-x-3 lg:grid lg:grid-cols-3  ">
              {jobs.map((job) => {
                return <Jobscard key={job._id} job={job} />
              }) ? jobs.map((job) => {
                return <Jobscard key={job._id} job={job} />
              }).slice(0, 3) : ""}
            </div>

            <div className="button text-center ">
              <Link to="/job" >
                <button type="button" className="border  focus:ring-1 focus:outline-none  font-semibold rounded-lg text-base  px-5 py-2.5 text-center mr-2 mb-2 border-orange-500 text-orange-500 hover:text-white hover:bg-orange-600 focus:ring-orange-800">
                  View Job
                </button>
              </Link>
            </div>
          </div>
          {/* Job End */}


          {/* Product Start */}
          <div className="product mt-28 ml-5 mr-5 lg:ml-2 lg:mr-2 space-y-5">
            <div>
              <h4 className='text-5xl font-bold ' >Available <span className='text-orange-500 font-bold'>Product</span> </h4>
            </div>

            <div className="productcard">
              <div className="productContainer space-y-4 grid justify-center items-center  md:grid md:grid-cols-2 md:space-x-3 lg:grid lg:grid-cols-3 ">
                {products.map((product) => {
                  return <Productitems key={product._id} product={product} />
                }) ? products.map((product) => {
                  return <Productitems key={product._id} product={product} />
                }).slice(0, 3) : ""}

              </div>
            </div>

            <div className="button text-center ">
              <Link to="/product" >
                <button type="button" className="border  focus:ring-1 focus:outline-none  font-semibold rounded-lg text-base  px-5 py-2.5 text-center mr-2 mb-2 border-orange-500 text-orange-500 hover:text-white hover:bg-orange-600 focus:ring-orange-800">
                  View Product
                </button>
              </Link>
            </div>
          </div>
          {/* Product End */}


          {/* Contact Start */}
          <div className='testimonial mt-28 space-y-6 mb-8 '>
            <div className='space-y-6'>
              <h4 className='text-5xl font-bold text-center' ><span className='text-orange-500 font-bold'>Customer</span> review </h4>
              <h4 className='text-2xl font-bold text-center' >What our customer saying...... </h4>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* Testimonial 1 */}
              <div className="testimonial1 bg-gray-200 text-center rounded-lg">
                <div className="container py-6">
                  <div className="svg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-500 mb-8" viewBox="0 0 975.036 975.036">
                      <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                    </svg>
                  </div>
                  <div className="content px-6">
                    <p>I am so grateful for Women's Rising! As a stay-at-home mom, I always wanted to find a way to earn some extra money and contribute to my family's finances. But I didn't know how to start selling the things I made. Women's Rising made it so easy! Now, I can share my homemade pickles with others and earn some extra cash. Thank you for creating such a wonderful platform!</p>
                  </div>
                  <span className="inline-block h-1 w-10 rounded bg-orange-500 mt-8 mb-6"></span>
                  <div>
                    <h2 className="text-orange-500 font-medium title-font tracking-wider text-sm">Urmila Devi</h2>
                    <p className="text-gray-500">Customer</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="testimonial1 bg-gray-200 text-center rounded-lg">
                <div className="container py-6">
                  <div className="svg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-500 mb-8" viewBox="0 0 975.036 975.036">
                      <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                    </svg>
                  </div>
                  <div className="content px-6">
                    <p>I love Women's Rising! As someone who lives in a rural area, it can be hard to find buyers for the products I make. But Women's Rising connects me with people all over the country who are interested in my handmade bags. Plus, I feel good knowing that I'm supporting other women entrepreneurs by buying products from them. I recommend Women's Rising to anyone who wants to buy or sell handmade goods!</p>
                  </div>
                  <span className="inline-block h-1 w-10 rounded bg-orange-500 mt-8 mb-6"></span>
                  <div>
                    <h2 className="text-orange-500 font-medium title-font tracking-wider text-sm">Priyanka Singh</h2>
                    <p className="text-gray-500">Customer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>

    </div>
  )
}