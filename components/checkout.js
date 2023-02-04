import Image from "next/image";

export default function checkout() {
  return (
    <div className='mt-20'>
    <div className='text-4xl font-bold font-sans text-gray-800'>
    Check out my Works
    <hr className='border-2 border-blue-400 rounded-md border-solid w-[87px] my-4' />
    {/* <Image
      src={"/images/checkout.svg"}
      width={10}
      height={10}
      className='sm:w-[30px] md:w-[50px] sm:mt-8 md:mt-0 ml-[200px]'
    /> */}
    </div>
    <div className='flex sm:flex-col md:flex-row justify-center items-center text-center no-underline rounded-lg md:gap-10 columns-3 mb-12 '>
      <a
        href='https://www.researchgate.net/profile/Mohammad-Khan-353/research'
        className='bg-white transition-colors duration-300 ease-in-out transform hover:scale-105 hover:shadow-md shadow-lg  rounded-xl box-border h-64 p-4 border-2 sm:my-4 '
      >
        <div className='text-5xl mt-3 mb-2'>📖</div>
        <h2 className='text-2xl mt-5 font-bold font-sans text-gray-800'>Research Papers</h2>
        <p className='mt-5'>
          How to study effectively for exams, with the best
          evidence-basedtechniques.
        </p>
      </a>

      <a
        href='/projects'
        className='bg-white transition-colors duration-300 ease-in-out transform hover:scale-105 hover:shadow-md shadow-lg rounded-xl box-border h-64  p-4 border-2 my-4 '
      >
        <div className='text-5xl mt-3 mb-2'>🧑‍💻</div>
        <h1 className='text-2xl mt-5 font-bold font-sans text-gray-800'>Projects</h1>
        <p className='mt-5'>
          How to study effectively for exams, with the best
          evidence-basedtechniques.
        </p>
      </a>

      <a
        href='https://aliabdaal.com/productivity/'
        className=' bg-white transition-colors duration-300 ease-in-out transform hover:scale-105 hover:shadow-md shadow-lg box-border h-64 p-4 border-2 rounded-xl my-4'
      >
        <div className='text-5xl mt-3 mb-2'>📑</div>
        <h2 className='text-2xl mt-5 font-bold font-sans text-gray-800'>Resume</h2>
        <p className='mt-5'>
          How to study effectively for exams, with the best
          evidence-basedtechniques.
        </p>
      </a>
    </div>
    </div>
  );
}
