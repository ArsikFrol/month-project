import z from "zod";

export const signUpSchema = z.object({
    email: z.string()
        .trim()
        .toLowerCase()
        .min(5, 'Email слишком короткий')
        .max(254, 'Email слишком длинный')
        .email('Введите корректный email'),

    password: z.string()
        .min(8, 'Пароль должен быть минимум 8 символов')
        .max(100, 'Пароль слишком длинный')
        .regex(/[A-Z]/, 'Добавьте хотя бы одну заглавную букву')
        .regex(/[a-z]/, 'Добавьте хотя бы одну строчную букву')
        .regex(/\d/, 'Добавьте хотя бы одну цифру')
        .regex(/[^A-Za-z0-9]/, 'Добавьте хотя бы один спецсимвол'),

    name: z.string()
        .min(1, 'Введите имя')
        .min(2, 'Имя должно содержать минимум 2 символа')
        .max(50, 'Имя слишком длинное')
        .regex(
            /^[А-ЯЁа-яёA-Za-z]+(?:[ ][А-ЯЁа-яёA-Za-z]+)*$/,
            'Имя может содержать только буквы и один пробел между словами'
        )
})

export type SignUp = z.infer<typeof signUpSchema>

export const signInSchema = signUpSchema.pick({
    email: true,
    password: true
})

export type SignIn = z.infer<typeof signInSchema>