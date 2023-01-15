import { useState } from "react";
import productContext from "./productContext";


const ProductState = (props) => {

    const productInitial = [{
        "_id": "63c1b84f7e7821d0e61aa46a",
        "name": "Headphone",
        "image":"https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=865&q=80",
        "description": "HeadPhone from Boat",
        "price": 300,
        "__v": 0
      },
      {
        "_id": "63c1b90e5086b82d7f1a65fb",
        "name": "Bangels",
        "image":"https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        "description": "beautiful bangels from JARA ",
        "price": 500,
        "__v": 0
      },
      {
        "_id": "63c1b90e5086b82d7f1a65fb",
        "name": "saree",
        "image":"https://images.unsplash.com/photo-1618901185975-d59f7091bcfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        "description": "Made a Saree",
        "price": 1500,
        "__v": 0
      },
      {
        "_id": "63c1b90e5086b82d7f1a65fb",
        "name": "Watch",
        "image":"https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80",
        "description": "Sexyy Watch from Fossil",
        "price": 2500,
        "__v": 0
      }
    ]
    

    const [products, setProducts] = useState(productInitial)


    return (
        <productContext.Provider value={{products, setProducts}}>
            {props.children}
        </productContext.Provider>
    )
}

export default ProductState;