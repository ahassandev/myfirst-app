import React from "react";
import FeatureCard from "../Features/FeatureCard";

const FeatureSection = ({ features }) => {
  if (!features || features.length === 0) return null;
  return (
    <div>
      <section className="container px-10 py-32 mx-auto">
        <p className="text-md md:text-md lg:text-xl text-center md:text-left lg:text-left text-red-600">{features.title}</p>
        <h1 className="text-4xl md:text-5xl lg:text-7xl text-center md:text-left lg:text-left font-bold text-gray-800 my-3">{features.heading}</h1>
          <FeatureCard services={features.services}/>
         <hr className='border-b border-gray-300 mt-32'/>
      </section>
    </div>
  );
};

export default FeatureSection;
