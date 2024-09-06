"use client";
import React, { useRef, useState } from "react";
import StarRating from "./StarRating";
import Link from "next/link";
import { IoIosHeartEmpty } from "react-icons/io";
import { AiOutlineEye } from "react-icons/ai";

export const Cards = ({ id, title, rating, image, price }) => {
  const [hover, isHover] = useState(false);

  return (
    <Link href={`/list/${id}`}>
      <div className="w-[270px] snap-start flex flex-col h-[350px] border rounded">
        <div
          onMouseEnter={() => {
            isHover(true);
          }}
          onMouseLeave={() => {
            isHover(false);
          }}
          className="w-[270px] relative flex z-10 flex-col bg-[#F5F5F5] items-center justify-between  border-b  h-[250px]"
        >
          <div className="absolute flex flex-col gap-2 top-[12px] right-[12px]">
            <div className="w-[34px] h-[34px] rounded-full flex items-center justify-center bg-white">
              <IoIosHeartEmpty className="w-6 h-6" />
            </div>
            <div className="w-[34px] h-[34px] rounded-full flex items-center justify-center bg-white">
              <AiOutlineEye className="w-6 h-6" />
            </div>
          </div>
          <img
            src={image}
            className="w-auto h-[150px] mix-blend-darken bg-slate-400 mt-10"
            alt=""
          />
          <div
            className={
              hover
                ? "flex w-[270px] cursor-pointer absolute bottom-0 h-[41px] bg-black text-base text-white items-center justify-center"
                : "hidden"
            }
          >
            Add To Cart
          </div>
        </div>
        <div className="text-base font-normal">{title}</div>
        <div className="text-base font-medium text-[#DB4444]">${price}</div>
        <div className="flex gap-2 items-center">
          <div>
            <StarRating rating={rating.rate} />
          </div>
          <div className="opacity-50 font-semibold text-sm">
            ({rating.count})
          </div>
        </div>
      </div>
    </Link>
  );
};
