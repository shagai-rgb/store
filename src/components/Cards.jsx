"use client";
import React, { useState } from "react";

export const Cards = ({ id, title, rating, image, price }) => {
  const [hover, isHover] = useState(false);

  return (
    <div className="w-[270px] flex flex-col h-[350px] border rounded">
      <div
        onMouseEnter={() => {
          isHover(true);
        }}
        onMouseLeave={() => {
          isHover(false);
        }}
        className="w-[270px] relative flex z-10 flex-col bg-[#F5F5F5] items-center justify-between  border-b  h-[250px]"
      >
        <img
          src={image}
          className="w-auto h-[150px] bg-slate-400 mt-10"
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
        <div>{rating.rate}</div>
        <div className="opacity-50 font-semibold text-sm">({rating.count})</div>
      </div>
    </div>
  );
};
