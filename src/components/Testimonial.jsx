import React from "react";

const Testimonial = () => {
  return (
    <div>
      <section className="container px-16 mx-auto pb-24">
        <p className="text-red-600 text-center" data-aos="down" data-aos-delay="400">WHAT CLIENTS SAY</p>
        <h1 className="text-7xl font-bold text-gray-800 my-3 text-center" data-aos="fade-down" data-aos-delay="400">
          Testimonial
        </h1>

       <div className="flex justify-between mt-14" data-aos="fade-right" data-aos-delay="400">
          <div className="max-w-sm bg-white shadow-[0_0_20px_rgba(0,0,0,0.3)] rounded-2xl overflow-hidden group cursor-pointer">
            <div className="flex flex-col justify-center items-center pt-7">
              <img
                src="portfolio-image.jpg"
                className="w-80 h-auto object-cover rounded-2xl transition-transform duration-300 ease-in-out group-hover:scale-105 cursor-pointer"
                alt=""
              />

              <div className="mt-5 px-8.5">
                <div className="flex justify-between items-center">
                  <p className="text-red-600 cursor-pointer">GALLERY</p>
                  <p className="cursor-pointer">1883</p>
                </div>
                <h1 className="text-2xl py-6 font-semibold hover:text-red-600 cursor-pointer">
                  NFT Dashboard Application Development.
                </h1>
              </div>
            </div>
          </div>

          <div className=" bg-gray-200 max-w-2xl p-10 rounded-2xl mt-28 shadow-[0_0_20px_rgba(0,0,0,0.3)]" data-aos="fade-down" data-aos-delay="400">
            <div className="relative z-10">
              <div>
                <h2 className="text-2xl font-semibold">Web App Development</h2>
                <p className="text-md text-gray-500 mt-2">Upwork - Mar 4, 2016 - Aug 30, 2021</p>
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

  <hr className='border-b border-gray-300 mt-32'/>
      </section>
    </div>
  );
};

export default Testimonial;
