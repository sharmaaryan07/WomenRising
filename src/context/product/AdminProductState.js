import { useState } from "react";
import adminProductContext from "./adminProductContext";



const AdminProductState = (props) => {
    const host = "http://localhost:5000";
    const productInitial = []
    const [products, setProducts] = useState(productInitial)

    //Route 1: fetch all Product
    const getadminproduct = async () => {

        // API Call
        const response = await fetch(`${host}/api/adminproduct/fetchadminproduct`, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
        });

        const json = await response.json();
        // console.log(json)
        setProducts(json);
    }

    //Route 2: Add a Product
    const addadminproduct = async (name, title, description, price, phone, email, image) => {

        // API Call
        const response = await fetch(`${host}/api/adminproduct/addadminproduct`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, title, description, price, phone, email, image })
        });
        setProducts(products.concat(response))
    }

    //Route 1: fetch all Product
    const deleteadminProduct = async (id) => {

        // API Call
        const response = await fetch(`${host}/api/adminproduct/deleteadminproduct/${id}`, {
            method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const json = response.json();
        console.log(json)

        const newProduct = products.filter((product) => { return product._id !== id })
        setProducts(newProduct);
    }





    return (
        <adminProductContext.Provider value={{ products, setProducts, addadminproduct, getadminproduct, deleteadminProduct }}>
            {props.children}
        </adminProductContext.Provider>
    )
};


export default AdminProductState;