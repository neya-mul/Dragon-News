'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { use } from 'react'
import user from '../assets/user.png'
import { FaUser } from "react-icons/fa";
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';


export default function Navbar() {
  const { data: session } = authClient.useSession()
  // console.log(session);
  const user = session?.user
  // console.log(user);


  return (
    <div className='flex justify-between items-center container mx-auto my-10'>
      <div className='none'></div>
      <div>
        <ul className='flex gap-3'>
          <li> <NavLink href='/'>Home</NavLink> </li>
          <li> <NavLink href='/about'>About</NavLink> </li>
          <li> <NavLink href='/carreer'>Carrer</NavLink> </li>
        </ul>
      </div>
      <div className='flex items-center gap-7'>
        <div className='flex items-center gap-3'>
          {user && (  // ✅ Only render user info when session is loaded
            <div className='flex items-center gap-3'>
              <span>Hello: {user.name}</span>
              <FaUser />
            </div>
          )}

        </div>

        {
          user ? (<Link href='/login'> <button className='btn bg-gray-950/45 hover:bg-gray-500 rounded-2xl'>Log Out</button></Link>) :

            (<Link href='/'> <button className='btn bg-gray-950/45 hover:bg-gray-500 rounded-2xl'>Log In</button></Link>)
        }


      </div>
    </div>
  )
}
