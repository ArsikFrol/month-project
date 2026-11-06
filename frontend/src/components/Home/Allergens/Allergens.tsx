import { cn } from "@/lib/utils"
import useProducts from "@/store/Products/useProducts"
import { Elem } from "./Elem"

type Props = {

}

export function Allergens(props: Props) {
    const { allergens, toggleAllergens } = useProducts((s) => s)

    return (
        <div className={cn(
            'grid transition-[grid-template-rows,opacity] duration-500 ease-out',
            allergens.length
                ? 'grid-rows-[1fr] opacity-100'
                : 'grid-rows-[0fr] opacity-0 pointer-events-none',
        )}>
            <div className="overflow-hidden">
                <div className="text-center text-[30px] font-light mt-[20px]">
                    Продукты-аллергены
                </div>
                <div className="flex flex-col gap-y-[20px] mt-[20px]">
                    {
                        allergens.map((obj, i) => (
                            <Elem key={i} index={i} obj={obj} toggleAllergens={toggleAllergens} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}