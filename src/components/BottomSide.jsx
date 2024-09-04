"use client";
import React from "react";
import { Services } from "./Services";

export const BottomSide = () => {
  return (
    <div className="flex gap-[88px] mt-[140px]">
      <Services
        text={"Free delivery for all orders over $140"}
        head={"FREE AND FAST DELIVERY"}
        image={"service/image.png"}
      />
      <Services
        text={"Friendly 24/7 customer support"}
        head={"24/7 CUSTOMER SERVICE"}
        image={"service/image1.png"}
      />
      <Services
        text={"We reurn money within 30 days"}
        head={"MONEY BACK GUARANTEE"}
        image={"service/image2.png"}
      />
    </div>
  );
};
