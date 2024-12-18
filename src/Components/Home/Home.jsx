// import React from "react";
// import classNames from "classnames";
// import Kitchen9 from "../../assets/Kitchen9.png";
// import multi from "../../assets/multi.png";
// import "./Home.css";
// import { useState, useEffect } from "react";

// const slides = [
//   {
//     name: "NAVIRA",
//     tagline: " ",
//     img: "https://thehomemakersindia.com/wp-content/uploads/2022/09/2.png",
//   },
//   {
//     name: "Workshops",
//     tagline: "Learn",
//     img: Kitchen9,
//   },
//   {
//     name: "CULTURALS",
//     tagline: "Classic",
//     img: "https://thehomemakersindia.com/wp-content/uploads/2022/09/3.png",
//   },
//   {
//     name: "sESSIONS",
//     tagline: "Elegant",
//     img: multi,
//   },
// ];

// function Home() {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const [prevSlide, setPrevSlide] = useState(0);
//   const [sliderReady, setSliderReady] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const IMAGE_PARTS = 4;

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 100) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const changeSlides = (change) => {
//     const length = slides.length;
//     let newPrevSlide = activeSlide;
//     let newActiveSlide = newPrevSlide + change;
//     if (newActiveSlide < 0) newActiveSlide = length - 1;
//     if (newActiveSlide >= length) newActiveSlide = 0;
//     setActiveSlide(newActiveSlide);
//     setPrevSlide(newPrevSlide);
//   };

//   useEffect(() => {
//     const slideInterval = setInterval(() => {
//       changeSlides(1);
//     }, 2500);

//     return () => clearInterval(slideInterval);
//   }, [changeSlides]);

//   return (
//     <div id="home" className={classNames("slider", { "s--ready": sliderReady })}>
//       <div className="absolute flex items-center justify-center w-screen h-screen">
//         <div className="h-[50vh] w-[50vw] backdrop-blur-sm z-10 max-[767px]:w-[80vw]"></div>
//     </div>
//       <div className="h-full w-full z-10 opacity-20 absolute bg-[#111827]"></div>
//       <div
//         className={`slider__slides ${
//           isScrolled ? "bg-primary" : "bg-[#111827]"
//         }`}
//       >
//         {slides.map((slide, index) => (
//           <div
//             className={classNames("slider__slide", {
//               "s--active": activeSlide === index,
//               "s--prev": prevSlide === index,
//             })}
//             key={slide.name}
//           >
//             <div className="relative z-10 slider__slide-content">
//               <div className="h-[50vh] w-[50vw] head-cont flex flex-col justify-center items-center z-10 max-[767px]:w-[80vw] max-[767px]:border-[3px]">
                
//                 <div className="corner"></div>
//                 <div className="corner"></div>
//                 <div className="corner"></div>
//                 <h3 className="relative slider__slide-subheading">
//                   {slide.tagline || slide.name}
//                 </h3>
//                 <h2 className="slider__slide-heading font-home-heading max-[1200px]:text-[6vw] max-[767px]:text-[8.5vw]">
//                   {slide.name
//                     .split("")
//                     .map((l, i) =>
//                       l === " " ? (
//                         <span key={i}>&nbsp;</span>
//                       ) : (
//                         <span key={i}>{l}</span>
//                       )
//                     )}
//                 </h2>
//               </div>
//             </div>
//             <div className="slider__slide-parts ">
//               {[...Array(IMAGE_PARTS).fill()].map((x, i) => (
//                 <div className="slider__slide-part" key={i}>
//                   <div
//                     className="slider__slide-part-inner"
//                     style={{ backgroundImage: `url(${slide.img})` }}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Home;
