import React from 'react'
import TestimonialSection from '../Home/TestimonialSection'

const Testimonial = () => {
  return (
    <div>
      <section className="bg-cover bg-center h-[400px]" style={{ backgroundImage: "url('portfolio-img.jpg')" }}>
        <div className='flex flex-col justify-center items-center h-96'>
            <h2 className='text-4xl font-bold text-red-600 mb-1'>Testimonial</h2>
            <p className='text-lg'>Home / Testimonial</p>
        </div>
      </section>
      <TestimonialSection/>
    </div>
  )
}

export default Testimonial
