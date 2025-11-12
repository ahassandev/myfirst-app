import React from 'react'

const Blog = () => {
  return (
    <div>
      <section className='container px-16 mx-auto py-16'>
         <p className="text-red-700 text-center text-md">
          VISIT MY BLOG AND KEEP YOUR FEEDBACK
         </p>
        <h1 className="text-5xl md:text-5xl lg:text-7xl font-bold text-gray-800 my-3 text-center">
          My Blog
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 place-items-center'>
             <div className="max-w-sm bg-white shadow-[0_0_20px_rgba(0,0,0,0.3)] rounded-2xl overflow-hidden group cursor-pointer" data-aos = "fade-right" data-aos-delay = "400">
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
                  Dashboard Application Development.
                </h1>
              </div>
            </div>
          </div>


           <div className="max-w-sm bg-white shadow-[0_0_20px_rgba(0,0,0,0.3)] rounded-2xl overflow-hidden group cursor-pointer" data-aos = "fade-up" data-aos-delay = "400">
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
                 Dashboard Application Development.
                </h1>
              </div>
            </div>
          </div>



           <div className="max-w-sm bg-white shadow-[0_0_20px_rgba(0,0,0,0.3)] rounded-2xl overflow-hidden group cursor-pointer" data-aos = "fade-left" data-aos-delay = "400">
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
                  Dashboard Application Development.
                </h1>
              </div>
            </div>
          </div>
        </div>
        <hr className='border-b border-gray-300 mt-32'/>
      </section>
      
    </div>
  )
}

export default Blog
