import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import adminJobContext from '../context/product/adminJobContext';
import Navadmin from './Navadmin'
import Adminjobcard from './Adminjobcard'


function Adminjob(props) {

  let navigate = useNavigate();

  const Context = useContext(adminJobContext)
  const { jobs, getadminJobs } = Context;

  useEffect(() => {

    if (localStorage.getItem('token')) {
      getadminJobs();
    } else {
      props.showAlert("Please Login to see Job Page", "bg-red-500", "login To continue");
      navigate('/login')
    }
  })

  return (
    <div className='pl-32' >
      {/* Navbar start */}
      <div className="nav">
        <Navadmin />
      </div>
      {/* Navbar end */}

      {/* Job contant start */}
      <div className="container text-center mt-5 text-3xl font-bold">
        <span className='text-orange-500 ' >Job</span>  page
      </div>
        <div className="jobCard pl-36 space-y-4 grid justify-center items-center  md:grid md:grid-cols-2 md:space-x-3 lg:mt-12 lg:grid lg:grid-cols-3">
          {jobs.map((job) => {
            return <Adminjobcard key={job._id} job={job} />
          })}
        </div>
      {/* Job contant end */}

    </div>
  )
}

export default Adminjob
