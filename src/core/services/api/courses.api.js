import { apiClient } from "@/core/api/apiClient";
import { getApiLanguage } from "@/core/utils/language";

export const getCourseApi = async (params = {}) => {
    const language = getApiLanguage(
        localStorage.getItem("language") || "fa"
    )

    const response = await apiClient.get("/courses", {
        params: {
            ...params,
            lang: language
        }
    })

    return response.data
}

export const getCourseByIdApi = async (courseId) => {
    const language = getApiLanguage(
        localStorage.getItem("language") || "fa"
    )

    const response = await apiClient.get(
        `/courses/${courseId}`,
        {
            params: {
                lang: language
            }
        }
    )

    return response.data
}

export const getFavoritesApi = async () => {
    const response = await apiClient.get("/favorites")
    return response.data
}

export const addFavoriteApi = async (courseId) => {
    const response = await apiClient.post(`/courses/${courseId}/favorite`)
    return response.data
}

export const removeFavoriteApi = async (courseId) => {
    const response = await apiClient.delete(
        `/courses/${courseId}/favorite`
    )

    return response.data
}