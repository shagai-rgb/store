"use client";

import React, { useEffect, useState } from "react";

export const ExclusiveBot = () => {
  const [item, setItem] = useState(0);
  const hero = [
    {
      image:
        "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
    },
    {
      image:
        "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
    },
    { image: "exclusiveBot/image1.png" },

    {
      image:
        "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
    },
    {
      image:
        "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
    },
  ];

  const button = (e) => {
    setItem(Number(e.target.id));
  };
  useEffect(() => {
    let interval;
    interval = setInterval(() => {
      setItem((prev) => {
        if (prev > 3) {
          return 0;
        } else {
          return prev + 1;
        }
      });
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-[1170px] flex items-center">
      <div className="h-[344px] w-[217px] flex flex-col mt-10 gap-4">
        <div className="flex font-light text-base items-center w-[217px] justify-between ">
          Woman’s Fashion
          <img src="/exclusiveBot/image.png" className="w-6 h-6" alt="" />{" "}
        </div>
        <div className="flex font-light text-base items-center w-[217px] justify-between ">
          Men’s Fashion
          <img src="/exclusiveBot/image.png" className="w-6 h-6" alt="" />{" "}
        </div>
        <div className="flex font-light text-base items-center w-[217px] justify-between ">
          Electronics
        </div>
        <div className="flex font-light text-base items-center w-[217px] justify-between ">
          Home & Lifestyle
        </div>
        <div className="flex font-light text-base items-center w-[217px] justify-between ">
          Medicine
        </div>
        <div className="flex font-light text-base items-center w-[217px] justify-between ">
          Sports & Outdoor
        </div>
        <div className="flex font-light text-base items-center w-[217px] justify-between ">
          Baby’s & Toys
        </div>
        <div className="flex font-light text-base items-center w-[217px] justify-between ">
          Groceries & Pets
        </div>
        <div className="flex font-light text-base items-center w-[217px] justify-between ">
          Health & Beauty
        </div>
      </div>
      <div className="h-[384px] opacity-30 border-[0.5px] border-black ml-4 mr-[45px]"></div>
      <div className="w-[892px] relative h-[344px] mt-10">
        <div className="carousel w-full">
          <div id="item1" className="carousel-item w-full">
            <img src={hero[item].image} className="w-[892px] h-[344px]" />
          </div>
        </div>
        <div className="flex absolute left-[352px] top-[310px] gap-[8px] justify-center py-2">
          {hero.map((el, index) => {
            return (
              <a
                key={index}
                onClick={(e) => {
                  button(e);
                }}
                className={`${
                  item !== index ? `bg-slate-900` : `bg-white`
                } rounded-full flex items-center cursor-pointer justify-center w-4 h-4`}
              >
                <div
                  id={index}
                  className={`w-3 h-3  ${
                    item !== index ? "opacity-0" : "opacity-100"
                  }  bg-red-700 rounded-full`}
                ></div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
