'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function NavLink({ href, children }) {
    const pathName = usePathname()
    const isActive = pathName === href
    return (
        <Link href={href} className={`${isActive && 'bg-gray-400/35'} rounded-2xl btn`}>{children}</Link>
    )
}
