
import React, { useEffect, useContext } from 'react'
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
            </div>

            <div className='blogsCard ml-8 mt-12 grid grid-cols-3'>
                {blogs.map((blog) => {
                    return <BlogCard key={blog._id} blog={blog} />

                })}

            </div>


        </div>

    )
}
