import StarRating from "@/components/StarRating";
import { IoMdHeartEmpty } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { PiArrowsClockwiseLight } from "react-icons/pi";
import { RelatedItem } from "@/components/RelatedItem";
import { Plus } from "@/components/Plus";
import { Size } from "@/components/Size";

export default async function id({ params }) {
  const { id } = params;
  const result = await fetch(`https://fakestoreapi.com/products/${id}`);
  const object = await result.json();
  const { title, rating, image, price, description } = object;
  const result1 = await fetch(`https://fakestoreapi.com/products/`);
  const object1 = await result1.json();
  const sizes = ["XS", "S", "M", "L", "XL"];
  return (
    <div className="flex  flex-col items-center">
      <div className="flex w-[1170px] h-auto justify-between mt-[180px]">
        <div className="w-[500px] h-[600px] flex items-center justify-center">
          <img src={image} className="w-[300px] h-[400px]" alt="" />
        </div>
        <div className="w-[500px] flex flex-col gap-6 ">
          <div className="flex flex-col gap-4">
            <div className="text-2xl font-semibold">{title}</div>
            <div className="flex gap-2 items-center">
              <div>
                <StarRating rating={rating.rate} />
              </div>
              <div className="opacity-50 font-normal text-sm">
                ({rating.count}Reviews)
              </div>
            </div>
            <div className="text-2xl font-normal">${price}</div>
          </div>
          <div className="text-sm font-normal">{description}</div>
          <div className="border-b border-black w-[500px]"></div>
          <div className="text-xl font-normal">Colours:</div>
          <div className="text-xl font-normal flex gap-6">
            Size:
            <div className="flex gap-4">
              <Size size={sizes} />
            </div>
          </div>
          <div className="flex tems-center justify-between">
            <Plus />
            <div className="py-4 px-12 h-11 flex items-center w-[165px] cursor-pointer bg-[#DB4444] text-[white] text-base rounded-[4px]">
              Buy Now
            </div>
            <div className="w-11 h-11 border border-black flex items-center justify-center rounded">
              <IoMdHeartEmpty className="w-8 h-8" />
            </div>
          </div>
          <div className="w-[500px] h-[180px] border p-0 border-black rounded">
            <div className="h-[90px] border-b pl-4  border-black flex gap-4 items-center">
              <TbTruckDelivery className="w-10 h-10" />

              <div className=" flex flex-col gap-2">
                <div className="text-base">Free Delivery</div>
                <div className="text-xs">
                  Enter your postal code for Delivery Availability
                </div>
              </div>
            </div>
            <div className="h-[90px] pl-4 flex gap-4 items-center">
              <PiArrowsClockwiseLight className="w-10 h-10" />

              <div className=" flex flex-col gap-2">
                <div className="text-base">Return Delivery</div>
                <div className="text-xs">
                  Free 30 Days Delivery Returns. Details
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-[1170px] items-center flex-col ">
        <RelatedItem posts={object1} />
      </div>
    </div>
  );
}
