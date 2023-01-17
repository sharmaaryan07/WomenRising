import React from 'react'

export default function Productitems(props) {

    const {product} = props;
    return (
        <div>
            {/* Product Card Start */}
            <div className="">
                {/* Card 1 Start */}
                <div className="w-full   max-w-sm bg-gray-100 rounded-lg shadow-lg  border-gray-700 ">
                    <div className="productImg ">
                        <img className="p-8 rounded-t-lg" src={product.image} alt="" />
                    </div>
                    <div className="px-8 -mt-5 pb-4">
                        <div className='productInfo'>
                            <h5 className="text-base font-semibold tracking-tight text-gray-900 ">{product.title}</h5>
                        </div>

                        <div className='productInfo'>
                            <h5 className="text-base font-semibold tracking-tight text-gray-900 ">{product.description}</h5>
                        </div>


                        <div className="flex items-center justify-between pt-4">
                            <span className="text-3xl font-bold text-gray-900 ">₹{product.price}</span>
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
