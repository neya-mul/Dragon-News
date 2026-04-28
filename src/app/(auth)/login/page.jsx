'use client'
import { authClient } from '@/lib/auth-client';
// import { email } from 'better-auth/*';
import Link from 'next/link'
import React from 'react'

export default function Login() {
  const loginFunction = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value
    // console.log(email, password);
    const { data, error } = await authClient.signIn.email({

      email: email, // required
      password: password, // required
      rememberMe: true,
      callbackURL: "/",
    });
    console.log(data, error);
    if (error) {
      alert(error.message)
    }
    else {
      alert("Log In success")
    }
  }


  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="w-full max-w-md bg-zinc-900 p-8 rounded-2xl shadow-lg border border-zinc-800">

          {/* Title */}
          <h2 className="text-2xl font-semibold text-white text-center mb-6">
            Login
          </h2>

          {/* Form */}
          <form className="space-y-5" onSubmit={loginFunction}>

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
              Sign In
            </button>
            <p>Don't have an account? <Link href='/register' className='text-blue-500'>Register now</Link></p>
          </form>

        </div>
      </div>
    </div>
  )
}
