import React from "react";
import blogData from "../data/blogdata";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

const Blog = () => {
  return (
    <div className='md:max-w-[1040px] sm:mx-5 md:mx-auto box-border'>
      <NavBar />




      <div className='flex flex-col justify-center items-center pt-10'>
      <h2 className="text-2xl font-semibold text-center">MLBOSS</h2>
      <p className='text-center text-gray-800'>Let's explore the fascinating world of ML and AI..</p>
        <iframe
          // className="md:px-96 sm:px-0 mb-12"
          height={100}
          src='https://mlboss.substack.com/embed/'
        />
      </div>

      <div className='text-4xl font-bold pt-10'>
        <h1>AI related Blogs</h1>
        <hr className='border-2 border-blue-500 rounded-md border-solid w-[87px] my-4'/>
         </div>

      <div className='flex justify-center items-center pb-20'>
        <div className='grid grid-cols-1 md:grid-cols-3 md:gap-x-20 md:gap-y-[20px] sm:gap-y-[16px]'>
          {blogData.map((blog) => (
            <div key={blog.id}>
              <div className='md:mx-0 mx-5 rounded-lg cursor-pointer border-box border-0 my-5 overflow-hidden shadow-md md:w-auto sm:w-[280px] transition-colors duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'>
                <a rel='stylesheet' href={blog.url}>
                <div className='justify-center transition-colors duration-300 ease-in-out transform hover:scale-125 hover:shadow-2xl'>
                  <img
                    className='h-[200px] w-full'
                    src={blog.image}
                    alt={blog.title}
                  />
                </div>
                <div className='bg-blue-400 h-[125px] '>
                  <div className=' mx-4 mb-4'>
                    <h2 className='text-md font-bold'>{blog.title}</h2>
                    <h2>{blog.description}</h2>
                  </div>
                </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
