'use client'

import { useState } from "react"

import { cn } from "@/lib/utils"
import { Modal } from "../Allergens/Modal"

type Props = {

}

export function Btn(props: Props) {

    const [showModal, setShowModal] = useState<boolean>(false)

    const clickFind = () => {

    }

    const clickExclude = () => {
        setShowModal(true)
    }

    return (
        <div className='flex flex-col items-center gap-y-[10px] mt-[30px]'>
            <div className={cn(
                'w-[300px] mx-auto h-[50px] rounded-2xl bg-gray-600 flex items-center justify-center',
                'text-white text-[18px] font-light',
                'hover:translate-y-[-2px] transition-transform duration-300 cursor-pointer'
            )} onClick={clickExclude}>
                Добавить продукты-аллергены
            </div>
            <div className={cn(
                'w-[200px] mx-auto h-[50px] rounded-2xl bg-blue-500 flex items-center justify-center',
                'text-white text-[18px] font-light',
                'hover:translate-y-[-2px] transition-transform duration-300 cursor-pointer'
            )} onClick={clickFind}>
                Найти рецепты!
            </div>

            <Modal showModal={showModal} setShowModal={setShowModal} />
        </div>
    )
}