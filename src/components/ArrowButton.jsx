"use client";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

import React from "react";

export const ArrowButton = ({ left, rigth }) => {
  return (
    <div className="flex gap-2">
      <div
        onClick={rigth}
        className="bg-[#F5F5F5] cursor-pointer flex items-center justify-center rounded-full w-[46px] h-[46px]"
      >
        <FaArrowLeft className="w-6 h-6" />
      </div>
      <div onClick={left} className=" w-[46px] h-[46px]">
        <div className="bg-[#F5F5F5]  cursor-pointer  flex items-center justify-center rounded-full w-[46px] h-[46px]">
          <FaArrowRight className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};
