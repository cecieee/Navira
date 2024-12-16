import React, {useEffect} from "react";
import './Loading.css';
import logo from "../../assets/Logos/logo.png"

function Loading() {
  useEffect(() => {
    // Disable scrolling on mount
    document.body.style.overflow = 'hidden';

    // Enable scrolling again when the component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);
  return (
  <div className="Loader fixed w-screen z-50 h-[100dvh] bg-[#111827]">
		  <div className="flex items-center justify-center w-full h-full load">
		<img src={logo} alt="" className="w-24"/>
   </div>
      <div class="smart-glass h-screen w-screen flex justify-center items-center">
  <div className="logo">
    <div className="circle">
      <div className="circle">
          <div className="circle">
          </div>
      </div>
  </div>
	
  </div>
</div>
    </div>
  );
}

export default Loading;
