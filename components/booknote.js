import React from "react";
import bookdata from "../data/bookdata";
import Link from "next/link";


const BookNote = () => {
  const latestBooks = bookdata.slice(0, 2);

  return (
    <div className='mt-20'>
      <div>
        <h1 className='text-4xl font-bold font-sans text-gray-800'>
          Latest Book Summaries
        </h1>
        <hr className='border-2 border-blue-400 rounded-md border-solid w-[87px] my-4' />
      </div>

      <div className='grid grid-cols-1  md:grid-cols-2 py-2 gap-x-16 md:gap-y-0 sm:gap-y-16'>
        {latestBooks.map((book) => (
          <div key={book.id}>
            <a href={book.url}>
              <div className='flex justify-center gap-4'>
                <img
                  className='mr-3 h-[226px] w-[150px] shadow-xl rounded-md box-border transition-colors duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'
                  src={book.image}
                  alt={book.title}
                />

                <div className='font-mono items-center h-[225px] overflow-hidden'>
                  <p className='text-2xl font-semibold text-blue-400'>
                    {book.title}
                  </p>
                  <p className='pb-2 text-lg text-gray-600'>{book.author}</p>
                  <p>{book.description}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* <div className='flex justify-end mt-6'>
        <Link href='/book'>
        <button className='bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded'>
          Show More
        </button>
        </Link>
      </div> */}
    </div>
  );
};

export default BookNote;
