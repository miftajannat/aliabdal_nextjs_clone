// import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import Head from "next/head";
//import the svg logo
import svg from "../public/images/signature.svg";
import Image from "next/image";

function header() {
  return (
    <>
      <header className='py-10'>
        <div className='lg:container lg:mx-auto flex sm:flex-col md:flex-row items-center sm:justify-between text-center py-3'>
          <div className='shrink w-80 sm:order-2 sm:mb-2 md:mb-0'>
            {/* <a
              href={"/"}
              className='text-primary-2 text-2.5xl font-bestermindregular select-none'
            >
              BK
            </a> */}


            <div>
              <Head>
                <link
                  href='https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css'
                  rel='stylesheet'
                />
              </Head>
              <h1 className='text-4xl'>
               <Image src={svg} alt="logo" />
              </h1>
            </div>
          </div>


          {/* <div className=' order-3 flex justify-center '>
            <div className='flex gap-6 sm:flex-col md:flex-row'>
              <a href={"/"} className=' uppercase text-lg'>
                ABOUT
              </a>

              <a href={"/"} className=' uppercase text-lg'>
                ARTICLES
              </a>
              <a href={"/"} className=' uppercase text-lg'>
                PODCAST
              </a>

              <a href={"/"} className=' uppercase text-lg'>
                Newsletter
              </a>

              <a href={"/"} className=' uppercase text-lg'>
                TECH
              </a>
              <a href={"/"} className=' uppercase text-lg'>
                BOOK NOTES
              </a>
            </div>
          </div> */}



        </div>
      </header>
    </>
  );
}

export default header;
