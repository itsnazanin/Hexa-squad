
import { apiClient } from "@/core/api/apiClient";

export const getMyProfileApi = async () => {
  const { data } = await apiClient.get("/users/me");
  return data;
};

export const updateMyProfileApi = async (profileData) => {
  const { data } = await apiClient.patch("/users/me", profileData);
  return data;
};


export const getMyCoursesApi = async (page = 1, limit = 10) => {
  const { data } = await apiClient.get("/users/me/courses", {
    params: { page, limit }
  });

  return data;
};


export const changePasswordApi = async (passwordData) => {
  const { data } = await apiClient.patch(
    "/users/me/password",
    passwordData
  );

  return data;
};
