"use client";

import { Logo } from "./Logo";
import { ProfileMenu } from "./ProfileMenu";
import { ThemeButton } from "./ThemeButton";
import { cn } from "@/lib/utils";

export function Header() {
    return (
        <header className={cn(
            "relative z-10 flex h-[78px] items-center justify-between",
            "border-b border-amber-200 bg-amber-50 px-4 md:px-8 max-[380px]:px-2",
            "max-[900px]:h-[65px]"
        )}>
            <Logo />
            <div className="flex items-center gap-2">
                <ThemeButton />
                <ProfileMenu />
            </div>
        </header>
    );
}
