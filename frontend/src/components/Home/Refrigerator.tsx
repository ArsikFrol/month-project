'use client'

import Image from "next/image"
import { useState } from "react"

import refrigerator from '../../../public/refrigerator.png'
import { Modal } from "@/components/UI/Modal/Modal"

export function Refrigerator() {
    const [showModal, setShowModal] = useState<boolean>(false)

    return (
        <div className="">
            <Image src={refrigerator} alt='' draggable='false' onClick={() => setShowModal(true)}
                className='mt-[100px] w-[250px] h-[500px] hover:scale-101 transition-transform duration-300 cursor-pointer' />
            <Modal setShowModal={setShowModal}
                showModal={showModal} />
        </div>
    )
}