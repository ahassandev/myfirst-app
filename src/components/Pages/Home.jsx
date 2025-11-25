import React from 'react'
import HeroSection from '../Home/HeroSection'
import FeaturesSection from '../Home/FeaturesSection'
import PortfolioSection from '../Home/PortfolioSection'
import SkillsSection from '../Home/SkillsSection'
import TestimonialSection from '../Home/TestimonialSection'
import BlogSection from '../Home/BlogSection'
import ContactSection from '../Home/ContactSection'
import useAppData from "../../hooks/useAppData";
import Test from '../Test';

function Home() {
   const { data, loading, error } = useAppData();
   if (loading) return <h3>Loading...</h3>;
   if (error) return <h3>{error}</h3>;
  return (
    <>
      <HeroSection/>
      <FeaturesSection features={data.features}/>
      <PortfolioSection portfolio={data.portfolio}/>
      <SkillsSection skill={data.skill}/>
      <TestimonialSection testimonials={data.testimonials}/>
      <BlogSection blog = {data.blog}/>
      <ContactSection/>
      <Test services={data.features.services}/>
    </>
  )
}

export default Home
