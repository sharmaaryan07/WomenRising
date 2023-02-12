
import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';
import blogContext from '../context/product/blogContext';
import BlogCard from './Blogcard'


export default function Blogs() {
    const Context = useContext(blogContext)
    const { blogs, getBlogs } = Context;

    useEffect(() => {
        getBlogs();
    })

    return (
        <div >
            <div>
                <h1 className='text-center text-3xl mt-12'>Blog Page</h1>
                <Link to='/addblog'  > Add Blog</Link>
            </div>

            <div className='blogsCard ml-8 mt-12 grid grid-cols-3'>
                {blogs.map((blog) => {
                    return <Link to={`/blogdetail/${blog._id}`}> <BlogCard key={blog._id} blog={blog} /></Link>

                })}

            </div>


        </div>

    )
}
