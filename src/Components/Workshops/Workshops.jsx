import React, { useRef, useEffect, useState } from "react";
import _01 from "../../assets/01.svg";
import _02 from "../../assets/02.svg";
import _03 from "../../assets/03.svg";
import _01_hover from "../../assets/01_hover.svg";
import _02_hover from "../../assets/02_hover.svg";
import _03_hover from "../../assets/03_hover.svg";
import { IoIosCloseCircle } from "react-icons/io";

import speaker_01 from "../../assets/speaker_01.jpg";
import speaker_02 from "../../assets/speaker_02.jpg";
import speaker_03 from "../../assets/speaker_03.jpg";

import "./Why Navira.css";

import { Link } from "react-router-dom";

const cardList = [
  {
    img: _01,
    speaker: speaker_01,
    title: "Sensor Integration and IOT development",
    desc: "The efficacy in transmitting and receiving real-time data is crucial in applications where timely and accurate information is essential. The workshop on Sensor Integration and IoT by Navira offers an opportunity to enhance skills in sensor integration and IoT solution development.",
    // desc: "Enhance your skills in sensor integration and IoT development with Navira's workshop, focusing on real-time data transmission and building efficient IoT solutions for practical applications.",
    detailedDesc:
      "The efficacy in transmitting and receiving real-time data is crucial in applications where timely and accurate information is essential. Sensor integration and IoT development has the potential to transform industries by connecting physical devices to the digital world. Sensors gather real-time data and IoT platforms enable this data to be transmitted, analyzed, and processed using the internet. This integration paves opportunity for automation, improved efficiency and  decision-making across various applications including industrial automation, healthcare, and agriculture. The workshop on Sensor Integration and IoT Development by Navira offers an opportunity to enhance skills in sensor integration and IoT solution development. The session will be handled by Dr. Raghu C. V, Asst. Professor, Dept. of Electronics and Communication, NIT Calicut.",
    delay: "200",
    speaker_name: "Dr. Raghu C. V.",
    speaker_pos:
      "Assistant Professor, Department of Electronics and Communication Engineering, NIT Calicut.",
    hover_img: _01_hover,
    classname: "",
    cardpadding: "pb-16",
  },
  {
    img: _02,
    speaker: speaker_02,
    speaker_name: "SAFAD ISMAIL",
    speaker_pos:
      "Asst.Professor.Saintgits Engineering College (Autonomous) Mtech,LLB.",
    title: "AI and ML for Healthcare, Finance, and EVs",
    desc: "The integration of AI and ML in healthcare, finance, and EVs is redefining innovation and efficiency. Navira: Journey Beyond Limits brings you a workshop to explore their real-world applications in diagnostics, analytics, and EVs.",
    detailedDesc:
      "The integration of AI and ML in healthcare, finance, and EVs is redefining innovation and efficiency. Artificial Intelligence enhances diagnostics, predicts diseases, and personalizes treatments in healthcare sector. In finance, it plays key role in detection and management of risk and improving customer insights. Machine Learning optimizes battery performance, enables autonomous driving, and improves energy efficiency in Electric Vehicles. The integration of AI & ML with these sectors drives transformation, productivity, and smarter decision-making. Navira  brings to you the workshop on AI & ML to explore their real-world applications in diagnostics, analytics, and EVs. The session will be mentored by Safad Ismail, Asst. Professor, Saintgits College of Engineering.",
    delay: "0",
    hover_img: _02_hover,
    classname: "pb-7",
    cardpadding: "pb-16",
  },
  {
    img: _03,
    speaker: speaker_03,
    speaker_name: "Akhil M Mani",
    speaker_pos: "Lead Unity Developer, XR Horizon",
    title: "Extended Reality",
    desc: "Navira: Journey Beyond Limits brings you a workshop on Extended Reality, introducing Virtual Reality, Augmented Reality, and Mixed Reality. Discover how XR is transforming industries like education and healthcare.",
    detailedDesc:
      "The efficacy in creating immersive environments is crucial in applications where user engagement and interaction are essential. Extended Reality (XR) combines Virtual Reality (VR), Augmented Reality (AR), and Mixed Reality (MR) to transform how we interact with digital and physical spaces. XR development enables the creation of immersive experiences, real-time simulations, and interactive solutions that enhance industries like gaming, healthcare, education, and industrial training. The workshop on Extended Reality by Navira offers an opportunity to delve into the fundamentals of XR development, explore real-world applications, and understand its impact on various industries. The session will be handled by Akhil M Mani, Lead Unity Developer, XR Horizon.",
    delay: "100",
    hover_img: _03_hover,
    classname: "pb-7",
    cardpadding: "pb-32",
  },
];
// data-aos='fade-left' data-aos-duration='200' data-aos-delay={delay}
function Card({
  img,
  title,
  desc,
  delay,
  hover_img,
  classname,
  cardpadding,
  onClick,
}) {
  return (
    <>
      <div
        className={
          "group w-[20vw] max-[890px]:w-[40vw] min-w-[200px] grow max-[1240px]:py-10 max-[1240px]:gap-7 max-[1100px]:p-3 max-[1100px]:py-5 max-[450px]:w-[80vw] overflow-hidden text-white relative bg-quarternery h-full flex-1 p-6 py-14 flex flex-col gap-10 max-[1420px]:gap-8 cursor-pointer hover:scale-105 transision-all  duration-200 hover:shadow-2xl shadow-black " +
          cardpadding
        }
        data-aos="fade-left"
        data-aos-duration="200"
        onClick={onClick}
        data-aos-delay={delay}>
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
          }>
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

function Workshops() {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalIndex, setModalIndex] = useState(-1);

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
      id="workshops">
      <div className="flex flex-col justify-center w-full mb-20 ">
        <span className="mb-3 text-4xl font-bold text-center font-heading text-secondary">
          Workshops
        </span>
        <span
          ref={elementRef}
          className={`bg-secondary w-[30vh] h-1 rounded-full mt-1 ${
            isVisible ? "animate1" : ""
          }`}></span>
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
            onClick={() => {
              setModalVisible(!modalVisible);
              setModalIndex(index);
            }}
          />
        ))}
      </div>
      {modalVisible && (
        <div
          className="fixed top-0 left-0 z-40 flex items-center justify-center w-screen h-screen overflow-scroll backdrop-blur-lg"
          onClick={(e) => {
            setModalVisible(false);
            e.stopPropagation();
          }}>
          <div className="w-[65vw] h-[70vh] bg-primary border border-secondary relative flex max-[730px]:w-[90vw] max-[520px]:pt-8  max-[730px]:h-[80vh] max-[640px]:flex-col max-[640px]:overflow-scroll">
            <button
              className="absolute text-2xl top-4 right-5"
              onClick={() => setModalVisible(false)}>
              <IoIosCloseCircle />
            </button>
            <div className="flex flex-col items-center h-full gap-0 p-8 shrink-0 max-[640px]:h-fit max-[640px]:p-5  w-72 max-[640px]:w-full">
              <img src={cardList[modalIndex].speaker} alt="" className="" />
              <h3 className="pt-3 text-2xl font-bold">
                {cardList[modalIndex].speaker_name}
              </h3>
              <h4 className="text-center text-md">
                {cardList[modalIndex].speaker_pos}
              </h4>
            </div>
            <div className="flex flex-col gap-4 p-8 min-[640px]:overflow-scroll max-[640px]:p-5 ">
              <h3 className="text-3xl font-bold">
                {cardList[modalIndex].title}
              </h3>
              <p> {cardList[modalIndex].detailedDesc}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Workshops;
