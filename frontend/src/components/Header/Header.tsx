'use client'

import { useSession } from "next-auth/react"

export function Header() {
    const { data } = useSession()

    return (
        <div className="w-[1280px] mx-auto">
            Header
        </div>
    )
}