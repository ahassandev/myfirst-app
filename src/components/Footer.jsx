import React from "react";
import myimage from "../assets/Images/myimage.png";
import { FiFacebook, FiGithub, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <section className="container mx-auto px-16 py-8">
        <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <div className="flex items-center gap-3 mt-4">
              <div className="relative inline-block">
                <img
                  src={myimage}
                  className="w-14 h-14 rounded-full object-cover cursor-pointer"
                  alt=""
                />
                <span
                  className="
                absolute inset-0
                rounded-full
                border-2
                border-gray-300
                scale-[1.15]
                transition-all duration-300
                hover:border-pink-500
              "
                ></span>
              </div>
              <h1 className="text-xl font-bold cursor-pointer">Ahmad Hassan</h1>
            </div>

            <div className="flex gap-10 mt-10">
              <a
                href=""
                className="text-3xl p-4 shadow-[0_0_20px_rgba(0,0,0,0.3)] rounded-2xl hover:bg-linear-to-br hover:from-blue-400 hover:to-pink-500 hover:text-white hover:-translate-y-1 transition-all duration-300"
              >
                <FaWhatsapp />
              </a>
              <a
                href=""
                className="text-3xl p-4 shadow-[0_0_20px_rgba(0,0,0,0.3)] rounded-2xl hover:bg-linear-to-br hover:from-blue-400 hover:to-pink-500 hover:text-white hover:-translate-y-1 transition-all duration-300"
              >
                <FiLinkedin />
              </a>
              <a
                href=""
                className="text-3xl p-4 shadow-[0_0_20px_rgba(0,0,0,0.3)] rounded-2xl hover:bg-linear-to-br hover:from-blue-400 hover:to-pink-500 hover:text-white hover:-translate-y-1 transition-all duration-300"
              >
                <FiGithub />
              </a>
            </div>
          </div>

          <div className="mt-3 md:mt-0 lg:mt-0 sm:ml-0 md:ml-0 lg:ml-12">
            <ul className="space-y-2">
                <p className="text-red-500 mb-4 text-xl">QUICK LINK</p>
                <li><a href="#" className="text-xl relative inline-block group hover:text-red-500">About <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span></a></li>
                <li><a href="#" className="text-xl relative inline-block group hover:text-red-500">Portfolio <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span></a></li>
                <li><a href="#" className="text-xl relative inline-block group hover:text-red-500">Services <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span></a></li>
                <li><a href="#" className="text-xl relative inline-block group hover:text-red-500">Blog <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span></a></li>
                <li><a href="#" className="text-xl relative inline-block group hover:text-red-500">Contact <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span></a></li>
            </ul>
          </div>  

          <div className="mt-3 md:mt-2 lg:mt-0">
            <ul className="space-y-2">
                <p className="text-red-500 mb-4 text-xl">RESOURCES</p>
                <li><a href="#" className="text-xl relative inline-block group hover:text-red-500">Authentication <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span></a></li>
                <li><a href="#" className="text-xl relative inline-block group hover:text-red-500">System Status <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span></a></li>
                <li><a href="#" className="text-xl relative inline-block group hover:text-red-500">Terms of Service <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span></a></li>
                <li><a href="#" className="text-xl relative inline-block group hover:text-red-500">Pricing <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span></a></li>
                <li><a href="#" className="text-xl relative inline-block group hover:text-red-500">Over Right <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span></a></li>
            </ul>
          </div>

           <div className="mt-3 md:mt-2 lg:mt-0">
            <ul className="space-y-2">
                <p className="text-red-500 mb-4 text-xl">DEVELOPERS
                </p>
                <li><a href="#" className="text-xl relative inline-block group hover:text-red-500">Documentation
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span></a></li>
                <li><a href="#" className="text-xl relative inline-block group hover:text-red-500">Authentication <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span></a></li>
                <li><a href="#" className="text-xl relative inline-block group hover:text-red-500">API Reference <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span></a></li>
                <li><a href="#" className="text-xl relative inline-block group hover:text-red-500">Support <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span></a></li>
                <li><a href="#" className="text-xl relative inline-block group hover:text-red-500">Open Source <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span></a></li>
            </ul>
          </div>



        </div>
        <hr className="border-b border-gray-300 mt-32" />
        <p className="pt-8 text-xl text-gray-700 text-center"> All rights reserved by <a href="#" className="relative inline-block group hover:text-red-500">Ahmad Hassan
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span></a></p>
      </section>
    </div>
  );
};

export default Footer;
