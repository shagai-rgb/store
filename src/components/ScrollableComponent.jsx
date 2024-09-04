"use client ";
import React, { useRef } from "react";

const ScrollableComponent = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div>
      <button onClick={scrollLeft}>Scroll Left</button>
      <button onClick={scrollRight}>Scroll Right</button>
      <div
        ref={scrollContainerRef}
        style={{
          display: "flex",
          overflowX: "auto",
          whiteSpace: "nowrap",
          width: "400px", // Set a width for the container
          border: "1px solid #ccc",
          padding: "10px",
        }}
      >
        <div
          style={{
            minWidth: "200px",
            height: "100px",
            backgroundColor: "#f0f0f0",
            marginRight: "10px",
          }}
        >
          Item 1
        </div>
        <div
          style={{
            minWidth: "200px",
            height: "100px",
            backgroundColor: "#d0d0d0",
            marginRight: "10px",
          }}
        >
          Item 2
        </div>
        <div
          style={{
            minWidth: "200px",
            height: "100px",
            backgroundColor: "#b0b0b0",
            marginRight: "10px",
          }}
        >
          Item 3
        </div>
        <div
          style={{
            minWidth: "200px",
            height: "100px",
            backgroundColor: "#909090",
            marginRight: "10px",
          }}
        >
          Item 4
        </div>
        <div
          style={{
            minWidth: "200px",
            height: "100px",
            backgroundColor: "#707070",
            marginRight: "10px",
          }}
        >
          Item 5
        </div>
        <div
          style={{
            minWidth: "200px",
            height: "100px",
            backgroundColor: "#505050",
            marginRight: "10px",
          }}
        >
          Item 6
        </div>
      </div>
    </div>
  );
};

export default ScrollableComponent;
