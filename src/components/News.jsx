import React from 'react'
import Marquee from 'react-fast-marquee'

export default function News() {
    return (
        <div className='container mx-auto'>

            <div className='flex items-center gap-3 px-10 lg:px-0'>
                <button className='btn bg-gray-900/50'>Latest News</button>
                <Marquee>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, distinctio ipsa? Officia consequatur non ut alias ad odit temporibus! Labore in, architecto impedit quas expedita aliquid error. Tempore recusandae laudantium excepturi atque! Rem recusandae aut quia reiciendis voluptas, eius delectus adipisci ipsum minus porro. Deleniti alias ex iure rerum saepe.
                </Marquee>
            </div>
        </div>
    )
}
