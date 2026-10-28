export type Recipe = {
    id: string,
    title: string,
    imageUrl: string,
    ingredients: {
        name: string,
        amount: string
    }[],
    steps: string[]
}