'use client'

import milk from '../../../../../public/milk.png'

import { Ingredient } from '@/store/Products/types'
import useProducts from '@/store/Products/useProducts'
import { Elem } from './Elem'
import { cn } from '@/lib/utils'

type Props = {
    setError: (value: boolean) => void
}

const listProducts: Ingredient[] = [
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

export function Products({ setError }: Props) {

    const { allergens, toggleAllergens } = useProducts((s) => s)

    return (
        <div className={cn(
            'relative z-20 grid grid-cols-3 gap-y-[60px] overflow-auto',
            'h-[480px] pt-[60px]'
        )}>
            {
                listProducts.map((obj, i) => {
                    const isSelected = allergens.some((item) => item.slug === obj.slug)
                    const countObjs = allergens.length

                    return <Elem key={i} obj={obj} isSelected={isSelected}
                        toggleAllergens={toggleAllergens} countObjs={countObjs} setError={setError} />
                })
            }
        </div>
    )
}