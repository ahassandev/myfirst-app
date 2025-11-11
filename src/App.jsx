import React from 'react'
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Portfolio from './components/Portfolio';
import Testimonial from './components/Testimonial';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Features/>
      <Portfolio/>
      <Testimonial/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
