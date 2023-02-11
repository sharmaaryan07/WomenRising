import React, { useContext } from 'react'
import { useState } from 'react';
import jobContext from '../context/product/jobContext'
import FileBase64 from 'react-file-base64';


export default function Addjob() {
  const Context = useContext(jobContext)
  const { addjob } = Context;

  const [add, setAdd] = useState({ company: "", title: "", description: "", location: "", salary: "", phone: "", email: "", material: "",image: "" })
  const handleClick = (e) => {
    e.preventDefault();
    // props.setProgress(0)

    addjob(add.company, add.title, add.description, add.location, add.salary, add.phone, add.email, add.material, add.image)
    setAdd({company: "", title: "", description: "", location: "", salary: "", phone: "", email: "", material: "",image: "" })
    // props.setProgress(100)

    // props.showAlert("add Added", "bg-green-500", "add Added Successful")
  }

  const onChange = (e) => {
    setAdd({ ...add, [e.target.name]: e.target.value })
  }


  return (
    <div>
      <div className='shadow-md p-10 w-[55rem] ml-[20rem] mt-14 space-y-8'>
        <h2 className='text-4xl text-center font-bold '>Sell add</h2>
        <form className='   grid grid-cols-2 gap-11 '>

          <div className="relative z-0  mb-6 group">
            <input type="text" name="company" id="company" value={add.company} onChange={onChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label for="company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company</label>
          </div>

          <div className="relative z-0  mb-6 group">
            <input type="text" name="title" id="title" value={add.title} onChange={onChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label for="title" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Job Name</label>
          </div>

          <div className="relative w-40 z-0  mb-6 group">
            <input type="number" name="salary" id="salary" value={add.salary} onChange={onChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label for="salary" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Salary</label>
          </div>


          <div className="relative -m-36 mt-[0.20rem]  z-0  mb-6 group">
            <input type="text" name="description" id="description" value={add.description} onChange={onChange} className="block py-2.5 px-0 w-[30rem] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label for="description" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
          </div>

          <div className="relative z-0  mb-6 group">
            <input type="text" name="email" id="email" value={add.email} onChange={onChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label for="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
          </div>

          <div className="relative z-0  mb-6 group">
            <input type="number" name="phone" id="phone" value={add.phone} onChange={onChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required maxLength='10' />
            <label for="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone Number</label>
          </div>
          <div className="relative z-0  mb-6 group">
            <input type="text" name="material" id="material" value={add.material} onChange={onChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
            <label for="material" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Material</label>
          </div>

          <div className="relative z-0  mb-6 group">
            <input type="text" name="location" id="location" value={add.location} onChange={onChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
            <label for="location" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Location</label>
          </div>
          <div className='space-y-3'>
            <FileBase64
              id="image"
              name="image"
              value={add.image}
              type="file"
              multiple={false}
              onDone={({ base64 }) => setAdd({ ...add, image: base64})} />
            <p className='text-xs '>Image size should not be more than 60kb</p>
          </div>
        </form>
        <div>
          <button type="submit" disabled={add.company.length <= 0 || add.email.length <= 0 || add.description.length <= 0 || add.phone.length <= 0 || add.salary.length <= 0 || add.title.length <= 0 || add.material.length <= 0} onClick={handleClick} className="text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </div>

      </div>
    </div>
  )
}
