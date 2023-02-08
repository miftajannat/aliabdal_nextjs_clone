import Image from "next/image";
import workData from "../data/workdata";

export default function checkout() {
  return (
    <div className='mt-20'>
    <div className='text-4xl font-bold font-sans text-gray-800'>
    Check out my Works
    <hr className='border-2 border-blue-400 rounded-md border-solid w-[87px] my-4' />
    </div>
    <div className='flex sm:flex-col md:flex-row justify-between items-center text-center no-underline rounded-lg md:gap-10 mb-12 '>
      {workData.map((work) => (
        <div key={work.id} className=' bg-white overflow-hidden transition-colors duration-300 ease-in-out transform hover:scale-105 hover:shadow-md shadow-lg box-border h-64 md:w-[315px] p-4 border-2 rounded-xl my-4'>
          <a href={work.url}>
        <div className='text-5xl mt-3 mb-2'>{work.icon}</div>
        <h2 className='text-2xl mt-5 font-bold font-sans text-gray-800'>{work.title}</h2>
        <p className='mt-5'>{work.description}
        </p>
      </a>

        </div>
      ))

      }

    </div>
    </div>
  );
}
