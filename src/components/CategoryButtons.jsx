import React from 'react'
async function getCategories() {
    const res = await fetch('https://openapi.programming-hero.com/api/news/categories')
    const data = await res.json()
    return data.data

}
export default async function CategoryButtons() {
    const categories = await getCategories()
    console.log(categories);



    return (
        <div>
            <div>
                <h1 className='font-bold'>All Category</h1>
            </div>
            <div className='space-y-3'>
                {categories.news_category.map(categorie => <p className='text-center' key={categorie.category_id}>{categorie.category_name}</p>)}

            </div>
        </div>
    )
}
