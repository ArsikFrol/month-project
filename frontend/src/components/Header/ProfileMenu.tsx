"use client";

import { useEffect, useRef, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { ChevronDown, Clock3, Heart, LogIn, LogOut, UserRound } from "lucide-react";

import { useTypedRouter, type TypeRoutes } from "@/hooks/useTypedRouter";
import { UserAvatar } from "@/components/UI/UserAvatar";
import { cn } from "@/lib/utils";

const menuItems = [
    { label: "Профиль", path: "/profile", Icon: UserRound },
    { label: "Избранное", path: "/favourites", Icon: Heart },
    { label: "История", path: "/history", Icon: Clock3 },
] satisfies { label: string; path: TypeRoutes; Icon: typeof UserRound }[];

const menuButtonClass = cn(
    "flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2",
    "text-left text-sm text-green-800 hover:bg-green-50"
);

export function ProfileMenu() {
    const router = useTypedRouter();
    const { data: session, status } = useSession();
    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const name = session?.user?.name || session?.user?.email || "Профиль";

    useEffect(() => {
        if (!open) return;

        function onPointerDown(event: PointerEvent) {
            if (!menuRef.current?.contains(event.target as Node)) setOpen(false);
        }

        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setOpen(false);
                buttonRef.current?.focus();
            }
        }

        document.addEventListener("pointerdown", onPointerDown);
        document.addEventListener("keydown", onKeyDown);
        return () => {
            document.removeEventListener("pointerdown", onPointerDown);
            document.removeEventListener("keydown", onKeyDown);
        };
    }, [open]);

    function navigate(path: TypeRoutes) {
        setOpen(false);
        router.push(path);
    }

    return (
        <div
            ref={menuRef}
            className="relative"
            onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
            }}
        >
            <button
                ref={buttonRef}
                type="button"
                aria-expanded={open}
                aria-controls="profile-menu"
                onClick={() => setOpen(!open)}
                className={cn(
                    "flex cursor-pointer items-center gap-2 rounded-lg bg-green-100 p-1.5",
                    "max-[380px]:gap-1 max-[380px]:p-1",
                    "text-sm font-bold text-green-800 hover:bg-green-200"
                )}
            >
                <UserAvatar image={session?.user?.image} size={28} />
                <span className="max-w-28 truncate max-[380px]:max-w-16">{name}</span>
                <ChevronDown size={16} className="max-[380px]:hidden" />
            </button>
            {open && (
                <nav id="profile-menu" aria-label="Меню профиля"
                    className={cn(
                        "absolute right-0 top-full mt-2 grid w-56 gap-1 rounded-xl p-2",
                        "border border-green-200 bg-white shadow-lg"
                    )}
                >
                    {menuItems.map(({ label, path, Icon }) => (
                        <button key={path} type="button" onClick={() => navigate(path)}
                            className={menuButtonClass}
                        >
                            <Icon size={18} /> {label}
                        </button>
                    ))}
                    {status === "unauthenticated" && (
                        <button type="button" onClick={() => navigate("/signIn")}
                            className={menuButtonClass}
                        >
                            <LogIn size={18} /> Войти
                        </button>
                    )}
                    {status === "authenticated" && (
                        <button type="button" onClick={() => void signOut({ redirectTo: "/" })}
                            className={menuButtonClass}
                        >
                            <LogOut size={18} /> Выйти
                        </button>
                    )}
                </nav>
            )}
        </div>
    );
}
