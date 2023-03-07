import React, { useContext } from 'react'
import { useState } from 'react';
import adminJobContext from '../context/product/adminJobContext'
import FileBase64 from 'react-file-base64';
import Navbar from './Navbar';
import Footer from './Footer';



export default function Addjob(props) {
  const Context = useContext(adminJobContext)
  const { addadminjob } = Context;

  const [add, setAdd] = useState({ ownername: "", title: "", description: "", location: "", salary: "", phone: "", email: "", materialImg: "", image: "" })
  const handleClick = (e) => {
    e.preventDefault();
    props.setProgress(0)

    addadminjob(add.ownername, add.title, add.description, add.location, add.salary, add.phone, add.email, add.materialImg, add.image)
    setAdd({ ownername: "", title: "", description: "", location: "", salary: "", phone: "", email: "", materialImg: "", image: "" })
    props.setProgress(100)

    props.showAlert("Job Added", "bg-green-500", "Job Added Successful")
  }

  const onChange = (e) => {
    setAdd({ ...add, [e.target.name]: e.target.value })
  }

  


  return (
    <>
      <div className="nav">
        <Navbar />
      </div>
      <div className='flex justify-center'>
        <div className='shadow-md p-10 w-fit   md:mx-8 mt-14 space-y-8'>
          <h2 className='text-4xl text-center font-bold '>ADD <span className='text-orange-500'>JOB</span> </h2>
          <form className='   grid grid-cols-2 gap-11   '>
            <div className="relative z-0  mb-6 group">
              <input type="text" name="ownername" id="ownername" value={add.ownername} onChange={onChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required />
              <label for="ownername" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Name</label>
            </div>

            <div className="relative z-0  mb-6 group">
              <input type="text" name="title" id="title" value={add.title} onChange={onChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required />
              <label for="title" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Job Name</label>
            </div>

            <div className="relative  z-0  mb-6 group">
              <input type="text" name="salary" id="salary" value={add.salary} onChange={onChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required />
              <label for="salary" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Salary</label>
            </div>


            <div className="relative  mt-[0.20rem]  z-0  mb-6 group">
              <input type="text" name="description" id="description" value={add.description} onChange={onChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required />
              <label for="description" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Job Description</label>
            </div>

            <div className="relative z-0  mb-6 group">
              <input type="text" name="email" id="email" value={add.email} onChange={onChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required />
              <label for="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
            </div>

            <div className="relative z-0  mb-6 group">
              <input type="number" name="phone" id="phone" value={add.phone} onChange={onChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required maxLength='10' />
              <label for="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone Number</label>
            </div>


            <div className="relative z-0  mb-6 group">
              <input type="text" name="location" id="location" value={add.location} onChange={onChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " />
              <label for="location" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Location</label>
            </div>
            <div className='space-y-3'>
              <label for="image" className=" text-sm  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Job Image</label>
              <br />
              <FileBase64
                id="image"
                name="image"
                value={add.image}
                type="file"
                multiple={false}
                onDone={({ base64 }) => setAdd({ ...add, image: base64 })} />
              <p className='text-xs '>Image size should not be more than 60kb</p>

            </div>


            <div>
              <label for="image" className=" text-sm  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Material Image</label>
              <br />
              <FileBase64
                id="materialImg"
                name="materialImg"
                value={add.materialImg}
                type="file"
                multiple={false}
                onDone={({ base64 }) => setAdd({ ...add, materialImg: base64 })} />
              <p className='text-xs '>Image size should not be more than 60kb</p>
            </div>
          </form>
          <div>
            <button type="submit" disabled={add.ownername.length <= 0 || add.email.length <= 0 || add.description.length <= 0 || add.phone.length <= 0 || add.salary.length <= 0 || add.title.length <= 0 } onClick={handleClick} className=" border  focus:ring-1 focus:outline-none  font-semibold rounded-lg text-base  px-3 py-2 text-center mr-2 mb-2 border-orange-500 text-orange-500 hover:text-white hover:bg-orange-600 focus:ring-orange-800">Submit</button>
          </div>

        </div>
      </div>
      <div className="footer">
        <Footer/>
      </div>
    </>
  )
}
