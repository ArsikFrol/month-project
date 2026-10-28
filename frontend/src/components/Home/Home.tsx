import { Header } from "../Header/Header";
import { Ingredients } from "./Ingredients/Ingredients";
import { Oven } from "./Oven";
import { RangeHood } from "./RangeHood";
import { Sink } from "./Sink";
import { Table } from "./Table";
import { cn } from "@/lib/utils";
import { Wardrobe } from "./Wardrobe";
import { Refrigerator } from "./Refrigerator";

export function Home() {
    return (
        <div className={cn(
            'h-screen bg-pink-100 gap-x-[50px]',
            'flex justify-center gap-x-[50px]'
        )}>
            <div className=' flex items-center justify-center'>
                <div className='flex gap-x-[40px] h-[600px]'>
                    <div className='flex flex-col justify-between'>
                        <div className='flex gap-x-[40px]'>
                            <Wardrobe width={250} />
                            <RangeHood />
                        </div>
                        <div className='flex items-end'>
                            <Sink />
                            <Oven />
                        </div>
                    </div>
                    <Refrigerator />
                </div>
            </div>
            <div className='flex items-center'>
                <Ingredients />
            </div>
        </div>
    )
}