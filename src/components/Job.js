import React from 'react'
import jobImg from './img/job.jpg'

export default function Job() {
  return (
    <div>
      {/* Job Banner start */}
      <div className='jobBanner'>
        <div className=' bg-gray-900 text-white'>
          <div>
            <img src={jobImg} alt="" className='opacity-[0.19]' />
          </div>
        </div>

        <div className="AboutInfo  ml-[36rem] -mt-[21rem] space-y-12 absolute text-white">
          <h2 className='text-3xl '>READ <span className='text-[#2563eb] font-semibold'> ABOUT US </span> </h2>
        </div>
      </div>
      {/* Job Banner End */}

      

    </div>
  )
}
