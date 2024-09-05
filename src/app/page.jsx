import { Banner } from "@/components/Banner";
import { BottomSide } from "@/components/BottomSide";
import { Category } from "@/components/Category";
import { ExclusiveBot } from "@/components/ExclusiveBot";
import { Featured } from "@/components/Featured";
import { OurProduct } from "@/components/OurProduct";
import { ThisMonth } from "@/components/ThisMonth";
import { Today } from "@/components/Today";

export default async function Home() {
  const result = await fetch("https://fakestoreapi.com/products");
  const object = await result.json();
  const result1 = await fetch("https://fakestoreapi.com/products?sort=desc");
  const object1 = await result1.json();
  return (
    <div className="flex flex-col items-center">
      <ExclusiveBot />
      <Today posts={object} />
      <Category />
      <ThisMonth posts={object} />
      <Banner />
      <OurProduct posts={object1} />
      <Featured />
      <BottomSide />
    </div>
  );
}
