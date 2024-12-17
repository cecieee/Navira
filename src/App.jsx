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

  return (
    <div className="overflow-x-hidden App">
      {/* {loading && <Loading />} */}
      <div className=" relative text-white antialiased  App bg-primary">
        <Navbar />
        <Home />
        <TracingBeam>
          <div className="relative">
            <About />
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
