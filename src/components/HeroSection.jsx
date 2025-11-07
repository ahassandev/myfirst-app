import React from 'react'

import { FiFacebook, FiGithub, FiLinkedin }from "react-icons/fi"
import { FaWhatsapp }from "react-icons/fa"

const HeroSection = () => {
  return (<>

    <section className='bg-white'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
      <div className='container px-10 m-auto mt-32  '>
        <p className='text-2xl text-gray-600'>WELCOME TO MY WORLD</p>
        <h1 className='text-5xl mt-3 font-bold leading-14'>HI, I'm <span className='text-red-600'>Ahmad Hassan</span> <br/> a Professional Web Developer</h1> 
        <p className='mt-10 text-gray-500 leading-relaxed text-lg'>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that</p>


        <div className='flex gap-10 mt-10'>
        <a href="" className='text-3xl p-4 shadow-md shadow-black/50 rounded-2xl hover:bg-linear-to-br hover:from-blue-400 hover:to-pink-500 hover:text-white hover:-translate-y-1 transition-all duration-300'><FaWhatsapp/></a>
        <a href="" className='text-3xl p-4 shadow-md shadow-black/50 rounded-2xl hover:bg-linear-to-br hover:from-blue-400 hover:to-pink-500 hover:text-white hover:-translate-y-1 transition-all duration-300'><FiLinkedin/></a>
        <a href="" className='text-3xl p-4 shadow-md shadow-black/50 rounded-2xl hover:bg-linear-to-br hover:from-blue-400 hover:to-pink-500 hover:text-white hover:-translate-y-1 transition-all duration-300'><FiGithub/></a>
        </div>
        

        </div>
        <div>
          <img src="banner-01.png" className='w-[500px] m-auto pt-12' alt=""/>
        </div>
        </div>

    </section>
      <hr className='border-b border-gray-300 mt-32'/>
      </>
  )
}

export default HeroSection
