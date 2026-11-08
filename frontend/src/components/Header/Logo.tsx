"use client";

import { Sparkles } from "lucide-react";
import { useTypedRouter } from "@/hooks/useTypedRouter";
import { cn } from "@/lib/utils";

export function Logo() {
    const router = useTypedRouter();

    return (
        <button
            type="button"
            onClick={() => router.push("/")}
            aria-label="По полочкам — на главную"
            className={cn(
                "flex cursor-pointer items-center gap-3 text-left max-[380px]:gap-2",
                "motion-safe:transition-transform motion-safe:hover:scale-105"
            )}
        >
            <span className="grid size-10 place-items-center rounded-xl bg-green-700 text-white max-[380px]:size-9">
                <Sparkles size={25} />
            </span>
            <span className="text-lg font-bold text-green-800 sm:text-xl max-[380px]:text-base">
                по<span className="text-orange-600">полочкам</span>
                <small className="block text-[9px] font-medium text-green-700">
                    КУХНЯ ПОЛНА ИДЕЙ
                </small>
            </span>
        </button>
    );
}
