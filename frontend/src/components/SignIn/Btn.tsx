'use client'

import { MoveRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { useTypedRouter } from "@/hooks/useTypedRouter"

export function Btn() {
    const router = useTypedRouter()

    return (
        <div className={cn(
            'flex flex-col items-center',
        )}>
            <div className='bg-gray-300 w-full h-[1px] my-[20px]'></div>
            <div className={cn(
                'group flex items-center justify-center gap-x-[20px] bg-white py-[10px] px-[20px] rounded-2xl',
                'hover:translate-y-[2px] transition-transform duration-300 cursor-pointer',
                'w-full',
            )} onClick={() => router.push('/signUp')}>
                <div className='text-[18px] font-light'>Зарегистрироваться</div>
                <MoveRight strokeWidth={1}
                    className="translate-x-0 group-hover:translate-x-[5px] transition-transform duration-300" />
            </div>
        </div>
    )
}