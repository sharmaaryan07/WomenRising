
import React, { useContext, useEffect } from 'react'
import { Link } from "react-router-dom";
import productContext from '../context/product/productContext'
import jobImg from './img/job.jpg'
import Productitems from './Productitems'
import Navbar from './Navbar';
import ProductDetails from './Productdetail';


export default function Product() {
  const Context = useContext(productContext)
  const { products, getproduct } = Context;

  useEffect(() => {
    getproduct();
  })
  return (
    <div className='pb-9'>

      <Navbar />
      {/* productBanner Start */}
      <div className='productBanner'>
        <div className=' bg-gray-900 text-white'>
          <div>
            <img src={jobImg} alt="" className='opacity-[0.19]' />
          </div>
        </div>

        <div className="AboutInfo  ml-[36rem] -mt-[15rem] space-y-12 absolute text-white">
          <h2 className='text-4xl '> <span className='text-[#2563eb] font-semibold'> Product  </span>Page </h2>
          <h2 className='text-xl '> To <span className='text-[#2563eb] font-semibold'> Sell Product  </span> 
            <Link to="/sellproduct" >
              <button type="button" className="text-white hover:text-white border border-white hover:bg-blue-800 hover:border-blue-700 focus:ring-1 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-xs  px-5 py-2.5 text-center mr-2 mb-2 ">
                Sell Product
              </button>
            </Link>
          </h2>
        </div>
      </div>
      {/* productBanner End */}

      <div className="productContainer grid grid-cols-3  mt-6 ml-6 gap-4">
        {products.map((product) => {
          return  <Link to={`/productdetail/${product._id}`} > <Productitems product={product} /> </Link>  
        })}

      </div>

    </div>

  )
}
