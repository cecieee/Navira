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
import Gallery from "./Pages/Gallery/Gallery.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./Components/Home/Home.jsx";
import Organizer from "./Components/Organizers/Organizers.jsx";
import Loading from "./Components/Loading/Loading.jsx";
import { TracingBeam } from "./Components/ui/Tracing-Beam.jsx";
import { HeroParallax } from "./Components/ui/Hero-Parallax.jsx";
import Countdown from "./Components/Countdown.jsx";

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
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
    },
    {
      title: "Cursor",
      link: "https://cursor.so",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/cursor.png",
    },
    {
      title: "Rogue",
      link: "https://userogue.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/rogue.png",
    },
   
    {
      title: "Editorially",
      link: "https://editorially.org",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/editorially.png",
    },
    {
      title: "Editrix AI",
      link: "https://editrix.ai",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/editrix.png",
    },
    {
      title: "Pixel Perfect",
      link: "https://app.pixelperfect.quest",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
    },
   
    {
      title: "Algochurn",
      link: "https://algochurn.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
    },
    {
      title: "Aceternity UI",
      link: "https://ui.aceternity.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
    },
    {
      title: "Tailwind Master Kit",
      link: "https://tailwindmasterkit.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
    },
    {
      title: "SmartBridge",
      link: "https://smartbridgetech.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
    },
    {
      title: "Renderwork Studio",
      link: "https://renderwork.studio",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
    },
   
    {
      title: "Creme Digital",
      link: "https://cremedigital.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
    },
    {
      title: "Golden Bells Academy",
      link: "https://goldenbellsacademy.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
    },
    {
      title: "Invoker Labs",
      link: "https://invoker.lol",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/invoker.png",
    },
    {
      title: "E Free Invoice",
      link: "https://efreeinvoice.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
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
