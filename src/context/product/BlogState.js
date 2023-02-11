import { useState } from "react";
import blogContext from "./blogContext";


const BlogState = (props) => {
    const host = "http://localhost:5000";
    const blogInitial = []
    const [blogs, setBlogs] = useState(blogInitial);

    //Route 1: fetch all Product
    const getBlogs = async () => {

        // API Call
        const response = await fetch(`${host}/api/blogs/fetchblog`, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
        });

        const json = await response.json();
        // console.log(json)
        setBlogs(json);
    }





    return (
        <blogContext.Provider value={{ blogs,setBlogs, getBlogs }}>
            {props.children}
        </blogContext.Provider>
    )
}

export default BlogState;