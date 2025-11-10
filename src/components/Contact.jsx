import React from "react";

import { FiFacebook, FiGithub, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <section className="mx-auto py-16 px-8">
        <p className="text-red-600 font-semibold text-center">CONTACT</p>
        <h1 className="text-6xl font-bold text-gray-800 my-3 text-center">
          Contact With Me
        </h1>

        <div className="mt-10">
          <div className="max-w-md bg-white shadow-[0_0_20px_rgba(0,0,0,0.3)] rounded-2xl overflow-hidden ">
            <div className="flex flex-col justify-center items-center pt-7">
              <img
                src="portfolio-image.jpg"
                className="w-94 h-auto object-cover rounded-2xl transition-transform duration-300 ease-in-out group-hover:scale-105 cursor-pointer"
                alt=""
              />
            </div>
            <h2 className="ml-8 mt-7 text-3xl font-bold">Nevine Acotanza</h2>
            <p className="ml-8 mt-4 text-md">Chief Operating Officer</p>

            <p className="mx-8 mt-5 text-xl">
              I am available for freelance work. Connect with me via and call in
              to my account.
            </p>

            <p className="ml-8 mt-5">
              Phone: <a href="">+012 345 678 90</a>{" "}
            </p>
            <p className="ml-8 mt-1">
              Email: <a className="hover:underlin hover:text-red-500" href="">admin@example.com</a>{" "}
            </p>

            <p className="ml-8 mt-6">FIND WITH ME</p>

            <div className="flex gap-10 mt-7 pb-8 ml-8">
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
        </div>
      </section>
    </div>
  );
};

export default Contact;
