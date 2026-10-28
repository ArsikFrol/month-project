import { cn } from "@/lib/utils"

type Props = {
    ingredients: {
        name: string;
        amount: string;
    }[]
}

export function Ingredients({ ingredients }: Props) {
    return (
        <div className='flex flex-wrap gap-x-[10px] gap-y-[5px] mt-[20px]'>
            {
                ingredients.map((ingredient, i) => {
                    return (
                        <div key={i} className={cn(
                            'flex items-center gap-x-[5px] font-light',
                        )}>
                            <div className='text-[18px]'>{ingredient.name}: </div>
                            <div className='text-gray-500 text-[20px]'>{ingredient.amount}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}