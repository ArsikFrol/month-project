'use client'

import { cn } from "@/lib/utils";
import { Elem } from "./Elem";
import useIngredients from "@/store/Ingredients/useIngredients";
import { Btn } from "./Btn";

export function Ingredients() {
    const { ingredients, toggleIngredient } = useIngredients((state) => state)

    return (
        <div className={cn(
            'transition-[opacity,width,padding] duration-300 ease-out',
            'h-[400px] bg-white rounded-2xl',
            'flex flex-col justify-between',
            ingredients.length
                ? 'opacity-100 w-[400px] p-[40px]'
                : 'opacity-0 w-0 p-0 pointer-events-none',
        )}>
            <div className={cn(
                'text-center text-[30px] font-light transition-opacity',
                ingredients.length
                    ? 'opacity-100 duration-300'
                    : 'opacity-0 duration-75',
            )}>
                Ингредиенты
            </div>
            <div className="flex flex-col gap-y-[20px]">
                {
                    ingredients.map((obj, i) => (
                        <Elem key={i} index={i} obj={obj} toggleIngredient={toggleIngredient} />
                    ))
                }
            </div>
            <Btn />
        </div>
    )
}