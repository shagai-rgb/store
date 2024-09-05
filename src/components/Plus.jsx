"use client";

import React, { useState } from "react";

export const Plus = () => {
  const [count, setCount] = useState(0);
  const sum = () => {
    setCount((prev) => prev + 1);
  };
  const minus = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };
  return (
    <div className="w-[159px] h-[44px] justify-between items-center flex ">
      <button
        onClick={minus}
        className="w-10 h-11 text-2xl border border-black rounded-l hover:border-none hover:bg-[#DB4444] hover:text-white"
      >
        -
      </button>
      <div className="text-xl h-11 border-y border-black w-20 flex justify-center items-center font-medium">
        {count}
      </div>
      <button
        onClick={sum}
        className="w-10 h-11 text-2xl border border-black rounded-r hover:border-none hover:bg-[#DB4444] hover:text-white"
      >
        +
      </button>
    </div>
  );
};
