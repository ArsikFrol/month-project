"use client";

import { useEffect, useRef, useState } from "react";
import { useSession } from "next-auth/react";
import {
    ChevronDown,
    Clock3,
    Heart,
    LogIn,
    Sparkles,
    UserRound,
} from "lucide-react";

import { useTypedRouter, type TypeRoutes } from "@/hooks/useTypedRouter";
import { cn } from "@/lib/utils";

const menuItems = [
    { label: "Профиль", path: "/profile", Icon: UserRound },
    { label: "Избранное", path: "/favourites", Icon: Heart },
    { label: "История", path: "/profile#history", Icon: Clock3 },
    { label: "Войти", path: "/signIn", Icon: LogIn },
] satisfies { label: string; path: TypeRoutes; Icon: typeof UserRound }[];

export function Header() {
    const router = useTypedRouter();
    const { status } = useSession();
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLButtonElement>(null);
    const visibleItems = menuItems.filter(
        (item) => item.path !== "/signIn" || status === "unauthenticated"
    );
    let accountLabel = "Гостевой режим";
    if (status === "authenticated") accountLabel = "Вы вошли в аккаунт";
    if (status === "loading") accountLabel = "Проверяем аккаунт...";

    useEffect(() => {
        if (!menuOpen) return;

        function handlePointerDown(event: PointerEvent) {
            if (!menuRef.current?.contains(event.target as Node)) {
                setMenuOpen(false);
            }
        }

        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setMenuOpen(false);
                triggerRef.current?.focus();
            }
        }

        document.addEventListener("pointerdown", handlePointerDown);
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("pointerdown", handlePointerDown);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [menuOpen]);

    function navigate(path: TypeRoutes) {
        setMenuOpen(false);
        router.push(path);
    }

    return (
        <header className={cn(
            "relative z-30 flex h-[78px] items-center justify-between gap-3",
            "border-b-4 border-[#b5874e] px-[3.2%]",
            "bg-[linear-gradient(155deg,#fdf4d7_0_66%,#f5e3b5_66%_72%,#faedce_72%)]",
            "shadow-[0_4px_0_#ead2a5,0_7px_12px_#75532920]",
            "max-[900px]:h-[65px] max-[900px]:border-b-[3px] max-[900px]:px-4"
        )}>
            <button
                type="button"
                onClick={() => navigate("/")}
                aria-label="По полочкам — на главную"
                className={cn(
                    "group flex min-w-0 items-center gap-2.5 text-left",
                    "rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4",
                    "focus-visible:outline-[#cf833b]"
                )}
            >
                <span className={cn(
                    "grid size-[46px] shrink-0 -rotate-6 place-items-center",
                    "rounded-[15px_12px_14px_11px] border-2 border-[#47733a]",
                    "bg-[linear-gradient(145deg,#8fbd64_0_45%,#5d954b_46%_75%,#437a3b_76%)]",
                    "text-[#f8f4d6] shadow-[inset_2px_3px_#b9d991,0_4px_0_#365e31]",
                    "transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105",
                    "motion-reduce:transition-none motion-reduce:group-hover:transform-none",
                    "max-[900px]:size-[39px]"
                )}>
                    <Sparkles aria-hidden="true" size={25} />
                </span>
                <span className={cn(
                    "whitespace-nowrap text-xl font-extrabold leading-none",
                    "tracking-tight text-[#2e673b] max-[900px]:text-lg"
                )}>
                    по<span className="text-[#df6e2e]">полочкам</span>
                    <small className={cn(
                        "mt-1.5 block text-[8px] font-bold tracking-[.18em] text-[#6e8757]",
                        "max-[900px]:text-[7px] max-[480px]:tracking-[.1em]"
                    )}>
                        КУХНЯ ПОЛНА ИДЕЙ
                    </small>
                </span>
            </button>

            <div
                ref={menuRef}
                className="relative shrink-0"
                onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget)) {
                        setMenuOpen(false);
                    }
                }}
            >
                <button
                    ref={triggerRef}
                    type="button"
                    aria-expanded={menuOpen}
                    aria-controls="profile-menu"
                    onClick={() => setMenuOpen((open) => !open)}
                    className={cn(
                        "flex items-center gap-2 rounded-xl border-2 border-[#93be79]",
                        "bg-[linear-gradient(#f1fadf,#cee8b6)] px-3 py-2",
                        "text-sm font-extrabold text-[#4d8340]",
                        "shadow-[inset_0_2px_#fff,0_3px_0_#83a76c]",
                        "transition hover:brightness-105 active:translate-y-0.5",
                        "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#cf833b]",
                        "motion-reduce:transition-none"
                    )}
                >
                    <UserRound aria-hidden="true" size={18} />
                    <span>Профиль</span>
                    <ChevronDown
                        aria-hidden="true"
                        size={16}
                        className={cn(
                            "transition-transform motion-reduce:transition-none",
                            menuOpen && "rotate-180"
                        )}
                    />
                </button>

                {menuOpen && (
                    <div
                        id="profile-menu"
                        className={cn(
                            "absolute right-0 top-[calc(100%+12px)] w-56",
                            "rounded-2xl border-2 border-[#b8cf9e] bg-[#fffaf0] p-2",
                            "shadow-[0_5px_0_#a9c398,0_12px_24px_#405e3133]"
                        )}
                    >
                        <p className="px-3 py-2 text-xs font-bold text-[#8b9a7c]">
                            {accountLabel}
                        </p>
                        <nav aria-label="Меню профиля" className="grid gap-1">
                            {visibleItems.map(({ label, path, Icon }) => (
                                <button
                                    key={path}
                                    type="button"
                                    onClick={() => navigate(path)}
                                    className={cn(
                                        "flex w-full items-center gap-3 rounded-xl px-3 py-2.5",
                                        "text-left text-sm font-bold text-[#46683e]",
                                        "hover:bg-[#edf4df] focus-visible:bg-[#edf4df]",
                                        "focus-visible:outline-2 focus-visible:outline-[#91b675]"
                                    )}
                                >
                                    <Icon aria-hidden="true" size={18} />
                                    {label}
                                </button>
                            ))}
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
