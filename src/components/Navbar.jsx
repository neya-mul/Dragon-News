import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import user from '../assets/user.png'
import { FaUser } from "react-icons/fa";
import NavLink from './NavLink';


export default function Navbar() {
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
        <div>
          <FaUser />
        </div>
        <Link href='/login'> <button className='btn bg-gray-950/45 hover:bg-gray-500 rounded-2xl'>Login</button></Link>

      </div>
    </div>
  )
}
