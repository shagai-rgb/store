import { ExclusiveBot } from "@/components/ExclusiveBot";
import { Today } from "@/components/Today";

export default async function Id(params) {
  const result = await fetch("https://fakestoreapi.com/products");
  const object = await result.json();
  return (
    <div className="flex flex-col items-center">
      <ExclusiveBot />
      <Today posts={object} />
    </div>
  );
}
