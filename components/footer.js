import { ImFacebook, ImTwitter, ImGithub, ImLinkedin } from "react-icons/im";
import { BsMedium } from "react-icons/bs";
import { SiOrcid } from "react-icons/si";
import { FaResearchgate } from "react-icons/fa";
import Link from "next/link";

export default function footer() {
  return (
    <footer className='bg-black h-auto'>
      <div className=' flex sm:flex-col md:flex-row justify-between py-6 md:px-10 sm:px-4'>
        
       
      <p className='sm:text-center text-white  md:text-start sm:py-4 md:py-0'>
  © Mohammad Badhruddouza Khan 2023
</p>

        <div className='flex gap-5 md:justify-end sm:justify-center'>
        <Link href={"https://medium.com/@hridoybuffy"}>
            <BsMedium color='#FFFFFF' className='text-2xl'/>
          </Link>
          <Link href={"https://github.com/buffyhridoy"}>
            <ImGithub color='#FFFFFF' className='text-2xl'/>
          </Link>
            <Link href={"https://www.linkedin.com/in/mohammad-badhruddouza-khan-97b023195/"}>
              <ImLinkedin color='#FFFFFF' className='text-2xl' />
            </Link>
            <Link href={"https://orcid.org/0000-0001-7055-332X"}>
            <SiOrcid color='#FFFFFF' className='text-2xl'/>
          </Link>
          <Link href={"https://www.researchgate.net/profile/Mohammad-Khan-353"}>
            <FaResearchgate color='#FFFFFF' className='text-2xl'/>
          </Link>
          <Link href={"https://www.facebook.com/hridoy.buffy"}>
            <ImFacebook color='#FFFFFF' className='text-2xl'/>
          </Link>
          <Link href={"https://twitter.com/buffyhridoy"}>
            <ImTwitter color='#FFFFFF' className='text-2xl'/>
          </Link>


        </div> 
      </div>
    </footer>
  );
}
