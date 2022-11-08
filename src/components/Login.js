import React from 'react'
import image from './img/login22.jpg'

export default function Login() {
  return (
    <div className='containers flex '>

      <div className="left">
        <img src={image} alt="" />
      </div>

      <div className="right mt-48">
        <h2 className='ml-72  text-3xl font-bold'>Login to continue</h2>

        <input type="text" className=" border-2 border-gray-200 rounded ml-44 mt-7 w-[27rem] h-12 py-2 px-4 text-gray-700 leading-tight focus:outline-none bg-[#f7f7f7] focus:border-purple-500 focus:placeholder:text-transparent" id="inline-full-name" placeholder='Email' />
        <br />
        <input type="text" className=" border-2 border-gray-200 rounded ml-44 mt-7 w-[27rem] h-12 py-2 px-4 text-gray-700 leading-tight focus:outline-none bg-[#f7f7f7] focus:border-purple-500 focus:placeholder:text-transparent" id="inline-full-name" placeholder='Password' />
        <br />

        <a href="/" className='flex justify-end mt-3 hover:text-[#6675df] ml-[30rem] text-sm transition-colors duration-300 ease-in-out'>Forgot password? </a>
        <br />

        <div className="ml-[11rem]">
          <button className="shadow bg-[#6675df] hover:bg-slate-800 w-full text-center focus:shadow-outline focus:outline-none transition-colors duration-500 ease-in-out text-white text-sm font-extrabold py-3 px-4 rounded" type="button">
           LOGIN 
          </button>
        </div>
      </div>
    </div>
  )
}
