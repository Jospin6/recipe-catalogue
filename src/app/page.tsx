import { Card } from '@/components/Card'
import { HeadTitle } from '@/components/HeadTitle';

export default function Home() {
  return (
    <main className="text-black">
      <HeadTitle text='Explore our meals categories' className='mb-4' />
      <div className="md:grid md:grid-cols-6 md:gap-4">
        <Card className='col-span-2 h-[300px]' />
      </div>
    </main>
  );
}
