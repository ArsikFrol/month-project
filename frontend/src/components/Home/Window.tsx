import Image from "next/image"

import window from '../../../public/window.png'

export function Window() {
    return (
        <>
            <Image src={window} alt='' draggable='false'
                className='absolute top-[-300px] right-0 w-[300px] h-[250px]' />
        </>
    )
}