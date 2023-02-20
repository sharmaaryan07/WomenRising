import React from 'react'

function Contact() {
    return (
        <div className=' justify-center'>
            <div className='contact px-11'>
                <div className="headers text-center mt-5 space-y-5 lg:space-y-10">
                    <h2 className='text-5xl font-semibold'>
                        Contact <span className='text-orange-500'>US</span> 
                    </h2>

                    <h4 className=' text-xl font-semibold'>
                        Start, Restart and Rise in your career with <span className='text-orange-500'>Women's Rising</span> .
                    </h4>

                    <p className='text-2xl font-bold'>Thanks for visiting <span className='text-orange-500'>Women's Rising</span>.<br />
                        If you have any queries or suggestions, please fill in the below form.</p>
                </div>

                <div className='md:grid md:grid-cols-2 md:gap-16 lg:gap-36 lg:px-20 lg:mt-10'>

                    <div className="form mt-5 ">
                        <form className=''>
                            <div className="relative z-0  mb-6 group">
                                <input type="text" name="name" id="name" value="" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required />
                                <label for="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                            </div>

                            <div className="relative z-0  mb-6 group">
                                <input type="email" name="email" id="email" value="" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required />
                                <label for="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                            </div>

                            <div className="relative z-0  mb-6 group">
                                <input type="text" name="message" id="message" value="" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required />
                                <label for="message" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Message</label>
                            </div>

                            <div className="button text">
                                <button type="submit" className="border  focus:ring-1 focus:outline-none  font-semibold rounded-lg text-base  px-3 py-2 text-center mr-2 mb-2 border-orange-500 text-orange-500 hover:text-white hover:bg-orange-600 focus:ring-orange-800">Submit</button>
                                <p className='text-sm font-medium text-gray-500'>We are always happy to assist you!</p>
                            </div>
                        </form>
                    </div>

                    <div className="info  mt-10 space-y-7">
                        <div className="location  flex space-x-5">
                            <i class="fa-sharp text-orange-500 text-[2rem] fa-solid fa-location-dot"></i>
                            <div>
                                <p className='text-sm text-orange-500 font-bold'>Headquarters</p>
                                <p>4/7, Harihar Singh Compound, Caves Road, Pratap Nagar, Jogeshwari East, Mumbai:400060</p>
                            </div>
                        </div>

                        <div className="email flex space-x-5">
                            <i class="fa-solid fa-envelope text-orange-500 text-[2rem]"></i>
                            <div>
                                <p className='text-sm text-orange-500 font-bold'>Email</p>
                                <p>akshatasharma@gmail.com</p>
                                <p>aryansharma@gmail.com</p>
                            </div>
                        </div>

                        <div className="phone flex space-x-5">
                            <i class="fa-solid fa-mobile text-orange-500 text-[2rem]"></i>
                            <div>
                                <p className='text-sm text-orange-500 font-bold'>Mobile</p>
                                <p>2132343453</p>
                                <p>6438463647</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Contact
