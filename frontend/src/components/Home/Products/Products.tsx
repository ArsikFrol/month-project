'use client'

import { cn } from "@/lib/utils"
import { Ingredients } from "../Ingredients/Ingredients"
import { Allergens } from "../Allergens/Allergens"
import { Btn } from "./Btn"
import useProducts from "@/store/Products/useProducts"

export function Products() {

    const { ingredients } = useProducts((state) => state)

    return (
        <div className={cn(
            'transition-[opacity,width,padding,height] duration-300 ease-out',
            'bg-white rounded-2xl h-fit',
            'flex flex-col justify-between',
            ingredients.length
                ? 'opacity-100 w-[400px] p-[40px]'
                : 'opacity-0 w-0 p-0 pointer-events-none',
        )}>
            <Ingredients />
            <Allergens />
            <Btn />
        </div>
    )
}