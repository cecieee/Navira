import React, { useRef, useEffect, useState } from "react";
import _01 from "../../assets/01.svg";
import _02 from "../../assets/02.svg";
import _03 from "../../assets/03.svg";
import _01_hover from "../../assets/01_hover.svg";
import _02_hover from "../../assets/02_hover.svg";
import _03_hover from "../../assets/03_hover.svg";
import "./Why Navira.css";

import { Link } from "react-router-dom";

const cardList = [
  {
    img: _01,
    title: "Sensor Integration and IOT development",
    desc: "The efficacy in transmitting and receiving real-time data is crucial in applications where timely and accurate information is essential. The workshop on Sensor Integration and IoT by Navira offers an opportunity to enhance skills in sensor integration and IoT solution development.",
    // desc: "Enhance your skills in sensor integration and IoT development with Navira's workshop, focusing on real-time data transmission and building efficient IoT solutions for practical applications.",
    delay: "200",
    hover_img: _01_hover,
    classname: "",
    cardpadding: "pb-16",
  },
  {
    img: _02,
    title: "Blockchain",
    desc: "Navira; Journey Beyond Limits introduces workshop on Blockchain for the participants to explore the functionality of decentralized systems, secure data management, and real-world applications in industries like finance and  supply chain.",
    delay: "0",
    hover_img: _02_hover,
    classname: "pb-7",
    cardpadding: "pb-24",
  },
  {
    img: _03,
    title: "Beck N Protocol",
    desc: "Beck N Protocol is a framework that aims to smoothen the interaction between buyers and sellers in digital services. Navira; Journey Beyond Limits brings an opportunity to navigate through the concepts of this structure and it's possibilities.",
    delay: "100",
    hover_img: _03_hover,
    classname: "pb-7",
    cardpadding: "pb-24",
  },


];
// data-aos='fade-left' data-aos-duration='200' data-aos-delay={delay}
function Card({ img, title, desc, delay, hover_img, classname, cardpadding }) {
  return (
    <>
      <div
        className={
          "group w-[20vw] max-[890px]:w-[40vw] min-w-[200px] grow max-[1240px]:py-10 max-[1240px]:gap-7 max-[1100px]:p-3 max-[1100px]:py-5 max-[450px]:w-[80vw] overflow-hidden text-white relative bg-quarternery h-full flex-1 p-6 py-14 flex flex-col gap-10 max-[1420px]:gap-8 cursor-pointer hover:scale-105 transision-all  duration-200 hover:shadow-2xl shadow-black " +
          cardpadding
        }
        data-aos="fade-left"
        data-aos-duration="200"
        data-aos-delay={delay}
      >
        <div className="relative w-24 h-20">
          <img src={img} alt="" className="absolute w-24 max-[1240px]:w-20" />
          <img
            src={hover_img}
            alt=""
            className="absolute w-24 max-[1240px]:w-20 transition-all duration-500 opacity-0 group-hover:opacity-100"
          />
        </div>
        <p
          className={
            "pl-3 text-[1.5vw] font-semibold max-[1100px]:text-[1.7vw] max-[890px]:text-[2.5vw] max-[450px]:text-[6vw] " +
            classname
          }
        >
          {title}
        </p>
        <p className="pl-3 text-[1vw] text-pretty max-[890px]:text-[1.6vw] max-[450px]:text-[3vw]">
          {desc}
        </p>
        {/* <a
          href=""
          className="relative pl-3 text-[1.3vw] max-[450px]:text-[4vw] max-[890px]:text-[2vw] font-semibold w-fit before:absolute before:w-0 before:bottom-0 before:border before:border-quarternery group-hover:before:border-secondary group-hover:before:w-[93%] before:duration-300 before:delay-100 before:transition-all">
          Read More
        </a> */}
        <span className="absolute top-0 z-10 w-full h-1 transition-all duration-[150ms] bg-secondary delay-0 -left-full group-hover:left-0"></span>
        <span className="absolute right-0 z-10 w-1 h-full transition-all duration-[150ms] delay-[150ms] bg-secondary -top-full group-hover:top-0"></span>
        <span className="absolute bottom-0 z-10 w-full h-1 transition-all duration-[150ms] delay-[300ms] bg-secondary -right-full group-hover:right-0"></span>
        <span className="absolute left-0 z-10 w-1 h-full transition-all duration-[150ms] delay-[450ms] bg-secondary -bottom-full group-hover:bottom-0"></span>
      </div>
    </>
  );
}

function Products() {
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
    <div
      className="flex flex-col w-screen p-20 max-[920px]:p-5 h-fit max-[1100px]:p-10"
      id="workshops"
    >
      <div className="flex flex-col justify-center w-full mb-20 ">
        <span className="mb-3 text-4xl font-bold text-center font-heading text-secondary">
          Workshops
        </span>
        <span
          ref={elementRef}
          className={`bg-secondary w-[30vh] h-1 rounded-full mt-1 ${
            isVisible ? "animate1" : ""
          }`}
        ></span>
      </div>

      <div className=" w-full h-fit my-10 items-stretch flex max-[1100px]:self-center max-[930px]:gap-3 justify-center gap-5 flex-wrap max-[1024px]:w-full ">
        {cardList.map((item, index) => (
          <Card
            key={index}
            img={item.img}
            title={item.title}
            desc={item.desc}
            delay={item.delay}
            hover_img={item.hover_img}
            classname={item.classname}
            cardpadding={item.cardpadding}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
