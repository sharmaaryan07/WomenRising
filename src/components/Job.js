import { React, useContext, useEffect } from 'react'
import jobContext from '../context/product/jobContext';
import jobImg from './img/abImage.jpg'
import Jobscard from './Jobscard'
import { useNavigate, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';




export default function Job(props) {
  let navigate = useNavigate();

  const Context = useContext(jobContext)
  const { jobs, getJobs } = Context;

  useEffect(() => {

    if (localStorage.getItem('token')) {
      getJobs();
    } else {
      props.showAlert("Please Login to see Job Page", "bg-red-500", "login To continue");
      navigate('/login')
    }
  })

  return (
    <>
      <div className="nav">
        <Navbar />

      </div>

      <div>
        {/* Job Banner start */}
        <div className='jobBanner  '>
          <div className=' bg-gray-900 text-white  '>
            <div className=' '>
              <img src={jobImg} alt="" className='opacity-[0.30] w-[99rem]  h-[45rem]' />
            </div>
          </div>

          <div className="AboutInfo  ml-[45rem] -mt-[31rem] space-y-6 absolute text-white ">
            <div>

              <h2 className='text-5xl text-orange-500 font-semibold'>  JOBS  </h2>
            </div>

            <div>
              <Link to="/addjob" >
                <button type="button" className="text-white hover:text-white border border-white hover:bg-orange-800 hover:border-orange-700 focus:ring-1 focus:outline-none focus:ring-orange-300 font-semibold rounded-lg text-xs  px-5 py-2.5 text-center mr-2 mb-2 ">
                  Add Job
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* Job Banner End */}


        <div className="jobCard container mx-auto space-y-4 grid justify-center items-center  md:grid md:grid-cols-2 md:space-x-3 lg:mt-12 lg:grid lg:grid-cols-3">
          {jobs.map((job) => {
            return <Jobscard key={job._id} job={job} />
          })}
        </div>

        <Footer />


      </div>
    </>
  )
}
