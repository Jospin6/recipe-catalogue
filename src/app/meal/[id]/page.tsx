"use client"
import { Card } from "@/components/Card";
import { HeadTitle } from "@/components/HeadTitle";
import { fetchMeal } from "@/features/mealsSlice";
import { AppDispatch, RootState } from "@/features/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function mail({ params }: { params: { id: string } }) {
    const { loading, meal } = useSelector((state: RootState) => state.meals)
    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
        dispatch(fetchMeal(params.id))
    }, [dispatch])

    const shouldComponentRender = () => {
        if (loading === true) return false;
        return true;
    }

    if (!shouldComponentRender()) {
        return (<div>LOADING...</div>);
    }

    return <div className="md:grid md:grid-cols-4 md:gap-4">
        <div className="col-span-2">
            <Card
                className='w-full h-[500px]'
                src={meal[0]?.strMealThumb}
                title={meal[0]?.strMeal} />
        </div>
        <div className="col-span-2">
            <div className="w-full border-b-[1px] border-gray-200">
                <HeadTitle text={meal[0]?.strCategory} className="" />
            </div>
        </div>
    </div>
}