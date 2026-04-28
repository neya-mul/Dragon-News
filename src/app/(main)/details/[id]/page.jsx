import { getDetails } from '@/lib/data'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaLongArrowAltLeft } from 'react-icons/fa';

export default async function Details({ params }) {
  const { id } = await params
  // console.log(id);

  const news = await getDetails(id)
  console.log(news);

  return (
    <div className="card bg-base-100 shadow-sm border p-6 rounded-2xl space-y-3.5 max-w-[1000px] mx-auto">

      <div>
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-5'>
            <Image src={news.author.img} width={50} height={50} alt='author' className='rounded-full' />
            <div>
              <p>{news.author.name}</p>
              <p>{news.author?.published_date}</p>
            </div>
          </div>

          <div className='flex gap-2'>
            <CiShare2 />
            <CiBookmark />
          </div>
        </div>
      </div>
      <figure>
        <Image src={news.image_url} width={800} height={800} className='w-full h-auto object-fit ' alt='image' />
      </figure>

      <div className="card-body">

        <h1 className='text-2xl font-bold'>{news.title}</h1>
        <p>{news.details}</p>
        <p className='text-2xl font-bold'>Rating : {news.rating.number}</p>
        <p>Total views : {news.total_view}</p>

      </div>
      <Link href={`/category/${news.category_id}`}> <button className='btn w-full flex items-center'><FaLongArrowAltLeft />
All news in this category</button></Link>
    </div>
  )
}
