import { ImFacebook, ImTwitter, ImGithub, ImLinkedin } from "react-icons/im";
import { BsMedium } from "react-icons/bs";
import { SiOrcid } from "react-icons/si";
import { FaResearchgate } from "react-icons/fa";
import Link from "next/link";

export default function footer() {
  return (
    <footer className='bg-gray-800 h-auto'>
      <div className=' flex flex-col  justify-between py-1 sm:px-4'>
        <p className='text-white text-center text-sm'>GET IN TOUCH:</p>
        <p className='text-white text-center mt-2 text-xs'>
          I'd love to hear from you.{" "}
        </p>

        <div className='flex gap-5 justify-center mt-3'>
          <Link href={"https://medium.com/@hridoybuffy"}>
            <BsMedium color='#FFFFFF' className='text-xl' />
          </Link>
          <Link href={"https://github.com/buffyhridoy"}>
            <ImGithub color='#FFFFFF' className='text-xl' />
          </Link>
          <Link
            href={
              "https://www.linkedin.com/in/mohammad-badhruddouza-khan-97b023195/"
            }
          >
            <ImLinkedin color='#FFFFFF' className='text-xl' />
          </Link>
          <Link href={"https://orcid.org/0000-0001-7055-332X"}>
            <SiOrcid color='#FFFFFF' className='text-xl' />
          </Link>
          <Link href={"https://www.researchgate.net/profile/Mohammad-Khan-353"}>
            <FaResearchgate color='#FFFFFF' className='text-xl' />
          </Link>
          <Link href={"https://www.facebook.com/hridoy.buffy"}>
            <ImFacebook color='#FFFFFF' className='text-xl' />
          </Link>
          <Link href={"https://twitter.com/buffyhridoy"}>
            <ImTwitter color='#FFFFFF' className='text-xl' />
          </Link>
        </div>
        <p className='text-center text-white py-4 md:py-0 mt-3 text-xs'>
          © Mohammad Badhruddouza Khan 2023
        </p>
      </div>
    </footer>
  );
}
