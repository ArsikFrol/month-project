import { Recipe } from "@/types/recipe"
import Image from "next/image"

import recipe from '../../../../public/Recipe.jpeg'
import { cn } from "@/lib/utils"
import { useRef } from "react"
import { useClickAway } from "react-use"
import { Ingredients } from "./Ingredients"
import { Steps } from "./Steps"
import { Btns } from "./Btns"

type Props = {
    obj: Recipe,
    setShowElemId: (value: string) => void
}

export function Modal({ obj, setShowElemId }: Props) {
    const ref = useRef<HTMLDivElement>(null)

    useClickAway(ref, () => setShowElemId(''))

    return (
        <div className={cn(
            'fixed w-full h-screen top-0 left-0 bg-black/50',
            'flex items-center justify-center'
        )}>
            <div ref={ref} className="w-[800px] bg-white rounded-2xl p-[20px]">
                <div className='flex gap-x-[30px]'>
                    <Image src={recipe} alt='' draggable='false'
                        className="rounded-2xl w-[400px]" />
                    <div className='w-full'>
                        <div className='text-[25px] font-light text-center'>{obj.title}</div>
                        <Ingredients ingredients={obj.ingredients} />
                    </div>
                </div>
                <div className=''>
                    <div className='text-[25px] mt-[20px] mb-[10px]'>Инструкция по приготовлению: </div>
                    <Steps steps={obj.steps} />
                </div>
                <Btns id={obj.id} />
            </div>
        </div>
    )
}