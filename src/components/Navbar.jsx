import React from 'react'
import myimage from '../assets/Images/myimage.png';
function Navbar() {
  return (
    <nav className='flex justify-between items-center mx-7'>
      <div className='flex items-center gap-3'>
      <img src={myimage} className='w-17 h-17 rounded-full' alt=""/>
      <h1 className='text-xl'>Ahmad Hassan</h1>
      </div>

      <ul className='flex gap-3'>
        <li><a href="#">Home</a></li>
        <li><a href="#">Features</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Testimonial</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
