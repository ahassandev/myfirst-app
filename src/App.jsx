import React from 'react'
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Portfolio from './components/Portfolio';
import Testimonial from './components/Testimonial';

const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Features/>
      <Portfolio/>
      <Testimonial/>
    </div>
  )
}

export default App
