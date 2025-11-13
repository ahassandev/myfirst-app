import React from 'react'
import HeroSection from './HeroSection'
import Features from './FeaturesSection'
import Portfolio from './PortfolioSection'
import Testimonial from './TestimonialSection'
import Blog from './BlogSection'
import Contact from './ContactSection'

function MainPage() {
  return (
    <>
      <HeroSection/>
      <FeaturesSection/>
      <PortfolioSection/>
      <TestimonialSection/>
      <BlogSection/>
      <ContactSection/>
    </>
  )
}

export default MainPage
