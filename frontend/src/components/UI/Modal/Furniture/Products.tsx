'use client'


import { Ingredient } from "@/store/Products/types"
import { Elem } from "./Elem"
import useProducts from "@/store/Products/useProducts"

type Props = {
    setError: (value: boolean) => void,

    height: number,
    paddingTop: number
    paddingBottom: number,
    paddingX: number,

    listProducts: Ingredient[]
}

export function Products({ setError, height, paddingTop, paddingBottom, paddingX, listProducts }: Props) {

    const { ingredients, toggleIngredient } = useProducts((s) => s)

    return (
        <div className='relative z-20 grid grid-cols-3 gap-y-[40px] overflow-auto'
            style={{
                height: `${height}px`, paddingTop: `${paddingTop}px`, paddingBottom: `${paddingBottom}px`,
                paddingLeft: `${paddingX}px`, paddingRight: `${paddingX}px`
            }}>
            {
                listProducts.map((obj, i) => {
                    const isSelected = ingredients.some((item) => item.slug === obj.slug)
                    const countObjs = ingredients.length

                    return <Elem key={i} obj={obj} isSelected={isSelected}
                        toggleIngredient={toggleIngredient} countObjs={countObjs} setError={setError} />
                })
            }
        </div>
    )
}