import React from 'react'
import {
    Link,
  } from "react-router-dom";

export default function Productitems(props) {

    const { product } = props;
    return (
        <div>
            {/* Product Card Start */}
            <Link to="/productdetail">
                {/* Card 1 Start */}
                <section className="text-gray-600 body-font  rounded-sm">
                    <div className="container px-5 py-4 mx-auto shadow-sm">
                        <div className="flex flex-wrap -m-4">
                            <div className=" p-4 w-full">
                                <div className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={product.image} />
                                </div>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium"><span className='text-[#2563eb]'> Name:</span> {product.title}</h2>
                                    <p className="mt-1"><span className='text-[#2563eb]'> Price:</span> ₹{product.price}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Card 1 End */}
            </Link>
            {/* Product Card End */}
        </div>
    )
}
