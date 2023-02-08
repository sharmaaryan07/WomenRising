import React from 'react'
import { Link } from "react-router-dom";
// import video from './video/video8.mp4' // 1450px X 620px
import image from './img/Haboutus.jpg'
import 'tw-elements';
import gif1 from './img/gif14.gif'
import gif2 from './img/gif2.gif'



export default function Home() {
  return (
    <div className='mb-10'>


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



        {/* <div className="center text-5xl -mt-[23rem] ml-[30rem] font-medium absolute">
          <h1>FIND THE PERFECT <span className='text-[#2563eb] '> JOB </span> </h1>

          <Link to="/signup" className="ml-44  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-3  md:mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Sign up
          </Link>
        </div> */}
      </div>
      {/* Top banner end */}

      {/* FEATURED JOBS Start */}
      <div className="featurejob text-center space-y-11">

        <div className="jobinfo space-y-6">

          <h6 className='mt-28  text-3xl'>
            FEATURED <span className='text-[#2563eb] font-semibold'> JOBS </span>
          </h6>

          <p className='text-gray-600'>Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed viverra <br /> ipsum dolor, ultricies fermentum massa consequat eu.</p>

        </div>

        {/* Card Start */}
        <div className="card grid grid-cols-3 space-x-6 mr-8 ml-8 ">

          {/* Card 1 Start */}
          <div className="flex justify-center">
            <div className="flex flex-col md:flex-row md:max-w-lg rounded-lg bg-white shadow-lg">
              <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
              <div className="p-6 flex flex-col justify-start">
                <h5 className="text-gray-900 text-xl font-medium mb-2">Job title</h5>
                <p className="text-gray-700 text-base mb-4">
                  This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </p>
                <p className="text-gray-600 text-xs">Last updated 3 mins ago</p>
              </div>
            </div>
          </div>
          {/* Card 1 End */}

          {/* Card 2 Start */}
          <div className="flex justify-center">
            <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
              <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
              <div className="p-6 flex flex-col justify-start">
                <h5 className="text-gray-900 text-xl font-medium mb-2">Job title</h5>
                <p className="text-gray-700 text-base mb-4">
                  This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </p>
                <p className="text-gray-600 text-xs">Last updated 3 mins ago</p>
              </div>
            </div>
          </div>
          {/* Card 2 End */}

          {/* Card 3 Start */}
          <div className="flex justify-center">
            <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
              <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
              <div className="p-6 flex flex-col justify-start">
                <h5 className="text-gray-900 text-xl font-medium mb-2">Job title</h5>
                <p className="text-gray-700 text-base mb-4">
                  This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </p>
                <p className="text-gray-600 text-xs">Last updated 3 mins ago</p>
              </div>
            </div>
          </div>
          {/* Card 3 End */}
        </div>
        {/* Card End */}

        {/* View Job Button */}
        <div className='jobButton'>
          <Link to="/job" >
            <button type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-base  px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800">
              View Job
            </button>
          </Link>
        </div>
      </div>
      {/* FEATURED JOBS End */}


      {/* About Us Start */}
      <div className='aboutmain text-white '>

        {/* Background Image start */}
        <div className="aboutus mt-28 bg-gray-900 " >
          <div>
            <img src={image} alt="" className='opacity-[0.35]' />
          </div>
        </div>
        {/* Background Image End */}

        {/* About Us Info Start */}
        <div className="AboutInfo  text-center -mt-[29rem] space-y-12 absolute">
          <h2 className='text-3xl '>READ <span className='text-[#2563eb] font-semibold'> ABOUT US </span> </h2>

          <p className='text-sm '>.................................</p>

          <p className='mr-36 ml-36 '>..........................................................</p>

          <p className='mr-36 ml-36'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto nulla quo cum officia laboriosam. Amet tempore, aliquid quia eius commodi, doloremque omnis delectus laudantium dolor reiciendis non nulla! Doloremque maxime quo eum in culpa mollitia similique eius doloribus voluptatem facilis! Voluptatibus, eligendi, illum. Distinctio, non!</p>

        </div>
        {/* About Us Info End */}

      </div>
      {/* About Us End */}

      {/* Send US Message Start */}
      <div className="messageUs text-center space-y-9">
        <h2 className='text-3xl mt-28'>SEND US A <span className='text-[#2563eb] font-semibold'>MESSAGE</span> </h2>

        <p className='mr-64 ml-64'>Ut consectetur, metus sit amet aliquet placerat, enim est ultricies ligula, sit amet dapibus odio augue eget libero. Morbi tempus mauris a nisi luctus imperdiet.
          CONTACT US</p>

        <div>

          <a href='/' >
            <button type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-base  px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800">
              Contact Us
            </button>
          </a>
        </div>

      </div>
      {/* Send US Message End */}

    </div>
  )
}
