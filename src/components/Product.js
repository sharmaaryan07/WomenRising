
import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import productContext from '../context/product/productContext'
import Productitems from './Productitems'
import PImg from './img/aiProduct.jpg'
import Navbar from './Navbar';




export default function Product(props) {
  const Context = useContext(productContext)
  const { products, getproduct } = Context;

  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      getproduct();
    } else {
      props.showAlert("Please Login to see Product Page", "bg-red-500", "login To continue");
      navigate('/login')
    }
  })
  return (
    <>
      <div className="nav">
        <Navbar />
      </div>
      <div className='pb-9'>

        {/* productBanner Start */}
        <div className="banner">
          <div className="image ">
            <img src={PImg} alt="" className='hidden lg:block' />
          </div>

          <div className="AboutInfo  ml-[40rem] -mt-[27rem] space-y-6 absolute text-white ">
            <div>

              <h2 className='text-5xl text-orange-500 font-semibold'>  Product Page  </h2>
            </div>

            <div className='flex justify-center'>
              <Link to="/sellproduct" >
                <button type="button" className="text-white hover:text-white border border-white hover:bg-orange-500 hover:border-orange-700 focus:ring-1 focus:outline-none focus:ring-orange-300 font-semibold rounded-lg text-xs  px-5 py-2.5 text-center mr-2 mb-2 ">
                  Sell Product
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* productBanner End */}

        <div className="productContainer space-y-4 grid justify-center items-center  md:grid md:grid-cols-2 md:space-x-3 lg:grid lg:grid-cols-3">
          {products.map((product) => {
            return <Productitems product={product} />
          })}

        </div>

      </div>
    </>

  )
}
