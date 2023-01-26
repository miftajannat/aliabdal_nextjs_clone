import Head from 'next/head';

import Checkout from '@/components/checkout';
import Explore from '@/components/explore';
import Section1 from '@/components/section1';
import Booknote from '@/components/booknote';




export default function Home() {
  return (
    <main>
      <Head>
        <title>Home</title>
      </Head>
      <div className='max-w-[1040px] ml-auto mr-auto box-border'>
      <Section1 />
      <Checkout />
      <Explore />
      <Booknote />
      </div>
    </main>

  );
}
