export type Ingredient = {
    slug: string
    name: string,
    emoji: string
}

export type UseProducts = {
    ingredients: Ingredient[]
    toggleIngredient: (value: Ingredient) => void,

    clearIngredients: () => void,


    allergens: Ingredient[],
    toggleAllergens: (value: Ingredient) => void,

    alearAllergens: () => void,
}