import React from 'react'
import logo from "./img/logo.png";

export default function Footer() {
  return (
    <div>
      
<footer className="p-4 bg-white text-gray-600 shadow md:px-6 md:py-8 dark:bg-gray-900 mt-20">
    <div className="sm:flex sm:items-center sm:justify-between">
        
            <img src={logo} className="mr-3 h-8 invert cursor-pointer" alt="Flowbite Logo" />
        
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
                <a href="/" className="mr-4 hover:underline md:mr-6 ">About</a>
            </li>
            <li>
                <a href="/" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            <li>
                <a href="/" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
            </li>
            <li>
                <a href="/" className="hover:underline">Contact</a>
            </li>
        </ul>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <span className="hover:underline cursor-pointer">Womens Rising™</span>. All Rights Reserved.
    </span>
</footer>

    </div>
  )
}
