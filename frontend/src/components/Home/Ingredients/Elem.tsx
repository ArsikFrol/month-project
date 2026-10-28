import { cn } from "@/lib/utils";
import { Ingredient } from "@/store/Ingredients/types";
import { X } from "lucide-react";

type Props = {
    obj: Ingredient,
    toggleIngredient: (value: Ingredient) => void
    index: number
}

export function Elem(
    { obj, toggleIngredient, index }: Props
) {
    return (
        <div className={cn(
            "group flex items-center justify-between",
            'hover:scale-101 transition-transform duration-300 cursor-pointer'
        )} onClick={() => toggleIngredient(obj)}>
            <div className='flex items-center gap-x-[10px]'>
                <div className='text-[18px] text-black/50'>{index + 1}.</div>
                <div className='text-[20px] font-light'>{obj.name}</div>
            </div>
            <div className={cn(
                'transition-[translate,opacity] duration-300 cursor-pointer',
                'opacity-0 translate-x-0  group-hover:opacity-100 group-hover:translate-x-[-10px]'
            )}>
                <X className="text-gray-500" />
            </div>
        </div>
    )
}