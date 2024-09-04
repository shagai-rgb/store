"use client";

import React from "react";

export const RedButton = ({ handleClick, text }) => {
  return (
    <div
      onClick={handleClick}
      className="py-4 px-12 cursor-pointer bg-[#DB4444] text-[white] text-base rounded-[4px]"
    >
      {text}
    </div>
  );
};
