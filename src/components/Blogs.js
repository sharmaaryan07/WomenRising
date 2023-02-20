
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
                <div className='text-center space-x-5 mt-9 text-2xl font-bold'>
                <Link to='/blogs'> All Blogs </Link>
                <Link to='/addblog'> Add Blog </Link>
                <Link to='/yourblog'> Your Blogs </Link>
                </div>
                <h1 className='text-center font-bold text-3xl mt-12'><span className='text-orange-500'> Blog</span> Page</h1>
            </div>

            <div className='blogsCard  md:px-5 mt-6 space-y-4 grid justify-center items-center  md:grid md:grid-cols-2 md:space-x-3 lg:grid lg:grid-cols-3'>
                {blogs.map((blog) => {
                    return <Link to={`/blogdetail/${blog._id}`}> <BlogCard key={blog._id} blog={blog} /></Link>

                })}

            </div>


        </div>

    )
}
