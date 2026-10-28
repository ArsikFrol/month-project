import { JSX } from "react/jsx-runtime"

export function Container({ children }: { children: JSX.Element }) {
    return (
        <div className="w-[1180px] mx-auto">
            {children}
        </div>
    )
}