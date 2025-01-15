import { useState, useEffect } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

// Event Posters
// import Inara from "../assets/Events/Inara.webp";
// import Mentoring from "../assets/Events/Mentoring pgm.webp";
// import ARVR from "../assets/Events/ARVR.webp";
// import DroneExpo from "../assets/Events/Drone Exop.webp";
import CircHack from "../assets/Posters/Circhack.jpg";
import Scaleup from "../assets/Posters/Scaleup.jpg";
import Startup from "../assets/Posters/Startup.jpg";
import Conclave from "../assets/Posters/Conclave.jpg";
import Inauguration from "../assets/Posters/Inauguration.jpg";
import CulturalNight from "../assets/Posters/Cultural Nights.jpg";

export default function EventCarousel() {
  const [current, setCurrent] = useState(0);

  // Animation
  useEffect(() => {
    const interval = setInterval(() => {
      NextSlide();
    }, 5000); // Change slide every 10 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  // Event Data
  const data = [
    {
      img: CircHack,
      pretag: "PRE-EVENT",
      title: "CIRC-HACK",
      desc: "Circuit-building Hackathon",
    },
    {
      // pretag:"PRE-EVENT",
      img: Scaleup,
      title: "ScaleUp",
      desc: "An elemental Talk Session on Startups.",
    },
    {
      pretag: "PRE-EVENT",
      img: Startup,
      title: "Startup Talks",
      desc: "A prelude to Navira, inspiring entrepreneurial journeys with expert insights.",
    },
    {
      img: Conclave,
      title: "Conclave & Elevate",
      desc: "An enlightening session on how IEEE empowers innovation and shapes managerial growth.",
    },
    // {
    //   img: Inauguration,
    //   title: "Inauguration",
    //   desc: "",
    // },
    {
      img: CulturalNight,
      title: "Cultural Night",
      desc: "Unleash your joy, celebrate and let the rhythm guide your steps. ",
    },
  ];

  // Slide Functions
  function NextSlide() {
    setCurrent((current) => (current + 1) % data.length);
  }
  function PrevSlide() {
    setCurrent((current) => (current - 1 + data.length) % data.length);
  }

  return (
    <>
      {/* Event Carousel */}
      <div className="relative flex flex-col w-full gap-10 overflow-hidden h-[40vh] slider font-heading">
        {/* Transistions */}
        {data.map((item, index) => {
          let transform, zIndex, filter, opacity;
          transform = `none`;
          zIndex = 1;
          filter = "none";
          opacity = 1;
          if (index > current) {
            transform = `translateX(${120 * (index - current)}px) scale(${
              1 - 0.2 * (index - current)
            }) perspective(16px) rotateY(-1deg)`;
            zIndex = current - index;
            filter = "blur(5px)";
            opacity = index - current > 3 ? 0 : 0.6;
          }
          if (index < current) {
            transform = `translateX(${-120 * (current - index)}px) scale(${
              1 - 0.2 * (current - index)
            }) perspective(16px) rotateY(1deg)`;
            zIndex = index - current;
            filter = "blur(5px)";
            opacity = current - index > 3 ? 0 : 0.6;
          }

          return (
            <div
              className={`absolute top-0 max-w-[310px] px-3  text-white transition-all rounded-md left-[calc(30%-155px)] shrink-0 item max-[780px]:left-[calc(50%-155px)] `}
              key={index}
              style={{
                transform: transform,
                zIndex: zIndex,
                filter: filter,
                opacity: opacity,
              }}>
              <img src={item.img} alt="" style={{ opacity: opacity }} />
            </div>
          );
        })}
        {/* Carousel Details */}
        <div className="absolute flex flex-col justify-center h-full left-[calc(70%-155px)]   pl-3  max-[780px]:hidden">
          <p className="text-lg">{data[current].pretag || ""}</p>
          <p className="text-5xl font-semibold uppercase text-secondary">
            {data[current].title}
          </p>
          <p className="text-lg">{data[current].desc}</p>
          {data[current].extrainfo || ""}
        </div>
      </div>

      {/* Carousel Controls */}
      <div className="flex items-center justify-center w-full gap-3 my-5 h-fit">
        <button
          className="flex items-center justify-center w-10 h-10 text-white transition-all duration-100 delay-75 rounded-full bg-color3 hover:bg-color1"
          onClick={PrevSlide}>
          <FaChevronLeft />
        </button>
        <button
          className="flex items-center justify-center w-10 h-10 text-white transition-all duration-100 delay-75 rounded-full bg-color3 hover:bg-color1"
          onClick={NextSlide}>
          <FaChevronRight />
        </button>
      </div>
    </>
  );
}
