import React from 'react'

const PortfolioCard = ({projects}) => {
    if (!projects || projects.length === 0) return null;
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {projects.map((project, index) => (


          <div
          key={index}
          className="max-w-sm bg-white shadow-[0_0_20px_rgba(0,0,0,0.3)] rounded-2xl overflow-hidden group cursor-pointer" data-aos = "fade-right" data-aous-delay = "400">
            <div className="flex flex-col justify-center items-center pt-7">
              <img
                src={project.image}
                className="w-80 h-auto object-cover rounded-2xl transition-transform duration-300 ease-in-out group-hover:scale-105 cursor-pointer" 
                alt=""
              />

              <div className="mt-5 px-8.5">
                <div className="flex justify-between items-center">
                  <p className="text-red-600 cursor-pointer">{project.tag}</p>
                  <p className="cursor-pointer">{project.date}</p>
                </div>
                <h1 className="text-2xl py-6 font-semibold hover:text-red-600 cursor-pointer">
                  {project.title}
                </h1>
              </div>
            </div>
          </div>
          ))}
        </div>
    </div>
  )
}

export default PortfolioCard
