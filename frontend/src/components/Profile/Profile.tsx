"use client";

import { ArrowRight, Clock3, Heart, LogIn, UserRound } from "lucide-react";
import { useSession } from "next-auth/react";

import { useTypedRouter } from "@/hooks/useTypedRouter";
import { cn } from "@/lib/utils";

export function Profile() {
    const router = useTypedRouter();
    const { status } = useSession();

    return (
        <main className="min-h-[calc(100vh-78px)] bg-[#f5eedb] px-5 py-10 text-[#385339]">
            <div className="mx-auto max-w-[900px]">
                <p className="text-xs font-bold text-[#819770]">
                    ВАШ УГОЛОК
                </p>
                <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
                    Мой профиль
                </h1>
                <p className="mt-3 text-[#718469]">
                    Всё, что пригодится вам на кухне, в одном месте.
                </p>

                <div className="mt-8 grid gap-5 md:grid-cols-2">
                    <section className={cn(
                        "rounded-3xl border-2 border-[#d2dfbf] bg-[#fffaf0] p-6",
                        "shadow-[0_4px_0_#d8e4c5]"
                    )}>
                        <div className="flex items-center gap-4">
                            <span className={cn(
                                "flex h-14 w-14 shrink-0 items-center justify-center",
                                "rounded-2xl bg-[#e2efd5] text-[#608a4f]"
                            )}>
                                <UserRound aria-hidden="true" size={28} />
                            </span>
                            <div>
                                <h2 className="text-xl font-bold">
                                    {status === "loading"
                                        ? "Профиль"
                                        : status === "authenticated" ? "Вы вошли в аккаунт" : "Гость"}
                                </h2>
                                <p className="mt-1 text-sm text-[#718469]">
                                    {status === "loading"
                                        ? "Проверяем ваш аккаунт…"
                                        : status === "authenticated"
                                            ? "Рады видеть вас снова!"
                                            : "Войдите, чтобы пользоваться аккаунтом."}
                                </p>
                            </div>
                        </div>

                        {status === "unauthenticated" && (
                            <button
                                type="button"
                                onClick={() => router.push("/signIn")}
                                className={cn(
                                    "mt-6 flex items-center gap-2 rounded-xl px-4 py-3",
                                    "bg-[#6e9857] font-bold text-white transition-colors",
                                    "hover:bg-[#587e45] focus-visible:outline-2 focus-visible:outline-offset-2"
                                )}
                            >
                                <LogIn aria-hidden="true" size={18} />
                                Войти в аккаунт
                            </button>
                        )}
                    </section>

                    <section className={cn(
                        "rounded-3xl border-2 border-[#d2dfbf] bg-[#fffaf0] p-6",
                        "shadow-[0_4px_0_#d8e4c5]"
                    )}>
                        <div className="flex items-center gap-3">
                            <Heart aria-hidden="true" className="text-[#d58b59]" />
                            <h2 className="text-xl font-bold">Избранное</h2>
                        </div>
                        <p className="mt-3 text-sm text-[#718469]">
                            Перейдите к рецептам в разделе избранного.
                        </p>
                        <button
                            type="button"
                            onClick={() => router.push("/favourites")}
                            className={cn(
                                "mt-5 inline-flex items-center gap-2 font-bold text-[#588147]",
                                "transition-colors hover:text-[#365f30]",
                                "focus-visible:outline-2 focus-visible:outline-offset-4"
                            )}
                        >
                            Открыть избранное
                            <ArrowRight aria-hidden="true" size={18} />
                        </button>
                    </section>

                    <section id="history" className={cn(
                        "rounded-3xl border-2 border-[#e3dfc9] bg-[#fffaf0] p-6",
                        "md:col-span-2"
                    )}>
                        <div className="flex items-center gap-3">
                            <Clock3 aria-hidden="true" className="text-[#9ba989]" />
                            <h2 className="text-xl font-bold">История</h2>
                        </div>
                        <p className="mt-3 text-sm leading-relaxed text-[#718469]">
                            История рецептов пока не подключена.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
