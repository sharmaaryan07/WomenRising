import productContext from "./productContext";


const ProductState = (props) => {

    const state = {
        "name": "chudiya6",
        "description": "Made a Saree",
        "image":"https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=865&q=80",
        "price": 300
    }
    return (
        <productContext.Provider value={state}>
            {props.children}
        </productContext.Provider>
    )
}

export default ProductState;