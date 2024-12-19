import React from 'react';
import './Loading.css';

function Loading() {
  return (
    <div className="loader h-screen w-screen flex justify-center items-center text-[15em] fixed overflow-hidden z-50 pointer-events-none font-heading"></div>
  );
}

export default Loading;