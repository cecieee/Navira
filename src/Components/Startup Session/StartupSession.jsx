import React, { useEffect, useRef, useState } from "react";
import "./Organizers.css";
import bgimage from "../../assets/bgimg.png";
import wave from "../../assets/wave.png";
import speaker from "../../assets/AB1 1.png";

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
    <div className="flex flex-col items-center justify-center w-screen p-10 py-14 h-fit">
      <div className="flex flex-col justify-center w-full mb-20">
        <span className="mb-3 text-4xl font-bold text-center font-heading text-secondary">
          Startup Talk
        </span>
        <span
          ref={elementRef}
          className={`bg-secondary  h-1 rounded-full mt-1 ${
            isVisible ? "animate1" : ""
          }`}></span>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-16">
        <div className="flex border w-80 h-96 border-secondary bg-gradient-to-b from-[#252351] to-[#252351] relative">
          <div
            className="absolute z-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: `url(${bgimage}) `,
              mixBlendMode: "multiply",
            }}></div>
          {/* <div className="relative w-full h-full">
            <img src={wave} alt="" className="h-[60%]  absolute bottom-0" />
          </div> */}
          <img src={speaker} alt="" className="scale-75 w-fit h-fit" />
          <div className="absolute z-20 w-full h-[35%] flex flex-col justify-center items-center bottom-0">
            <p className="text-3xl text-secondary font-heading">Anooja Bashir</p>
            <p className="text-sm">CEO & Co-FounderFlexiCloud</p>
            
          </div>
          <div
            className="absolute z-10 w-full h-[50%] bg-left-bottom bg-no-repeat bg-cover   bottom-0 "
            style={{
              backgroundImage: `url(${wave})`,
              backgroundPosition: "52%",
            }}
          />
        </div>
      </div>
    </div>
  );
}
