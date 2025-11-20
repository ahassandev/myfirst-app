import React from "react";

const FeatureCard = ({ services }) => {
  if (!services || services.length === 0) return null;

  return (
    <div className="gap-5 mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <div
          key={index}
          className="relative p-16 rounded-2xl bg-white shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:bg-linear-to-br hover:from-blue-400 hover:to-pink-500 hover:text-white hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          <div className="w-10 h-10 border-4 border-pink-500 rounded-full mb-6 group-hover:border-white"></div>

          <h1 className="font-semibold text-2xl">{service.title}</h1>

          <p className="text-gray-600 mt-4 group-hover:text-white">
            {service.description}
          </p>

          <div className="absolute text-2xl bottom-6 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            ➜
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureCard;
