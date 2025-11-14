import Navbar from "./components/Navbar";
import Home from "./components/Pages/Home";
import Features from "./components/Pages/Features";
import Portfolio from "./components/Pages/Portfolio";
import Testimonial from "./components/Pages/Testimonial";
import Contact from "./components/Pages/Contact";
import Footer from "./components/Footer";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Routes, Route } from "react-router-dom";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      once: false,
      mirror: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path = "/" element = {<Home/>} />
         <Route path = "/Features" element = {<Features/>} />
         <Route path = "/Portfolio" element = {<Portfolio/>} />
         <Route path = "/Testimonial" element = {<Testimonial/>} />
        <Route path = "/Contact" element = {<Contact/>} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
