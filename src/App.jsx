import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/FeaturesSection";
import Portfolio from "./components/PortfolioSection";
import Skills from "./components/Skills";
import Testimonial from "./components/TestimonialSection";
import Blog from "./components/BlogSection";
import Contact from "./components/ContactSection";
import Footer from "./components/Footer";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";


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
        <Route path = "/" element = {<MainPage/>} />
        <Route path = "/Features" element = {<Features/>} />
        <Route path = "/Portfolio" element = {<Portfolio/>} />
        <Route path = "/Testimonial" element = {<Testimonial/>} />
        <Route path = "/Blog" element = {<Blog/>} />
        <Route path = "/Contact" element = {<Contact/>} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
