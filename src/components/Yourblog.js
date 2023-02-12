
import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';
import blogContext from '../context/product/blogContext';
import Yourcard from './Yourcard'


export default function Blogs() {
    const Context = useContext(blogContext)
    const { blogs, specificart } = Context;

    useEffect(() => {
        specificart();
    })

    return (
        <div >
            <div>
                <div className='text-center space-x-5 mt-9 text-lg'>
                <Link to='/blogs'> All Blogs </Link>
                <Link to='/addblog'> Add Blog </Link>
                <Link to='/yourblog'> Your Blogs </Link>
                </div>
                <h1 className='text-center text-3xl mt-12'>Your Blog Page</h1>
            </div>

            <div className='blogsCard ml-8 mt-12 grid grid-cols-3'>
                {blogs.map((blog) => {
                    return <Yourcard key={blog._id} blog={blog} />
                    

                })}
                {/* <BlogCard key={blog._id} blog={blog} /> */}
                

            </div>


        </div>

    )
}
