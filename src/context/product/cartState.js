import { useState } from "react";
import cartContext from "./cartContext";


const cartState = (props) => {
    const host="http://localhost:5000";
    const productInitial = []
    const [carts, setcarts] = useState(productInitial)

    //Route 1: fetch all Product
    const getcarts = async()=>{

      // API Call
      const response = await fetch(`${host}/api/cart/fetchcart`, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json',
          "auth-token": localStorage.getItem('token')
        },
      });

      const json= await response.json();
      // console.log(json)
      setcarts(json);
    }
    




    //Route 2: Add a Product
    const addcart=async (title, price, image)=>{

      // API Call
      const response = await fetch(`${host}/api/cart/addtocart`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json',
          "auth-token": localStorage.getItem('token')
        },
        body: JSON.stringify({title, price, image})
      });
      setcarts(carts.concat(response))
    }

//     // Route 3: Geting perticular product
//     const perticularproduct= async (id, name, title, description, price, phone, email, image)=>{
//       const response = await fetch(`${host}/api/sell/getproduct/${id}`, {
//         method: 'POST', // *GET, POST, PUT, DELETE, etc.
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({id, name, title, description, price, phone, email, image})

        

//       // console.log(id, name, title, description, price, phone, email, image)
//     });
//     const json= await response.json();
//     return json
//   };

    return (
        <cartContext.Provider value={{carts, setcarts, addcart, getcarts }}>
            {props.children}
        </cartContext.Provider>
    )
}

export default cartState;