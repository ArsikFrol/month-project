import Image from "next/image"

import table from '../../../public/table.png'
import microwave from '../../../public/microwave.jpg'
import { Window } from "./Window"

export function Table() {
    return (
        <div className="relative">
            <Image src={table} alt='' draggable='false'
                className="w-[500px] h-[200px]" />
            <Image src={microwave} alt='' draggable='false'
                className="absolute w-[120px] h-[70px] top-[-30px] left-[50px]" />
            <Window />
        </div>
    )
}