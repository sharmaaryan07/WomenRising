import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import signupimg from './img/signup2.png'

export default function Signup(props) {

    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", confirm_password: "" })

    let navigate = useNavigate();

    const handlesubmit = async (e) => {
        e.preventDefault();
        props.setProgress(0);
        const { name, email, password } = credentials;

        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        });
        props.setProgress(50);

        const json = await response.json();
        props.setProgress(100);


        if (json.success) {
            // save the auth token and redirect
            localStorage.setItem('token', json.authToken);
            navigate("/")
            props.showAlert("SignUp Successfull", "bg-green-500", "SignUp Successful")

        } else {
            props.showAlert("User Already Exists", "bg-red-500", "SignUp Failed")
        }
    }


    const onchange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div className='flex justify-center   mt-16 md:mt-0 ' >
            <div className=' lg:grid lg:grid-cols-2 lg:gap-2 mt-6 ' >
                <div className=' lg:flex justify-center'>
                    {/* Start of form */}
                    <form onSubmit={handlesubmit}  >
                        <div className="   min-h-screen flex flex-col ">
                            <div className="container   flex-1 flex flex-col items-center justify-center  ">
                                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full  ">
                                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                                    <input type="text" className="block border border-grey-light w-full p-3 rounded mb-4" name="name" id="name" onChange={onchange} minLength="3" placeholder="Full Name" />

                                    <input type="email" className="block border border-grey-light w-full p-3 rounded mb-4" name="email" id="email" onChange={onchange} placeholder="Email" />

                                    <input type="password" className="block border border-grey-light w-full p-3 rounded mb-4" name="password" id="password" onChange={onchange} minLength="4" placeholder="Password" />
                                    <input type="password" onChange={onchange} className="block border border-grey-light w-full p-3 rounded mb-4" name="confirm_password" id="confirm_password" placeholder="Confirm Password" />

                                    <button type="submit" className="w-full text-center py-3 rounded bg-orange-600 text-white hover:bg-orange-400 focus:outline-none my-1">
                                        Create Account
                                    </button>

                                    <div className="text-center text-sm text-grey-dark mt-4">
                                        By signing up, you agree to the &nbsp;

                                        <a className="underline border-b border-grey-dark text-grey-dark" href="/">
                                            Terms of Service
                                        </a> and &nbsp;

                                        <a className="underline border-b border-grey-dark text-grey-dark" href="/">
                                            Privacy Policy
                                        </a>
                                    </div>
                                </div>

                                <div className="text-grey-dark mt-16">
                                    Already have an account? &nbsp;
                                    <a className="underline border-b border-blue text-orange-500" href="/login">
                                        Log in
                                    </a>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                {/* End of form */}

                <div className="img   hidden lg:ml-20 lg:mt-11 lg:block lg:justify-center  ">
                    <img src={signupimg} alt="" className='' />
                </div>
            </div>
        </div>
    )
}
