// import React from 'react'
// import { useState } from 'react'
// import { useEffect } from 'react'
// import Kitchen1 from '../../assets/kitchen1.png'
// import Kitchen2 from '../../assets/kitchen2.png'
// import Kitchen3 from '../../assets/kitchen3.png'
// import Kitchen4 from '../../assets/kitchen4.png'
// import Kitchen5 from '../../assets/kitchen5.png'
// import Kitchen6 from '../../assets/kitchen6.png'
// import Kitchen7 from '../../assets/kitchen7.png'
// import Kitchen8 from '../../assets/Kitchen8.png'
// import Kitchen9 from '../../assets/Kitchen9.png'
// import Kitchen10 from '../../assets/Kitchen10.png'
// import Wardrobe1 from '../../assets/wardrobe1.png'
// import Vanity1 from '../../assets/Kitchen10.png'
// import MultiF1 from '../../assets/kitchen5.png'




// function Gallery(props) {
//   const Kitchens=[
//       Kitchen1,
//       Kitchen2,
//       Kitchen3,
//       Kitchen4,
//       Kitchen5,
//       Kitchen6,
//       Kitchen7,
//       Kitchen8,
//       Kitchen9,
//       Kitchen10     
//     ]
//     const Wardrobes=[
//       Wardrobe1,
//     ]
//     const Vanities=[
//       Vanity1,
//     ]
//     const MultiF=[
//       MultiF1,
//     ]    
  

//   const images={
//     "Kitchens":[...Kitchens],
//     "Wardrobes":[...Wardrobes],
//     "Vanities":[...Vanities],
//     "Multifunctional Units":[...MultiF],
//     "Our Gallery":[...Kitchens,...Wardrobes,...Vanities,...MultiF]  
//   }
  

//   const [showImage,setShowImage]=useState(false);
//   const [imgIndex,setImgIndex]=useState(0);
  
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
  
//   return (
//     <div className='relative flex flex-col'>
//       <div className='z-0 flex flex-col min-h-screen m-10 mb-2'>    
//         <h1 className='px-5 text-4xl font-bold text-secondary font-heading'>{props.title}</h1>
//         <div className='grid grid-cols-3 gap-5 max-[570px]:grid-cols-2 justify-items-center p-5 pb-2 max-[425px]:px-0 max-[425px]:grid-cols-1'>
//           {
//             images[`${props.title}`].map((path,index)=>(<div className='relative cursor-pointer group' onClick={()=>{setImgIndex(index);setShowImage(!showImage)}} key={index} > <img src={path} className='relative z-0 w-full h-full '></img><div className='absolute top-0 z-10 w-full h-full transition-all  opacity-65 group-hover:bg-secondary max-[425px]:group-hover:bg-transparent'></div></div> ))
//           }
//         </div>
//       </div>
//       <div className={'z-20 flex items-center backdrop-blur-sm justify-center w-screen max-[425px]:hidden h-screen '+(showImage?'fixed':'hidden')} onClick={()=>{setShowImage(!showImage)}}>
//           <img src={images[`${props.title}`][imgIndex]} className='w-[80vh]'></img>
//       </div>
//       <div className='flex items-center justify-center w-full p-4'>
//           <a href='/' className='relative p-3 overflow-hidden transition-all duration-100 border group hover:scale-105 bg-secondary text-primary hover:text-secondary font-heading hover:bg-primary border-secondary'>BACK TO HOME
//           <span className='absolute top-0 z-10 w-full h-1 transition-all duration-[150ms] bg-secondary delay-0 -left-full group-hover:left-0'></span>
//         <span className='absolute right-0 z-10 w-1 h-full transition-all duration-[150ms] delay-[150ms] bg-secondary -top-full group-hover:top-0'></span>
//         <span className='absolute bottom-0 z-10 w-full h-1 transition-all duration-[150ms] delay-[300ms] bg-secondary -right-full group-hover:right-0'></span>
//         <span className='absolute left-0 z-10 w-1 h-full transition-all duration-[150ms] delay-[450ms] bg-secondary -bottom-full group-hover:bottom-0'></span>
//       </a>
//       </div>
//     </div>
//   )
// }

// export default Gallery
