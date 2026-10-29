import { Share2, Trash } from "lucide-react"
import toast from "react-hot-toast"

import { cn } from "@/lib/utils"
import { delateRecipe } from "@/services/recipe"

export function Btns({ id }: { id: string }) {

    const clickDelete = async () => {
        await delateRecipe(id)

        toast.error('Рецепт удален')
    }

    return (
        <div className="flex items-center justify-center gap-x-[40px] mt-[20px]">
            <div className={cn(
                'group hover:translate-y-[-2px] transition-transform duration-300 cursor-pointer',
                'w-[200px] h-[50px] bg-blue-300 rounded-2xl flex items-center justify-center',
                'flex items-center gap-x-[10px]'
            )}>
                <div className='text-[18px] font-light text-white'>Поделиться</div>
                <Share2 strokeWidth={1} className={cn(
                    'rotate-180 group-hover:translate-x-[5px] transition-transform duration-300',
                    'text-white'
                )} />
            </div>
            <div className={cn(
                'group hover:translate-y-[-2px] transition-transform duration-300 cursor-pointer',
                'w-[300px] h-[50px] bg-red-400 rounded-2xl flex items-center justify-center',
                'flex items-center gap-x-[10px]'
            )} onClick={clickDelete}>
                <div className='text-[18px] font-light text-white'>Удалить из избранного</div>
                <Trash strokeWidth={1} className={cn(
                    'group-hover:translate-x-[5px] transition-transform duration-300',
                    'text-white'
                )} />
            </div>
        </div>
    )
}