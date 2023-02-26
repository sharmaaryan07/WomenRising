import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import productContext from '../context/product/productContext';
import adminProductContext from '../context/product/adminProductContext';
import Navbar from './Navbar';





export default function Productdetail(props) {
    // this useParam will get is from url
    const { id } = useParams();
    const [product, setProduct] = useState({});

// this context will get api data for addproduct
    const Context = useContext(productContext)
    const { addproduct } = Context;

    // this context will get api for deleting a product
    const Context2 = useContext(adminProductContext)
    const { deleteadminProduct } = Context2;

    useEffect(() => {
        // this will fetch a perticular product data
        const fetchProduct = async () => {
            props.setProgress(0)

            const response = await fetch(`http://localhost:5000/api/adminproduct/getadminproduct/${id}`);
            props.setProgress(50)
            const data = await response.json();
            props.setProgress(100)
            setProduct(data);

        };
        fetchProduct();
    }, [id]);

    // this fucntion will add product in product page.
    const handleClick = (e) => {
        e.preventDefault();
        props.setProgress(0)

        addproduct(product.name, product.title, product.description, product.price, product.phone, product.email, product.image)
        props.setProgress(100)

        props.showAlert("Product Added", "bg-green-500", "Product Added Successful")
        deleteadminProduct(product._id)
    }


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
                            </div>
                            <div className='space-x-20 mt-5 '>
                                <button type="button" onClick={handleClick}  className="border  focus:ring-1 focus:outline-none  font-semibold rounded-lg text-xs  px-5 py-2.5 text-center mr-2 mb-2 border-orange-500 text-orange-500 hover:text-white hover:bg-orange-600 focus:ring-orange-800">
                                    Accept
                                </button>

                                <button type="button"  onClick={()=>{deleteadminProduct(product._id)}} className="border  focus:ring-1 focus:outline-none  font-semibold rounded-lg text-xs  px-5 py-2.5 text-center mr-2 mb-2 border-orange-500 text-orange-500 hover:text-white hover:bg-orange-600 focus:ring-orange-800">
                                    Deny
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
