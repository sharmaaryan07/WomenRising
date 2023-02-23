import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import loginImg from "./img/login.png";
import Navbar from './Navbar';


export default function Login(props) {


	const [credentials, setCredentials] = useState({ email: "", password: "" })

	let navigate = useNavigate();

	// its an onSubmit function it will fetch user credential if user is signuped.
	const submitLogin = async (e) => {
		e.preventDefault();
		props.setProgress(0);
		// API Request
		const response = await fetch("http://localhost:5000/api/auth/login", {
			method: 'POST', // *GET, POST, PUT, DELETE, etc.
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ email: credentials.email, password: credentials.password })
		});
		props.setProgress(50);
		const json = await response.json();
		props.setProgress(100);
		if (json.success) {
			// save the auth token and redirect
			localStorage.setItem('token', json.authToken);
			navigate("/")
			props.showAlert("Successfully Logged in", "bg-green-500", "Login Successful");

		} else {
			props.showAlert("Enter Valid Credentials", "bg-red-500", "Login Failed");
		}
	}


	const onchange = (e) => {
		setCredentials({ ...credentials, [e.target.name]: e.target.value })
	}

	return (
		<>
			<div>
				<Navbar />


				<div className="options flex justify-center space-x-10 text-2xl font-medium mt-12  ">
					<div className="user ">
						<Link to="/login" className='cursor-pointer hover:text-orange-500 ' >User</Link>
					</div>
					<div className="admin ">
						<Link to="/adminlogin" className='cursor-pointer hover:text-orange-500'>Admin</Link>
					</div>

				</div>
				<div className='flex justify-center  md:mt-0  ' >

					<div className=' lg:grid lg:grid-cols-2 lg:gap-2' >
						<div className=' lg:flex justify-center  '>
							{/* Start of form */}
							<form onSubmit={submitLogin} className="lg:mt-16" >
								<div className="   min-h-screen flex flex-col ">
									<div className="container   flex-1 flex flex-col items-center justify-center  ">
										<div className="bg-white px-6 py-8 rounded shadow-md text-black w-[23rem] h-[25rem] md:w-[28rem] md:h-[28rem] ">
											<div className='md:mt-9'>

												<h1 className="mb-8 text-3xl font-bold text-center">LOG<span className='text-orange-500'>IN</span> </h1>

												<input type="email" className="block border border-grey-light w-full p-3 rounded mb-4" name="email" id="email" onChange={onchange} placeholder="Email" />

												<input type="password" className="block border border-grey-light w-full p-3 rounded mb-4" name="password" id="password" onChange={onchange} minLength="4" placeholder="Password" />

												<button type="submit" className="w-full text-center py-3 rounded bg-orange-600 text-white hover:bg-orange-400 focus:outline-none my-1">
													Login
												</button>

												<div className="text-grey-dark mt-6">
													Dont have an account? &nbsp;
													<a className="underline  text-orange-500" href="/signup">
														Sign Up
													</a>
												</div>
											</div>
										</div>


									</div>
								</div>
							</form>
						</div>
						{/* End of form */}

						<div className='lg:flex lg:justify-center '>

							<div className="img   hidden   lg:mr-3 lg:block   ">

								<img src={loginImg} alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>

	)
}
