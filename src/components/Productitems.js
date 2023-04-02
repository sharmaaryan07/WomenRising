import { React } from 'react'
import { Link } from "react-router-dom";


export default function Productitems(props) {
    const { product } = props;


    return (
        <div>
            {/* Product Card Start */}

            {/* Card 1 Start */}
            <section className="text-gray-600 body-font  rounded-sm">
                <div className="container px-5 py-4 mx-auto shadow-sm">
                    <div className="flex flex-wrap -m-4">
                        <div className=" p-4 w-full">
                            <div className="block relative h-80 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={product.image} />
                            </div>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium"><span className='text-orange-500'> Name:</span> {product.title}</h2>
                                <p className="mt-1"><span className='text-orange-500'> Price:</span> ₹{product.price}</p>
                            </div>
                            <div className="button justify-end flex">
                                <Link to={`/productdetail/${product._id}`} type="button" class="inline-block px-4 py-1.5 bg-orange-600 text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out">Show More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Card 1 End */}
            {/* Product Card End */}
        </div>
    )
}

