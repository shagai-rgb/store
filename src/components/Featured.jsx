"use client";
import React from "react";
import { RedHead } from "./RedHead";
import { ArrowButton } from "./ArrowButton";

export const Featured = () => {
  return (
    <div className="w-screen flex mt-[80px] flex-col items-center">
      <div className="w-[1170px] flex justify-between items-end h-[103px]">
        <div className="h-[103px] flex flex-col justify-between">
          <RedHead text={"Featured"} />
          <div className="flex gap-[87px] items-end">
            <div className="text-4xl font-semibold">New Arrival</div>
          </div>
        </div>
      </div>

      <div className="w-[1170px] h-[600px] mt-[60px] flex gap-[30px]">
        <div className="bg-black w-[570px] relative items-end h-[600px] flex">
          <img
            src="featured/image.png"
            className="w-[511px] z-0 h-[511px] absolute left-[29px] bottom-0"
            alt=""
          />
          <div className="flex flex-col z-10 gap-4 text-white ml-8 mb-8">
            <div className="text-2xl font-semibold">PlayStation</div>
            <div className="text-wrap text-sm font-light max-w-64">
              Black and White version of the PS5 coming out on sale.
            </div>
            <div className="text-base font-medium underline">Shop Now</div>
          </div>
        </div>
        <div className="flex flex-col gap-[30px]">
          <div className="bg-black w-[570px] relative items-end h-[284px] flex">
            <img
              src="featured/image1.png"
              className="w-[432px] z-0 h-[284px] absolute left-[138px] bottom-0"
              alt=""
            />
            <div className="flex flex-col z-10 gap-4 text-white ml-6 mb-6">
              <div className="text-2xl font-semibold">Women’s Collections</div>
              <div className="text-wrap text-sm font-light max-w-64">
                Featured woman collections that give you another vibe.
              </div>
              <div className="text-base font-medium underline">Shop Now</div>
            </div>
          </div>
          <div className="flex gap-[30px]">
            <div className="bg-black w-[270px] relative items-end h-[284px] flex">
              <img
                src="featured/image2.png"
                className="w-[210px] z-10 h-[222px] absolute left-[30px] bottom-[30px]"
                alt=""
              />
              <img
                src="featured/image4.png"
                className=" absolute z-0  "
                alt=""
              />
              <div className="flex flex-col z-20 gap-2 text-white ml-6 mb-6">
                <div className="text-2xl font-semibold">Speakers</div>
                <div className="text-wrap text-sm font-light max-w-64">
                  Amazon wireless speakers
                </div>
                <div className="text-base font-medium underline">Shop Now</div>
              </div>
            </div>
            <div className="bg-black w-[270px] relative items-end h-[284px] flex">
              <img
                src="featured/image3.png"
                className="w-[210px] z-10 h-[222px] absolute left-[30px] bottom-[30px]"
                alt=""
              />
              <img
                src="featured/image4.png"
                className=" absolute z-0  "
                alt=""
              />
              <div className="flex flex-col z-20 gap-2 text-white ml-6 mb-6">
                <div className="text-2xl font-semibold">Perfume</div>
                <div className="text-wrap text-sm font-light max-w-64 ">
                  GUCCI INTENSE OUD EDP
                </div>
                <div className="text-base font-medium underline">Shop Now</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
