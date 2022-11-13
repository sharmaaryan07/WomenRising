import React from 'react'
import signupimg from './img/character1.png'

export default function Signup() {
    return (
        <div className='container flex'>
            {/* For i */}
            <style>@import url('https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css')</style>

            {/* Start of div left */}
            <div className="left -ml-36 " >
                {/* bg-gray-900  for dark mode*/}
                <div className="  flex items-center justify-center px-5 py-5">
                    <div className=" text-gray-500 rounded-3xl  w-full overflow-hidden">    {/* shadow-xl bg-gray-100 for dark mode*/}
                        <div className=" w-full">
                            <div className="w-full md:w-1/2 py-10 px-5 md:px-10 ml-96">
                                <div className="text-center mb-10">
                                    <h1 className="font-bold text-3xl text-gray-900">SIGN UP</h1>
                                    <p>Enter your information to register</p>
                                </div>

                                <div>
                                    <div className="flex -mx-3">
                                        <div className="w-1/2 px-3 mb-5">
                                            <label for="" className="text-xs font-semibold px-1">First name</label>
                                            <div className="flex">
                                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                                    <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                                                </div>
                                                <input type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="John" />
                                            </div>
                                        </div>

                                        <div className="w-1/2 px-3 mb-5">
                                            <label for="" className="text-xs font-semibold px-1">Last name</label>
                                            <div className="flex">
                                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                                    <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                                                </div>
                                                <input type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Smith" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex -mx-3">
                                        <div className="w-full px-3 mb-5">
                                            <label for="" className="text-xs font-semibold px-1">Email</label>
                                            <div className="flex">
                                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                                <input type="email" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="johnsmith@example.com" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex -mx-3">
                                        <div className="w-full px-3 mb-12">
                                            <label for="" className="text-xs font-semibold px-1">Password</label>
                                            <div className="flex">
                                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                                <input type="password" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex -mx-3">
                                        <div className="w-full px-3 mb-5">
                                            <button className="block w-full max-w-xs mx-auto bg-indigo-500 bg-[#6675df] hover:bg-slate-800 transition-colors duration-500 ease-in-out text-white rounded-lg px-3 py-3 font-semibold">SIGN UP</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End of div left */}

            <div className="right mt-16 ">
                <img src={signupimg} alt=""   />
            </div>
        </div>
    )
}
