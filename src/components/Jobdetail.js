import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetail = (props) => {
  const { id } = useParams();
  const [job, setJob] = useState({});

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
    <div className='ml-12 mt-12 mr-12 flex justify-items-start'>
      <div className="left space-y-7 w-[49rem] p-5">
        <div className="header text-5xl font-medium">
          {job.title}
        </div>

        <div className="jobRole ">
          <span className='text-2xl font-normal'>Job Role:</span>  <br />
          {job.description}
        </div>

        <div className="material">
          <span className='text-2xl font-normal'>Material:</span> <br/>
          {job.material}
        </div>

        <div className="materialPhoto ">
          <span className='text-2xl font-normal  '>Material's Photo:</span>
          <div className="images grid grid-cols-3">
          <img className='w-72 rounded-xl ' src={job.image} alt="" />
          </div>

        </div>
      </div>

      <div className="right  ml-40 ">
        <div className="border sticky top-12 border-gray-300 p-7 rounded-lg bg-gray-200 space-y-5 w-80 ">
          <div className='flex justify-center font-semibold text-lg '>{job.company}</div>
          <div><i class="fa-solid fa-phone"></i> {job.phone}</div>
          <div><i class="fa-solid fa-envelope"></i> {job.email}</div>
          <div><i class="fa-solid fa-location-pin"></i> {job.location}</div>
          <div><i class="fa-solid fa-money-bill"></i> ₹{job.salary}</div>
          <div><Link to={`/apply/${job._id}`}> <i class="fa-solid fa-money-bill"></i> Apply for job</Link></div>
        </div>

      </div>

      {/* description: <br />
      salary: {job.salary}<br />
      ... */}
    </div>
  );
};

export default ProductDetail;
