import { cn } from "@/lib/utils"
import Image from "next/image"
import { useState } from "react"

import openWardrobe from '../../../../../public/openWardrobe.png'

import { Products } from "./Products"
import { Ingredient } from "@/store/Ingredients/types"

import milk from '../../../../../public/milk.png'
import { useGetIngredient } from "@/hooks/Ingredient"

type Props = {
    error: boolean,
    setError: (value: boolean) => void,
}

const list: Ingredient[] = [
    { slug: '1', name: 'Молоко', image: milk },
    { slug: '2', name: 'Молоко', image: milk },
    { slug: '3', name: 'Молоко', image: milk },
    { slug: '4', name: 'Молоко', image: milk },
    { slug: '5', name: 'Молоко', image: milk },
    { slug: '6', name: 'Молоко', image: milk },
    { slug: '7', name: 'Молоко', image: milk },
    { slug: '8', name: 'Молоко', image: milk },
    { slug: '9', name: 'Молоко', image: milk },
    { slug: '10', name: 'Молоко', image: milk },
    { slug: '11', name: 'Молоко', image: milk },
    { slug: '12', name: 'Молоко', image: milk },
    { slug: '13', name: 'Молоко', image: milk },
    { slug: '14', name: 'Молоко', image: milk },
    { slug: '15', name: 'Молоко', image: milk },
    { slug: '16', name: 'Молоко', image: milk },
    { slug: '17', name: 'Молоко', image: milk },
    { slug: '18', name: 'Молоко', image: milk },
    { slug: '19', name: 'Молоко', image: milk }
]

export function Wardrobe({ error, setError }: Props) {
    const [value, setValue] = useState<string>('')

    const { listIngredient, loading } = useGetIngredient('wardrobe', value)

    return (
        <div className={cn(
            'transition-[height] duration-300',
            'relative w-[690px] flex flex-col gap-y-[20px]',
            'bg-white p-[20px] rounded-2xl',
            error
                ? 'h-[550px]'
                : 'h-[510px]'
        )}>
            <Image src={openWardrobe} alt='' draggable='false'
                className={cn(
                    'w-[650px] h-[400px] transition-[top] duration-300 ease-out',
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
            <Products setError={setError} height={350} paddingTop={80} paddingBottom={10}
                paddingX={100} listProducts={list} />
        </div>
    )
}