"use client";

import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Sparkles } from "lucide-react";

import { useTypedRouter } from "@/hooks/useTypedRouter";
import { cn } from "@/lib/utils";

export default function NotFound() {
    const router = useTypedRouter();
    const goHome = () => router.push("/");

    return (
        <div
            className={cn(
                "min-h-screen bg-[#e6ead4] text-[#354c32]",
                "font-sans"
            )}
            style={{
                backgroundImage: [
                    "linear-gradient(145deg,#f0f0dc 25%,transparent 25%)",
                    "linear-gradient(325deg,#dce5c9 25%,transparent 25%)",
                ].join(","),
                backgroundSize: "90px 90px",
            }}
        >
            <div className={cn(
                "mx-auto flex min-h-screen max-w-[1200px] flex-col",
                "bg-[#f9f4e2] shadow-[0_0_70px_#5b70402a]"
            )}>
                <header className={cn(
                    "flex h-[70px] shrink-0 items-center justify-between gap-2",
                    "border-b-[3px] border-[#d9ddc3] bg-[#fbf6e6] px-4",
                    "sm:h-[78px] sm:gap-4 sm:px-[5%]"
                )}>
                    <button
                        type="button"
                        onClick={goHome}
                        aria-label="По полочкам — на главную"
                        className={cn(
                            "group flex min-w-0 cursor-pointer items-center gap-2 text-left sm:gap-3",
                            "rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4",
                            "focus-visible:outline-[#efaa51]"
                        )}
                    >
                        <span aria-hidden="true" className={cn(
                            "grid h-10 w-10 shrink-0 -rotate-6 place-items-center sm:h-11 sm:w-11",
                            "rounded-[14px] border-2 border-[#4e7443] bg-[#6d935b]",
                            "text-3xl text-[#fffbe8] shadow-[inset_0_3px_#9aba85,0_3px_0_#d5dfc3]",
                            "motion-safe:transition-transform motion-safe:duration-300",
                            "motion-safe:group-hover:rotate-6"
                        )}>
                            <Sparkles size={25} />
                        </span>
                        <span className={cn(
                            "text-lg font-extrabold tracking-tight sm:text-xl",
                            "motion-safe:transition-colors motion-safe:duration-300",
                            "group-hover:text-[#507445]"
                        )}>
                            по<span className="text-[#cf7440]">полочкам</span>
                            <small className="mt-1 block text-[8px] tracking-[.18em] text-[#6b7e5b]">
                                КУХНЯ ПОЛНА ИДЕЙ
                            </small>
                        </span>
                    </button>
                    <button
                        type="button"
                        onClick={goHome}
                        className={cn(
                            "group flex shrink-0 cursor-pointer items-center gap-2",
                            "rounded text-sm font-extrabold text-[#527b40] sm:text-base",
                            "hover:underline focus-visible:outline-2 focus-visible:outline-offset-4",
                            "focus-visible:outline-[#efaa51]"
                        )}
                    >
                        <ArrowLeft aria-hidden="true" size={18} className={cn(
                            "shrink-0 motion-safe:transition-transform motion-safe:duration-300",
                            "motion-safe:group-hover:-translate-x-1"
                        )} />
                        На кухню
                    </button>
                </header>

                <main className="flex flex-1 items-center justify-center px-5 py-8 sm:px-7 sm:py-12">
                    <section className={cn(
                        "w-full max-w-xl rounded-[22px] border-[3px] border-[#a6c486]",
                        "bg-[#fff8e3] px-5 py-8 text-center sm:px-10 sm:py-10",
                        "shadow-[inset_0_2px_#fffef3,0_5px_0_#8dab70]"
                    )}>
                        <Image
                            src="/not-found-minty-chef.png"
                            alt=""
                            width={128}
                            height={128}
                            className={cn(
                                "mx-auto mb-3 h-32 w-32 rounded-[38%] object-cover",
                                "border-[3px] border-[#a7c48a] bg-[#dcefc4]"
                            )}
                        />
                        <div className={cn(
                            "text-7xl font-extrabold text-[#7d9e66]",
                            "sm:text-8xl"
                        )}>404</div>
                        <h1 className={cn(
                            "mt-3 text-2xl font-extrabold text-[#365a35]",
                            "sm:text-3xl"
                        )}>Кажется, мы заблудились</h1>
                        <p className="my-5 leading-relaxed text-[#617756]">
                            Такой страницы нет, но на кухне всегда найдётся что-нибудь вкусное.
                        </p>
                        <button
                            type="button"
                            onClick={goHome}
                            className={cn(
                                "group inline-flex cursor-pointer items-center justify-center gap-2",
                                "rounded-xl border-2 border-[#527b40] bg-[#6c9856] px-6 py-3",
                                "font-extrabold text-[#fffef0] shadow-[inset_0_3px_#a1c78b,0_4px_0_#527b40]",
                                "hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-4",
                                "focus-visible:outline-[#efaa51] motion-safe:transition motion-safe:duration-300",
                                "motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-0"
                            )}
                        >
                            Вернуться на кухню
                            <ArrowUpRight aria-hidden="true" size={18} className={cn(
                                "shrink-0 motion-safe:transition-transform motion-safe:duration-300",
                                "motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
                            )} />
                        </button>
                    </section>
                </main>
            </div>
        </div>
    );
}
