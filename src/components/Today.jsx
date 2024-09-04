"use client";
import React, { useRef, useState } from "react";
import { Cards } from "./Cards";
import { RedButton } from "./RedButton";
import { RedHead } from "./RedHead";
import { ArrowButton } from "./ArrowButton";

export const Today = ({ posts }) => {
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

  return (
    <div className="w-screen flex mt-[140px] flex-col  items-center">
      <div className="w-[1170px] flex justify-between items-end h-[103px]">
        <div className="h-[103px] flex flex-col justify-between">
          <RedHead text={"Today’s"} />
          <div className="flex gap-[87px] items-end">
            <div className="text-4xl font-semibold">Flash Sales</div>
            <div className="flex gap-[17px] mb-[-6px] items-center">
              <div className="flex flex-col">
                <div className="text-xs font-medium">Days</div>
                <div className="text-[32px] font-bold">03</div>
              </div>
              <div className="text-[#E07575] text-[32px] font-bold mt-1">:</div>
              <div className="flex flex-col">
                <div className="text-xs font-medium">Hours</div>
                <div className="text-[32px] font-bold">03</div>
              </div>
              <div className="text-[#E07575] text-[32px] font-bold mt-1">:</div>
              <div className="flex flex-col">
                <div className="text-xs font-medium">Minutes</div>
                <div className="text-[32px] font-bold">03</div>
              </div>
              <div className="text-[#E07575] text-[32px] font-bold mt-1">:</div>
              <div className="flex flex-col">
                <div className="text-xs font-medium">Seconds</div>
                <div className="text-[32px] font-bold">03</div>
              </div>
            </div>
          </div>
        </div>
        <ArrowButton left={scrollLeft} rigth={scrollRight} />
      </div>
      <div
        ref={scrollContainerRef}
        className="w-[1170px] scrollbar-hide mt-10 overflow-x-scroll snap-x gap-[30px] flex justify-between"
      >
        {posts.map(({ id, title, price, image, rating }, index) => {
          return (
            <Link href="/list">
              <Cards
                key={index}
                id={id}
                title={title}
                price={price}
                image={image}
                rating={rating}
              />
            </Link>
          );
        })}
      </div>
      <div className="flex cursor-pointer w-[1170px] h-[176px] flex-col items-center justify-center border-b-[0.5px] border-black">
        <RedButton text={"View All Products"} />
      </div>
    </div>
  );
};
