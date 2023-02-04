import Head from "next/head";

import Header from "@/components/header";
import Checkout from "@/components/checkout";
import Explore from "@/components/explore";
import Section1 from "@/components/section1";
import BookNote from "@/components/booknote";
import NavBar from "@/components/navbar";
import BlogPost from "@/components/blogpost";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <div className='md:max-w-[1040px] sm:mx-5 md:mx-auto box-border'>
          <NavBar />
          <Section1 />
          <Checkout />
          <Explore />
          <BookNote />
          <BlogPost />
        </div>
        <Footer />
      </div>
    </main>
  );
}
