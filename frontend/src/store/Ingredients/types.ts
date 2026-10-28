import { StaticImageData } from "next/image"

export type Ingredient = {
    slug: string
    name: string,
    image: string | StaticImageData
}

export type UseIngredients = {
    ingredients: Ingredient[]
    toggleIngredient: (value: Ingredient) => void,

    clearIngredients: () => void
}