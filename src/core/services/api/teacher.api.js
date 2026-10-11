import { apiClient } from "@/core/api/apiClient";

export const getTeachersApi = async () => {
    const response = await apiClient.get("/teacher")

    return response.data
}