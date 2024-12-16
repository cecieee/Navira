import React from "react";
import logo from "../../assets/ABC_green.png";

function Mapsection() {
  return (
    <div className="h-[55vh] w-screen overflow-hidden flex max-[767px]:h-fit" id="contact">
      <div className="h-[100%] w-[25%] mapsection bg-cover bg-no-repeat flex justify-center items-center max-[767px]:hidden">
        <div className="h-full w-full rounded-md flex flex-col items-center backdrop-blur-3xl">
          <div className="h-[160px] w-[160px] bg-white mt-5 rounded-[50%] flex justify-center items-center">
            <img src={logo} alt="" className="h-[150px] w-[150px] mr-3" />
          </div>
          <div className="h-1.5 w-[90%] m-5 rounded-full bg-black z-10 "></div>
          <p className="text-black text-md font-semibold w-[75%] max-[767px]:w-screen font-heading z-10">NADUKKEKALAYIL ARCADE
                            CHETTIMUKKU<br></br> MARAMON<br></br>
                            PATHANAMTHITTA-689549
          </p>
        </div>
      </div>
      <div className="h-full w-[75%] max-[767px]:w-screen max-[767px]:h-[30vh]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.9104263568947!2d76.68907947430327!3d9.341194184025442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b063d0015318609%3A0xf4d85d7b6cc169e7!2sABC%20DECOR!5e0!3m2!1sen!2sin!4v1706065932029!5m2!1sen!2sin"
          width="100%"
          height="100%"
          loading="async"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Mapsection;
