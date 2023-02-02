import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import signupimg from './img/character1.png'

export default function Signup(props) {

    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", confirm_password: "" })

	let navigate = useNavigate();

    const handlesubmit = async (e) => {
        e.preventDefault();
        const { name, email, password } = credentials;

        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        });
        const json = await response.json();
        console.log(json);

        if (json.success) {
            // save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            navigate("/")
            props.showAlert("SignUp Successfull","bg-green-500","SignUp Successful")

        } else {
            props.showAlert("User Already Exists","bg-red-500","SignUp Failed")
        }
    }


    const onchange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div >

            {/* Start of div left */}
            {/* bg-gray-900  for dark mode*/}
            <form onSubmit={handlesubmit}>
                <div className="bg-grey-lighter min-h-screen flex flex-col">
                    <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-[30rem] ">
                            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                            <input
                                type="text"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="name"
                                id="name"
                                onChange={onchange}
                                minLength="3"
                                placeholder="Full Name" />

                            <input
                                type="text"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="email"
                                id="email"
                                onChange={onchange}
                                placeholder="Email" />

                            <input
                                type="password"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="password"
                                id="password"
                                onChange={onchange}
                                minLength="4"
                                placeholder="Password" />
                            <input
                                type="password"
                                onChange={onchange}
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="confirm_password"
                                id="confirm_password"
                                placeholder="Confirm Password" />

                            <button
                                type="submit"
                                className="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-400 focus:outline-none my-1"
                            >Create Account</button>

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

                        <div className="text-grey-dark mt-6">
                            Already have an account? &nbsp;
                            <a className="underline border-b border-blue text-[#2563eb]" href="/">
                                Log in
                            </a>
                        </div>
                    </div>
                </div>
            </form>
            {/* End of div left */}

            {/* <div className="right mt-16 -mr-16 ">
                <img src={signupimg} alt="" />
            </div> */}
        </div>
    )
}
