import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import blogContext from '../context/product/blogContext';
import { useContext } from 'react';


const Blogdetail = (props) => {
    // useParam will fetch perticular blog id from url
    const { id } = useParams();
    const [blogs, setBlogs] = useState({});

    // this context will get api for deleting a product
    const Context = useContext(blogContext)
    const { deleteblog } = Context;

    useEffect(() => {
        // this function will fetch perticular product details
        const fetchBlog = async () => {
            props.setProgress(0)
            const response = await fetch(`http://localhost:5000/api/blogs/getblog/${id}`);
            props.setProgress(50)
            const data = await response.json();
            props.setProgress(100)
            setBlogs(data);
        };
        fetchBlog();
    }, [id]);

    // created a variable date that will show on which date that blog has been added.
    const date = new Date(blogs.date);

    const formattedDate = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });

    return (
        <>
            <div className="nav">
                <Navbar />

            </div>
            <div className='mt-9 mr-8 ml-8 space-y-6'>
                <div className="heading text-center text-4xl font-semibold">
                    {blogs.title}
                </div>



                <div className="image h-[30rem] flex justify-center ">
                    <img src={blogs.image} alt='' />
                </div>
                <div className='ml-16 mr-16 '>

                    <div className="header">
                        <div className="right ">
                            Name: {blogs.username}
                        </div>

                        <div className="header">
                            <div className="right text-right">
                                {formattedDate}
                            </div>
                        </div>
                    </div>

                </div>
                <div className="description ml-16 mr-16  ">
                    <div dangerouslySetInnerHTML={{ __html: blogs.description }} />
                </div>



            </div>
            <div className='flex justify-center mt-12 '   >
                <button type="button" onClick={() => { deleteblog(blogs._id) }} className=" border  focus:ring-1 focus:outline-none  font-semibold rounded-lg text-2xl  px-3 py-2 text-center mr-2 mb-2 border-orange-500 text-orange-500 hover:text-white hover:bg-orange-600 focus:ring-orange-800">Delete</button>

            </div>

            <div className="footer">
                <Footer />
            </div>

        </>
    );
};

export default Blogdetail;
