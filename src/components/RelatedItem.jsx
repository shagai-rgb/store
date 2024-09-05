"use client";
import React, { useRef } from "react";
import { Cards } from "./Cards";
import { RedButton } from "./RedButton";
import { ArrowButton } from "./ArrowButton";
import { RedHead } from "./RedHead";

export const RelatedItem = ({ posts }) => {
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
          <RedHead text={"Related Item"} />
        </div>
        <ArrowButton left={scrollLeft} rigth={scrollRight} />
      </div>
      <div
        ref={scrollContainerRef}
        className="w-[1170px] scrollbar-hide mt-10 overflow-x-scroll snap-x gap-[30px] flex justify-between"
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
    </div>
  );
};
