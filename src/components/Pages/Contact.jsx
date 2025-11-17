import React from 'react'
import ContactSection from "../Home/ContactSection"


const Contact = () => {
  return (
    <div> 
      <section className="bg-cover bg-center h-[400px]" style={{ backgroundImage: "url('portfolio-img.jpg')" }}>
        <div className='flex flex-col justify-center items-center h-96'>
            <h2 className='text-4xl font-bold text-red-600 mb-1'>Contact</h2>
            <p className='text-lg'>Home / Contact</p>
        </div>
      </section>  
      <ContactSection/>
    </div>
  )
}

export default Contact
