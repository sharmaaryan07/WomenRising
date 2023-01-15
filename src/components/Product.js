import React, { useContext } from 'react'
import productContext from '../context/product/productContext'
import jobImg from './img/job.jpg'
import Productitems from './Productitems'


export default function Product() {
  const Context = useContext(productContext)
  const { products, setProducts } = Context;

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

      <div className="productContainer grid grid-cols-3  mt-6 ml-6 gap-4">
        {products.map((product) => {
          return <Productitems key={product.name} product={product} />
        })}

      </div>

    </div>

  )
}
