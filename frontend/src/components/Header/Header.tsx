"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";

export function Header() {
    const { status } = useSession();
    return (
        <header className="relative z-[3] flex h-[78px] items-center justify-between gap-2 border-b-4 border-[#b5874e] bg-[linear-gradient(155deg,#fdf4d7_0_66%,#f5e3b5_66%_72%,#faedce_72%)] px-[3.2%] font-[Nunito,sans-serif] shadow-[0_4px_0_#ead2a5,0_7px_12px_#75532920] max-[900px]:h-[65px] max-[900px]:border-b-[3px] max-[900px]:px-[18px] max-[480px]:px-[14px]">
            <Link href="/" aria-label="По полочкам — на главную" className="flex min-w-0 items-center gap-2.5 no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#efaa51]">
                <span aria-hidden="true" className="grid h-[46px] w-[46px] shrink-0 -rotate-[7deg] place-items-center rounded-[15px_12px_14px_11px] border-2 border-[#47733a] bg-[linear-gradient(145deg,#8fbd64_0_45%,#5d954b_46%_75%,#437a3b_76%)] text-[36px] leading-none text-[#f8f4d6] shadow-[inset_2px_3px_#b9d991,0_4px_0_#365e31,0_6px_5px_#405e3144] max-[900px]:h-[39px] max-[900px]:w-[39px] max-[900px]:text-[30px]">✳</span>
                <span className="whitespace-nowrap font-[Rubik,sans-serif] text-xl font-extrabold leading-none tracking-[-1.1px] text-[#2e673b] max-[900px]:text-lg max-[360px]:text-base">по<span className="text-[#df6e2e]">полочкам</span><small className="mt-1.5 block text-[8px] font-bold tracking-[.18em] text-[#6e8757] max-[900px]:text-[7px] max-[480px]:tracking-[.1em]">КУХНЯ ПОЛНА ИДЕЙ</small></span>
            </Link>
            <div aria-hidden="true" className="hidden items-center gap-3 border-l border-[#d9cfaa] pl-6 min-[1050px]:flex"><span className="text-[25px] leading-none text-[#e79a4c]">✦</span><span className="font-[Rubik,sans-serif] text-[10px] font-bold tracking-[1.2px] text-[#718c5c]">ТВОЯ КУХНЯ<br/><span className="text-xs tracking-normal text-[#3d6639]">Вкусные идеи каждый день</span></span></div>
            <div aria-hidden="true" className="ml-auto hidden items-center gap-2 rounded-xl border border-[#d4dfbc] bg-[#edf3df] px-3 py-2 text-[10px] font-extrabold tracking-wider text-[#78966a] min-[1050px]:flex"><span className="grid h-7 w-7 place-items-center rounded-full bg-[#d9e8bc] text-lg text-[#5e984a]">✿</span> ГОТОВИМ ВМЕСТЕ</div>
            <nav aria-label="Навигация" className="ml-auto flex shrink-0 items-center gap-2 min-[1050px]:ml-3">
                <Link href="/favourites" aria-label="Избранное" className="rounded-[11px] border-2 border-[#bdce9d] bg-[linear-gradient(145deg,#fffbea,#e9f0d4)] px-3 py-2 text-xs font-extrabold text-[#57764a] shadow-[inset_0_2px_#fff,0_3px_0_#a8bf91] transition hover:brightness-105 active:translate-y-[3px] active:shadow-none max-[450px]:px-2">♥ <span className="max-[360px]:hidden">Избранное</span></Link>
                {status === "unauthenticated" && <Link href="/signIn" className="rounded-[11px] border-2 border-[#93be79] bg-[linear-gradient(#f1fadf,#cee8b6)] px-3 py-2 text-xs font-extrabold text-[#4d8340] shadow-[inset_0_2px_#fff,0_3px_0_#83a76c] transition hover:brightness-105 active:translate-y-[3px] active:shadow-none max-[450px]:px-2">♙ Войти</Link>}
            </nav>
        </header>
    );
}
