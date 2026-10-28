import { SessionProvider } from "next-auth/react"
import { Toaster } from "react-hot-toast"
import { JSX } from "react/jsx-runtime"

export function Provider({ children }: { children: JSX.Element }) {
    return (
        <SessionProvider>
            {children}
            <Toaster
                position="bottom-right"
                reverseOrder={false}
                gutter={8}
                toastOptions={{
                    duration: 3000,
                    style: {
                        background: '#363636',
                        color: '#fff',
                    },
                    success: {
                        duration: 3000,
                        iconTheme: {
                            primary: '#10b981',
                            secondary: '#fff',
                        },
                    },
                    error: {
                        duration: 4000,
                    },
                }}
            />
        </SessionProvider>
    )
}