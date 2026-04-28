'use client'
import React from 'react'

export default function Register() {
    const registerFunction = () => {

    }
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-black">
                <div className="w-full max-w-md bg-zinc-900 p-8 rounded-2xl shadow-lg border border-zinc-800">

                    {/* Title */}
                    <h2 className="text-2xl font-semibold text-white text-center mb-6">
                        Register
                    </h2>

                    {/* Form */}
                    <form className="space-y-5" onSubmit={registerFunction}>
                        {/* Name field */}
                        <div>
                            <label className="block text-sm text-gray-400 mb-1">
                                Name
                            </label>
                            <input
                                name='name'
                                type="name"
                                placeholder="Name"
                                className="w-full px-4 py-2 rounded-lg bg-black border border-zinc-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition"
                            />
                        </div>


                        {/* Email Field */}
                        <div>
                            <label className="block text-sm text-gray-400 mb-1">
                                Email
                            </label>
                            <input
                                name='email'
                                type="email"
                                placeholder="you@example.com"
                                className="w-full px-4 py-2 rounded-lg bg-black border border-zinc-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition"
                            />
                        </div>

                        {/* Password Field */}
                        <div>
                            <label className="block text-sm text-gray-400 mb-1">
                                Password
                            </label>
                            <input
                                name='password'
                                type="password"
                                placeholder="••••••••"
                                className="w-full px-4 py-2 rounded-lg bg-black border border-zinc-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition"
                            />
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="w-full py-2 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition"
                        >
                            Register Now
                        </button>
                        {/* <p>Don't have an account? <Link href='/register' className='text-blue-500'>Register now</Link></p> */}
                    </form>

                </div>
            </div>
        </div>
    )
}
