import exploredata from '../data/exploredata'
import storedata from '../data/storedata';


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
{
  exploredata.map((explore) =>
  <div key={explore.id} className='bg-gray-100 shadow-md box-border mb-4 transition-colors duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg py-2 sm:h-auto w-auto'>
  <a
    href={explore.url}
    className='flex justify-center items-center'
  >
    <div className='text-3xl m-4'>{explore.icon}</div>
    <div className='m-2 hover:text-gray-600'>
      <h1 className='font-bold text-lg font-sans'>
      {explore.title}
      </h1>
      <p className='text-sm'>
      {explore.description}
      </p>
    </div>
  </a>
</div>
 )
}
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
          {storedata.map((store) =>
          <div key={store.id} className='sm:h-auto w-auto'>
          <div className='flex justify-center items-center '>
            <a href="https://buffyhridoy.github.io/static/media/resume.7180e459.pdf">
            <div className='mx-2 mb-2'>
              <h1 className='font-semibold text-lg text-gray-600 font-sans'>
                {store.title}
              </h1>
              <p className='text-sm text-gray-800 hover:text-gray-500 pb-2'>{store.description}
              </p>
            </div>
            </a>
          </div>
          <hr className='py-1' />
        </div>
          )}
        </div>
      </div>
          </div>
  );
}
