import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"

import NextAuth from "next-auth"
import { api } from "@/app/api/client"
import { ApiRoutes } from "@/services/constants"

type LoginResponse = {
    data: {
        id: string
        email: string
        name: string
    }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
    providers: [
        Google, GitHub,
        Credentials({
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' }
            },

            async authorize(credentials) {
                if (!credentials.email || !credentials.password) {
                    return null
                }

                try {

                    const { data } = await api.post<LoginResponse>(ApiRoutes.LOGIN, {
                        email: credentials.email,
                        password: credentials.password
                    })

                    const user = data.data ?? data

                    if (!user) return null

                    return {
                        id: String(user.id),
                        name: user.name ?? null,
                        email: user.email ?? null,
                    }

                } catch (error) {
                    console.error('Ошибка входа:', error)
                    return null
                }
            },
        })
    ],
    session: { strategy: 'jwt' },
    trustHost: true,
    callbacks: {
        async jwt({ token, user }) {
            if (user) token.id = user.id
            return token
        },
        async session({ session, token }) {
            if (session.user) session.user.id = token.id as string
            return session
        },
    },
})
