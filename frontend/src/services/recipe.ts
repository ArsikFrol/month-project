import { Recipe } from "@/types/recipe";
import { ApiRoutes } from "./constants";
import { axiosInstance } from "./instance";

export const delateRecipe = async (id: string) => axiosInstance.delete(`${ApiRoutes.RECIPE}/${id}`)

/* export const getFavoriteRecipes = async (): Promise<Recipe[]> => {
    const { data } = axiosInstance.get(`${ApiRoutes.RECIPE}`)

    return 
} */