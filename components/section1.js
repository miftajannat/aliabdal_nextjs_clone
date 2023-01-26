import Image from "next/image";


export default function Section1() {
  return (
    <>
      <div class='flex flex-col sm:flex-row sm:w-full justify-center items-center lg:space-x-48 md:space-x-20 md:px-2'>
        {/* <div class='flex justify-center items-center space-x-10'> */}

        <div class='lg:w-2/6 sm:w-1/3 md:w-2/3 mb-10'>
          <h1 class='text-6xl font-bold mb-6'>Hello World</h1>
          <p class='text-4xl mb-4'>
            I’m Ali. I’m a YouTuber, Podcaster, ex-Doctor, and soon-to-be
            Author.
          </p>
          <p class='text-2xl'>
            On this site we explore the strategies and tools that help us live
            happier, healthier, more productive lives.
          </p>
          <p>
            And over at Sunday Snippets - my weekly newsletter - I share
            actionable productivity tips and practical life advice. Sign up
            below to join a growing community of more than 170,000 friendly
            readers.
          </p>
          <div></div>
        </div>
        {/* <img
          src='https://buffyhridoy.github.io/static/media/buffy.61e0c992.jpg'
          alt=''
          // width={60}
          // height={70}
          class='w-60 h-70np'
        /> */}
        <Image src={'/images/buf.jpg'} width={250} height={150} />



      </div>
    </>
  );
}
