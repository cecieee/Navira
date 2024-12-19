import React from "react";
import logo from "../../assets/Images/photo1.webp";
import CTA from "../CTA";
import Map1 from "../../assets/Group 5.png";
import Map2 from "../../assets/Group 1 (2).png";

function Mapsection() {
  const Map_link = "https://maps.app.goo.gl/hcgkytZqFGLKTscR7";
  return (
    <div
      id="Contact"
      className=" relative mt-5 flex h-fit min-h-[35vh] text-white font-heading bg-right bg-cover bg-no-repeat max-[950px]:min-h-fit "
      style={{ backgroundImage: `url('${Map2}')` }}>
      <div className="absolute w-full h-full bg-gradient-to-r from-dark via-dark to-transparent z-0 max-[950px]:bg-black"></div>
      {/* eslint-disable-next-line*/}
      <a
        href={Map_link}
        className="absolute w-1/4 h-full right-0 max-[950px]:hidden"></a>
      <div className="p-10 z-10 max-[950px]:w-full">
        <p className="text-5xl font-semibold max-[950px]:text-center">
          GET YOUR TICKET
        </p>
        <div className="flex flex-col items-start justify-start h-full max-[950px]:h-fit max-[950px]:py-10 max-[950px]:justify-center">
          <p className="py-5">
            Be part of the tech revolution at Navira - reserve your tickets
            today for a glimpse into tomorrow's world
          </p>
          <CTA width="250px" height="50px"/>
          {/* <a
            href={"http://www.yepdesk.com/emergence-3"}
            className="bg-[#EC431B] h-12 w-[30vh] flex mt-10 justify-center items-center max-[950px]:w-full max-[950px]:mt-2 border-black hover:bg-black hover:border hover:border-[#EC431B] hover:text-[#EC431B] delay-75 transition-all ease-in-out">
            Get your Ticket now
          </a> */}
        </div>
        <div className="min-[950px]:hidden relative">
          {/* <div className="absolute bottom-0 w-full bg-gradient-to-b from-black to-transparent"></div> */}
          {/* eslint-disable-next-line*/}
          <a href={Map_link} className="absolute z-10 block w-full h-full"></a>
          <img src={Map1} alt="" className="relative z-10 w-full " />
        </div>
      </div>
    </div>
  );
}

export default Mapsection;
