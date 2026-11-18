'use client'

import Image from "next/image"
import { useState } from "react"

import { cn } from "@/lib/utils"
import { Ingredient } from "@/store/Products/types"

type Props = {
    toggleIngredient: (obj: Ingredient) => void
    obj: Ingredient,
    isSelected: boolean,
    countObjs: number,

    setError: (value: boolean) => void
}

export function Elem({ countObjs, toggleIngredient, isSelected, obj, setError }: Props) {
    const [animate, setAnimate] = useState<boolean>(false)

    const clickElem = () => {
        if (!isSelected && countObjs === 4) {
            setAnimate(true)
            setError(true)

            setTimeout(() => setAnimate(false), 300)
            setTimeout(() => setError(false), 1000)
            return
        }

        toggleIngredient(obj)
    }

    return (
        <div className={cn(
            'relative group hover:opacity-100 hover:scale-100 transition-[opacity,scale] duration-300 cursor-pointer',
            'w-[50px] mx-auto',
            isSelected
                ? 'opacity-100 scale-100'
                : 'opacity-70 scale-[90%]',
            animate && 'animate-shake'
        )} onClick={clickElem}>
            <div className='text-[65px] text-center leading-none h-[100px]'>{obj.emoji}</div>
            <div className={cn(
                'text-[14px] text-center font-light mx-auto w-[100px] transition-[opacity] duration-300',
                'bg-white rounded-2xl shadow py-[2px] px-[10px]',
                'absolute -left-1/5 bottom-0',
            )}>{obj.name}</div>
        </div>
    )
}
