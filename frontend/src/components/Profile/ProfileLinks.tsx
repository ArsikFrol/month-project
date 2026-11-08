"use client";

import { ArrowRight, Clock3, Heart } from "lucide-react";
import { useTypedRouter } from "@/hooks/useTypedRouter";
import { cn } from "@/lib/utils";

export function ProfileLinks() {
    const router = useTypedRouter();
    const cards = [
        { title: "Избранное", text: "Ваши любимые рецепты", path: "/favourites" as const, Icon: Heart },
        { title: "История", text: "Просмотренные рецепты", path: "/history" as const, Icon: Clock3 },
    ];

    return (
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {cards.map(({ title, text, path, Icon }) => (
                <button key={path} type="button" onClick={() => router.push(path)}
                    className={cn(
                        "flex cursor-pointer items-center gap-4 rounded-xl p-5 text-left",
                        "border border-green-200 bg-white hover:bg-green-50"
                    )}
                >
                    <Icon className="shrink-0 text-green-700" size={24} />
                    <span className="flex-1">
                        <span className="block text-lg font-bold">{title}</span>
                        <span className="text-sm text-green-700">{text}</span>
                    </span>
                    <ArrowRight size={18} />
                </button>
            ))}
        </div>
    );
}
