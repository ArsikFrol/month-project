import { cn } from "@/lib/utils"

type Props = {

}

export function Btn(props: Props) {
    return (
        <div className={cn(
            'w-[200px] mx-auto h-[50px] rounded-2xl bg-blue-500 flex items-center justify-center',
            'text-white text-[18px] font-light',
            'hover:translate-y-[-2px] transition-transform duration-300 cursor-pointer'
        )}>
            Найти рецепты!
        </div>
    )
}