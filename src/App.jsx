import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Mapsection from "./Components/Mapsection/Mapsection";
import Products from "./Components/Workshops/Workshops.jsx";
import Vision from "./Components/Why Navira/Why Navira.jsx";
import Whyus from "./Components/Industrial Visits/Industrial Visits.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom/dist";
// import Gallery from "./Pages/Gallery/Gallery.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
// import Home from "./Components/Home/Home.jsx";
import Organizer from "./Components/Organizers/Organizers.jsx";
import Loading from "./Components/Loading/Loading.jsx";
import { TracingBeam } from "./Components/ui/Tracing-Beam.jsx";
import { HeroParallax } from "./Components/ui/Hero-Parallax.jsx";
import Countdown from "./Components/Countdown.jsx";
import Photo1 from "../src/assets/Images/photo1.png"
import Photo2 from "../src/assets/Images/photo2.png"
import Photo3 from "../src/assets/Images/photo3.png"
import Photo4 from "../src/assets/Images/photo4.png"

if (window.innerWidth > 767)
  AOS.init({
    offset: -500,
  });
else
  AOS.init({
    offset: -75,
  });

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [location]);

  const products = [
    {
      title: "Moonbeam",
      link: "https://gomoonbeam.com",
      thumbnail: Photo1,
    },
    {
      title: "Cursor",
      link: "https://cursor.so",
      thumbnail:Photo2
    },
    {
      title: "Rogue",
      link: "https://userogue.com",
      thumbnail: Photo3
    },
   
    {
      title: "Editorially",
      link: "https://editorially.org",
      thumbnail: Photo4
    },
    {
      title: "Editrix AI",
      link: "https://editrix.ai",
      thumbnail: Photo4
    },
    {
      title: "Pixel Perfect",
      link: "https://app.pixelperfect.quest",
      thumbnail: Photo4
    },
   
    {
      title: "Algochurn",
      link: "https://algochurn.com",
      thumbnail: Photo4
    },
    {
      title: "Aceternity UI",
      link: "https://ui.aceternity.com",
      thumbnail: Photo4
    },
    {
      title: "Tailwind Master Kit",
      link: "https://tailwindmasterkit.com",
      thumbnail: Photo4
    },
    {
      title: "SmartBridge",
      link: "https://smartbridgetech.com",
      thumbnail: Photo4
    },
    {
      title: "Renderwork Studio",
      link: "https://renderwork.studio",
      thumbnail: Photo4
    },
   
    {
      title: "Creme Digital",
      link: "https://cremedigital.com",
      thumbnail: Photo4
    },
    {
      title: "Golden Bells Academy",
      link: "https://goldenbellsacademy.com",
      thumbnail: Photo4
    },
    {
      title: "Invoker Labs",
      link: "https://invoker.lol",
      thumbnail: Photo4
    },
    {
      title: "E Free Invoice",
      link: "https://efreeinvoice.com",
      thumbnail: Photo4
    },
  ];

  return (
    <div className="overflow-x-hidden App">
      {/* {loading && <Loading />} */}
      <div className=" relative text-white antialiased  App bg-primary">
        <Navbar />
        <HeroParallax products={products} />
        <TracingBeam>
          <div className="relative">
            <About />
            <div className="w-screen">
              <Countdown />
            </div>
            <Organizer />
            <Products />
            <Vision />
            <Whyus />
          </div>
        </TracingBeam>
        {/* <Mapsection /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
