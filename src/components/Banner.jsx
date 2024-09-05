"use client";
import React from "react";

export const Banner = () => {
  return (
    <div className="w-[1170px] mt-[140px] h-[500px] justify-center gap-[40px] bg-black flex relative flex-col pl-[56px]">
      <div className="flex flex-col gap-[32px]">
        <div className="text-[#00FF66]">Categories</div>

        <div className="text-5xl text-white font-semibold w-[443px] text-wrap">
          Enhance Your Music Experience
        </div>
        <div className="flex gap-6">
          <div className="w-[62px] h-[62px] flex items-center justify-center flex-col bg-[#FFFFFF] text-black rounded-full">
            <div className="font-semibold text-base">03</div>
            <div className="font-light text-xs">hours</div>
          </div>
          <div className="w-[62px] h-[62px] flex items-center justify-center flex-col bg-[#FFFFFF] text-black rounded-full">
            <div className="font-semibold text-base">03</div>
            <div className="font-light text-xs">days</div>
          </div>
          <div className="w-[62px] h-[62px] flex items-center justify-center flex-col bg-[#FFFFFF] text-black rounded-full">
            <div className="font-semibold text-base">03</div>
            <div className="font-light text-xs">Minutes</div>
          </div>
          <div className="w-[62px] h-[62px] flex items-center justify-center flex-col bg-[#FFFFFF] text-black rounded-full">
            <div className="font-semibold text-base">03</div>
            <div className="font-light text-xs">Seconds</div>
          </div>
        </div>
        <div className="py-4 w-[171px] px-12 cursor-pointer bg-[#00FF66] text-[white] text-base rounded-[4px]">
          Buy Now!
        </div>
      </div>
      <img
        src="/banner/image.png"
        className="absolute w-[620px] z-10 h-[420px] left-[526px]"
        alt=""
      />
      <img
        src="/banner/image1.png"
        className="absolute w-[500px] z-0 h-[500px] left-[552px]"
        alt=""
      />
    </div>
  );
};
