import { create } from "zustand";
import { UseIngredients } from "./types";

const useIngredients = create<UseIngredients>((set, get) => ({
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
}))

export default useIngredients