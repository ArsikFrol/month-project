'use client'

import Image from "next/image"
import { useRef, useState } from "react"
import { useClickAway } from "react-use"

import wardrobe from '../../../public/wardrobe.png'
import { Modal } from "@/components/UI/Modal/Modal"

type Props = {
    width: number
}

export function Wardrobe({ width }: Props) {
    const [showModal, setShowModal] = useState<boolean>(false)

    const ref = useRef<HTMLDivElement>(null)

    useClickAway(ref, () => setShowModal(false))

    return (
        <div className="">
            <Image src={wardrobe} alt='' draggable='false' onClick={() => setShowModal(true)}
                className="h-[200px] hover:scale-101 transition-transform duration-300 cursor-pointer"
                style={{ width: `${width}px` }} />
            <Modal setShowModal={setShowModal} showModal={showModal} />
        </div>
    )
}