import AllNews from "@/components/AllNews";
import CategoryButtons from "@/components/CategoryButtons";
import LoginSide from "@/components/LoginSide";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto grid grid-cols-12 gap-3">
      {/* category buttons */}
      <div className="col-span-3 border">
        <CategoryButtons></CategoryButtons>
      </div>
      <div  className="col-span-6 border">
        <AllNews></AllNews>
      </div>
      <div  className="col-span-3 border">
        <LoginSide></LoginSide>
      </div>

    </div>
  );
}
