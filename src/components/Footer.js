import React from 'react'
import logo from "./img/logo1.png";

export default function Footer() {
    return (
        <div >

            <footer className="px-8 py-8  text-gray-600 shadow  bg-gray-900 mt-20  w-auto  ">
                <div className="grid grid-cols-1 justify-center items-center space-y-5   ">
                    <div className="image flex justify-center">
                        <img src={logo} className="invert w-48" alt="Women's Rising  Logo" />
                    </div>

                    <div className="content flex justify-center ">
                        <ul className="flex flex-wrap items-center  text-sm text-gray-500 w-[22rem] ">
                            <li>
                                <a href="/aboutus" className="mr-4 hover:underline md:mr-6 ">Product</a>
                            </li>
                            <div className="border h-4 mr-2  -ml-2 border-gray-500 "></div>
                            <li>
                                <a href="/" className="mr-4 hover:underline md:mr-6">Job</a>
                            </li>
                            <div className="border h-4 mr-2 -ml-2 border-gray-500"></div>

                            <li>
                                <a href="/" className="mr-4 hover:underline md:mr-6 ">Blog</a>
                            </li>
                            <div className="border h-4 mr-2 -ml-2 border-gray-500"></div>

                            <li>
                                <a href="/" className="mr-4  hover:underline">Contact us</a>
                            </li>

                            <div className="border h-4 mr-2 -ml-2 border-gray-500"></div>

                            <li>
                                <a href="/" className="  hover:underline">About Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 text-center ">© 2022 <span className="hover:underline cursor-pointer">Womens Rising™</span>. All Rights Reserved.
                </span>
            </footer>

        </div>
    )
}
