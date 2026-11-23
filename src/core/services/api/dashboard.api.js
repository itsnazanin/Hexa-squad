import { apiClient } from "@/core/api/apiClient";

export const getDashboardApi = async () => {
  const { data } = await apiClient.get("/dashboard/me");
  return data;
};