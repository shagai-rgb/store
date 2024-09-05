"use client";
import React from "react";

export const ExclusiveBot = () => {
  return (
    <div className="w-[1170px] flex items-center">
      <div className="h-[344px] w-[217px] flex flex-col mt-10 gap-4">
        <div className="flex font-light text-base items-center w-[217px] justify-between ">
          Woman’s Fashion
          <img src="/exclusiveBot/image.png" className="w-6 h-6" alt="" />{" "}
        </div>
        <div className="flex font-light text-base items-center w-[217px] justify-between ">
          Men’s Fashion
          <img src="/exclusiveBot/image.png" className="w-6 h-6" alt="" />{" "}
        </div>
        <div className="flex font-light text-base items-center w-[217px] justify-between ">
          Electronics
        </div>
        <div className="flex font-light text-base items-center w-[217px] justify-between ">
          Home & Lifestyle
        </div>
        <div className="flex font-light text-base items-center w-[217px] justify-between ">
          Medicine
        </div>
        <div className="flex font-light text-base items-center w-[217px] justify-between ">
          Sports & Outdoor
        </div>
        <div className="flex font-light text-base items-center w-[217px] justify-between ">
          Baby’s & Toys
        </div>
        <div className="flex font-light text-base items-center w-[217px] justify-between ">
          Groceries & Pets
        </div>
        <div className="flex font-light text-base items-center w-[217px] justify-between ">
          Health & Beauty
        </div>
      </div>
      <div className="h-[384px] opacity-30 border-[0.5px] border-black ml-4 mr-[45px]"></div>
      <div className="w-[892px] h-[344px] mt-10">
        <img
          src="/exclusiveBot/image1.png"
          className="w-[892px] h-[344px]"
          alt=""
        />
      </div>
    </div>
  );
};
