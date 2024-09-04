"use client";
import React, { useRef, useState } from "react";
import { RedHead } from "./RedHead";
import { Cards } from "./Cards";
import { RedButton } from "./RedButton";
import { ArrowButton } from "./ArrowButton";

export const OurProduct = ({ posts }) => {
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
  const [istrue, setIstrue] = useState(true);
  const allButton = () => {
    setIstrue((prev) => !prev);
  };
  return (
    <div className="w-screen flex mt-[140px] flex-col  items-center">
      <div className="w-[1170px] flex justify-between items-end h-[103px]">
        <div className="h-[103px] flex flex-col justify-between">
          <RedHead text={"Our Products"} />
          <div className="flex gap-[87px] items-end">
            <div className="text-4xl font-semibold">Explore Our Products</div>
          </div>
        </div>
        <ArrowButton left={scrollLeft} rigth={scrollRight} />
      </div>
      <div
        ref={scrollContainerRef}
        className={
          istrue
            ? "w-[1170px] mt-10 overflow-x-scroll scrollbar-hide snap-x gap-[30px] flex justify-between"
            : "w-[1170px] mt-10 gap-[30px] flex flex-wrap justify-between"
        }
      >
        {posts.map(({ id, title, price, image, rating }, index) => {
          return (
            <Cards
              key={index}
              id={id}
              title={title}
              price={price}
              image={image}
              rating={rating}
            />
          );
        })}
      </div>
      <div className="flex cursor-pointer w-[1170px] h-[176px] flex-col items-center justify-center border-b-[0.5px] border-black">
        <RedButton
          handleClick={allButton}
          text={istrue ? "View All Products" : "View less"}
        />
      </div>
    </div>
  );
};
