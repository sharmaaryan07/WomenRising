
import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';
import blogContext from '../context/product/blogContext';
import Yourcard from './Yourcard'
import Navbar from './Navbar';



export default function Blogs() {
    // this context is helping in passing specific blog api data in this page.
    const Context = useContext(blogContext)
    const { blogs, specifiblog } = Context;

    useEffect(() => {
        // this function will show only that blog that user have added
        specifiblog();
    })

    return (
        <div >
            <Navbar />

            <div>
                <div className='text-center space-x-5 mt-9 text-2xl font-bold'>
                    <Link to='/blogs'> All Blogs </Link>
                    <Link to='/addblog'> Add Blog </Link>
                    <Link to='/yourblog'> Your Blogs </Link>
                </div>
                <h1 className='text-center text-3xl mt-12'>Your Blog Page</h1>
            </div>

            <div className='blogsCard md:px-5 mt-6 space-y-4 grid justify-center items-center  md:grid md:grid-cols-2 md:space-x-3 lg:grid lg:grid-cols-3'>
                {blogs.map((blog) => {
                    return <Link to={`/blogdetail/${blog._id}`}> <Yourcard key={blog._id} blog={blog} /></Link>


                })}
            </div>
        </div>
    )
}
