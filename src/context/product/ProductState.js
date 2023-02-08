import { useState } from "react";
import productContext from "./productContext";



const ProductState = (props) => {
    const host="http://localhost:5000";
    const productInitial = []
    const [products, setProducts] = useState(productInitial)

    //Route 1: fetch all Product
    const getproduct = async()=>{

      // API Call
      const response = await fetch(`${host}/api/sell/fetchproduct`, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json'
        },
      });

      const json= await response.json();
      // console.log(json)
      setProducts(json);
    }
    




    //Route 2: Add a Product
    const addproduct=async (name, title, description, price, phone, email, image)=>{

      // API Call
      const response = await fetch(`${host}/api/sell/update`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, title, description, price, phone, email, image})
      });
      setProducts(products.concat(response))
    }

    // Route 3: Geting perticular product
    const perticularproduct= async (id, name, title, description, price, phone, email, image)=>{
      const response = await fetch(`${host}/api/sell/getproduct/${id}`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({id, name, title, description, price, phone, email, image})

        

      // console.log(id, name, title, description, price, phone, email, image)
    });
    const json= await response.json();
    return json
  };

    return (
        <productContext.Provider value={{products, setProducts, addproduct, getproduct, }}>
            {props.children}
        </productContext.Provider>
    )
}

export default ProductState;