"use client";
import React, { useEffect, useState } from "react";
import { RedHead } from "./RedHead";
import { RedButton } from "./RedButton";
import { Cards } from "./Cards";

export const ThisMonth = ({ posts }) => {
  const [data, setData] = useState(posts.slice(0, 4));
  const [istrue, setIstrue] = useState(true);
  const allClick = () => {
    setIstrue((prev) => !prev);
    istrue ? setData(posts) : setData(posts.slice(0, 4));
  };

  return (
    <div className="w-screen flex mt-[140px] flex-col items-center">
      <div className="w-[1170px] flex justify-between items-end h-[103px]">
        <div className="h-[103px] flex flex-col justify-between">
          <RedHead text={"This Month"} />
          <div className="flex gap-[87px] items-end">
            <div className="text-4xl font-semibold">Best Selling Products</div>
          </div>
        </div>
        <RedButton handleClick={allClick} text={"View All"} />
      </div>
      <div className="w-[1170px] flex flex-wrap gap-[30px] mt-[60px]">
        {data.map(({ id, title, price, image, rating }, index) => {
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
