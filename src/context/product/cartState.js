import { useState } from "react";
import cartContext from './cartContext';


const CartState = (props) => {
  const host = "http://localhost:5000";
  const [carts, setcarts] = useState([])

  //Route 1: fetch all Product for cart
  const getcarts = async () => {

    // API Call
    const response = await fetch(`${host}/api/cart/fetchcart`, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
    });

    const json = await response.json();
    // console.log(json)
    setcarts(json);
  }


  //Route 2: delete product from Cart
  const deletecarts = async (id) => {
    console.log("Delteed" + id)
    // API Call
    const response = await fetch(`${host}/api/cart/deletecart/${id}`, {
      method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
    });

    const json = await response.json();
    // console.log(json)
    setcarts(json);
    const newProduct = carts.filter((product) => { return product._id !== id })
    setcarts(newProduct);
  }

  return (
    <cartContext.Provider value={{ carts, setcarts, getcarts, deletecarts }}>
      {props.children}
    </cartContext.Provider>
  )
}

export default CartState;