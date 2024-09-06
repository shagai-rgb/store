"use client";
import React, { useEffect, useRef, useState } from "react";
import { Cards } from "./Cards";
import { RedButton } from "./RedButton";
import { RedHead } from "./RedHead";
import { ArrowButton } from "./ArrowButton";

export const Today = ({ posts }) => {
  const [timer, setTimer] = useState({
    days: 15,
    hour: 10,
    minutes: 20,
    seconds: 59,
  });

  useEffect(() => {
    let inter;

    const timer = () => {
      setTimer((prev) => {
        let days = prev.days;
        let hour = prev.hour;
        let minutes = prev.minutes;
        let seconds = prev.seconds;
        seconds--;

        if (seconds === 0) {
          minutes = minutes - 1;
          seconds = 59;
        }

        if (minutes === 0) {
          hour = hour - 1;
          minutes = 59;
        }

        if (hour === 0) {
          days = days - 1;
          hour = 23;
        }

        return { seconds: seconds, minutes: minutes, hour: hour, days: days };
      });
    };

    inter = setInterval(timer, 1000);

    return () => {
      clearInterval(inter);
    };
  }, []);
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
          <RedHead text={"Today’s"} />
          <div className="flex gap-[87px] items-end">
            <div className="text-4xl font-semibold">Flash Sales</div>
            <div className="flex gap-[17px] mb-[-6px] items-center">
              <div className="flex flex-col">
                <div className="text-xs font-medium">Days</div>
                <div className="text-[32px] font-bold">{timer.days}</div>
              </div>
              <div className="text-[#E07575] text-[32px] font-bold mt-1">:</div>
              <div className="flex flex-col">
                <div className="text-xs font-medium">Hours</div>
                <div className="text-[32px] font-bold">{timer.hour}</div>
              </div>
              <div className="text-[#E07575] text-[32px] font-bold mt-1">:</div>
              <div className="flex flex-col">
                <div className="text-xs font-medium">Minutes</div>
                <div className="text-[32px] font-bold">{timer.minutes}</div>
              </div>
              <div className="text-[#E07575] text-[32px] font-bold mt-1">:</div>
              <div className="flex flex-col">
                <div className="text-xs font-medium">Seconds</div>
                <div className="text-[32px] font-bold">{timer.seconds}</div>
              </div>
            </div>
          </div>
        </div>
        <ArrowButton left={scrollLeft} rigth={scrollRight} />
      </div>
      <div
        ref={scrollContainerRef}
        className="w-[1170px] scrollbar-hide mt-10 overflow-x-scroll snap-x gap-[30px] scrollbar flex justify-between"
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
      <div className="flex cursor-pointer w-[1170px] h-[176px] flex-col items-center justify-center border-b-[0.5px] border-black">
        <RedButton text={"View All Products"} />
      </div>
    </div>
  );
};
