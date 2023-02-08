import React from "react";
import blogData from "../data/blogdata";
import Link from "next/link";

const Blog = () => {
  // const [blogs, setBlogs] = React.useState(blogData);
  // const latestTwoBlogs = blogs.slice(0, 3);

  const latestTwoBlogs = blogData.slice(0, 3);

  return (
    <div className='mb-20 mt-20'>
      <div>
        <h1 className='text-4xl font-bold font-sans text-gray-800'>
          Latest AI Blogs
        </h1>
        <hr className='border-2 border-blue-400 rounded-md border-solid w-[87px] my-4' />
      </div>

      <div className='flex justify-center items-center'>
        <div className='grid grid-cols-1 md:grid-cols-3 md:gap-x-20 md:gap-y-[20px] sm:gap-y-[16px]'>
          {latestTwoBlogs.map((blog) => (
            <div key={blog.id}>
              <div className='md:mx-0 mx-5 rounded-lg cursor-pointer border-box border-0  my-5 overflow-hidden shadow-md md:w-auto sm:w-[280px] '>
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
    </div>
  );
};

export default Blog;


