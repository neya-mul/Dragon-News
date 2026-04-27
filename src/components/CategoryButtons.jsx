import Link from 'next/link'
import React from 'react'

export default function CategoryButtons({ categories, activeId }) {



    return (
        <div>
            <div>
                <h1 className='font-bold'>All Category</h1>
            </div>
            <div className='space-y-3 items-center'  >
                {categories.news_category.map(categorie => <p className={`text-center ${activeId === categorie.category_id && 'bg-gray-100/35'} p-1 my-2`} key={categorie.category_id}>
                    <Link className='block border' href={`/category/${categorie.category_id}`}> {categorie.category_name}</Link>
                </p>)}

            </div>
        </div>
    )
}
