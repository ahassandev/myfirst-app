import React from 'react'

const HeroSection = () => {
  return (
    <section className='bg-white'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
      <div className='container px-10 m-auto mt-32  '>
        <p className='text-3xl'>WELCOME TO MY WORLD</p>
        <h1 className='text-5xl mt-3'>HI, I'm <span className='text-red-600'>Ahmad Hassan</span> <br/> a Professional Web Developer</h1> 
        <p className='mt-10'>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that</p>

        <p className='mt-24'>Find With Me</p>  

        </div>
        <div>
          <img src="Myimage (2).png" className='w-[600px] m-auto pt-12' alt=""/>
        </div>
        </div>
    </section>
  )
}

export default HeroSection
