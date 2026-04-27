import Image from 'next/image'
import React from 'react'
import { CiBookmark, CiShare2 } from "react-icons/ci";


export default function NewsCard({ n }) {
    return (
        <div className="card bg-base-100 shadow-sm">

            <div>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-5'>
                        <Image src={n.author.img} width={50} height={50} alt='author' className='rounded-full' />
                        <div>
                            <p>{n.author.name}</p>
                            <p>{n.author?.published_date}</p>
                        </div>
                    </div>

                    <div className='flex gap-2'>
                        <CiShare2 />
                        <CiBookmark />
                    </div>
                </div>
            </div>
            <figure>
                <Image src={n.image_url} width={800} height={800} className='w-full h-auto object-fit ' alt='image' />
            </figure>
         
            <div className="card-body">
             
                <h1 className='text-2xl font-bold'>{n.title}</h1>
                <p>{n.details}</p>
               
            </div>
        </div>
    )
}
