import { apiClient } from "../../api/apiClient";

export const loginApi = async (data) => {
    const response = await apiClient.post(
        "/auth/login",
        data
    )

    return response.data
}

export const verifyLoginApi = async (data) => {
    const response = await apiClient.post("/auth/login/verify" , data)
    return response.data
}

export const resendLoginApi = async (data) => {
    const response = await apiClient.post("/auth/login/resend/" , data)
    return response.data
}

export const registerApi = async (data) => {
    const response = await apiClient.post(
        "/auth/register",
        data
    )
    return response.data
}

export const getProfileApi = async () => {
    const response = await apiClient.get(
        "/auth/profile"
    )

    return response.data
}