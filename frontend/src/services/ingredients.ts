
import { Ingredient } from "@/store/Products/types"
import { ApiRoutes } from "./constants"
import { axiosInstance } from "./instance"

export type FurnitureType = 'refrigerator' | 'wardrobe'

type Ingredients = { data: Ingredient[] }

export const getIngredients = async (furnitureType: FurnitureType, search: string): Promise<Ingredients> => {

    const params = new URLSearchParams()

    if (furnitureType) params.set('furnitureType', furnitureType)
    if (search.length) params.set('search', search)

    const qs = params.toString()
    const url = qs ? `${ApiRoutes.INGREDIENTS}?${qs}` : `${ApiRoutes.INGREDIENTS}`

    const { data } = await axiosInstance.get<Ingredients>(url)

    return data
}
