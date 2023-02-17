import React  from 'react'
import { useState } from 'react';
import FileBase64 from 'react-file-base64';
import { useParams } from 'react-router-dom';


export default function Applyjob(props) {
  const [applyJob, setApplyJob] = useState({ name: "", email: "", resume: "" })
  const { id } = useParams();

  const handleClick = async (e) => {
    e.preventDefault();
    props.setProgress(0);
    const { name, email, resume } = applyJob;

    const response = await fetch(`http://localhost:5000/api/job/apply/${id}`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, resume })
    });
    props.setProgress(100);
    const json = await response.json();
  }


  const onChange = (e) => {
    setApplyJob({ ...applyJob, [e.target.name]: e.target.value })
  }


  return (
    <div>
      <div className='shadow-md p-10 w-[55rem] ml-[20rem] mt-14 space-y-8'>
        <h2 className='text-4xl text-center font-bold '>Apply Job </h2>
        <form className='   grid grid-cols-2 gap-11 '>

          <div className="relative z-0  mb-6 group">
            <input type="text" name="name" id="name" onChange={onChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label for="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name:</label>
          </div>

          <div className="relative z-0  mb-6 group">
            <input type="email" name="email" id="email" onChange={onChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label for="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
          </div>

          <div className='space-y-3'>
            <label for="resume" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Resume</label>
            <FileBase64
              id="image"
              name="resume"
              onChange={onChange}
              type="file"
              multiple={false}
              onDone={({ base64 }) => setApplyJob({ ...applyJob, resume: base64 })} />
            <p className='text-xs '>Image size should not be more than 60kb</p>
          </div>
        </form>
        <div>
          <button type="submit" onClick={handleClick} className="text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Apply</button>
        </div>

      </div>
    </div>
  )
}
