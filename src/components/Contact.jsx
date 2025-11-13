import React from "react";

import { FiFacebook, FiGithub, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <section className="mx-auto container py-16 px-16">
        <p className="text-red-600 font-semibold text-center">CONTACT</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 my-3 text-center">
          Contact With Me
        </h1>

<div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10 items-start px-4 lg:px-0">
  <div className="col-span-1 bg-white shadow-[0_0_20px_rgba(0,0,0,0.3)] rounded-2xl overflow-hidden w-full">
    <div className="flex flex-col justify-center items-center pt-7">
      <img
        src="portfolio-image.jpg"
        className="w-80 h-auto object-cover rounded-2xl transition-transform duration-300 ease-in-out group-hover:scale-105 cursor-pointer"
        alt=""
      />
    </div>

    <h2 className="ml-8 mt-7 text-3xl font-bold">Nevine Acotanza</h2>
    <p className="ml-8 mt-4 text-md">Chief Operating Officer</p>

    <p className="mx-8 mt-5 text-xl text-gray-600">
      I am available for freelance work. Connect with me via and call in to my account.
    </p>

    <p className="ml-8 mt-5 text-gray-600">
      Phone:
      <a href="#" className="relative inline-block group text-gray-600 ml-1 hover:text-red-600">
        +012 345 678 90
        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
      </a>
    </p>

    <p className="ml-8 mt-1 text-gray-600">
      Email:
      <a href="#" className="relative inline-block group text-gray-600 ml-1 hover:text-red-500">
        admin@example.com
        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
      </a>
    </p>

    <p className="ml-8 mt-6">FIND WITH ME</p>

    <div className="flex gap-6 mt-7 pb-8 ml-8">
      <a href="#" className="text-3xl p-4 shadow-[0_0_20px_rgba(0,0,0,0.3)] rounded-2xl hover:bg-gradient-to-br hover:from-blue-400 hover:to-pink-500 hover:text-white hover:-translate-y-1 transition-all duration-300">
        <FaWhatsapp />
      </a>
      <a href="#" className="text-3xl p-4 shadow-[0_0_20px_rgba(0,0,0,0.3)] rounded-2xl hover:bg-gradient-to-br hover:from-blue-400 hover:to-pink-500 hover:text-white hover:-translate-y-1 transition-all duration-300">
        <FiLinkedin />
      </a>
      <a href="#" className="text-3xl p-4 shadow-[0_0_20px_rgba(0,0,0,0.3)] rounded-2xl hover:bg-gradient-to-br hover:from-blue-400 hover:to-pink-500 hover:text-white hover:-translate-y-1 transition-all duration-300">
        <FiGithub />
      </a>
    </div>
  </div>

  
  <form className="col-span-2 w-full p-8 bg-gray-200 shadow-[0_0_20px_rgba(0,0,0,0.3)] rounded-2xl">
    <div className="flex flex-col md:flex-row justify-between gap-5">
      <div className="w-full">
        <label className="block mb-3 text-sm font-medium text-gray-900">YOUR NAME</label>
        <input
          type="text"
          className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-xl rounded-lg w-full py-3 px-3 focus:outline-none focus:border-red-600"
        />
      </div>

      <div className="w-full">
        <label className="block mb-3 text-sm font-medium text-gray-900">PHONE NUMBER</label>
        <input
          type="text"
          className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-xl rounded-lg w-full py-3 px-3 focus:outline-none focus:border-red-600"
        />
      </div>
    </div>

    <div className="my-6">
      <label className="block mb-3 text-sm font-medium text-gray-900">SUBJECT</label>
      <input
        type="text"
        className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-xl rounded-lg w-full py-3 px-3 focus:outline-none focus:border-red-600"
      />
    </div>

    <div className="my-6">
      <label className="block mb-3 text-sm font-medium text-gray-900">EMAIL</label>
      <input
        type="text"
        className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-xl rounded-lg w-full py-3 px-3 focus:outline-none focus:border-red-600"
      />
    </div>

    <div>
      <label className="block mb-3 text-sm font-medium text-gray-900">MESSAGE</label>
      <textarea
        rows="7"
        className="w-full border-2 border-gray-300 bg-white p-3 rounded-lg resize-none focus:outline-none focus:border-red-600"
      ></textarea>
    </div>

    <button className="bg-gray-50 mt-8 shadow-[0_0_20px_rgba(0,0,0,0.3)] text-gray-600 w-full p-4 rounded-lg text-center hover:bg-gradient-to-br hover:from-blue-400 hover:to-pink-500 hover:text-white hover:-translate-y-1 transition-all duration-400 cursor-pointer">
      SEND MESSAGE
    </button>
  </form>
</div>


        <hr className="border-b border-gray-300 mt-32" />
      </section>
    </div>
  );
};

export default Contact;
