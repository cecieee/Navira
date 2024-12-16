import React, { useRef, useEffect, useState } from 'react';
import k1 from '../../assets/Kitchen10.png';
import w1 from '../../assets/wardrobe1.png';
import './About.css';

function About() {
  
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

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='flex flex-wrap items-center w-screen pb-20 overflow-hidden h-fit ' id='about'>
      <div className=' pt-20  px-3 w-fit flex flex-col items-center  min-[1000px]:h-screen min-[1000px]:w-1/3 min-[1000px]:mt-40 min-[1000px]:ml-5 min-[1000px]:mr-10 min-[1000px]:justify-center min-[767px]:visible max-[767px]:hidden'>
        <img className="w-full shadow-2xl min-[1000px]:min-w-72 min-[1000px]:translate-x-[10%] max-[767px]:w-[90%]  min-[767px]:visible" src={k1} alt="" />
        <img className="w-[45%] translate-x-[110%] translate-y-[-70%] border-2 border-primary shadow-2xl invisible min-[1000px]:visible" src={w1} alt="" />
      </div>

      <div className="flex flex-col  justify-start h-full ml-10 mr-10  min-[1000px]:w-[45%] min-[1000px]:ml-20">
        {/* <h1 className="text-secondary text-4xl font-heading w-full mt-10 min-[1000px]:text-start">About NAVIRA</h1> */}

        <div className='  pt-10 px-3 w-fit flex flex-col items-center min-[1000px]:h-screen min-[1000px]:w-1/3 min-[1000px]:mt-40 min-[1000px]:ml-5 min-[1000px]:mr-10 min-[1000px]:justify-center min-[767px]:hidden'>
        <img className="w-full shadow-2xl min-[1000px]:min-w-72 min-[1000px]:translate-x-[10%] max-[767px]:w-[90%]  min-[767px]:hidden" src={k1} alt="" />
        
      </div>

        {/* <h1 className="flex w-full mt-5 text-3xl text-start " data-aos='flip-up' data-aos-duration="1000">We have the Right Solution</h1> */}
        <h1 className="text-secondary text-4xl font-heading w-full mt-10 min-[1000px]:text-start">About NAVIRA</h1>

        <span ref={elementRef} className={`bg-secondary w-[30vh] h-1 rounded-full mt-1 ${isVisible ? 'animate' : ''}`}></span>
        <p className="flex w-full mt-10 text-lg text-wrap" data-aos="fade-up" data-aos-duration="800">Creating a beautiful and welcoming home is a universal aspiration. At ABC Decor, we believe that the essence of one's heart resides in the home.</p>
        <div className="flex flex-wrap gap-10 min-[790px]:justify-center min-[790px]:gap-10 text-center min-[1000px]:text-start min-[1230px]:gap-13 min-[1330px]:gap-14">

          <div className='flex flex-col pt-5 w-fit min-[790px]:w-[35%] min-[1000px]:w-[45%] min-[1230px]:w-[45%]'>
            <h1 className='pb-5 text-2xl' data-aos="fade-up" data-aos-duration="500">Heading1</h1>
            <p data-aos="fade-up" className='text-justify text-pretty' data-aos-duration="500">"The ethereal glow of twilight cast a mesmerizing spell over the tranquil landscape. A symphony of crickets and frogs played in harmony, creating a soothing melody that echoed through the air. </p>
          </div>
          <div className='flex flex-col pt-5 min-[790px]:w-[35%] min-[1000px]:w-[45%] min-[1230px]:w-[45%]'>
             <h1 className='pb-5 text-2xl' data-aos="fade-up" data-aos-duration="500">Heading</h1>
             <p data-aos="fade-up" className='text-justify text-pretty' data-aos-duration="500">"The ethereal glow of twilight cast a mesmerizing spell over the tranquil landscape. A symphony of crickets and frogs played in harmony, creating a soothing melody that echoed through the air. </p>
          </div>
          <div className='flex flex-col pt-5 min-[790px]:w-[35%] min-[1000px]:w-[45%] min-[1230px]:w-[45%]'>
              <h1 className='pb-5 text-2xl' data-aos="fade-up" data-aos-duration="500">Heading</h1>
              <p data-aos="fade-up" className='text-justify text-pretty' data-aos-duration="500">"The ethereal glow of twilight cast a mesmerizing spell over the tranquil landscape. A symphony of crickets and frogs played in harmony, creating a soothing melody that echoed through the air. </p>
         </div>
          <div className='flex flex-col pt-5 min-[790px]:w-[35%] min-[1000px]:w-[45%] min-[1230px]:w-[45%]'>
              <h1 className='pb-5 text-2xl' data-aos="fade-up" data-aos-duration="500">Heading</h1>
              <p data-aos="fade-up" className='text-justify text-pretty' data-aos-duration="500">"The ethereal glow of twilight cast a mesmerizing spell over the tranquil landscape. A symphony of crickets and frogs played in harmony, creating a soothing melody that echoed through the air. </p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default About;
