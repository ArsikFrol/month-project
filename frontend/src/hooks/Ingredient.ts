import { useEffect, useState } from 'react'

import { Api } from '@/services/api-client'
import { Ingredient } from '@/store/Ingredients/types'
import { FurnitureType } from '@/services/ingredients'

type TReturn = {
    listIngredient: Ingredient[] | undefined,
    loading: boolean,
    error: Error | undefined
}

export function useGetIngredient(furnitureType: FurnitureType): TReturn {
    const [listIngredient, setListIngredient] = useState<Ingredient[]>()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error>()

    useEffect(() => {
        async function fetchListIngredient() {
            try {
                const { data } = await Api.ingredients.getIngredients(furnitureType)
                setListIngredient(data)
            } catch (err) {
                setError(err as Error)
            } finally {
                setLoading(false)
            }
        }

        fetchListIngredient()
    }, [furnitureType])

    return { listIngredient, loading, error }
}