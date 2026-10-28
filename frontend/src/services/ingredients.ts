
import { Ingredient } from "@/store/Ingredients/types"
import { ApiRoutes } from "./constants"
import { axiosInstance } from "./instance"

export type FurnitureType = 'refrigerator' | 'wardrobe'

type Ingredients = { data: Ingredient[] }

export const getIngredients = async (furnitureType: FurnitureType, search: string): Promise<Ingredients> => {
    const { data } = await axiosInstance.get<Ingredients>(ApiRoutes.INGREDIENTS, {
        params: { furnitureType, search }
    })

    return data
}