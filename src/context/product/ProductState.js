import { useState } from "react";
import productContext from "./productContext";


const ProductState = (props) => {

    const productInitial = [{
        "_id": "63c1b84f7e7821d0e61aa46a",
        "title": "Headphone",
        "image":"https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=865&q=80",
        "description": "HeadPhone from Boat",
        "price": 300,
        "phone":1827483732,
        "email":"headphone@gmail.com",
        "__v": 0
      },
      {
        "_id": "63c1b90e5086b82d7f1a65fb",
        "title": "Bangels",
        "image":"https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        "description": "beautiful bangels from JARA ",
        "price": 500,
        "phone":1827483732,
        "email":"headphone@gmail.com",
        "__v": 0
      },
      {
        "_id": "63c1b90e5086b82d7f1a65fb",
        "title": "saree",
        "image":"https://images.unsplash.com/photo-1618901185975-d59f7091bcfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        "description": "Made a Saree",
        "price": 1500,
        "phone":1827483732,
        "email":"headphone@gmail.com",
        "__v": 0
      },
      {
        "_id": "63c1b90e5086b82d7f1a65fb",
        "title": "Watch",
        "image":"https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80",
        "description": "Sexyy Watch from Fossil",
        "price": 2500,
        "phone":1827483732,
        "email":"headphone@gmail.com",
        "__v": 0
      }
    ]
    

    const [products, setProducts] = useState(productInitial)

    // Add a Product
    const addproduct=(name, title, description, price, image, phone, email)=>{
     const product={
        "_id": "63c1b90e5086b82d7f1a65fb",
        "name":name,
        "title": title,
        "image":"https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80",
        "description": description,
        "price": price,
        "phone":phone,
        "email":email,
        "__v": 0
      };
      setProducts(products.concat(product))
    }


    return (
        <productContext.Provider value={{products, setProducts, addproduct}}>
            {props.children}
        </productContext.Provider>
    )
}

export default ProductState;