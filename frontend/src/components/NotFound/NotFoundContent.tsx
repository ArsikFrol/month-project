"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useTypedRouter } from "@/hooks/useTypedRouter";
import { cn } from "@/lib/utils";

export function NotFoundContent() {
    const router = useTypedRouter();

    return (
        <main className={cn(
            "flex min-h-[calc(100vh-78px)] items-center justify-center",
            "bg-amber-50 p-5 max-[900px]:min-h-[calc(100vh-65px)]"
        )}>
            <section className="w-full max-w-xl rounded-2xl border border-green-200 bg-white p-8 text-center">
                <Image src="/not-found-minty-chef.png" alt="" width={128} height={128}
                    className="mx-auto rounded-2xl"
                />
                <p className="mt-4 text-7xl font-bold text-green-700">404</p>
                <h1 className="mt-3 text-2xl font-bold text-green-900">
                    Кажется, мы заблудились
                </h1>
                <p className="my-5 text-green-800">
                    Такой страницы нет, но на кухне всегда найдётся что-нибудь вкусное.
                </p>
                <button type="button" onClick={() => router.push("/")}
                    className={cn(
                        "inline-flex cursor-pointer items-center gap-2 rounded-lg px-5 py-3",
                        "bg-green-700 font-bold text-white hover:bg-green-800"
                    )}
                >
                    Вернуться на кухню <ArrowRight size={18} />
                </button>
            </section>
        </main>
    );
}
