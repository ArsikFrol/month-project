import { create } from "zustand";
import { UseProducts } from "./types";

const useProducts = create<UseProducts>((set, get) => ({
    ingredients: [],

    toggleIngredient: (ingredient) =>
        set((state) => {
            const exists = state.ingredients.some((i) => i.slug === ingredient.slug)

            return {
                ingredients: exists
                    ? state.ingredients.filter((i) => i.slug !== ingredient.slug)
                    : [...state.ingredients, ingredient],
            }
        }),

    clearIngredients: () => set({ ingredients: [] }),


    allergens: [],

    toggleAllergens: (allergen) =>
        set((state) => {
            const exists = state.allergens.some((i) => i.slug === allergen.slug)

            return {
                allergens: exists
                    ? state.allergens.filter((i) => i.slug !== allergen.slug)
                    : [...state.allergens, allergen],
            }
        }),

    alearAllergens: () => set({ allergens: [] }),
}))

export default useProducts