import { cn } from "@/lib/utils";
import { Services } from "../UI/Services";
import { Btn } from "./Btn";
import { Form } from "./Form";

export function SignUp() {
    return (
        <div className={cn(
            'flex min-h-[calc(100vh-78px)] items-center justify-center bg-pink-100 p-4',
            'max-[900px]:min-h-[calc(100vh-65px)]'
        )}>
            <div className={cn(
                'w-full max-w-[400px] rounded-4xl bg-[rgba(232,235,215,1)] p-[20px]'
            )}>
                <div className=''>
                    <div className='text-[18px] font-medium text-center'>Sign up to the account</div>
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
