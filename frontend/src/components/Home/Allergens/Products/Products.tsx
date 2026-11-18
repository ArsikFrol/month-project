'use client'

import milk from '../../../../../public/milk.png'

import { Ingredient } from '@/store/Products/types'
import useProducts from '@/store/Products/useProducts'
import { Elem } from './Elem'
import { cn } from '@/lib/utils'

type Props = {
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
    { slug: 'nuts', name: 'Орехи', emoji: '🥜' },
    { slug: 'dried-fruits', name: 'Сухофрукты', emoji: '🍇' },
    { slug: 'canned-food', name: 'Консервы', emoji: '🥫' },
    { slug: 'oil', name: 'Масло растительное', emoji: '🫒' },
    { slug: 'vinegar', name: 'Уксус', emoji: '🍶' },
    { slug: 'spices', name: 'Специи', emoji: '🌶️' },
    { slug: 'baking-soda', name: 'Сода', emoji: '🧂' },
    { slug: 'yeast', name: 'Дрожжи', emoji: '🍞' },
    { slug: 'cereal', name: 'Хлопья', emoji: '🥣' },
    { slug: 'chips', name: 'Чипсы', emoji: '🍟' },
]

export function Products({ setError }: Props) {

    const { allergens, toggleAllergens } = useProducts((s) => s)

    return (
        <div className={cn(
            'relative z-20 grid grid-cols-3 gap-y-[60px] overflow-auto',
            'h-[480px] pt-[60px] mr-[20px]'
        )}>
            {
                list.map((obj, i) => {
                    const isSelected = allergens.some((item) => item.slug === obj.slug)
                    const countObjs = allergens.length

                    return <Elem key={i} obj={obj} isSelected={isSelected}
                        toggleAllergens={toggleAllergens} countObjs={countObjs} setError={setError} />
                })
            }
        </div>
    )
}