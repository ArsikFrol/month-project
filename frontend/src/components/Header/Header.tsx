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
            "relative z-10 flex h-[78px] items-center justify-between gap-3",
            "border-b border-amber-200 bg-amber-50 px-4 md:px-8",
            "max-[900px]:h-[65px]"
        )}>
            <button
                type="button"
                onClick={() => navigate("/")}
                aria-label="По полочкам — на главную"
                className={cn(
                    "group flex min-w-0 items-center gap-3 text-left",
                    "rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4"
                )}
            >
                <span className={cn(
                    "grid size-10 shrink-0 place-items-center rounded-xl bg-green-700 text-white",
                    "motion-safe:transition-transform motion-safe:group-hover:scale-105"
                )}>
                    <Sparkles aria-hidden="true" size={25} />
                </span>
                <span className={cn(
                    "whitespace-nowrap text-lg font-bold leading-none text-green-800",
                    "sm:text-xl"
                )}>
                    по<span className="text-orange-600">полочкам</span>
                    <small className="mt-1 block text-[9px] font-medium tracking-wider text-green-700">
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
                        "flex items-center gap-2 rounded-lg bg-green-100 px-3 py-2",
                        "text-sm font-bold text-green-800 hover:bg-green-200",
                        "focus-visible:outline-2 focus-visible:outline-offset-2"
                    )}
                >
                    <UserRound aria-hidden="true" size={18} />
                    <span>Профиль</span>
                    <ChevronDown
                        aria-hidden="true"
                        size={16}
                        className={cn(
                            "motion-safe:transition-transform",
                            menuOpen && "rotate-180"
                        )}
                    />
                </button>

                {menuOpen && (
                    <div
                        id="profile-menu"
                        className={cn(
                            "absolute right-0 top-full mt-2 w-56 rounded-xl p-2",
                            "border border-green-200 bg-white shadow-lg"
                        )}
                    >
                        <p className="px-3 py-2 text-xs font-medium text-gray-500">
                            {accountLabel}
                        </p>
                        <nav aria-label="Меню профиля" className="grid gap-1">
                            {visibleItems.map(({ label, path, Icon }) => (
                                <button
                                    key={path}
                                    type="button"
                                    onClick={() => navigate(path)}
                                    className={cn(
                                        "flex w-full items-center gap-3 rounded-lg px-3 py-2",
                                        "text-left text-sm text-green-800 hover:bg-green-50",
                                        "focus-visible:outline-2 focus-visible:outline-green-600"
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
