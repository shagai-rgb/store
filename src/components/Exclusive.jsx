"use client";
import Link from "next/link";
import React from "react";

export const Exclusive = () => {
  return (
    <div className="w-screen flex flex-col items-center border-[0.5px] border-black">
      <div className="w-[1170px] flex h-[38px] mt-10 mb-4 items-center justify-between">
        <div className="flex h-6 items-end gap-[190px]">
          <div className="font-bold text-2xl">Exclusive</div>
          <div className="flex gap-12">
            <Link href={`/`}>
              <div className="font-light text-base">Home</div>
            </Link>
            <Link href={`/contact`}>
              <div className="font-light text-base">Contact</div>
            </Link>
            <Link href={`/about`}>
              <div className="font-light text-base">About</div>
            </Link>
            <div className="font-light text-base">Sign Up</div>
          </div>
        </div>
        <div className="flex items-center h-[38px] gap-6">
          <div className="w-[243px] h-[38px] flex items-center gap-[34px] bg-[#F5F5F5]">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-[153px] h-[18px] opacity-50 text-xs font-light bg-[#F5F5F5] ml-5"
            />
            <img src="/exclusive/image.png" className="w-6 h-6" alt="" />
          </div>
          <div className="flex gap-4">
            <img src="/exclusive/image1.png" className="w-8 h-8" alt="" />
            <img src="/exclusive/image2.png" className="w-8 h-8" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
