import { Sun } from "lucide-react";

export function ThemeButton() {
    return (
        <button
            type="button"
            disabled
            title="Смена темы пока недоступна"
            aria-label="Смена темы пока недоступна"
            className="rounded-lg bg-green-100 p-2 text-green-800 disabled:cursor-not-allowed"
        >
            <Sun size={20} />
        </button>
    );
}
