import React from 'react'
import TestimonialSection from '../Home/TestimonialSection'
import useAppData from '../../hooks/useAppData';

const Testimonial = () => {
  const { data, loading, error } = useAppData();
     if (loading) return <h3>Loading...</h3>;
     if (error) return <h3>{error}</h3>;
  return (
    <div>
      <section className="bg-cover bg-center h-[400px]" style={{ backgroundImage: "url('portfolio-img.jpg')" }}>
        <div className='flex flex-col justify-center items-center h-96'>
            <h2 className='text-4xl font-bold text-red-600 mb-1'>Testimonial</h2>
            <p className='text-lg'>Home / Testimonial</p>
        </div>
      </section>
            <TestimonialSection testimonials={data.testimonials}/>
    </div>
  )
}

export default Testimonial
