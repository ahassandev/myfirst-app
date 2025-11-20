import React from "react";
import PortfolioCard from "../Features/PortfolioCard";

const Testimonial = ({ testimonials }) => {
  if (!testimonials || testimonials.length === 0) return null;
  return (
    <div>
      <section className="container px-16 mx-auto pb-24 mt-16">
        <p
          className="text-red-600 text-center"
          data-aos="down"
          data-aos-delay="400"
        >
          WHAT CLIENTS SAY
        </p>
        <h1
          className="text-5xl md:text-5xl lg:text-7xl font-bold text-gray-800 my-3 text-center"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          Testimonial
        </h1>

        <div
          className="inline-block md:inline-block lg:flex justify-between mt-14"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          <PortfolioCard projects={testimonials.cardLeft} />
          <div
            className=" bg-gray-200 max-w-2xl p-10 rounded-2xl mt-28 shadow-[0_0_20px_rgba(0,0,0,0.3)]"
            data-aos="fade-down"
            data-aos-delay="400"
          >
            <div className="relative z-10">
              <div>
                <h2 className="text-2xl font-semibold">Web App Development</h2>
                <p className="text-md text-gray-500 mt-2">
                  Upwork - Mar 4, 2016 - Aug 30, 2021
                </p>
              </div>
              <hr class="my-4 border-gray-300" />

              <p className="text-lg leading-8 text-gray-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                nostrum dolores necessitatibus accusamus eaque exercitationem
                harum suscipit blanditiis accusantium rem! Recusandae
                necessitatibus quisquam officia nulla quibusdam? Doloremque
                obcaecati officiis eum.
              </p>
            </div>
          </div>
        </div>

        <hr className="border-b border-gray-300 mt-32" />
      </section>
    </div>
  );
};

export default Testimonial;
