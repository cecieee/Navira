"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import CTA from "../CTA";
import Logo from "../../assets/Logos/Navira.jpg";

export const HeroParallax = ({ products }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-fit pt-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]">
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="">
        <motion.div className="flex flex-row-reverse mb-10 space-x-10 space-x-reverse">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-10 space-x-10 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-10 space-x-reverse">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div
      className="relative top-0 left-0 z-50 flex flex-col w-full gap-5 px-4 pt-20 mx-auto max-w-7xl md:pt-40"
      id="home">
      <div>
        <h1 className="font-bold text-7xl md:text-9xl font-heading">NAVIRA</h1>
        {/* <img src={Logo} alt="" /> */}
        <p className="md:text-2xl text-secondary font-heading">
          18 - 19 January 2025 | CE Chengannur
        </p>
      </div>
      <p className="max-w-2xl mt-8 text-base md:text-xl font-heading dark:text-neutral-200">
        Navira: Journey Beyond Limits, an all-Kerala event by IEEE Women in
        Engineering Affinity Group College of Engineering Chengannur(WIE AG
        CEC), and IEEE Industry Applications Society Student Branch Chapter
        College of Engineering Chengannur (IAS SBC CEC)
      </p>
      <CTA width="250px" height="40px" />
    </div>
  );
};

export const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0">
      <img
        src={product.thumbnail}
        height="600"
        width="600"
        className="absolute inset-0 object-cover object-left-top w-full h-full"
        alt={product.title}
      />
    </motion.div>
  );
};
