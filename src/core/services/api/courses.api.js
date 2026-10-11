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

    const response = apiClient.get(
        `/courses/${courseId}`,
        {
            params: {
                lang: language
            }
        }
    )

    return response.data
}