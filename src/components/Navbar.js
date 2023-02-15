import React from 'react'
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "./img/logo.png";
import avatar from "./img/Avatar.png";
import { useState } from 'react';

export default function Navbar() {
    let navigate = useNavigate();

    const logOut = () => {
        localStorage.removeItem('token');
        navigate('/')
    }

    const [isOpen, setIsOpen] = useState(false);

    // <button onClick={logOut} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Logout</button>
    return (
        <div>
            <nav className="bg-white border-gray-200 px-2 py-4 dark:bg-gray-900 ">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="home" className="flex items-center" >
                        <img src={logo} className="mr-3 h-6 sm:h-9  invert" alt="Flowbite Logo" />
                        {/* <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">WomensRising</span> */}
                    </Link>
                    <div className="flex items-center md:order-3">
                        {!localStorage.getItem('token') ? <div>
                            <Link to="/login" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Login</Link>
                            <Link to="/signup" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign up</Link>
                            </div> : <div className="relative">
                            <button className="signout block h-12 w-12 focus:outline-none focus:border-white focus:border rounded-full overflow-hidden" onClick={() => setIsOpen(!isOpen)}>
                                <img src={avatar} alt="avatar" className="h-full w-full object-cover" />
                            </button>
                            {isOpen && (
                                <div className="absolute z-20 right-0 w-48 mt-2 py-2 bg-white rounded-lg shadow-xl">
                                    <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Profile</Link>
                                    <Link to='/cart' className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Cart</Link>
                                    <button onClick={logOut} className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Log out</button>
                                </div>
                            )}
                        </div>
                        }

                    </div>
                    <div id="mega-menu" className="hidden justify-between items-center w-full text-sm md:flex md:w-auto md:order-1">
                        <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
                            <li>
                                <NavLink style={({ isActive }) => { return { color: isActive ? '#2563eb' : "white" } }} to="/" className="block py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</NavLink>
                            </li>

                            <li>
                                <NavLink style={({ isActive }) => { return { color: isActive ? '#2563eb' : "white" } }} to="/job" className="block py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Jobs</NavLink>
                            </li>

                            <li>
                                <NavLink style={({ isActive }) => { return { color: isActive ? '#2563eb' : "white" } }} to="/product" className="block py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Products</NavLink>
                            </li>

                            <li>
                                <NavLink style={({ isActive }) => { return { color: isActive ? '#2563eb' : "white" } }} to="/blogs" className="block py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Blogs</NavLink>
                            </li>

                            <li>
                                <NavLink style={({ isActive }) => { return { color: isActive ? '#2563eb' : "white" } }} to="/team" className="block py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">About US</NavLink>
                            </li>

                            <li>
                                <NavLink style={({ isActive }) => { return { color: isActive ? '#2563eb' : "white" } }} to="/contact" className="block py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </div>
    )
}
