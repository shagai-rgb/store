"use client";
import React from "react";

export const Services = ({ image, head, text }) => {
  return (
    <div className="flex flex-col gap-6 items-center">
      <div className="w-[80px] h-[80px] bg-[#89898961] rounded-full flex items-center justify-center">
        <div className="w-[58px] h-[58px] bg-black rounded-full flex items-center justify-center">
          <img src={image} className="w-10 h-10" alt="" />
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <div className="font-semibold text-xl">{head}</div>
        <div className="font-normal text-sm">{text}</div>
      </div>
    </div>
  );
};
