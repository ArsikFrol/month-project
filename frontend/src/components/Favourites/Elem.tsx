import { Recipe } from "@/types/recipe"
import Image from "next/image"

import recipe from '../../../public/Recipe.jpeg'
import { cn } from "@/lib/utils"

type Props = {
    obj: Recipe,
    setShowElemId: (value: string) => void
}

export function Elem({ obj, setShowElemId }: Props) {
    return (
        <div className={cn(
            "w-full bg-white rounded-2xl shadow p-[20px]",
            'hover:scale-101 transition-transform duration-300 cursor-pointer'
        )} onClick={() => setShowElemId(obj.id)}>
            <Image src={recipe} alt='' draggable='false'
                className="rounded-2xl" />
            <div className='text-center text-[18px] font-light mt-[10px]'>{obj.title}</div>
        </div>
    )
}