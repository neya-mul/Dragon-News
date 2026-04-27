import AllNews from "@/components/AllNews";
import CategoryButtons from "@/components/CategoryButtons";
import LoginSide from "@/components/LoginSide";
import Image from "next/image";

async function getCategories() {
  const res = await fetch('https://openapi.programming-hero.com/api/news/categories')
  const data = await res.json()
  return data.data

}

async function getCategorieId(id) {
  const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
  const data = await res.json()
  return data.data

}

export default async function Home() {
  const categories = await getCategories()
  // console.log(categories);

  const news = await getCategorieId('04')
  console.log(news);
  

  return (
    <div className="container mx-auto grid grid-cols-12 gap-3">
      {/* category buttons */}
      <div className="col-span-3 border">
        <CategoryButtons categories={categories} activeId={'01'}></CategoryButtons>
      </div>
      <div className="col-span-6 border">
        <AllNews news={news}></AllNews>
      </div>
      <div className="col-span-3 border">
        <LoginSide></LoginSide>
      </div>

    </div>
  );
}
