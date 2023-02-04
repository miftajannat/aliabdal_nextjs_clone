export default function explore() {
  return (
    <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-x-20 mt-20 sm:gap-y-16 md:gap-y-0'>
      <div>
        <div className='pb-6'>
          <div className='text-4xl font-bold font-sans text-gray-800'>
            Explore
            <hr className='border-2 border-blue-400 rounded-md border-solid w-[87px] my-4' />
          </div>
        </div>
        <div className='flex-col sm:w-full justify-center'>
          <div className='bg-gray-100 shadow-md box-border mb-4 transition-colors duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg py-2 sm:h-auto w-auto'>
            <a
              href='https://booknote.substack.com/'
              className='flex justify-center items-center'
            >
              <div className='text-3xl m-4'>📚</div>
              <div className='m-2 hover:text-gray-600'>
                <h1 className='font-bold text-lg font-sans'>
                  Book Note Newsletter
                </h1>
                <p className='text-sm'>
                  Stay informed with the latest book insights and key takeaways
                  through summaries and quotes
                </p>
              </div>
            </a>
          </div>
          <div className='bg-gray-100 shadow-md box-border mb-4 transition-colors duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg py-2 sm:h-auto w-auto'>
            <a
              href='https://mlboss.substack.com/'
              className='flex justify-center items-center'
            >
              <div className='text-3xl m-4'>🧠</div>
              <div className='m-2 hover:text-gray-600'>
                <h1 className='font-bold text-lg font-sans'>
                  AI related Newsletter
                </h1>
                <p className='text-sm'>
                  Delve into the captivating realm of Machine Learning and
                  Artificial Intelligence.
                </p>
              </div>
            </a>
          </div>

          <div className='bg-gray-100 shadow-md box-border mb-4 transition-colors duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg py-2 sm:h-auto w-auto'>
            <a href='/coursera' className='flex justify-center items-center'>
              <div className='text-3xl m-4'>🏆</div>
              <div className='m-2 hover:text-gray-600'>
                <h1 className='font-bold text-lg font-sans'>
                  Coursera Certificate
                </h1>
                <p className='text-sm'>
                  Explore my completed Coursera specializations and view my
                  certificates
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div>
        <div className='pb-5'>
          <div className='text-4xl font-bold font-sans text-gray-800'>
            Store
            <hr className='border-2 border-blue-400 rounded-md border-solid w-[87px] my-4' />
          </div>
        </div>
        <div className='flex-col sm:w-full justify-center'>
          <div className='sm:h-auto w-auto'>
            <div className='flex justify-center items-center '>
              <div className='mx-2 mb-2'>
                <h1 className='font-semibold text-lg text-gray-600 font-sans'>
                  📃My Resume Template
                </h1>
                <p className='text-sm text-gray-800 hover:text-gray-500 pb-2'>
                  My LaTeX resume template presents a structured and
                  professional format, showcasing education, work experience,
                  skills, and accomplishments in an attractive way.
                </p>
              </div>
            </div>
            <hr className='py-1' />
          </div>
          <div className='sm:h-auto w-auto'>
            <a
              href='https://books2read.com/u/bpyW0k'
              className='flex justify-center items-center'
            >
              <div className='m-2'>
                <h1 className='font-semibold text-lg text-gray-600 font-sans'>
                  📘My Object Detection Book
                </h1>
                <p className='text-sm text-gray-800 hover:text-gray-500 pb-2'>
                  "Object Detection - Evolution and Advancements" covers the
                  historical development and latest innovations in object
                  detection technology.
                </p>
              </div>
            </a>
            <hr className='py-1' />
          </div>

          <div className='sm:h-auto w-auto'>
            <div className='flex justify-center items-center'>
              <div className='m-2'>
                <h1 className='font-semibold text-lg text-gray-600 font-sans'>
                  📒Knowledge Database Notion Template
                </h1>
                <p className='text-sm text-gray-800 hover:text-gray-500 pb-2'>
                  A pre-designed, customizable template for individuals or teams
                  looking to streamline their knowledge management and
                  improve productivity.
                </p>
              </div>
            </div>
            <hr className='py-1' />
          </div>
        </div>
      </div>
      {/* 
        <div>
          <div className='bg-gray-100 shadow-md box-border mb-4 transition-colors duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg py-2 sm:h-auto sm:w-auto'>
            <div className='flex justify-center items-center'>
              <div className='text-3xl m-4'>📚</div>
              <div className='m-2'>
              <h1 className='font-bold text-lg'>Book Summaries & Notes</h1>
              <p>
                  Lorem ipsum dolor sit amet consectetur elit lor Lorem ipsum
                  dolor sit amet consectetur..
                </p>
              </div>
            </div>
          </div>
          <div className='bg-gray-100 shadow-md box-border mb-4 transition-colors duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg py-2 sm:h-auto sm:w-auto'>
            <div className='flex justify-center items-center'>
              <div className='text-3xl m-4'>📚</div>
              <div className='m-2'>
              <h1 className='font-bold text-lg'>Book Summaries & Notes</h1>
              <p>
                  Lorem ipsum dolor sit amet consectetur elit lor Lorem ipsum
                  dolor sit amet consectetur..
                </p>
              </div>
            </div>
          </div>
        </div> */}
    </div>
  );
}
