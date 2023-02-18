import React, { useContext, useEffect } from 'react'
import { Link } from "react-router-dom";
// import video from './video/video8.mp4' // 1450px X 620px
import aboutImg from './img/about2.png'
import contactImg from './img/contact.png'
import 'tw-elements';
import gif1 from './img/gif14.gif'
import gif2 from './img/gif2.gif'
import jobContext from '../context/product/jobContext';
import Jobscard from './Jobscard';
import productContext from '../context/product/productContext';
import Productitems from './Productitems';



export default function Home() {

  const Context = useContext(jobContext)
  const { jobs, getJobs } = Context;

  const Context2 = useContext(productContext)
  const { products, getproduct } = Context2;

  useEffect(() => {

    getJobs();
    getproduct();
  })

  return (
    <div className='mb-10  '>


      {/* Top banner start */}
      <div className="banner bg-gray-900 text-white  ">

        {/* Carousel Start */}
        <div
          id="carouselExampleCrossfade"
          className="carousel slide carousel-fade relative"
          data-bs-ride="carousel"

        >
          <div className="carousel-indicators  absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
            <button
              type="button"
              data-bs-target="#carouselExampleCrossfade"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCrossfade"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCrossfade"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner relative  overflow-hidden ">
            <div className="carousel-item active float-left w-full">
              <img
                src={gif2}
                className="block w-full"
                alt="Wild Landscape"
              />
            </div>
            <div className="carousel-item float-left w-full">
              <img
                src={gif1}
                className="block w-full"
                alt="Camera"
              />
            </div>
            <div className="carousel-item float-left w-full">
              <img
                src={gif1}
                className="block w-full"
                alt="Exotic Fruits"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/* Carousel End */}
      </div>
      {/* Top banner end */}









      {/* About Us Start */}
      <div className='aboutmain mt-4 ml-5 mr-5 px-3 space-y-5 md:grid md:grid-cols-2  md:mt-20 md:mb-20  lg:mt-14 lg:mb-14 '>

        {/*  Image start */}
        <div className="aboutImg flex justify-center   ">
          <img src={aboutImg} alt="about us " className='w-[22rem]  md:w-[24rem]  lg:w-[34rem]  ' />
        </div>
        {/*  Image stop */}

        {/* Content start */}
        <div className="aboutContent space-y-4 md:mt-5  lg:mt-36   ">
          <h4 className='text-5xl font-bold ' >About <span className='text-orange-500 font-bold'>Us</span> </h4>

          <p className='text-lg'>Womens Rising is the best career platform to accelerate women’s careers. Womens Rising can connect to many illiterate womens/housewifes or whose who dont have work to do.</p>

          <p className='text-lg '>Our vision is to enable women to achieve their full potential by enabling them to start, restart and rise in their careers. Our motive is to do the best for womens who dont earn and want to earn some money by themselves.</p>

        </div>
        {/* Content stop */}

        <div className="button text-center col-span-2 ">
            <Link to="/aboutus" >
              <button type="button" className="border  focus:ring-1 focus:outline-none  font-semibold rounded-lg text-base  px-5 py-2.5 text-center mr-2 mb-2 border-orange-500 text-orange-500 hover:text-white hover:bg-orange-600 focus:ring-orange-800">
                View Job
              </button>
            </Link>
          </div>
      </div>
      {/* About Us End */}






      <div className="feature  mt-14 ml-5 mr-5 lg:ml-7 lg:mr-7 ">

        {/* Job start */}
        <div className="job space-y-5">

          <div>
            <h4 className='text-5xl font-bold ' >Featured <span className='text-orange-500 font-bold'>Job</span> </h4>
          </div>

          <div className="jobCard space-y-4 grid justify-center items-center  md:grid md:grid-cols-2 md:space-x-3 lg:grid lg:grid-cols-3  ">
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
        <div className="product mt-14 ml-5 mr-5 lg:ml-2 lg:mr-2 space-y-5">
          <div>
            <h4 className='text-5xl font-bold ' >Featured <span className='text-orange-500 font-bold'>Product</span> </h4>
          </div>

          <div className="productcard">
            <div className="productContainer space-y-4 grid justify-center items-center  md:grid md:grid-cols-2 md:space-x-3 lg:grid lg:grid-cols-3 ">
              {products.map((product) => {
                return <Productitems product={product} />
              }) ? products.map((product) => {
                return <Productitems product={product} />
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
        <div className='Contact mt-14 ml-5 mr-5  space-y-5 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 '>
          <div className="image flex justify-center">
            <img src={contactImg} alt="contact" className='w-[26rem] md:w-[20rem] lg:w-[28rem]  rounded-xl' />
          </div>

          <div className="content space-y-3">
            <h4 className='text-5xl font-bold ' >Contact <span className='text-orange-500 font-bold'>Us</span> </h4>
            <p>If you have any queries or suggestions, Do contact us</p>
          </div>

          <div className="button text-center md:col-span-2 lg:col-span-1 ">
            <Link to="/product" >
              <button type="button" className=" border  focus:ring-1 focus:outline-none  font-semibold rounded-lg text-base  px-5 py-2.5 text-center mr-2 mb-2 border-orange-500 text-orange-500 hover:text-white hover:bg-orange-600 focus:ring-orange-800">
                View Product
              </button>
            </Link>
          </div>
        </div>
        {/* Contact End */}

      </div>

    </div>
  )
}