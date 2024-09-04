"use client";
import React from "react";

export const RedHead = ({ text }) => {
  return (
    <div className="flex gap-4 items-center">
      <div className="w-5 h-10 rounded bg-[#DB4444]"></div>
      <div className="text-base font-semibold text-[#DB4444]">{text}</div>
    </div>
  );
};
