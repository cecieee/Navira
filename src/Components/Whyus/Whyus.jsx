import React, { useRef, useEffect, useState } from 'react';
import db from '../../assets/dreamhome-b.png'
import dw from '../../assets/dreamhome-w.png'
import bb from '../../assets/budget-b.png'
import bw from '../../assets/budget-w.png'
import lb from '../../assets/lights-b.png'
import lw from '../../assets/lights-w.png'
import sb from '../../assets/space-b.png'
import sw from '../../assets/space-w.png'

import './Whyus.css';

const cardList = [
  { img1: db,img2:dw, title: 'Dreamhome', delay: '0', desc: 'The ethereal glow of twilight cast a mesmerizing spell over the tranquil landscape. A symphony of crickets and frogs played in harmony, creating a soothing melody that echoed through the air.' },
  { img1: bb,img2:bw, title: 'Budget', delay: '100', desc: 'The ethereal glow of twilight cast a mesmerizing spell over the tranquil landscape. A symphony of crickets and frogs played in harmony, creating a soothing melody that echoed through the air.' },
  { img1: lb,img2:lw, title: 'Lights', delay: '200', desc: 'The ethereal glow of twilight cast a mesmerizing spell over the tranquil landscape. A symphony of crickets and frogs played in harmony, creating a soothing melody that echoed through the air.' },
  { img1: sb,img2:sw, title: 'Space', delay: '300', desc: 'The ethereal glow of twilight cast a mesmerizing spell over the tranquil landscape. A symphony of crickets and frogs played in harmony, creating a soothing melody that echoed through the air.' }
];



function Card ({img1, img2, title, desc, delay}){
  const [image, setImage] = useState(img1);
  return (
    <div className=''>
      <div className='group  border-tertiary border-[3.5px] w-[20vw] min-w-[200px] overflow-hidden relative bg-white h-[60vh]  p-6 flex flex-col  gap-10 cursor-pointer
       hover:scale-105 hover:bg-secondary transision-all duration-500 hover:shadow-2xl shadow-black mb-5  
        max-[890px]:w-[40vw]  max-[1240px]:py-10 max-[1240px]:gap-7 max-[1100px]:p-3 max-[1100px]:py-5 max-[450px]:w-[80vw] max-[1420px]:gap-8'
         onMouseEnter={() => setImage(img2) }
        onMouseLeave={() => setImage(img1)}
        data-aos='fade-left' data-aos-duration='200' data-aos-delay={delay}
      >
        <div className='flex justify-center'>
        <img src={image} alt="" className='w-32 max-[1240px]:w-28 duration-500 group-hover:scale-105 transision-all' />
        </div>
         
        <p className=' w-full font-semibold text-[1.5vw] max-[1100px]:text-[1.7vw] max-[890px]:text-[2.5vw] max-[450px]:text-[6vw] text-center group-hover:text-white'>{title}</p>
        <p className=' text-pretty   text-[0.9vw]  max-[890px]:text-[1.6vw] max-[450px]:text-[3.5vw] text-justify group-hover:text-white'>{desc}</p>
        
      </div>
    </div>
  )
}



function Whyus() {

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
    <div className='flex flex-col w-screen p-20 max-[920px]:p-5 h-fit max-[1100px]:p-10'>
      <div className='flex flex-col justify-center w-full mb-20  '>
        <span className='text-5xl font-bold font-heading text-secondary  text-center mb-3'>Why Choose US</span>
        <span ref={elementRef} className={`bg-secondary w-[30vh] h-1 rounded-full mt-1 ${isVisible ? 'animate1' : ''}`}></span>
      </div>
            <div className='w-fit h-fit my-10 flex max-[1100px]:self-center max-[930px]:gap-3 justify-center gap-5 flex-wrap max-[1024px]:w-full'>
              {cardList.map((item, index)=>(
                <Card key={index} img1={item.img1} img2={item.img2} title={item.title} delay={item.delay} desc={item.desc} />))
              }
            </div>
            
    </div>
  )
}

export default Whyus
