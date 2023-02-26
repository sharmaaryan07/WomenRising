import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from './Navbar';


const ProductDetail = (props) => {
  // useParam() will take the id from url
  const { id } = useParams();

  const [job, setJob] = useState({});

  // useEffect() is use to fetch a perticular job detail
  useEffect(() => {
    const fetchJob = async () => {
      props.setProgress(0)
      const response = await fetch(`http://localhost:5000/api/job/getjob/${id}`);
      props.setProgress(50)
      const data = await response.json();
      props.setProgress(100)
      setJob(data);
    };
    fetchJob();
  }, [id]);




  return (
    <>
      <div className="nav">
        <Navbar />

      </div>
      <div className='ml-12 mt-12 mr-12 flex justify-items-start'>
        <div className="left space-y-7 w-[49rem] p-5">
          <div className="header text-5xl font-bold">
            {job.title}
          </div>

          <div className="material space-y-3">
            <span className='text-2xl font-bold'>Job Image:</span> <br />
            <img className='w-[38rem] rounded-xl' src={job.image} alt=".." />
          </div>

          <div className="jobRole ">
            <span className='text-2xl font-bold'>Job Role:</span>  <br />
            {job.description}
          </div>


          <div className="materialPhoto ">
            <span className='text-2xl font-bold  '>Materials and Similar Photos Of the Products:</span>
            <div className="images ">
              <img className=' w-[20rem] rounded-xl ' src={job.materialImg} alt=".." />
            </div>

          </div>
        </div>

        <div className="right  ml-40 font-semibold ">
          <div className="border sticky top-12 border-gray-300 p-7 rounded-lg bg-gray-200 space-y-5 w-80 ">
            <div className='flex justify-center font-semibold text-2xl text-orange-500 '>{job.ownername}</div>
            <div><i class="fa-solid fa-phone text-orange-500 "></i> {job.phone}</div>
            <div><i class="fa-solid fa-envelope text-orange-500"></i> {job.email}</div>
            <div><i class="fa-solid fa-location-pin text-orange-500"></i> {job.location}</div>
            <div><i class="fa-solid fa-money-bill text-orange-500"></i> ₹{job.salary}</div>
            <div><Link to={`/apply/${job._id}`}> <i class="fa-solid fa-money-bill text-orange-500"></i> Apply for job</Link></div>
          </div>

        </div>

      </div>
    </>
  );
};

export default ProductDetail;
