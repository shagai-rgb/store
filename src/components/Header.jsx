"use client";
import React from "react";

export const Header = () => {
  return (
    <div className="w-screen h-12 bg-black flex justify-center items-center">
      <div className="w-[1170px] gap-[230px] items-center justify-end flex">
        <div className=" flex gap-2">
          <div className="text-white font-light text-sm">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </div>
          <div className="text-white font-semibold text-sm">ShopNow</div>
        </div>
        <div className="w-[78px] h-[24px] text-white flex gap-[5px]">
          <button>English</button>
          <img src="/header/image.png" className="w-6 h-6" alt="" />
        </div>
      </div>
    </div>
  );
};
