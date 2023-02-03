import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import svg from "../public/images/signature.svg";
import Navmenu from '../public/images/navmenu.svg';




function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className="pb-20">
      <nav className='w-full h-20 bg-white fixed top-0 left-0 right-0 z-10'>
        <div className='justify-between px-4 mx-auto md:max-w-[1040px] md:items-center md:flex md:px-0'>
          <div>
            <div className='flex items-center justify-between py-3 md:py-5 md:block'>
              {/* LOGO */}
              <Link href='/'>
                <h2 className='text-2xl text-cyan-600 font-bold '>
                <Image src={svg} alt="logo" />
                </h2>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className='md:hidden'>
                <button
                  className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border'
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src={Navmenu} width={20} height={30} alt='logo' />
                  ) : (
                    <Image
                      src={Navmenu}
                      width={20}
                      height={30}
                      alt='logo'
                      className='focus:border-none active:border-none'
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 md:block md:pb-0 md:mt-0 ${
                navbar ? "pr-2 md:pr-0 block" : "hidden"
              }`}
            >
              <ul className='h-auto bg-white items-center justify-center md:flex '>
              <li className="pb-4 text-xl text-black py-2 md:px-6 md:text-center sm:text-end md:hover:bg-transparent">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>
                </li>
                <li className="pb-4 text-xl text-black py-2 md:px-6 md:text-center sm:text-end md:hover:bg-transparent">
                  <Link href="/book" onClick={() => setNavbar(!navbar)}>
                    Book Notes
                  </Link>
                </li>
                <li className="pb-4 text-xl text-black py-2 md:px-6 md:text-center sm:text-end md:hover:bg-transparent">
                  <Link href="/blog" onClick={() => setNavbar(!navbar)}>
                    MLBoss
                  </Link>
                </li>
                <li className="pb-4 text-xl text-black py-2 md:px-6 md:text-center sm:text-end md:hover:bg-transparent">
                  <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                    Contact
                  </Link>
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
