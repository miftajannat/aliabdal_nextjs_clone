import React from 'react'
import Image from 'next/image'
import dataanalytics from '../public/images/dataanalytics.png'
import deeplearning from '../public/images/deeplearning.png'
import NavBar from '@/components/navbar'
import Footer from '@/components/footer'

const coursera = () => {
  return (
    <div className='md:max-w-[1040px] sm:mx-5 md:mx-auto box-border'> 
      <NavBar />  

            <div>
        <h1 className='text-4xl font-bold font-sans text-gray-800 pt-10 '>Coursera</h1>
        <hr className='border-2 border-blue-500 rounded-md border-solid w-[87px] my-4' />
      </div>
    <div className='flex md:flex-row sm:flex-col justify-between pb-24 gap-8 sm:gap-y-12 md:gap-y-0'>
      <a href='https://www.coursera.org/account/accomplishments/professional-cert/4RYVX8898WH7'>
      <Image src={dataanalytics} alt="coursera" className='box-border border-2 shadow-md transition-colors duration-300 ease-in-out transform hover:scale-105 hover:shadow-md h-[350px] w-[450px]'/>
      </a>
      <a href="https://www.coursera.org/account/accomplishments/specialization/53XSJ5NXBJFX">
      <Image src={deeplearning} alt="coursera" className='box-border border-2 shadow-md transition-colors duration-300 ease-in-out transform hover:scale-105 hover:shadow-md h-[350px] w-[450px]'/> 
      </a> 
    </div>
    <Footer />
    </div>

  )
}

export default coursera
