import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import React from 'react'

export default function MainLayout({ children }) {
    return (
        <>
            <Header></Header>
            <Navbar></Navbar>
            {children}
        </>
    )
}
