import React, { useEffect, useRef, useState } from "react";
import "./Organizers.css";

import XRHorizon from "../../assets/Logos/XR Horizon Logo HD.png";
import Notion from "../../assets/Logos/notion.png";
import Foundation_Logo from "../../assets/Logos/foundation.png";
import YP_Logo from "../../assets/Logos/YP.png";
import JT_Logo from "../../assets/Logos/jt-logo.png";

export default function Sponsors() {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  const Logos = [Notion, Foundation_Logo, YP_Logo, JT_Logo];
  const IntertnshipPartners = [XRHorizon];

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
    <div className="flex flex-col items-center justify-center w-screen gap-3 p-10 py-14 h-fit">
      <div className="flex flex-col items-center justify-center w-screen gap-8 p-10 py-14 ">
        <div className="flex flex-col justify-center w-full ">
          <span className="mb-3 text-4xl font-bold text-center font-heading text-secondary">
            Sponsors
          </span>
          <span
            ref={elementRef}
            className={`bg-secondary w-[vh] h-1 rounded-full mt-1 ${
              isVisible ? "animate1" : ""
            }`}></span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-16">
          {Logos.map((items, index) => (
            <img src={items} className="h-16" />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-screen gap-8 p-10 py-14 ">
        <div className="flex flex-col justify-center w-full">
          <span className="mb-3 text-4xl font-bold text-center font-heading text-secondary">
            Internship Partner
          </span>
          <span
            ref={elementRef}
            className={`bg-secondary w-[vh] h-1 rounded-full mt-1 ${
              isVisible ? "animate1" : ""
            }`}></span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-16">
          {IntertnshipPartners.map((items, index) => (
            <img src={items} className="h-16" />
          ))}
        </div>
      </div>
    </div>
  );
}
