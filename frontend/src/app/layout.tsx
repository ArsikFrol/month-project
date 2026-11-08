import { Roboto } from "next/font/google";

import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "@/components/Provider";
import { Header } from "@/components/Header/Header";
import type { ReactNode } from "react";

const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Month project",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="ru" className={roboto.variable}>
            <body>
                <Provider>
                    <Header />
                    {children}
                </Provider>
            </body>
        </html>
    );
}
