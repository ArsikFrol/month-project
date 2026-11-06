import { StaticImageData } from "next/image"

export type Ingredient = {
    slug: string
    name: string,
    image: string | StaticImageData
}

export type UseProducts = {
    ingredients: Ingredient[]
    toggleIngredient: (value: Ingredient) => void,

    clearIngredients: () => void,


    allergens: Ingredient[],
    toggleAllergens: (value: Ingredient) => void,

    alearAllergens: () => void,
}