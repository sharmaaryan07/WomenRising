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


    
  //Route 2: Add a Job
  const addblog=async ( title, description, image )=>{

    // API Call
    const response = await fetch(`${host}/api/blogs/addblog`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
        
      },
      body: JSON.stringify({title, description, image})
    });
    setBlogs(blogs.concat(response))
  }





    return (
        <blogContext.Provider value={{ blogs,setBlogs, getBlogs, addblog }}>
            {props.children}
        </blogContext.Provider>
    )
}

export default BlogState;