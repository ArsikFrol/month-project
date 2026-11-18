import { cn } from "@/lib/utils"
import Image from "next/image"
import { useState } from "react"

import openWardrobe from '../../../../../public/openWardrobe.png'

import { Products } from "./Products"
import { useGetIngredient } from "@/hooks/Ingredient"
import { Ingredient } from "@/store/Products/types"

import milk from '../../../../../public/milk.png'

type Props = {
    error: boolean,
    setError: (value: boolean) => void,
}

const list: Ingredient[] = [
    { slug: 'flour', name: 'Мука', emoji: '🌾' },
    { slug: 'sugar', name: 'Сахар', emoji: '🍬' },
    { slug: 'salt', name: 'Соль', emoji: '🧂' },
    { slug: 'rice', name: 'Рис', emoji: '🍚' },
    { slug: 'buckwheat', name: 'Гречка', emoji: '🌾' },
    { slug: 'pasta', name: 'Макароны', emoji: '🍝' },
    { slug: 'oats', name: 'Овсянка', emoji: '🥣' },
    { slug: 'bread', name: 'Хлеб', emoji: '🍞' },
    { slug: 'crackers', name: 'Печенье', emoji: '🍪' },
    { slug: 'tea', name: 'Чай', emoji: '🍵' },
    { slug: 'coffee', name: 'Кофе', emoji: '☕' },
    { slug: 'cocoa', name: 'Какао', emoji: '🍫' },
    { slug: 'honey', name: 'Мёд', emoji: '🍯' },
    { slug: 'jam', name: 'Варенье', emoji: '🍓' },
    { slug: 'nuts', name: 'Орехи', emoji: '🥜' },
    { slug: 'dried-fruits', name: 'Сухофрукты', emoji: '🍇' },
    { slug: 'canned-food', name: 'Консервы', emoji: '🥫' },
    { slug: 'oil', name: 'Масло растительное', emoji: '🫒' },
    { slug: 'vinegar', name: 'Уксус', emoji: '🍶' },
    { slug: 'spices', name: 'Специи', emoji: '🌶️' },
    { slug: 'baking-soda', name: 'Сода', emoji: '🧂' },
    { slug: 'yeast', name: 'Дрожжи', emoji: '🍞' },
    { slug: 'chocolate', name: 'Шоколад', emoji: '🍫' },
    { slug: 'cereal', name: 'Хлопья', emoji: '🥣' },
    { slug: 'chips', name: 'Чипсы', emoji: '🍟' },
]

export function Wardrobe({ error, setError }: Props) {
    const [value, setValue] = useState<string>('')

    /* const { listIngredient, loading } = useGetIngredient('wardrobe', value)

    console.log(listIngredient) */

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