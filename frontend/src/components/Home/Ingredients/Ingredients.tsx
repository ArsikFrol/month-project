'use client'

import { cn } from "@/lib/utils";
import { Elem } from "./Elem";
import useProducts from "@/store/Products/useProducts";

export function Ingredients() {
    const { ingredients, toggleIngredient } = useProducts((state) => state)

    return (
        <div className="">
            <div className={cn(
                'text-center text-[30px] font-light transition-opacity',
                ingredients.length
                    ? 'opacity-100 duration-300'
                    : 'opacity-0 duration-75',
            )}>
                Ингредиенты
            </div>
            <div className="flex flex-col gap-y-[20px] mt-[20px]">
                {
                    ingredients.map((obj, i) => (
                        <Elem key={i} index={i} obj={obj} toggleIngredient={toggleIngredient} />
                    ))
                }
            </div>
        </div>
    )
}