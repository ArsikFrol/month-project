'use client'

import { cn } from "@/lib/utils"
import { Services } from "../UI/Services"
import { Form } from "./Form"
import { Btn } from "./Btn"

export function SignIn() {
    return (
        <div className={cn(
            'h-screen bg-pink-100'
        )}>
            <div className={cn(
                'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
                'bg-[rgba(232,235,215,1)] rounded-4xl p-[20px] w-[400px]'
            )}>
                <div className=''>
                    <div className='text-[18px] font-medium text-center'>Sign in to the account</div>
                    <div className='text-gray-700 text-center'>Enter your email to sign up for this app</div>
                    <Form />
                    <div className='flex items-center gap-x-[10px] my-[20px]'>
                        <div className='h-[1px] w-full bg-gray-300'></div>
                        <div className='flex-shrink-0 text-[14px] text-gray-500'>or continue with</div>
                        <div className='h-[1px] w-full bg-gray-300'></div>
                    </div>
                    <Services />
                    <Btn />
                    <div className='text-[14px] text-center mt-[20px]'>
                        By clicking continue, you agree to our Terms of Service and Privacy Policy
                    </div>
                </div>
            </div>
        </div>
    )
}