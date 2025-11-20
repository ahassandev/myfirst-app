import React from "react";
import PortfolioCard from "../PortfolioCard";

const PortfolioSection = ({ portfolio }) => {
  if (!portfolio || !portfolio.projects || portfolio.projects.length === 0)
    return null;

  return (
    <div>
      <section className="container px-10 mx-auto pb-24 mt-16">
        <p className="text-red-600 text-center">{portfolio.title}</p>

        <h1 className="text-5xl md:text-5xl lg:text-7xl font-bold text-gray-800 my-3 text-center">
          {portfolio.heading}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          <PortfolioCard projects={portfolio.projects} />
        </div>

        <hr className="border-b border-gray-300 mt-32" />
      </section>
    </div>
  );
};

export default PortfolioSection;
