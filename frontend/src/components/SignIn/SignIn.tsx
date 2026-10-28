'use client'

import { cn } from "@/lib/utils"
import { signIn } from "next-auth/react"

export function SignIn() {
    return (
        <div className='flex flex-col gap-y-[10px]'>
            <div className={cn(
                'relative flex items-center gap-x-[20px] bg-white py-[10px] px-[20px] rounded-2xl',
                'hover:translate-y-[2px] transition-transform duration-300 cursor-pointer'
            )} onClick={() => signIn('google', { callbackUrl: '' })}>

                <div className='w-full text-center'>Google</div>
            </div>
            <div className={cn(
                'relative flex items-center gap-x-[20px] bg-[#F6F8FA] py-[10px] px-[20px] rounded-2xl',
                'hover:translate-y-[2px] transition-transform duration-300 cursor-pointer'
            )} onClick={() => signIn('github', { callbackUrl: '' })}>

                <div className='text-[#24292F] w-full text-center'>GitHub</div>
            </div>
        </div>
    )
}