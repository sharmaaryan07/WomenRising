import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';


const Blogdetail = (props) => {
    // useParam will fetch perticular blog id from url
    const { id } = useParams();
    const [blogs, setBlogs] = useState({});

    
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
            <div className='mt-9 mr-8 ml-8 space-y-4'>
                <div className="heading text-center text-4xl font-semibold">
                    {blogs.title}
                </div>



                <div className="image h-[30rem] flex justify-center ">
                    <img src={blogs.image} alt='' />
                </div>

                <div className="header">
                    <div className="right ">
                        Name
                    </div>

                    <div className="header">
                        <div className="right text-right">
                            {formattedDate}
                        </div>
                    </div>

                    <div className="description">
                        <div dangerouslySetInnerHTML={{ __html: blogs.description }} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blogdetail;
