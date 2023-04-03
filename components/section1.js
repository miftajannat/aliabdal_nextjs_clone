import Image from "next/image";

export default function Section1() {
  return (
    <>
      <div className='flex md:flex-row sm:flex-col sm:w-full justify-center items-center lg:space-x-35 md:space-x-20 pt-14'>
        <div>
          <h1 className='text-5xl mb-3 font-bold font-sans text-gray-800'>
            Hello World —
          </h1>
          <p className='text-3xl mb-2'>
            I’m Mohammad Badhruddouza Khan, a Data Analyst, Machine Learning Practitioner
            and a Biomedical Engineer.
          </p>
          <p className='text-xl text-gray-700'>
            I have been working on Machine Learning for 4 years and Data
            Analysis for 1 years.
          </p>
          <p className='text-xl mt-3 text-gray-700 justify'>
            Over at{" "}
            <a
              href='https://mlboss.substack.com/'
              className='text-blue-400 underline font-semibold font-sans'
            >
              MLBOSS
            </a>{" "}
            - my weekly AI related newsletter - We explore the fascinating world
            of ML and AI..
          </p>
          <p className='text-xl mt-3 text-gray-700 justify'>
            And over at{" "}
            <a
              href='https://booknote.substack.com/'
              className='text-blue-400 underline font-semibold font-sans'
            >
              Book Note
            </a>{" "}
            - our weekly book related newsletter - We share our thoughts,
            actionable takeaways and favorite quotes of the books.
          </p>
        </div>
        <Image
          src={"/images/buffy3.jpg"}
          width={250}
          height={150}
          className='sm:w-[300px] md:w-[260px] sm:mt-8 md:mt-0 rounded-2xl'
        />
      </div>
    </>
  );
}
