import { cn } from "@/lib/utils"
import Image from "next/image"
import { useState } from "react"

import openRefrigerator from '../../../../../public/openRefrigerator.png'
import { ClipLoaderUI } from "@/components/UI/ClipLoader"
import { Products } from "./Products"
import { useGetIngredient } from "@/hooks/Ingredient"
import { Ingredient } from "@/store/Ingredients/types"

import milk from '../../../../../public/milk.png'

type Props = {
    error: boolean,
    setError: (value: boolean) => void
}

const list: Ingredient[] = [
    { slug: '1-', name: 'Молоко', image: milk },
    { slug: '2-', name: 'Молоко', image: milk },
    { slug: '3-', name: 'Молоко', image: milk },
    { slug: '4-', name: 'Молоко', image: milk },
    { slug: '5-', name: 'Молоко', image: milk },
    { slug: '6-', name: 'Молоко', image: milk },
    { slug: '7-', name: 'Молоко', image: milk },
    { slug: '8-', name: 'Молоко', image: milk },
    { slug: '9-', name: 'Молоко', image: milk },
    { slug: '1-0', name: 'Молоко', image: milk },
    { slug: '1-1', name: 'Молоко', image: milk },
    { slug: '1-2', name: 'Молоко', image: milk },
    { slug: '1-3', name: 'Молоко', image: milk },
    { slug: '1-4', name: 'Молоко', image: milk },
    { slug: '1-5', name: 'Молоко', image: milk },
    { slug: '1-6', name: 'Молоко', image: milk },
    { slug: '1-7', name: 'Молоко', image: milk },
    { slug: '1-8', name: 'Молоко', image: milk },
    { slug: '1-9', name: 'Молоко', image: milk }
]

export function Refrigerator({ error, setError }: Props) {
    const [value, setValue] = useState<string>('')

    const { listIngredient, loading } = useGetIngredient('refrigerator')

    /* if (loading) return <ClipLoaderUI />
    if (error) return
    if (!listIngredient || listIngredient.length === 0) return */

    return (
        <div className={cn(
            'transition-[height] duration-300',
            'relative w-[540px] flex flex-col gap-y-[20px]',
            'bg-white p-[20px] rounded-2xl',
            error
                ? 'h-[750px]'
                : 'h-[710px]'
        )}>
            <Image src={openRefrigerator} alt='' draggable='false'
                className={cn(
                    'w-[500px] h-[600px] transition-[top] duration-300 ease-out',
                    'z-10 absolute left-[20px]',
                    error
                        ? 'top-[130px]'
                        : 'top-[90px]'
                )} />
            <div className=''>
                <input value={value} onChange={e => setValue(e.target.value)}
                    spellCheck='false'
                    className={cn(
                        'w-full h-[50px] rounded-2xl border border-gray-200 bg-gray-100',
                        'text-[18px] font-light pl-[20px] pr-[50px]',
                        'outline-0',
                    )} placeholder='Название продукта' />
            </div>
            <div className={cn(
                'text-[16px] text-red-400',
                'transition-[opacity,height] duration-300',
                error
                    ? 'opacity-100 h-[20px]'
                    : 'opacity-0 h-0'
            )}>
                Можно выбрать не больше 4 ингредиентов
            </div>
            <Products setError={setError} height={600} paddingTop={30} paddingBottom={30}
                paddingX={50} listProducts={list} />
        </div>
    )
}