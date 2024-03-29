import { React, useState } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';


export default function Applyjob(props) {
  const [applyJob, setApplyJob] = useState({ name: "", email: "", address: "", age: "", phone: "" })
  const { id } = useParams();

  const handleClick = async (e) => {
    // preventDefault is use to prevent website to reload.
    e.preventDefault();
    props.setProgress(0);
    const { name, email, address, age, phone } = applyJob;
    // ths api will help user to apply for job
    const response = await fetch(`http://localhost:5000/api/job/apply/${id}`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, address, age, phone })
    });
    props.setProgress(100);
    const json = await response.json();
    console.log(json);
  }

  const onChange = (e) => {
    setApplyJob({ ...applyJob, [e.target.name]: e.target.value })
  }


  return (
    <div>
      <Navbar />

      <div className='shadow-md p-10 w-[55rem] ml-[20rem] mt-14 space-y-8 bg-orange-50  '>
        <h2 className='text-4xl text-center font-bold '>Apply <span className='text-orange-500' >Job</span>  </h2>

        {/* Form Start */}
        <form className='   grid grid-cols-2 gap-11 '>

          <div className="relative z-0  mb-6 group">
            <input type="text" name="name" id="name" onChange={onChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required />
            <label for="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name:</label>
          </div>

          <div className="relative z-0  mb-6 group">
            <input type="email" name="email" id="email" onChange={onChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required />
            <label for="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
          </div>

          <div className="relative z-0  mb-6 group">
            <input type="text" name="address" id="address" onChange={onChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required />
            <label for="address" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address</label>
          </div>

          <div className="relative z-0  mb-6 group">
            <input type="Number" name="phone" id="phone" minLength={1} maxLength={3} onChange={onChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required />
            <label for="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">phone</label>
          </div>


          <div className="relative z-0  mb-6 group">
            <input type="Number" name="age" id="age" minLength={1} maxLength={3} onChange={onChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required />
            <label for="age" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Age</label>
          </div>


        </form>
        {/* Form End */}

        <div>
          <button type="submit" onClick={handleClick} className="text-white bg-orange-700  hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">Apply</button>
        </div>

      </div>

      <div className="footer">
        <Footer />
      </div>

    </div>
  )
}
