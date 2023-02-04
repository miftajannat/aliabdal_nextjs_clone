import React from "react";
import bookdata from "../data/bookdata";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

const Book = () => {
  return (
    <div className='md:max-w-[1040px] sm:mx-5 md:mx-auto box-border'>
      <NavBar />

      <div className='flex flex-col justify-center items-center pt-10'>
        <h2 className='text-2xl font-semibold text-center'>
          BOOK NOTE
        </h2>
        <p className='text-center text-gray-800'> Sign up below to join a growing community <br/> of more than 6000 friendly readers.</p>
        <iframe
          // className="md:px-96 sm:px-0 mb-12"
          height={100}
          src='https://booknote.substack.com/embed/'
        />
      </div>

      <div className='text-4xl font-bold pt-10'>
        <h1>Book Summaries</h1>
        <hr className='border-2 border-blue-500 rounded-md border-solid w-[87px] my-4' />
      </div>


      <div className='grid grid-cols-1  md:grid-cols-2 py-2 gap-16 pb-20'>
        {bookdata.map((book) => (
          <div key={book.id}>
            <a href={book.url}>
              <div className='flex justify-center gap-4'>
                <img
                  className='mr-3 h-[226px] w-[250px] shadow-xl rounded-md box-border transition-colors duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'
                  src={book.image}
                  alt={book.title}
                />

                <div className='font-mono items-center h-[225px] overflow-hidden'>
                  <p className='text-2xl font-semibold text-blue-400'>
                    {book.title}
                  </p>
                  <p className='pb-2 text-lg text-gray-600'>{book.author}</p>
                  <p className='justify-center'>{book.description}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Book;
