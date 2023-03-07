import { useState } from "react";
import blogContext from "./blogContext";


const BlogState = (props) => {
  const host = "http://localhost:5000";
  const blogInitial = []
  const [blogs, setBlogs] = useState(blogInitial);

  //Route 1: fetch all blog
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



  //Route 2: Add a blog
  const addblog = async (username, title, description, image) => {

    // API Call
    const response = await fetch(`${host}/api/blogs/addblog`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')

      },
      body: JSON.stringify({ username, title, description, image })
    });
    setBlogs(blogs.concat(response))
  }


  //Route 1: fetch all Product
  const specifiblog = async () => {

    // API Call
    const response = await fetch(`${host}/api/blogs/fetchuserblog`, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
    });

    const json = await response.json();
    // console.log(json)
    setBlogs(json);
  }

  const deleteblog = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/blogs/deleteblog/${id}`, {
      method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
    });
    const json = await response.json();
    console.log(json);

    const newBlog = blogs.filter((blog) => { return blog._id !== id })
    setBlogs(newBlog);
  }




  return (
    <blogContext.Provider value={{ blogs, setBlogs, getBlogs, addblog, specifiblog, deleteblog }}>
      {props.children}
    </blogContext.Provider>
  )
}

export default BlogState;