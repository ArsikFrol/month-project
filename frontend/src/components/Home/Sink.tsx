import Image from 'next/image'

import sink from '../../../public/sink.png'

export function Sink() {
    return (
        <>
            <Image src={sink} alt='' draggable='false'
                className='w-[300px] h-[260px]' />
        </>
    )
}