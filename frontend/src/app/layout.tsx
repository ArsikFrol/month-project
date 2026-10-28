import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/Provider";
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
        <html lang="en" className={roboto.variable}>
            <body>
                <Provider>
                    {children}
                </Provider>
            </body>
        </html>
    );
}
