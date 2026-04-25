import Navbar from '@/components/Navbar'
import React from 'react'

export default function AuthLayout({ children }) {
    return (
        <>
            <Navbar></Navbar>
            {children}
        </>
    )
}
