import Image from 'next/image'
import React from 'react'

export default function NewsCard({ n }) {
    return (
        <div className="card bg-base-100 shadow-sm">

            <div>
                <div>
                    {/* <Image src={n.author.img} width={50} height={50} alt='author' /> */}
                </div>
            </div>
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Card Title</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    )
}
