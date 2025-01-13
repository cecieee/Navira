import React, { useEffect, useRef, useState } from "react";
import "./Highlights.css";
import EventCarousel from "../EventCarousel";


export default function Organizer() {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const top = elementRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setIsVisible(top < windowHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="relative z-10 flex flex-col items-center justify-center w-screen p-10 py-14 h-fit">
      <div className="flex flex-col justify-center w-full mb-20">
        <span className="mb-3 text-4xl font-bold text-center font-heading text-secondary">
          Highlights
        </span>
        <span
          ref={elementRef}
          className={`bg-secondary  h-1 rounded-full mt-1 ${
            isVisible ? "animate1" : ""
          }`}></span>
      </div>
      <div className="flex flex-wrap items-center justify-center w-screen gap-16 ">
        <EventCarousel />
      </div>
    </div>
  );
}
