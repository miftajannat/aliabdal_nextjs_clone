import React from "react";
import projectdata from "../data/projectdata";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

const Project = () => {
  return (
    <>
      <div className='md:max-w-[1040px] sm:mx-5 md:mx-auto box-border'>
        <NavBar />

        <div className='text-4xl font-bold pt-10'>
          <h1>Project</h1>
          <hr className='border-2 border-blue-500 rounded-md border-solid w-[87px] my-4' />
        </div>

        <div className='grid grid-cols-1  md:grid-cols-2 py-2 gap-16 pb-20'>
          {projectdata.map((project) => (
            <div key={project.id}>
              <div>
                <div className='flex justify-center gap-4'>
                  <img
                    className='mr-3 h-[226px] w-[250px] shadow-xl rounded-md box-border transition-colors duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'
                    src={project.image}
                    alt={project.title}
                  />

                  <div className='items-center h-[225px] overflow-hidden'>
                    <p className='text-2xl font-semibold pb-1'>
                      {project.title}
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Porro, sint.
                    </p>
                    <p className='pb-3'>{project.skill}</p>
                    <p>
                      <a
                        className='text-xl font-bold text-blue-500 underline mr-6'
                        href={project.demo}
                      >
                        Demo
                      </a>
                      <a
                        className='text-xl font-bold text-blue-500 underline'
                        href={project.code}
                      >
                        Code
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Project;
