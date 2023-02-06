import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';




export default function Productdetail() {
    const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`http://localhost:5000/api/sell/getproduct/${id}`);
      const data = await response.json();
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

    return (
        <div>
          <Navbar />
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img src={product.image} alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">PRODUCT NAME</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.title}</h1>

                            <p className="leading-relaxed">{product.description}</p>
                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                                <div className="flex">
                                    <span className="mr-3">Email: {product.email} </span>
                                    
                                </div>
                                <div className="flex ml-6 items-center">
                                    <span className="mr-3">Phone: {product.phone} </span>
                                    <div className="relative">
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <span className="title-font font-medium text-2xl text-gray-900">₹{product.price}</span>
                                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Add to Cart</button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
