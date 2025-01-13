import React, { useEffect, useRef, useState } from "react";
import "./Organizers.css";

import IEEE_LOGO from "../../assets/Logos/IEEE-logo-WHITE.png";
import IEEE_SB_LOGO from "../../assets/Logos/ieee_sb_cec_logo_white.png";
import WIE_LOGO from "../../assets/Logos/wie-WHITE.png";
import IAS_LOGO from "../../assets/Logos/ias-png-white.png";


export default function Organizer() {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  const Logos = [
    IEEE_LOGO,
    IEEE_SB_LOGO,
    WIE_LOGO,
    IAS_LOGO,

  ];

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
          Organizers
        </span>
        <span
          ref={elementRef}
          className={`bg-secondary w-[vh] h-1 rounded-full mt-1 ${
            isVisible ? "animate1" : ""
          }`}></span>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-16">
        {Logos.map((items, index) => (
          <img src={items} className="h-12" />
        ))}
        {/* <img src={IEEE_LOGO} alt="" className="w-[10vw] max-sm:scale-[250%]" />
        <img src={IEEE_SB_LOGO} alt=""  className="w-[13vw] max-sm:scale-[250%]"/>
        <img src={WIE_LOGO} alt="" className="w-[5vw] max-sm:scale-[250%]"/>
        <img src={IAS_LOGO} alt="" className="w-[8vw] max-sm:scale-[250%]" />
        <img src={YP_Logo} alt="" className="w-[5vw] max-sm:scale-[250%]" />
        <img src={Foundation_Logo} alt="" className="w-[10vw] max-sm:scale-[250%]" />
        <img src={JT_Logo} alt="" className="w-[17vw] max-sm:scale-[250%]" /> */}
      </div>
    </div>
  );
}
