import React from "react";
import { FaArrowRight } from "react-icons/fa6";

function CTA({
  height = "60px",
  width = "175px",
  background = "secondary",
  text_color = "primary",
  text = "REGISTER",
}) {
  return (
    <div
      className="group rounded-full cursor-pointer flex px-4 items-center font-semibold text-xl"
      style={{
        height: height,
        width: width,
        background: `var(--color-${background})`,
        color: `var(--color-${text_color})`,
      }}
    >
      <div className=" grow text-center">{text}</div>
      <div
        className="rounded-full h-8 w-0 scale-0 transition-all flex justify-center items-center duration-200 ease-linear group-hover:w-8 group-hover:scale-100"
        style={{ background: `var(--color-${text_color})` }}
      >
        <FaArrowRight className={`text-${background}`} />
      </div>
    </div>
  );
}

export default CTA;
