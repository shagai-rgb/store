"use client";
import React, { useState } from "react";
import { Cards } from "./Cards";

export const Today = ({ posts }) => {
  const [sum, setSum] = useState(0);
  const [data, setData] = useState(posts.slice(0, 4));

  const setLeft = () => {
    if (posts.length - 4 > sum) {
      setSum((prev) => prev + 1);
      setData(posts.slice(sum, sum + 4));
    }
  };
  const setRight = () => {
    if (0 < sum) {
      setSum((prev) => prev - 1);
      setData(posts.slice(sum, sum + 4));
    }
  };

  return (
    <div className="w-screen flex mt-[140px] flex-col  items-center">
      <div className="w-[1170px] flex justify-between items-end h-[103px]">
        <div className="h-[103px] flex flex-col justify-between">
          <div className="flex gap-4 items-center">
            <div className="w-5 h-10 rounded bg-[#DB4444]"></div>
            <div className="text-base font-semibold text-[#DB4444]">
              Today’s
            </div>
          </div>
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
        <div className="flex gap-2">
          <div
            onClick={() => {
              setRight();
            }}
            className={
              sum == 0
                ? " hidden"
                : "bg-[#F5F5F5] cursor-pointer flex items-center justify-center rounded-full w-[46px] h-[46px]"
            }
          >
            <img src="today/image.png" className="w-6 h-6" alt="" />
          </div>
          <div className=" w-[46px] h-[46px]">
            <div
              onClick={() => {
                setLeft();
              }}
              className={
                sum == posts.length - 4
                  ? "hidden"
                  : "bg-[#F5F5F5]  cursor-pointer  flex items-center justify-center rounded-full w-[46px] h-[46px]"
              }
            >
              <img src="today/image1.png" className="w-6 h-6" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1170px] flex justify-between">
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
