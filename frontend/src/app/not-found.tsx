import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
    return (
        <div
            className="min-h-screen bg-[#e6ead4] font-[Nunito,sans-serif] text-[#354c32]"
            style={{
                backgroundImage: "linear-gradient(145deg,#f0f0dc 25%,transparent 25%),linear-gradient(325deg,#dce5c9 25%,transparent 25%)",
                backgroundSize: "90px 90px",
            }}
        >
            <div className="mx-auto min-h-screen max-w-[1200px] bg-[#f9f4e2] shadow-[0_0_70px_#5b70402a]">
                <header className="flex h-[70px] items-center justify-between gap-2 border-b-[3px] border-[#d9ddc3] bg-[#fbf6e6] px-4 sm:h-[78px] sm:gap-4 sm:px-[5%]">
                    <Link href="/" className="flex min-w-0 items-center gap-2 no-underline sm:gap-3" aria-label="По полочкам — на главную">
                        <span aria-hidden="true" className="grid h-10 w-10 shrink-0 -rotate-6 place-items-center rounded-[14px] border-2 border-[#4e7443] bg-[#6d935b] text-3xl text-[#fffbe8] shadow-[inset_0_3px_#9aba85,0_3px_0_#d5dfc3] sm:h-11 sm:w-11">✳</span>
                        <span className="font-[Rubik,sans-serif] text-lg font-extrabold tracking-tight sm:text-xl">
                            по<span className="text-[#cf7440]">полочкам</span>
                            <small className="mt-1 block text-[8px] tracking-[.18em] text-[#6b7e5b]">КУХНЯ ПОЛНА ИДЕЙ</small>
                        </span>
                    </Link>
                    <Link href="/" className="shrink-0 text-sm font-extrabold text-[#527b40] hover:underline sm:text-base">← На кухню</Link>
                </header>
                <main className="mx-auto max-w-[1000px] px-5 py-8 sm:px-7 sm:py-12">
                    <section className="mx-auto max-w-xl rounded-[22px] border-[3px] border-[#a6c486] bg-[#fff8e3] px-5 py-8 text-center shadow-[inset_0_2px_#fffef3,0_5px_0_#8dab70] sm:px-10 sm:py-10">
                        <Image src="/not-found-minty-chef.png" alt="" width={128} height={128} className="mx-auto mb-3 h-32 w-32 rounded-[38%] border-[3px] border-[#a7c48a] bg-[#dcefc4] object-cover" />
                        <div className="font-[Rubik,sans-serif] text-7xl font-extrabold text-[#7d9e66] sm:text-8xl">404</div>
                        <h1 className="mt-3 font-[Rubik,sans-serif] text-2xl font-extrabold text-[#365a35] sm:text-3xl">Кажется, мы заблудились</h1>
                        <p className="my-5 leading-relaxed text-[#617756]">Такой страницы нет, но на кухне всегда найдётся что-нибудь вкусное.</p>
                        <Link href="/" className="inline-block rounded-xl border-2 border-[#527b40] bg-[#6c9856] px-6 py-3 font-extrabold text-[#fffef0] shadow-[inset_0_3px_#a1c78b,0_4px_0_#527b40] hover:brightness-105">Вернуться на кухню ↗</Link>
                    </section>
                </main>
            </div>
        </div>
    );
}
