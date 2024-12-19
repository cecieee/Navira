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
import Photo1 from "../src/assets/Images/photo1.webp";
import Photo2 from "../src/assets/Images/photo2.webp";
import Photo3 from "../src/assets/Images/vol.webp";
import Photo4 from "../src/assets/Images/photo4.webp";
import Photo5 from "../src/assets/Images/photo5.webp";
import Photo6 from "../src/assets/Images/photo6.webp";
import Photo7 from "../src/assets/Images/photo7.webp";
import Photo8 from "../src/assets/Images/photo3.webp";
import Photo9 from "../src/assets/Images/photo10.webp";
import Photo10 from "../src/assets/Images/photo11.webp";
import { BackgroundBeams } from "./Components/ui/Background-Beams.jsx";

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
    }, 6000);
    return () => clearTimeout(timeout);
  }, []);

  const products = [
    {
      title: "Moonbeam",
      thumbnail: Photo1,
    },
    {
      title: "Cursor",
      thumbnail: Photo2,
    },
    {
      title: "Rogue",
      thumbnail: Photo3,
    },

    {
      title: "Editorially",
      thumbnail: Photo4,
    },
    {
      title: "Editrix AI",
      thumbnail: Photo5,
    },
    {
      title: "Pixel Perfect",
      thumbnail: Photo6,
    },

    {
      title: "Algochurn",
      thumbnail: Photo7,
    },
    {
      title: "Aceternity UI",
      thumbnail: Photo8,
    },
    {
      title: "Tailwind Master Kit",
      thumbnail: Photo9,
    },
    {
      title: "SmartBridge",
      thumbnail: Photo10,
    },
    {
      title: "Renderwork Studio",
      thumbnail: Photo1,
    },

    {
      title: "Creme Digital",
      thumbnail: Photo3,
    },
    {
      title: "Golden Bells Academy",
      thumbnail: Photo5,
    },
    {
      title: "Invoker Labs",
      thumbnail: Photo7,
    },
    {
      title: "E Free Invoice",
      thumbnail: Photo9,
    },
  ];

  return (
    <div className={`overflow-x-hidden App bg-dark ${loading ? "h-screen w-screen overflow-hidden" : ""}`}>
      {loading && <Loading />}
      <div className="relative antialiased text-white App">
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
        <Mapsection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
