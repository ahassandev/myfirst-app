import Navbar from "./components/Navbar";
import Home from "./components/Pages/Home";
// import Features from "../FeaturesSection";
// import Portfolio from "../PortfolioSection";
// import Skills from "../Skills";
// import Testimonial from "../TestimonialSection";
// import Blog from "../BlogSection";
// import Contact from "../ContactSection";
 import Footer from "./components/Footer";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Routes, Route } from "react-router-dom";
// import MainPage from "../MainPage";


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
        {/* <Route path = "/Features" element = {<Features/>} />
        <Route path = "/Portfolio" element = {<Portfolio/>} />
        <Route path = "/Testimonial" element = {<Testimonial/>} />
        <Route path = "/Blog" element = {<Blog/>} />
        <Route path = "/Contact" element = {<Contact/>} /> */}
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
