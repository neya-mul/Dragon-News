import React from 'react'
import logo from "../assets/logo.png"
import Image from 'next/image'
import { format } from 'date-fns'

export default function Header() {
  return (
    <div className=' text-center py-10 space-y-2'>
      <Image src={logo} alt='logo' width={400} height={400} className=' mx-auto' />
      <p className='text-xl font-bold'>Journalism Without Fear or Favour</p>
      <p>{format(new Date(), "EEEE, MMM, dd, YYY")}</p>

    </div>
  )
}
