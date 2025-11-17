import React from 'react'
import PortfolioSection from '../Home/PortfolioSection'

const Portfolio = () => {
  return (
    <div>
       <section className="bg-cover bg-center h-[400px]" style={{ backgroundImage: "url('portfolio-img.jpg')" }}>
        <div className='flex flex-col justify-center items-center h-96'>
            <h2 className='text-4xl font-bold text-red-600 mb-1'>Portfolio</h2>
            <p className='text-lg'>Home / Portfolio</p>
        </div>
      </section>
      <PortfolioSection/>
    </div>
  )
}

export default Portfolio
