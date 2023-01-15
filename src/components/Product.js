import React, {useContext} from 'react'
import productContext from '../context/product/productContext'
import jobImg from './img/job.jpg'
import headphone from './img/headphone.jpg'

export default function Product() {

  const a = useContext(productContext)


  return (
    <div className='pb-9'>
      {/* productBanner Start */}
      <div className='productBanner'>
        <div className=' bg-gray-900 text-white'>
          <div>
            <img src={jobImg} alt="" className='opacity-[0.19]' />
          </div>
        </div>

        <div className="AboutInfo  ml-[36rem] -mt-[15rem] space-y-12 absolute text-white">
          <h2 className='text-4xl '> <span className='text-[#2563eb] font-semibold'> Product  </span>Page </h2>
        </div>
      </div>
      {/* productBanner End */}


      {/* Product Card Start */}

        <div className="grid grid-cols-3 products mt-6 ml-6 gap-4">

          {/* Card 1 Start */}
          <div className="w-full   max-w-sm bg-gray-100 rounded-lg shadow-lg  border-gray-700 ">
            <div className="productImg">
              <img className="p-8 rounded-t-lg" src={a.image} alt="" />
            </div>
            <div className="px-8 -mt-5 pb-4">
              <div className='productInfo'>
                <h5 className="text-base font-semibold tracking-tight text-gray-900 ">{a.name}</h5>
              </div>

              <div className="flex items-center justify-between pt-4">
                <span className="text-3xl font-bold text-gray-900 ">₹{a.price}</span>
                <a href="/product" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
              </div>
            </div>
          </div>

          {/* Card 1 End */}
        </div>
      {/* Product Card End */}

    </div>

  )
}
