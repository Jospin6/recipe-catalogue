import { Card } from '@/components/Card'
import { HeadTitle } from '@/components/HeadTitle';
import { Navbar } from '@/components/Navbar';

export default function Home() {
  return (
    <main className="text-black">
      <Navbar/>
      <HeadTitle text='Explore our meals categories'/>
      <div className='md:w-[80%] md:m-[auto]'>
        <Card/>
      </div>
    </main>
  );
}
