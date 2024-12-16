import AOS from 'aos'
import "aos/dist/aos.css"
import './App.css'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'
import Mapsection from './Components/Mapsection/Mapsection'
import Products from './Components/Workshops/Workshops.jsx'
import Vision from './Components/Why Navira/Why Navira.jsx'
import Whyus from './Components/Industrial Visits/Industrial Visits.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom/dist'
import Gallery from './Pages/Gallery/Gallery.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Home from './Components/Home/Home.jsx'
import Organizer from './Components/Organizers/Organizers.jsx'
import Loading from './Components/Loading/Loading.jsx'

if (window.innerWidth > 767)
  AOS.init({
    offset: -500,
  });
else
  AOS.init({
    offset: -75,});

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
    <div className='overflow-x-hidden App'>
      {loading && <Loading />}
      <Routes>
        <Route path="/" element={
          <div className='overflow-x-hidden text-white App bg-primary'>
            <Navbar />
            <Home />
            <About />
            <Organizer />
            <Products />
            <Vision />
            <Whyus />
            {/* <Mapsection /> */}
          </div>
        }></Route>
        <Route exact path="/gallery" element={<Gallery title={'Our Gallery'} />}></Route>
        <Route exact path='/gallery/kitchen' element={<Gallery title={'Kitchens'} />}></Route>
        <Route exact path='/gallery/wardrobes' element={<Gallery title={'Wardrobes'} />}></Route>
        <Route exact path='/gallery/vanities' element={<Gallery title={'Vanities'} />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App