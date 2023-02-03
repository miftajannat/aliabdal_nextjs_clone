

export default function listen() {
  return (
    <>
     
     <div>
        <div className='pb-6'>
          <div className='text-4xl font-bold lg:pl-64 pl-4'>
            Book Note
            <hr className='border-2 border-blue-500 rounded-md border-solid w-[87px] my-4' />
          </div>
        </div>

        <div className='flex flex-col sm:flex-row sm:w-full lg:flex-row md:flex-row justify-center gap-x-12'>
          <div className='space-y-18 pl-10'>
            <div className='bg-white-100 shadow-md box-border h-[226px] mb-4 transition-colors duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg mx-4'>
              <div className='flex'>
                <div>
                  <img
                    src='https://substackcdn.com/image/fetch/w_336,h_255,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8293ddfc-9979-4266-919b-bf630b39992d_500x500.jpeg'
                    alt=''
                    className='w-[150px] h-[226px] object-cover'
                  />
                </div>
                <div className='m-3'>
                  <h1 className='font-bold'>Book Summaries & Notes</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='gap-y-8'>
            <div className='bg-white-100 shadow-md box-border h-[226px] mb-4 transition-colors duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg mx-4'>
              <div className='flex'>
                <img
                  src='https://substackcdn.com/image/fetch/w_336,h_255,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8293ddfc-9979-4266-919b-bf630b39992d_500x500.jpeg'
                  alt=''
                  className='w-[150px] h-[226px] object-cover'
                />
                <div className='m-3'>
                  <h1 className='font-bold'>Book Summaries & Notes</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div> 
    </>
  )
}


