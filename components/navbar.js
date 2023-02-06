import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import image from '../public/images/signature.svg'
import navmenu from '../public/images/navmenu.svg'
import Dropdown from 'components/dropdown.js'
import Store from 'components/store.js'

function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <div className='pb-20'>
      <nav className=" bg-white fixed top-0 left-0 right-0 z-10">
        <div className="justify-between mx-auto md:max-w-[1040px] md:items-center md:flex">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block sm:px-3 md:px-0">
              {/* LOGO */}
              <Link href="/">
                <h2 className="text-2xl text-cyan-600 font-bold "><Image src={image} width={100} height={30} alt="logo" />
                  </h2>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src={navmenu} width={20} height={30} alt="logo" />
                  ) : (
                    <Image
                      src={navmenu} 
                      width={20}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex bg-white">
                <li className="pb-6 text-black py-2 md:px-2 text-center border-b-2 md:border-b-0">
                  <Link href="/blog" onClick={() => setNavbar(!navbar)}>
                    AI Blogs
                  </Link>
                </li>
                <li className="pb-6 text-black py-2 md:px-2 text-center border-b-2 md:border-b-0">
                  <Link href="/book" onClick={() => setNavbar(!navbar)}>
                    Book Summaries
                  </Link>
                </li>
                <li className="pb-6 text-black py-2 px-2 text-center border-b-2 md:border-b-0">
                 <Dropdown/>
                </li>
                <li className="pb-6 text-black py-2 px-2 text-center  border-b-2 md:border-b-0">
                 <Store/>
                </li>


              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;