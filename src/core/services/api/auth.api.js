
import { apiClient } from "../../api/apiClient";

export const loginApi = async (data) => {
  const response = await apiClient.post("/auth/login", data);
  return response.data;
};

export const verifyLoginApi = async (data) => {
  const response = await apiClient.post("/auth/login/verify", data);
  return response.data;
};

export const resendLoginApi = async (data) => {
  const response = await apiClient.post("/auth/login/resend/", data);
  return response.data;
};

export const sendRegisterCodeApi = async (data) => {
  const response = await apiClient.post(
    "/auth/register/send-code",
    data
  );

  return response.data;
};

export const verifyRegisterCodeApi = async (data) => {
  const response = await apiClient.post(
    "/auth/register/verify",
    data
  );

  return response.data;
};

export const completeRegisterApi = async (data) => {
  const response = await apiClient.post(
    "/auth/register/complete",
    data
  );

  return response.data;
};

export const getProfileApi = async () => {
  const response = await apiClient.get("/auth/profile");
  return response.data;
};


export const logoutApi = async () => {
  const response = await apiClient.post("/auth/logout")
  return response.data
}