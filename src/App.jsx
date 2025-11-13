import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Portfolio from "./components/Portfolio";
import Testimonial from "./components/Testimonial";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


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
      <HeroSection />
      <Features />
      <Portfolio />
      <Testimonial />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
