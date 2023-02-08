import React from "react";
import Image from "next/image";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import courseradata from "../data/courseradata";

const coursera = () => {
  return (
    <>
      <div className='md:max-w-[1040px] sm:mx-5 md:mx-auto box-border'>
        <NavBar />

        <div>
          <h1 className='text-4xl font-bold font-sans text-gray-800 pt-10 '>
            Coursera
          </h1>
          <hr className='border-2 border-blue-500 rounded-md border-solid w-[87px] my-4' />
        </div>
        <div className='flex md:flex-row sm:flex-col justify-between pb-24 gap-8 sm:gap-y-12 md:gap-y-0'>
          {courseradata.map((data) => (
            <div key={data.id}>
              <a href={data.url}>
                <Image
                  src={data.image}
                  alt='coursera'
                  className='box-border border-2 shadow-md transition-colors duration-300 ease-in-out transform hover:scale-105 hover:shadow-md h-[350px] w-[450px]'
                />
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default coursera;
