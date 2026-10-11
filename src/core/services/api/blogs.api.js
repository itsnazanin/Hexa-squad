import { apiClient } from "@/core/api/apiClient";
import { getApiLanguage } from "@/core/utils/language";

export const getBlogsApi = async (params = {}) => {
    const language = getApiLanguage(
        localStorage.getItem("language") || "fa"
    )

    const response = await apiClient.get(
        "/blogs", {
            params: {
                ...params,
                lang:language
            }
        }
    )

    return response.data
}