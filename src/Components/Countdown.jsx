import { useCallback, useEffect, useState, useRef } from "react";

const Countdown = () => {
  const [countDownTime, setCountDownTime] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const getTimeDifference = (countDownTime) => {
    const currentTime = new Date().getTime();
    const timeDifference = countDownTime - currentTime;

    if (timeDifference < 0) {
      setCountDownTime({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      });
    } else {
      const days = Math.floor(timeDifference / (24 * 60 * 60 * 1000));
      const hours = Math.floor((timeDifference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (60 * 1000)) / 1000);

      setCountDownTime({
        days: days.toString().padStart(2, '0'),
        hours: hours.toString().padStart(2, '0'),
        minutes: minutes.toString().padStart(2, '0'),
        seconds: seconds.toString().padStart(2, '0'),
      });
    }
  };

  const startCountDown = useCallback(() => {
    // Set the target date to January 18, 2025, 09:00:00
    const countDownDate = new Date(2025, 0, 18, 9, 0, 0).getTime();

    const interval = setInterval(() => {
      getTimeDifference(countDownDate);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    startCountDown();
  }, [startCountDown]);

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
    
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
    
  return (
      <div className="mb-20 max-[450px]:my-0 font-heading">
          <div className="flex flex-col justify-center w-full mb-10">
        <span className="mb-3 text-4xl font-bold text-center font-heading text-secondary">
          Countdown
        </span>
        <span
          ref={elementRef}
          className={`bg-secondary w-[vh] h-1 rounded-full mt-1 ${
            isVisible ? "animate1" : ""
          }`}></span>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-50% gap-8 sm:gap-16" data-aos="fade-in" data-aos-duration="1000">
        <span className="text-2xl sm:text-3xl font-semibold text-[#db5237] text-center tracking-widest px-2">
        </span>
        <div className="flex gap-3 lg:gap-10">
          <div className="flex flex-col gap-5 relative">
            <div className="h-12 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#f7f7f7] border-4 border-secondary rounded-lg">
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full "></div>
              <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#000]">
                {countDownTime?.days}
              </span>
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full "></div>
            </div>
            <span className="text-secondary text-xs sm:text-2xl text-center capitalize">
              {countDownTime?.days === 1 ? "Day" : "Days"}
            </span>
          </div>
          <h1 className="text-9xl text-secondary max-sm:hidden">:</h1>
          <div className="flex flex-col gap-5 relative">
            <div className="h-12 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#f7f7f7] border-4 border-secondary rounded-lg">
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full "></div>
              <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#000]">
                {countDownTime?.hours}
              </span>
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full "></div>
            </div>
            <span className="text-secondary text-xs sm:text-2xl text-center capitalize">
              {countDownTime?.hours === 1 ? "Hour" : "Hours"}
            </span>
          </div>
          <h1 className="text-9xl text-secondary max-sm:hidden">:</h1>
          <div className="flex flex-col gap-5 relative">
            <div className="h-12 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#f7f7f7] border-4 border-secondary rounded-lg">
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full "></div>
              <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#000]">
                {countDownTime?.minutes}
              </span>
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full "></div>
            </div>
            <span className="text-secondary text-xs sm:text-2xl text-center capitalize">
              {countDownTime?.minutes === 1 ? "Minute" : "Minutes"}
            </span>
          </div>
          <h1 className="text-9xl text-secondary max-sm:hidden">:</h1>
          <div className="flex flex-col gap-5 relative">
            <div className="h-12 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#f7f7f7] border-4 border-secondary rounded-lg">
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full "></div>
              <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#000]">
                {countDownTime?.seconds}
              </span>
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full "></div>
            </div>
            <span className="text-secondary text-xs sm:text-2xl text-center capitalize">
              {countDownTime?.seconds === 1 ? "Second" : "Seconds"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;