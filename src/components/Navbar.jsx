import React from 'react'
import myimage from '../assets/Images/myimage.png';
function Navbar() {
  return (
    <nav className='flex justify-between items-center mx-10' >
      <div className='flex items-center gap-3 mt-4'>
        <div className='relative inline-block'>
      <img src={myimage} className='w-14 h-14 rounded-full object-cover cursor-pointer' alt=""/>
      <span className="
    absolute inset-0
    rounded-full
    border-2
    border-gray-300
    scale-[1.15]
    transition-all duration-300
    hover:border-pink-500
  "></span>
      </div>
      <h1 className='text-xl font-bold cursor-pointer'>Ahmad Hassan</h1>
      </div>

      <ul className='flex gap-10 mt-2'>
        <li><a className='hover:text-pink-600' href="#">Home</a></li> 
        <li><a className='hover:text-pink-600' href="#">Features</a></li>
        <li><a className='hover:text-pink-600' href="#">Portfolio</a></li>
        <li><a className='hover:text-pink-600' href="#">Testimonial</a></li>
        <li><a className='hover:text-pink-600' href="#">Contact</a></li>
      </ul>

      <button className='text-pink-500 text-sm font-semibold  py-3.5 px-5 shadow-lg cursor-pointer mt-2 rounded-md bg-100 hover:bg-linear-to-br hover:from-blue-400 hover:to-pink-500 hover:text-white hover:-translate-y-1 transition-all duration-300' >BUY NOW</button>
    </nav>
  )
}

export default Navbar
