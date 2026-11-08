"use client";

import { signOut, useSession } from "next-auth/react";
import { LogIn, LogOut } from "lucide-react";
import { useTypedRouter } from "@/hooks/useTypedRouter";
import { UserAvatar } from "@/components/UI/UserAvatar";
import { cn } from "@/lib/utils";

export function ProfileAccount() {
    const router = useTypedRouter();
    const { data: session, status } = useSession();
    const user = session?.user;
    const name = user?.name || user?.email || "Пользователь";

    return (
        <section className="rounded-xl border border-green-200 bg-white p-6">
            <div className="flex flex-wrap items-center gap-4">
                <UserAvatar image={user?.image} size={64} />
                <div>
                    <h2 className="text-xl font-bold">
                        {status === "loading" ? "Профиль" : user ? name : "Гость"}
                    </h2>
                    {user?.email && user.email !== name && <p>{user.email}</p>}
                    {user?.id && <p className="text-sm text-green-700">ID: {user.id}</p>}
                </div>
            </div>
            {status === "unauthenticated" && (
                <button type="button" onClick={() => router.push("/signIn")}
                    className={cn(
                        "mt-5 flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2",
                        "bg-green-700 font-bold text-white hover:bg-green-800"
                    )}
                >
                    <LogIn size={18} /> Войти
                </button>
            )}
            {status === "authenticated" && (
                <button type="button" onClick={() => void signOut({ redirectTo: "/" })}
                    className={cn(
                        "mt-5 flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2",
                        "bg-green-100 font-bold text-green-800 hover:bg-green-200"
                    )}
                >
                    <LogOut size={18} /> Выйти
                </button>
            )}
        </section>
    );
}
