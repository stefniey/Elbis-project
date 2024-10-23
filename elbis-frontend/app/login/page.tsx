'use client'
import Image from 'next/image';
import { useState } from 'react';


const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const Login = () => {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to manage password visibility
  const [keepLoggedIn, setKeepLoggedIn] = useState(false); // State to manage checkbox

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!emailOrUsername || !password) {
      setError('Both fields are required');
      return;
    }

    if (emailOrUsername.includes('@') && !isValidEmail(emailOrUsername)) {
      setError('Please enter a valid email address');
      return;
    }

    // Implement further validation and authentication logic here

    setError('');
    alert(`Logged in successfully. Keep me logged in: ${keepLoggedIn}`);
  };

  return (
    <div className="flex items-center justify-center login">

      <div className="bg-white flex w-full space-x-[-50px] justify-center md:flex-row flex-col">

        {/* input section */}
        <div className="w-full md:w-[591px] p-4 md:p-8">
          <div className="flex flex-col">

            <div className="pb-20">
              <img src="/assets/logo.svg" alt="Logo" />
            </div>

            <h2 className="text-[36px] font-bold leading-[44px] text-[#232323] mb-4">Login</h2>
            <p className="text-[16px] font-normal leading-[24px] text-[#969696] mb-6">
              Welcome back! Please enter your details.
            </p>

            {error && <p className="text-red-500 mb-4">{error}</p>}

            <form onSubmit={handleSubmit}>
              <div className="mb-4 relative text-[#3A3A3A] text-[16px] leading-[24px] tracking-[0.5px] font-normal">
                <input
                  type="text"
                  id="emailOrUsername"
                  value={emailOrUsername}
                  onChange={(e) => setEmailOrUsername(e.target.value)}
                  className="p-3 border border-gray-300 rounded-lg focus:border-[#271785] focus:outline-none w-full md:w-[399px] h-[59px]"
                  required
                />
                <label
                  htmlFor="emailOrUsername"
                  className="absolute left-3 -top-2 px-1 text-[#271785] bg-white text-[14px]"
                >
                  Email
                </label>
              </div>


              <div className="mb-6 relative">
                <div className="relative w-full md:w-[399px]">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="p-3 border border-gray-300 rounded-lg focus:border-[#271785] focus:outline-none w-full h-[59px] pr-10"
                    required
                    placeholder="Password"
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-[#271785] z-10"
                  >
                    {showPassword ? (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12s2.5-6 9-6 9 6 9 6-2.5 6-9 6-9-6-9-6z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12c0 1.5-1.5 3-3 3s-3-1.5-3-3 1.5-3 3-3 3 1.5 3 3z" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12s2.5-6 9-6 9 6 9 6-2.5 6-9 6-9-6-9-6z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18" />
                      </svg>
                    )}
                  </span>
                </div>
              </div>

              <div className="mb-4 flex items-center">
                <input
                  type="checkbox"
                  id="keepLoggedIn"
                  checked={keepLoggedIn}
                  onChange={(e) => setKeepLoggedIn(e.target.checked)}
                  className="mr-2"
                />
                <label htmlFor="keepLoggedIn" className="text-[#3A3A3A] text-[16px] leading-[24px]">
                  Keep me logged in
                </label>
              </div>

              <button
                type="submit"
                className="rounded-[10px] w-full md:w-[399px] h-[59px] text-[#FFF] text-[16px] leading-[24px] tracking-[0.5px] font-semibold"
                style={{ background: 'linear-gradient(90deg, #271785, #0CD851)' }}
              >
                Sign in
              </button>
            </form>

            <div className="flex items-center my-6 lg:w-[399px] h-[24px]">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-2 text-gray-500">or</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <button className="flex items-center justify-center border border-gray-300 rounded-[10px] w-full md:w-[399px] h-[59px] text-[16px] leading-[24px] tracking-[0.5px] font-semibold">
              Sign in with Google
              <img src="/assets/plus.png" alt="Google Logo" className=" mr-2 w-6 h-6" />
            </button>

            <p className="mt-4 text-[16px] text-center lg:w-[399px]">
              Need an account?{' '}
              <a href="/register" className="text-blue-500 underline">
                Create one
              </a>
            </p>

          </div>
        </div>

        {/* Hide image on small screens */}
        {/* <div className="hidden flex-col md:items-start md:w-[831px]"> */}
        


        {/* <div className="lg:block">
          <img src="/assets/right-column.png" alt="Login" className='md:mt-[10px]'/>
        </div> */}
<div className="hidden lg:block">
  <img src="/assets/right-column.png" alt="Login"  />
</div>






      </div>
    </div>
  );
};

export default Login;


