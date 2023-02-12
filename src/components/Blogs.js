
import React, { useEffect, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import blogContext from '../context/product/blogContext';
import BlogCard from './Blogcard'


export default function Blogs(props) {
    const Context = useContext(blogContext)
    const { blogs, getBlogs } = Context;

    const navigate = useNavigate()
    useEffect( () => {
        if( localStorage.getItem('token')){
            getBlogs();
        }else{
            navigate('/login')
            props.showAlert("Please Login to see Blog Page", "bg-red-500", "login To continue");
        }
    })

    return (
        <div >
            <div>
                <div className='text-center space-x-5 mt-9 text-lg'>
                <Link to='/blogs'> All Blogs </Link>
                <Link to='/addblog'> Add Blog </Link>
                <Link to='/yourblog'> Your Blogs </Link>
                </div>
                <h1 className='text-center text-3xl mt-12'>Blog Page</h1>
            </div>

            <div className='blogsCard ml-8 mt-12 grid grid-cols-3'>
                {blogs.map((blog) => {
                    return <Link to={`/blogdetail/${blog._id}`}> <BlogCard key={blog._id} blog={blog} /></Link>

                })}

            </div>


        </div>

    )
}
