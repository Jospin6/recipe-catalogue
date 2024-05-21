import { Card } from '@/components/Card'
import { HeadTitle } from '@/components/HeadTitle';

export default function Home() {
  return (
    <main className="text-black">
      <HeadTitle text='Explore our meals categories' />
      <Card/>
    </main>
  );
}
