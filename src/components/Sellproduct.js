import React, { useContext } from 'react'
import { useState } from 'react';
import productContext from '../context/product/productContext'
import FileBase64 from 'react-file-base64';

export default function Sellproduct() {
    const Context = useContext(productContext)
    const { addproduct } = Context;

    const [product, setproduct] = useState({ name: "", title: "", description: "", price: "", phone: "", email: "", image: "" })
    const handleClick = (e) => {
        e.preventDefault();
        addproduct(product.name, product.title, product.description, product.price, product.phone, product.email, product.image)
        setproduct({ name: "", title: "", description: "", price: "", phone: "", email: "", image: "" })

    }

    const onChange = (e) => {
        setproduct({ ...product, [e.target.name]: e.target.value })
    }


    return (
        <div>

            <form>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Name</label>
                        <input type="text" id="name" name="name" value={product.name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Abrahim" onChange={onChange} />
                    </div>

                    <div>
                        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 ">Product Name</label>
                        <input type="text" id="title" name="title" value={product.title} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" onChange={onChange} />
                    </div>

                    <div>
                        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
                        <input type="text" id="description" name="description"value={product.description}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" onChange={onChange} />
                    </div>

                    <div>
                        <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 ">Price</label>
                        <input type="text" id="price" name="price" value={product.price} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" onChange={onChange} />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 ">Phone number</label>
                        <input type="text" id="phone" name="phone" value={product.phone} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Number" onChange={onChange} />
                    </div>
                </div>

                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email address</label>
                    <input type="text" id="email" name="email" value={product.email} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" onChange={onChange} />
                </div>

                <div className="mb-6">
                    <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 ">Email address</label>
                    <FileBase64
                        id="image"
                        name="image"
                        value={product.image}
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) => setproduct({ ...product, image: base64 })} />
                </div>


                <button type="submit" onClick={handleClick} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>

        </div>
    )
}
