import { React, useContext, useEffect } from 'react'
import jobContext from '../context/product/jobContext';
import jobImg from './img/job.jpg'
import Jobscard from './Jobscard'
import { useNavigate, Link } from 'react-router-dom';



export default function Job(props) {
  let navigate = useNavigate();

  const Context = useContext(jobContext)
  const { jobs, getJobs } = Context;

  useEffect(() => {
    
    if(localStorage.getItem('token')){
      getJobs();
    }else{
      props.showAlert("Please Login to see Job Page", "bg-red-500", "login To continue");
      navigate('/login')
    }
  })

  return (

    <div>
      {/* Job Banner start */}
      <div className='jobBanner'>
        <div className=' bg-gray-900 text-white'>
          <div>
            <img src={jobImg} alt="" className='opacity-[0.19]' />
          </div>
        </div>

        <div className="AboutInfo  ml-[36rem] -mt-[21rem] space-y-12 absolute text-white">
          <h2 className='text-3xl text-[#2563eb] font-semibold'>  Jobs  </h2>
          <Link to="/addjob" >
              <button type="button" className="text-white hover:text-white border border-white hover:bg-blue-800 hover:border-blue-700 focus:ring-1 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-xs  px-5 py-2.5 text-center mr-2 mb-2 ">
                Add Job
              </button>
            </Link>
        </div>
      </div>
      {/* Job Banner End */}


      <div className="jobCard mt-8 ml-8 mr-8 grid grid-cols-3 gap-5">
        {jobs.map((job) => {
          return <Jobscard key={job._id} job={job}  />
        })}
      </div>

    </div>
  )
}
