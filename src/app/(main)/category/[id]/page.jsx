import { getCategorieId, getCategories } from '@/lib/data'
import AllNews from '@/components/AllNews'
import CategoryButtons from '@/components/CategoryButtons'
import LoginSide from '@/components/LoginSide'
import React from 'react'



export default async function News({ params }) {
    const { id } = await params
    const categories = await getCategories()
    // console.log(categories);

    const news = await getCategorieId(id)
    // console.log(news);



    return (
        <div>
            <div className="container mx-auto grid grid-cols-12 gap-3">
                {/* category buttons */}
                <div className="col-span-3 p-10 h-fit ">
                    <CategoryButtons categories={categories} activeId={id}></CategoryButtons>
                </div>
                <div className="col-span-6 p-10">
                    {
                        news.length > 0 ? <AllNews news={news}></AllNews> : <h1 className='text-center font-bold text-3xl'>No news availabe</h1>
                    }
                </div>
                <div className="col-span-3 p-10 h-fit">
                    <LoginSide></LoginSide>
                </div>

            </div>
        </div>
    )
}
