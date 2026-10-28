import Image from "next/image"

import oven from '../../../public/oven.png'

export function Oven() {
    return (
        <>
            <Image src={oven} alt='' draggable='false'
                className="w-[200px] h-[190px] hover:scale-101 transition-transform duration-300 cursor-pointer" />
        </>
    )
}