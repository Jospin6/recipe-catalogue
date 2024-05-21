import { Card } from '@/components/Card'
import { Navbar } from '@/components/Navbar';

export default function Home() {
  return (
    <main className="text-black">
      <Navbar/>
      <div className='md:w-[80%] md:m-[auto]'>
        <Card/>
      </div>
    </main>
  );
}
