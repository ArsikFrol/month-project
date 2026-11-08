import { ProfileAccount } from "./ProfileAccount";
import { ProfileLinks } from "./ProfileLinks";
import { cn } from "@/lib/utils";

export function Profile() {
    return (
        <main className={cn(
            "flex min-h-[calc(100vh-78px)] items-center justify-center bg-amber-50 p-5",
            "max-[900px]:min-h-[calc(100vh-65px)]"
        )}>
            <div className="w-full max-w-3xl text-green-900">
                <h1 className="mb-6 text-center text-3xl font-bold">Мой профиль</h1>
                <ProfileAccount />
                <ProfileLinks />
            </div>
        </main>
    );
}
