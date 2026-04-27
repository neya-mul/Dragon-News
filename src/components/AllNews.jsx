import React from 'react'
import NewsCard from './NewsCard'

export default function AllNews({ news }) {
  return (
    <div>
      <div>
        <h1 className='font-bold'>Dragon News Home</h1>
      </div>
      <div>
        {
          news.map((n, ind)=> <NewsCard n={n} key={ind}></NewsCard>)
        }
      </div>
    </div>
  )
}
