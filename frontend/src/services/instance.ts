import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,  /* https://month-project.onrender.com/api */  /* http://127.0.0.1:8000 */
})