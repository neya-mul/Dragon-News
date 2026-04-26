import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import News from '@/components/News'
import React from 'react'

export default function MainLayout({ children }) {
    return (
        <>
            <Header></Header>
            <News></News>
            <Navbar></Navbar>
            {children}
        </>
    )
}
