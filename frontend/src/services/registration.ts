import { ApiRoutes } from "./constants"
import { axiosInstance } from "./instance"

type Registration = {
    email: string,
    password: string,
    name: string
}

export const createAccount = async (body: Registration): Promise<Registration> => {
    const { data } = await axiosInstance.post<{ data: Registration }>(ApiRoutes.REGISTRATION, body)

    return data.data
}