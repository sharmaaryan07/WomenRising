import React, { useContext } from 'react'
import { useState } from 'react';
import productContext from '../context/product/productContext'
import FileBase64 from 'react-file-base64';
import Navbar from './Navbar';


export default function Sellproduct(props) {
  const Context = useContext(productContext)
  const { addproduct } = Context;

  const [product, setproduct] = useState({ name: "", title: "", description: "", price: "", phone: "", email: "", image: "" })
  const handleClick = (e) => {
    e.preventDefault();
    addproduct(product.name, product.title, product.description, product.price, product.phone, product.email, product.image)
    setproduct({ name: "", title: "", description: "", price: "", phone: "", email: "", image: "" })
    props.showAlert("Product Added", "bg-green-500", "Product Added Successful")
  }

  const onChange = (e) => {
    setproduct({ ...product, [e.target.name]: e.target.value })
  }


  return (
    <div>
      <Navbar />
      <div className='shadow-md p-10 w-[55rem] ml-[20rem] mt-14 space-y-8'>
        <h2 className='text-4xl text-center font-bold '>Sell Product</h2>
        <form className='   grid grid-cols-2 gap-11 '>

          <div className="relative z-0  mb-6 group">
            <input type="text" name="name" id="name" value={product.name} onChange={onChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label for="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
          </div>

          <div className="relative z-0  mb-6 group">
            <input type="text" name="title" id="title" value={product.title} onChange={onChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label for="title" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Name</label>
          </div>

          <div className="relative w-40 z-0  mb-6 group">
            <input type="number" name="price" id="price" value={product.price} onChange={onChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label for="price" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
          </div>


          <div className="relative -m-36 mt-[0.20rem]  z-0  mb-6 group">
            <input type="text" name="description" id="description" value={product.description} onChange={onChange} className="block py-2.5 px-0 w-[30rem] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label for="description" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
          </div>

          <div className="relative z-0  mb-6 group">
            <input type="text" name="email" id="email" value={product.email} onChange={onChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label for="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
          </div>

          <div className="relative z-0  mb-6 group">
            <input type="number" name="phone" id="phone" value={product.phone} onChange={onChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required maxLength='10' />
            <label for="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone Number</label>
          </div>
          <div className='space-y-3'>
            <FileBase64
              id="image"
              name="image"
              value={product.image}
              type="file"
              multiple={false}
              onDone={({ base64 }) => setproduct({ ...product, image: base64 })} />
            <p className='text-xs '>Image size should not be more than 60kb</p>
          </div>
        </form>
        <div>
          <button type="submit" disabled={product.name.length <= 0 || product.email.length <= 0 || product.description.length <= 0 || product.image.length <= 0 || product.phone.length <= 0 || product.price.length <= 0 || product.title.length <= 0} onClick={handleClick} className="text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </div>

      </div>
    </div>
  )
}
