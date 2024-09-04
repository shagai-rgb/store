"use client";
import React, { useRef, useState } from "react";
import { RedHead } from "./RedHead";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { FaComputer } from "react-icons/fa6";
import { BsSmartwatch } from "react-icons/bs";
import { CiHeadphones } from "react-icons/ci";

import { GiClothes } from "react-icons/gi";
import { RiMacbookLine } from "react-icons/ri";
import { CiCamera } from "react-icons/ci";
import { LuGamepad } from "react-icons/lu";
import { ArrowButton } from "./ArrowButton";

export const Category = () => {
  const scrollContainerRef = useRef(null);
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };
  const object = [
    {
      image: <HiOutlineDevicePhoneMobile className="w-[40px] h-[40px]" />,
      text: "Phones",
    },
    { image: <FaComputer className="w-[40px] h-[40px]" />, text: "Computers" },
    {
      image: <BsSmartwatch className="w-[40px] h-[40px]" />,
      text: "SmartWatch",
    },
    { image: <CiCamera className="w-[40px] h-[40px]" />, text: "Camera" },
    {
      image: <CiHeadphones className="w-[40px] h-[40px]" />,
      text: "HeadPhones",
    },
    {
      image: <LuGamepad className="w-[40px] h-[40px]" />,
      text: "Gaming",
    },
    { image: <GiClothes className="w-[40px] h-[40px]" />, text: "Clothes" },
    { image: <RiMacbookLine className="w-[40px] h-[40px]" />, text: "Macbook" },
  ];
  return (
    <div className="w-screen flex mt-[80px] flex-col items-center">
      <div className="w-[1170px] flex justify-between items-end h-[103px]">
        <div className="h-[103px] flex flex-col justify-between">
          <RedHead text={"Categories"} />
          <div className="flex gap-[87px] items-end">
            <div className="text-4xl font-semibold">Browse By Category</div>
          </div>
        </div>
        <ArrowButton left={scrollLeft} rigth={scrollRight} />
      </div>
      <div
        ref={scrollContainerRef}
        className="w-[1170px] flex snap-x scrollbar-hide overflow-scroll gap-[30px] mt-[60px]"
      >
        {object.map(({ image, text }, index) => {
          return (
            <div
              key={index}
              className="w-[170px] h-[145px] snap-start hover:text-white hover:bg-[#DB4444] border rounded-[4px] flex justify-center flex-col items-center gap-4 shrink-0"
            >
              {image}
              <div className="text-base font-light">{text}</div>
            </div>
          );
        })}
      </div>
      <div className="w-[1170px] h-[70px] border-b-[0.5px] border-black"></div>
    </div>
  );
};
