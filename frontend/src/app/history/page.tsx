import { Clock3 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function HistoryPage() {
    return (
        <main className={cn(
            "flex min-h-[calc(100vh-78px)] items-center justify-center bg-amber-50 p-5",
            "max-[900px]:min-h-[calc(100vh-65px)]"
        )}>
            <section className="w-full max-w-xl rounded-xl border border-green-200 bg-white p-8 text-center text-green-900">
                <Clock3 className="mx-auto text-green-700" size={36} />
                <h1 className="mt-4 text-2xl font-bold">История рецептов</h1>
                <p className="mt-3 text-green-700">История пока пуста.</p>
            </section>
        </main>
    );
}
