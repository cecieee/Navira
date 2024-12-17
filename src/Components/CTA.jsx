import React from "react";
import { FaArrowRight } from "react-icons/fa6";

function CTA({
  height = "40px",
  width = "150px",
  text_color = "primary",
  text = "REGISTER",
}) {
  return (
    <div
      className="group rounded-md cursor-pointer flex px-2 items-center bg-secondary text-primary font-semibold text-xl"
      style={{
        height: height,
        width: width,
      }}
      onClick={() => window.open("https://www.yepdesk.com/navira/private/2isbt0kf7l")}
    >
      <div className=" grow text-center select-none text-sm font-semibold ">{text}</div>
      <div
        className="rounded-md h-8 w-0 scale-0 transition-all  flex justify-center items-center duration-200 ease-linear group-hover:w-8 group-hover:scale-100"
      >
        <FaArrowRight className={`text-primary`} />
      </div>
    </div>
  );
}

export default CTA;
