import React, { useState } from "react";
import myimage from "../assets/Images/myimage.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative flex justify-between items-center px-6 md:px-16 py-3 sticky top-0 z-50 bg-white shadow-md">
      
    
      <div className="flex items-center gap-3 cursor-pointer">
        <div className="relative inline-block">
          <img
            src={myimage}
            className="w-14 h-14 rounded-full object-cover"
            alt=""
          />
          <span
            className="absolute inset-0 rounded-full border-2 border-gray-300 scale-[1.15] transition-all duration-300 hover:border-pink-500"
          ></span>
        </div>
        <h1 className="text-xl font-bold">Ahmad Hassan</h1>
      </div>

      <ul className="hidden lg:flex gap-10">
        <li><a className="hover:text-pink-600" href="#">Home</a></li>
        <li><a className="hover:text-pink-600" href="#">Features</a></li>
        <li><a className="hover:text-pink-600" href="#">Portfolio</a></li>
        <li><a className="hover:text-pink-600" href="#">Testimonial</a></li>
        <li><a className="hover:text-pink-600" href="#">Contact</a></li>
      </ul>

  
      <button className="hidden lg:block text-pink-500 text-sm font-semibold py-3 px-5 shadow-lg rounded-md bg-100 hover:bg-gradient-to-br hover:from-blue-400 hover:to-pink-500 hover:text-white transition-all duration-300">
        BUY NOW
      </button>

      <div className="lg:hidden z-50" onClick={() => setOpen(!open)}>
        <span className="text-3xl cursor-pointer">&#9776;</span>
      </div>

      {open && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-lg flex flex-col items-center gap-4 py-5 lg:hidden z-40">
          <a className="hover:text-pink-600" href="#">Home</a>
          <a className="hover:text-pink-600" href="#">Features</a>
          <a className="hover:text-pink-600" href="#">Portfolio</a>
          <a className="hover:text-pink-600" href="#">Testimonial</a>
          <a className="hover:text-pink-600" href="#">Contact</a>

          <button className="text-pink-500 text-sm font-semibold py-3 px-5 shadow-lg rounded-md bg-100 hover:bg-gradient-to-br hover:from-blue-400 hover:to-pink-500 hover:text-white transition-all duration-300">
            BUY NOW
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
