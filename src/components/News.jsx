import React from 'react'
import Marquee from 'react-fast-marquee'

export default function News() {
    const newsArray = [
        {
            id: 1,
            title: "Global Markets Show Signs of Recovery",
            category: "Economy",
            author: "John Smith",
            publishedAt: "2026-04-25",
            isBreaking: false
        },
        {
            id: 2,
            title: "New Advances in Artificial Intelligence Announced",
            category: "Technology",
            author: "Sarah Johnson",
            publishedAt: "2026-04-26",
            isBreaking: true
        },
        {
            id: 3,
            title: "Climate Summit 2026 Brings World Leaders Together",
            category: "Environment",
            author: "Michael Lee",
            publishedAt: "2026-04-24",
            isBreaking: false
        }
    ];
    return (
        <div className='container mx-auto border border-gray-500 p-3 rounded-2xl'>

            <div className='flex items-center gap-3 px-10 lg:px-0'>
                <button className='btn bg-gray-900/50'>Latest News</button>
                <Marquee>
                   {newsArray.map(n=> <span key={n.id}>{n.title}</span>)}
                </Marquee>
            </div>
        </div>
    )
}
