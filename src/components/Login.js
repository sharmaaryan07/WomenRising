import React from 'react'
// import image from './img/login22.jpg'

export default function Login() {
  return (
    <div className='containers flex '>
{/* 
      <div className="left">
        <img src={image} alt="" />
      </div>

      <div className="right mt-48">
        <h2 className='ml-72  text-3xl font-bold'>Login to continue</h2>

        <input type="text" className=" border-2 border-gray-200 rounded ml-44 mt-7 w-[27rem] h-12 py-2 px-4 text-gray-700 leading-tight focus:outline-none bg-[#f7f7f7] focus:border-purple-500 focus:placeholder:text-transparent" id="inline-full-name" placeholder='Email' />
        <br />
        <input type="text" className=" border-2 border-gray-200 rounded ml-44 mt-7 w-[27rem] h-12 py-2 px-4 text-gray-700 leading-tight focus:outline-none bg-[#f7f7f7] focus:border-purple-500 focus:placeholder:text-transparent" id="inline-full-name" placeholder='Password' />
        <br />

        <a href="/" className='flex justify-end mt-3 hover:text-[#6675df] ml-[30rem] text-sm transition-colors duration-300 ease-in-out'>Forgot password? </a>
        <br />

        <div className="ml-[11rem]">
          <button className="shadow bg-[#6675df] hover:bg-slate-800 w-full text-center focus:shadow-outline focus:outline-none transition-colors duration-500 ease-in-out text-white text-sm font-extrabold py-3 px-4 rounded" type="button">
           LOGIN 
          </button>
        </div>
      </div> */}

<div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12 ml-[28rem] mt-9">
	<div class="relative py-3 sm:max-w-xl sm:mx-auto">
		<div
			class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		</div>
		<div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-36">
			<div class="max-w-md mx-auto">
				<div>
					<h1 class="text-2xl font-semibold text-center">Login To Continue</h1>
				</div>
				<div class="divide-y divide-gray-200 w-64">
					<div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
						<div class="relative">
							<input autocomplete="off" id="email" name="email" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
							<label for="email" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
						</div>
						<div class="relative">
							<input autocomplete="off" id="password" name="password" type="password" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
							<label for="password" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
						</div>
						<div class="relative">
							<button class="bg-blue-500 text-white rounded-md px-2 py-1">Submit</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

    </div>
  )
}
