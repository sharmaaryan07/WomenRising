import React, { useContext } from 'react'
import { useState } from 'react';
import blogContext from '../context/product/blogContext'
import FileBase64 from 'react-file-base64';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Link } from 'react-router-dom';


export default function Addjob(props) {

    let modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image'],
            ['clean']
        ],
    },

        formats = [
            'header',
            'bold', 'italic', 'underline', 'strike', 'blockquote',
            'list', 'bullet', 'indent',
            'link', 'image'
        ];





    const Context = useContext(blogContext)
    const { addblog } = Context;

    const [blogs, setblogs] = useState({ title: "", description: "", image: "" })
    const handleClick = (e) => {
        e.preventDefault();
        props.setProgress(0)

        addblog(blogs.title, blogs.description, blogs.image)
        setblogs({ title: "", description: "", image: "" })
        props.setProgress(100)

        props.showAlert("Blog Added", "bg-green-500", "Blog Added Successful")
    }

    const onChange = (e) => {
        console.log(e.target);
        setblogs({ ...blogs, [e.target.name]: e.target.value })
    }

    const onEditorChange = (value) => {
        setblogs({ ...blogs, description: value })
    }

    return (
        <div className='flex justify-center'>

            <div>

                <div>
                    <div className='text-center space-x-5 mt-9 text-2xl font-bold'>
                        <Link to='/blogs'> All Blogs </Link>
                        <Link to='/addblog'> Add Blog </Link>
                        <Link to='/yourblog'> Your Blogs </Link>
                    </div>
                </div>

                <div className='shadow-md p-10 w-full  mt-14 space-y-8 bg-orange-100 '>
                    <h2 className='text-4xl text-center font-bold '><span className='text-orange-500'>ADD</span>  BLOG</h2>
                    <form className='   '>


                        <div className="relative z-0  mb-6 group">
                            <input type="text" name="title" id="title" value={blogs.title} onChange={onChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required />
                            <label for="title" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Blog Title</label>
                        </div>

                        <br />

                        <div >
                            <h4 className='text-md font-bold'>Title Image:</h4>

                            <FileBase64
                                id="image"

                                name="image"
                                value={blogs.image}
                                type="file"
                                multiple={false}
                                onDone={({ base64 }) => setblogs({ ...blogs, image: base64 })} />
                        </div>

                        <br />
                        <div className="relative  mt-[0.20rem]  z-0  mb-6 group">
                            <h4 className='text-md font-bold'>Description:</h4>
                            <ReactQuill theme="snow" name='description' id='description' placeholder='Enter your Description' value={blogs.description} onChange={onEditorChange} modules={modules} formats={formats} />
                        </div>


                    </form>
                    <div>
                        <button type="submit" onClick={handleClick} className="text-white bg-orange-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">Submit</button>
                    </div>
                    {/* disabled={add.company.length <= 0 || add.email.length <= 0 || add.description.length <= 0 || add.phone.length <= 0 || add.salary.length <= 0 || add.title.length <= 0 || add.material.length <= 0} */}
                </div>
            </div>
        </div>
    )
}
