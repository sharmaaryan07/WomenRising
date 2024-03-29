import React from 'react'
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "./img/logo1.png";
import avatar from "./img/Avatar.png";
import { useState } from 'react';

export default function Navbar() {
    let navigate = useNavigate();

    const logOut = () => {
        localStorage.removeItem('token');
        navigate('/')
    }

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <nav className=" border-gray-200 px-5 py-4 lg:px-7 bg-gray-900  w-full ">
                <div className="flex flex-wrap justify-between items-center  ">

                    <Link to="/" className="flex items-center" >
                        <img src={logo} className="mr-3 h-9  md:h-[4rem]  invert" alt="Flowbite Logo" />
                    </Link>

                    <div className="flex items-center md:order-3">

                        {/* IF-Else for which says if localstorage token is not there then show login and sigout button otherwise show signout button */}
                        {!localStorage.getItem('token') ? <div>
                            <Link to="/login" className="text-white dark:text-white hover:bg-orange-500 focus:ring-4 focus:ring-gray-50 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Login</Link>
                            <Link to="/signup" className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800">Sign up</Link>
                        </div> : <div className="relative">
                            <button className="signout block h-12 w-12 focus:outline-none focus:border-white focus:border rounded-full overflow-hidden" onClick={() => setIsOpen(!isOpen)}>
                                <img src={avatar} alt="avatar" className="h-full w-full object-cover" />
                            </button>

                            {/* If the condition is true , the element right after && will appear in the output. If it is false , React will ignore and skip it. */}
                            {isOpen && (
                                <div className="absolute z-20 right-0 w-48 mt-2 py-2 bg-white rounded-md  ">
                                    <div className='lg:hidden  '>
                                        <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-orange-500 hover:text-white">Home</Link>
                                        <Link to="/job" className="block px-4 py-2 text-gray-800 hover:bg-orange-500 hover:text-white">Job</Link>
                                        <Link to="/product" className="block px-4 py-2 text-gray-800 hover:bg-orange-500 hover:text-white">Product</Link>
                                        <Link to="/blogs" className="block px-4 py-2 text-gray-800 hover:bg-orange-500 hover:text-white">Blog</Link>
                                    </div>
                                    <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-orange-500 hover:text-white">Profile</Link>
                                    <Link to='/cart' className="block px-4 py-2 text-gray-800 hover:bg-orange-500 hover:text-white">Cart</Link>
                                    <button onClick={logOut} className="block px-4 w-48 text-left py-2 text-gray-800 hover:bg-orange-500 hover:text-white">Log out</button>
                                </div>
                            )}

                        </div>
                        }
                    </div>


                    {/* Links */}
                    <div id="mega-menu" className="hidden justify-between items-center w-full text-sm lg:flex lg:w-auto lg:order-1">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink style={({ isActive }) => { return { color: isActive ? 'orange' : "white" } }} to="/" className="block py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-orange-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</NavLink>
                            </li>

                            <li>
                                <NavLink style={({ isActive }) => { return { color: isActive ? 'orange' : "white" } }} to="/job" className="block py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-0 dark:text-gray-400 md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-orange-500 md:dark:hover:bg-transparent dark:border-gray-700">Jobs</NavLink>
                            </li>

                            <li>
                                <NavLink style={({ isActive }) => { return { color: isActive ? 'orange' : "white" } }} to="/product" className="block py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-0 dark:text-gray-400 md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-orange-500 md:dark:hover:bg-transparent dark:border-gray-700">Products</NavLink>
                            </li>

                            <li>
                                <NavLink style={({ isActive }) => { return { color: isActive ? 'orange' : "white" } }} to="/blogs" className="block py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-0 dark:text-gray-400 md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-orange-500 md:dark:hover:bg-transparent dark:border-gray-700">Blogs</NavLink>
                            </li>

                            <li>
                                <NavLink style={({ isActive }) => { return { color: isActive ? 'orange' : "white" } }} to="/about" className="block py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-0 dark:text-gray-400 md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-orange-500 md:dark:hover:bg-transparent dark:border-gray-700">About US</NavLink>
                            </li>

                            <li>
                                <NavLink style={({ isActive }) => { return { color: isActive ? 'orange' : "white" } }} to="/contact" className="block py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-0 dark:text-gray-400 md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-orange-500 md:dark:hover:bg-transparent dark:border-gray-700">Contact</NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
