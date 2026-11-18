import { cn } from "@/lib/utils"
import Image from "next/image"
import { useState } from "react"

import openRefrigerator from '../../../../../public/openRefrigerator.png'
import { ClipLoaderUI } from "@/components/UI/ClipLoader"
import { Products } from "./Products"
import { useGetIngredient } from "@/hooks/Ingredient"

import milk from '../../../../../public/milk.png'
import { Ingredient } from "@/store/Products/types"

type Props = {
    error: boolean,
    setError: (value: boolean) => void
}

const list: Ingredient[] = [
    { slug: 'milk', name: 'Молоко', emoji: '🥛' },
    { slug: 'eggs', name: 'Яйца', emoji: '🥚' },
    { slug: 'butter', name: 'Масло сливочное', emoji: '🧈' },
    { slug: 'cheese', name: 'Сыр', emoji: '🧀' },
    { slug: 'yogurt', name: 'Йогурт', emoji: '🥣' },
    { slug: 'sour-cream', name: 'Сметана', emoji: '🥛' },
    { slug: 'kefir', name: 'Кефир', emoji: '🥛' },
    { slug: 'tomato', name: 'Помидор', emoji: '🍅' },
    { slug: 'cucumber', name: 'Огурец', emoji: '🥒' },
    { slug: 'pepper', name: 'Перец болгарский', emoji: '🫑' },
    { slug: 'carrot', name: 'Морковь', emoji: '🥕' },
    { slug: 'cabbage', name: 'Капуста', emoji: '🥬' },
    { slug: 'onion', name: 'Лук', emoji: '🧅' },
    { slug: 'garlic', name: 'Чеснок', emoji: '🧄' },
    { slug: 'potato', name: 'Картофель', emoji: '🥔' },
    { slug: 'chicken', name: 'Курица', emoji: '🍗' },
    { slug: 'sausage', name: 'Колбаса', emoji: '🌭' },
    { slug: 'ham', name: 'Ветчина', emoji: '🥓' },
    { slug: 'fish', name: 'Рыба', emoji: '🐟' },
    { slug: 'apple', name: 'Яблоко', emoji: '🍎' },
    { slug: 'lemon', name: 'Лимон', emoji: '🍋' },
    { slug: 'orange', name: 'Апельсин', emoji: '🍊' },
    { slug: 'banana', name: 'Банан', emoji: '🍌' },
    { slug: 'grapes', name: 'Виноград', emoji: '🍇' },
    { slug: 'strawberry', name: 'Клубника', emoji: '🍓' },
    { slug: 'blueberry', name: 'Черника', emoji: '🫐' },
    { slug: 'greens', name: 'Зелень', emoji: '🌿' },
    { slug: 'mushrooms', name: 'Грибы', emoji: '🍄' },
    { slug: 'ketchup', name: 'Кетчуп', emoji: '🍅' },
    { slug: 'mayonnaise', name: 'Майонез', emoji: '🥚' },
    { slug: 'mustard', name: 'Горчица', emoji: '🌭' },
    { slug: 'juice', name: 'Сок', emoji: '🧃' },
    { slug: 'water', name: 'Вода', emoji: '💧' },
    { slug: 'chocolate', name: 'Шоколад', emoji: '🍫' },
    { slug: 'jam', name: 'Варенье', emoji: '🍯' },
]

export function Refrigerator({ error, setError }: Props) {
    const [value, setValue] = useState<string>('')

    const { listIngredient, loading } = useGetIngredient('refrigerator', value)

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