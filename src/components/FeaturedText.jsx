"use client";
import React from "react";

export const FeaturedText = ({ margin }) => {
  return (
    <div className="{flex flex-col z-10 gap-4 text-white bottom-8 ml-`${margin}` mb-8">
      <div className="text-2xl font-semibold">PlayStation</div>
      <div className="text-wrap text-sm font-light max-w-64">
        Black and White version of the PS5 coming out on sale.
      </div>
      <div className="text-base font-medium">Shop Now</div>
    </div>
  );
};
