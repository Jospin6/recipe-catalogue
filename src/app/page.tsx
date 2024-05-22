"use client"
import { Card } from '@/components/Card'
import { HeadTitle } from '@/components/HeadTitle';
import { fetchCategories } from '@/features/categoriesSlice';
import { AppDispatch, RootState } from '@/features/store';
import Link from 'next/link';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
  const {loading, categories} = useSelector((state: RootState) => state.categories)
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])

  const shouldComponentRender = (): boolean => {
    if (loading === true) return false;
    return true;
  }

  if (!shouldComponentRender()) {
    return (<div>LOADING...</div>);
  }

  return (
    <main className="text-black">
      <HeadTitle text='Explore our meals categories' className='mb-4' />
      <div className="md:grid md:grid-cols-6 md:gap-4">
        {categories.map((category, key) => (
          <Link href={`/category/${category.strCategory}`} className='col-span-2' key={key}>
            <Card 
              className='h-[300px]' 
              src={category.strCategoryThumb} 
              title={category.strCategory} />
          </Link>))
        }
      </div>
    </main>
  );
}
