"use client"
import { Card } from "@/components/Card";
import { HeadTitle } from "@/components/HeadTitle";
import { Spiner } from "@/components/Spiner";
import { fetchMeal } from "@/features/mealsSlice";
import { AppDispatch, RootState } from "@/features/store";
import { getIngredient } from "@/helpers";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function mail({ params }: { params: { id: string } }) {
    const { loading, meal } = useSelector((state: RootState) => state.meals)
    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
        dispatch(fetchMeal(params.id))
    }, [dispatch])

    const shouldComponentRender = (): boolean => {
        if (loading === true) return false;
        return true;
    }

    if (!shouldComponentRender()) {
        return (<Spiner/>);
    }

    const intredients = getIngredient(meal)

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
            <div className="w-full pb-4 border-b-[1px] border-gray-200">
                <div className="my-4 text-xl">Ingredients</div>
                <div className="w-full flex flex-wrap">
                    { intredients.map(
                        ingredient => (
                            <span className="mr-2 p-[10px] mb-2 rounded-lg box-shadow" key={ingredient}>
                                {ingredient}
                            </span>
                        )) 
                    }
                </div>
            </div>

            <div className="w-full pb-4 border-b-[1px] border-gray-200">
                <div className="my-4 text-xl">Cooking Process</div>
                <div className={`w-full flex flex-wrap`}>
                    { meal[0]?.strInstructions }
                </div>
            </div>
        </div>
    </div>
}