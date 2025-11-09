import React from 'react'

const Testimonial = () => {
  return (
    <div>
      <section className='container px-10 mx-auto pb-24'>
         <p className="text-red-600 text-center">
          WHAT CLIENTS SAY
        </p>
        <h1 className="text-7xl font-bold text-gray-800 my-3 text-center">
          Testimonial
        </h1>

<div>
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

          <div className='max-w-md bg-white shadow-[0_0_20px_rgba(0,0,0,0.3)]'>
            <h2>Web Development</h2>
            <p>Upwork - Mar 4, 2016 - Aug 30, 2021</p>
          </div>
</div>

      </section>
    </div>
  )
}

export default Testimonial
