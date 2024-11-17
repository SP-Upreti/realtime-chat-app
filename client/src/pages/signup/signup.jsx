import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useSignUp from '../../hooks/signup.js';

export default function Signup() {
  // name, email, gender, phone, password, confirmPassword
  const { loading, Register } = useSignUp()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    phone: "",
    password: "",
    confirmPassword: ""
  })


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    await Register(formData);
  }

  return (
    <div className="h-dvh w-screen flex justify-center items-center">
      <div className="max-w-xl w-full rounded-xl shadow-2xl overflow-hidden p-8 space-y-8">
        <h2 className="text-center text-4xl font-extrabold text-black">Hello! There</h2>
        <p className="text-center text-black">Sign in to your account</p>
        <form method="POST" onSubmit={handleSubmit} className="space-y-6">
          <div className="md:flex justify-center items-center gap-4">
            <div className="space-y-6 md:w-1/2">
              <div className="relative">
                <input
                  placeholder="Enter your full name"
                  className="peer h-10 w-full border-b-2 border-gray-300 text-black bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                  required
                  value={formData.fullname}
                  onChange={handleChange}
                  id="fullName"
                  name="name"
                  type="text"
                />
                <label
                  className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
                  htmlFor="fullName"
                >
                  Full Name
                </label>
              </div>
              <div className="relative">
                <input
                  placeholder="Enter your phone number"
                  className="peer h-10 w-full border-b-2 border-gray-300 text-black bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  id="phone"
                  name="phone"
                  type="tel"
                />
                <label
                  className="absolute left-0 -top-3.5 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
                  htmlFor="phone"
                >
                  Phone
                </label>
              </div>
            </div>
            <div className="space-y-6 md:w-1/2">
              <div className="relative">
                <input
                  placeholder="Enter your email"
                  className="peer h-10 w-full border-b-2 border-gray-300 text-black bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  id="email"
                  name="email"
                  type="email"
                />
                <label
                  className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
                  htmlFor="email"
                >
                  Email Address
                </label>
              </div>
              <div className="relative">
                <select name="gender" id=""
                  className="peer h-10 w-full border-b-2 border-gray-300 text-black bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                  required
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="" selected disabled >--Select Gender--</option>
                  <option value="male"  >Male</option>
                  <option value="female"  >Female</option>
                  <option value="other"  >Other</option>
                </select>

              </div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-4">
            <div className="relative md:w-1/2">
              <input
                placeholder="Enter your password"
                className="peer h-10 w-full border-b-2 border-gray-300 text-black bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                required
                value={formData.password}
                onChange={handleChange}
                id="password"
                name="password"
                type="password"
              />
              <label
                className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
                htmlFor="password"
              >
                Password
              </label>
            </div>
            <div className="relative md:w-1/2">
              <input
                placeholder="Confirm your password"
                className="peer h-10 w-full border-b-2 border-gray-300 text-black bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                required
                value={formData.confirmpassword}
                onChange={handleChange}
                id="confirmPassword"
                name="confirmPassword"
                type="password"
              />
              <label
                className="absolute left-0 -top-3.5 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
            </div>
          </div>
          <button
            className="w-full py-2 px-4 bg-purple-500 text-white hover:bg-purple-700 rounded-md shadow-lg font-semibold transition duration-200"
            type="submit"
          >
            {
              loading ? (<span className="loading loading-dots loading-lg"></span>) : (<span >Sign Up</span>)
            }
          </button>
        </form>
        <div className="text-center text-black">
          Already have an account?
          <Link to={'/login'}><span class="text-blue-500 hover:underline font-semibold" > Login</span></Link>
        </div>
      </div>
    </div>
  );
}
