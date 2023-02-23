import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import jobContext from '../context/product/jobContext'
import adminJobContext from '../context/product/adminJobContext'



const ProductDetail = (props) => {
    const { id } = useParams();
    const [job, setJob] = useState({});

    const Context = useContext(jobContext)
    const { addjob } = Context;

    const Context2 = useContext(adminJobContext)
    const { deleteadminJobs } = Context2;

    useEffect(() => {
        const fetchJob = async () => {
            props.setProgress(0)
            const response = await fetch(`http://localhost:5000/api/adminjob/getadminjob/${id}`);
            props.setProgress(50)
            const data = await response.json();
            props.setProgress(100)
            setJob(data);
        };
        fetchJob();
    }, [id]);


    const handleClick = (e) => {
        e.preventDefault();
        props.setProgress(0)

        addjob(job.ownername, job.title, job.description, job.location, job.salary, job.phone, job.email, job.materialImg, job.image)
        props.setProgress(100)

        props.showAlert("Job Added", "bg-green-500", "Job Added Successful")
        deleteadminJobs(job._id)


    }

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

                    <div className="material">
                        <span className='text-2xl font-bold'>Job Image:</span> <br />
                        <img className='w-[45rem] rounded-xl' src={job.image} alt=".." />
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

                <div className="right  ml-40 ">
                    <div className="border sticky top-12 border-gray-300 p-7 rounded-lg bg-gray-200 space-y-5 w-80 ">
                        <div className='flex justify-center font-semibold text-lg '>{job.ownername}</div>
                        <div><i class="fa-solid fa-phone text-orange-500 "></i> {job.phone}</div>
                        <div><i class="fa-solid fa-envelope text-orange-500"></i> {job.email}</div>
                        <div><i class="fa-solid fa-location-pin text-orange-500"></i> {job.location}</div>
                        <div><i class="fa-solid fa-money-bill text-orange-500"></i> ₹{job.salary}</div>
                        <div className='space-x-20'>
                            <button type="button" onClick={handleClick} className="border  focus:ring-1 focus:outline-none  font-semibold rounded-lg text-xs  px-5 py-2.5 text-center mr-2 mb-2 border-orange-500 text-orange-500 hover:text-white hover:bg-orange-600 focus:ring-orange-800">
                                Accept
                            </button>

                            <button type="button" onClick={() => { deleteadminJobs(job._id) }} className="border  focus:ring-1 focus:outline-none  font-semibold rounded-lg text-xs  px-5 py-2.5 text-center mr-2 mb-2 border-orange-500 text-orange-500 hover:text-white hover:bg-orange-600 focus:ring-orange-800">
                                Deny
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
};

export default ProductDetail;
