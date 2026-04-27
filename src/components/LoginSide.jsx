import React from 'react'
import { FaGithub, FaGoogle } from 'react-icons/fa'

export default function LoginSide() {
  return (
    <div className='space-y-2'>
      <div>
        <h1 className='font-bold'>Login With</h1>
      </div>
      <div className='space-y-2'>
        <button className='btn flex items-center w-full'><FaGoogle />
          Login with Google</button>
        <button className='btn flex items-center w-full'><FaGithub />
          Login with Github</button>
      </div>
    </div>
  )
}
