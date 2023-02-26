import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import adminProductContext from '../context/product/adminProductContext';
import Navadmin from './Navadmin'
import Adminproductcard from './Adminproductcard'


function Adminproduct(props) {
    // this Context is helping in getting api data of pending product
    const Context = useContext(adminProductContext)
    const { products, getadminproduct } = Context;

    let navigate = useNavigate();
    // this useEffect will get all that product that are pending.
    useEffect(() => {
        if (localStorage.getItem('token')) {
            getadminproduct();
        } else {
            props.showAlert("Please Login to see Product Page", "bg-red-500", "login To continue");
            navigate('/login')
        }
    })

    return (
        <div>
            <div className="nav">
                <Navadmin />
            </div>
            <div className="header  text-center mt-5 text-3xl font-bold">
                <span className='text-orange-500' >Product</span>  Page
            </div>

            <div className="productContainer pl-72 space-y-4 grid justify-center items-center  md:grid md:grid-cols-2 md:space-x-3 lg:grid lg:grid-cols-3">
                {products.map((product) => {
                    return <Adminproductcard product={product} />
                })}

            </div>

        </div>
    )
}

export default Adminproduct
