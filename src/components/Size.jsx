"use client";
import React, { useState } from "react";

export const Size = ({ size }) => {
  const [isTrue, setIsTrue] = useState(
    "border rounded-md w-8 h-8 text-sm border-black hover:bg-[#DB4444] hover:border-none hover:text-white"
  );
  const handleClick = (id, index) => {
    if (id == index) {
      setIsTrue(
        "border rounded-md w-8 h-8 text-sm border-black bg-[#DB4444] border-none text-white"
      );
    }
    console.log(id);
  };
  return (
    <>
      {size.map((el, index) => {
        return (
          <button
            key={index}
            onClick={(e) => {
              handleClick(e.target.id);
            }}
            id={index}
            className={isTrue}
          >
            {el}
          </button>
        );
      })}
    </>
  );
};
