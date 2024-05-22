"use client"
import { Card } from "@/components/Card";
import { HeadTitle } from "@/components/HeadTitle";
import { fetchCategory } from "@/features/categorySlice";
import { AppDispatch, RootState } from "@/features/store";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Category({params}: {params: {term: string}}){
    const {loading, category} = useSelector((state: RootState) => state.category)
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(fetchCategory(params.term))
    }, [dispatch])

    const shouldComponentRender = () => {
        if (loading === true) return false;
        return true;
      }
    
      if (!shouldComponentRender()) {
        return (<div>LOADING...</div>);
      }

    return <div className="text-2xl">
        <HeadTitle text="Selected category" className="mb-4"/>
        <div className="md:grid md:grid-cols-6 md:gap-4">
        {category.map((meal, key) => (
          <Link href={`/meal/${meal.idMeal}`} className='col-span-2' key={key}>
            <Card 
              className='h-[300px]' 
              src={meal.strMealThumb} 
              title={meal.strMeal} />
          </Link>))
        }
        </div>
    </div>
}