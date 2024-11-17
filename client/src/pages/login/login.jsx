import React, { useState } from 'react'
import { Link } from "react-router-dom"

export default function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        e.preventDefault();

        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
    }
    return (
        <div className='h-dvh w-screen flex justify-center items-center'>
            <div
                class="max-w-md w-full  rounded-xl shadow-2xl overflow-hidden p-8 space-y-8"
            >
                <h2

                    class="text-center text-4xl font-extrabold text-purple-500"
                >
                    Welcome Back
                </h2>
                <p class="text-center text-black">
                    Sign in to your account
                </p>
                <form method="POST" onSubmit={handleSubmit} class="space-y-6">
                    <div class="relative">
                        <input
                            placeholder="john@example.com"
                            class="peer h-10 w-full border-b-2 border-gray-300 text-black bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            id="email"
                            name="email"
                            type="email"
                        />
                        <label
                            class="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
                            for="email"
                        >Email address</label>
                    </div>
                    <div class="relative">
                        <input
                            placeholder="Password"
                            class="peer h-10 w-full border-b-2 border-gray-300 text-black bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                            required
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            type="password"

                        />
                        <label
                            class="absolute left-0 -top-3.5  text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
                            for="password"
                        >Password
                        </label >
                    </div>

                    <button
                        class="w-full py-2 px-4 bg-purple-500 text-white hover:bg-purple-700 rounded-md shadow-lg  font-semibold transition duration-200"
                        type="submit"
                    >
                        Sign In
                    </button>
                </form>
                <div class="text-center text-black">
                    Don't have an account?
                    <Link to={'/signup'}><span class="text-blue-500 hover:underline font-semibold" > Sign up</span></Link>
                </div>
            </div>

        </div>
    )
}
