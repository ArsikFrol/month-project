'use client'

import Image from "next/image"
import { useRef, useState } from "react"
import { useClickAway } from "react-use"

import allergens from '../../../../public/Allergens.png'

import { useEscape } from "@/hooks/useEscape"
import { cn } from "@/lib/utils"
import { Products } from "./Products/Products"

type Props = {
    showModal: boolean
    setShowModal: (value: boolean) => void
}

export function Modal({ setShowModal, showModal }: Props) {

    const [value, setValue] = useState<string>('')
    const [error, setError] = useState<boolean>(false)

    const ref = useRef<HTMLDivElement>(null)

    useEscape(() => setShowModal(false))
    useClickAway(ref, () => setShowModal(false))

    return (
        <div className={cn(
            'z-20 fixed bg-black/50 w-full h-screen top-0 left-0',
            !showModal && 'hidden'
        )}>
            <div className={cn(
                "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                'bg-white p-[20px] rounded-2xl shadow w-[540px] transition-[height] duration-300',
                error ? 'h-[650px]' : 'h-[610px]'
            )} ref={ref}>
                <input value={value} onChange={e => setValue(e.target.value)}
                    spellCheck='false'
                    className={cn(
                        'w-full h-[50px] rounded-2xl border border-gray-200 bg-gray-100',
                        'text-[18px] font-light pl-[20px] pr-[50px]',
                        'outline-0 mb-[20px]',
                    )} placeholder='Название продукта' />
                <div className={cn(
                    'text-[16px] text-red-400',
                    'transition-[opacity,height] duration-300',
                    error
                        ? 'opacity-100 h-[20px]'
                        : 'opacity-0 h-0'
                )}>
                    Можно выбрать не больше 4 аллергенов
                </div>
                <Image src={allergens} alt='' draggable='false'
                    className={cn(
                        'w-[500px] h-[500px] absolute transition-[top] duration-300',
                        error ? 'top-[120px]' : 'top-[90px]'
                    )} />
                <Products setError={setError} />
            </div>
        </div>
    )
}