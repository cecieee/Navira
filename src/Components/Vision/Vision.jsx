import React, { useRef, useEffect, useState } from 'react';
import k1 from '../../assets/Kitchen10.png'
import w1 from '../../assets/wardrobe1.png'
import './Vision.css';

function Vision() {

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
    <div className='flex flex-wrap items-center w-screen h-fit pb-20 overflow-hidden  '>

      <div className="flex flex-col  justify-start h-full ml-10 mr-10  min-[1000px]:w-[45%] min-[1000px]:ml-20">
        <h1 className="text-secondary text-[38px] font-heading w-full mt-10 min-[1000px]:text-start">Vision</h1>
        <h1 className="text-3xl flex w-full mt-5 text-start  " data-aos='flip-up' data-aos-duration="1000">Discover the Perfect Solution</h1>
        <span ref={elementRef} className={`bg-secondary w-[30vh] h-1 rounded-full mt-1 ${isVisible ? 'animate' : ''}`}></span>
        <p className="text-lg flex w-full mt-10" data-aos="fade-up" data-aos-duration="800">Creating a beautiful and welcoming home is a universal aspiration. At ABC Decor, <br /> we believe that the essence of one's heart resides in the home.</p>
        <div className="flex flex-wrap gap-10 min-[790px]:justify-center min-[790px]:gap-14 text-center min-[1000px]:text-start min-[1000px]:justify-start min-[1230px]:gap-12 ">

          <div className='flex flex-col pt-5 w-fit min-[790px]:w-[35%] min-[1000px]:w-[40%] min-[1230px]:w-[45%]'>
            <h1 className='text-2xl pb-5' data-aos="fade-up" data-aos-duration="700">Heading1</h1>
            <p data-aos="fade-up" className='text-justify text-pretty' data-aos-duration="700">"The ethereal glow of twilight cast a mesmerizing spell over the tranquil landscape. A symphony of crickets and frogs played in harmony, creating a soothing melody that echoed through the air.</p>
          </div>

          <div className='flex flex-col pt-5 w-fit min-[790px]:w-[35%] min-[1000px]:w-[40%] min-[1230px]:w-[45%]'>
            <h1 className='text-2xl pb-5' data-aos="fade-up" data-aos-duration="700">Heading</h1>
            <p data-aos="fade-up" className='text-justify text-pretty' data-aos-duration="700">"The ethereal glow of twilight cast a mesmerizing spell over the tranquil landscape. A symphony of crickets and frogs played in harmony, creating a soothing melody that echoed through the air.</p>
          </div>

          <div className='flex flex-col pt-5 w-fit min-[790px]:w-[35%] min-[1000px]:w-[40%] min-[1230px]:w-[45%]'>
            <h1 className='text-2xl pb-5' data-aos="fade-up" data-aos-duration="700">Heading</h1>
            <p data-aos="fade-up" className='text-justify text-pretty' data-aos-duration="700">"The ethereal glow of twilight cast a mesmerizing spell over the tranquil landscape. A symphony of crickets and frogs played in harmony, creating a soothing melody that echoed through the air.</p>
          </div>

          <div className='flex flex-col pt-5 w-fit min-[790px]:w-[35%] min-[1000px]:w-[40%] min-[1230px]:w-[45%]'>
            <h1 className='text-2xl pb-5' data-aos="fade-up" data-aos-duration="700">Heading</h1>
            <p data-aos="fade-up" className='text-justify text-pretty' data-aos-duration="700">"The ethereal glow of twilight cast a mesmerizing spell over the tranquil landscape. A symphony of crickets and frogs played in harmony, creating a soothing melody that echoed through the air.</p>
          </div>

        </div>
      </div>

      <div className='pt-20 px-3 w-fit flex flex-col items-center  min-[1000px]:h-screen min-[1000px]:w-1/3 min-[1000px]:mt-40 min-[1000px]:ml-5 min-[1000px]:mr-10 min-[1000px]:justify-center'>
        <img className="w-full min-[1000px]:md:min-w-72 min-[1000px]:md:translate-x-[10%] max-[767px]:w-[90%]" src={k1} alt="" />
        <img className="w-[45%] translate-x-[-65%] translate-y-[-70%] border-2 border-primary shadow-2xl invisible min-[1000px]:visible" src={w1} alt="" />
      </div>

    </div>
  )
}

export default Vision;
