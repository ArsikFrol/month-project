import { cn } from "@/lib/utils"

type Props = {
    steps: string[]
}

export function Steps({ steps }: Props) {
    return (
        <div className='flex flex-col gap-y-[10px]'>
            {
                steps.map((step, i) => {
                    return (
                        <div key={i} className={cn(
                            'flex items-center gap-x-[5px]',
                        )}>
                            <div className='text-gray-400'>{i + 1}.</div>
                            <div className='text-[18px] font-light'>{step}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}