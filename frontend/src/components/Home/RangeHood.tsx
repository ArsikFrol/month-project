import Image from "next/image"

import rangeHood from '../../../public/rangeHood.png'

export function RangeHood() {
    return (
        <>
            <Image src={rangeHood} alt='' draggable='false'
                className="w-[200px] h-[250px]" />
        </>
    )
}