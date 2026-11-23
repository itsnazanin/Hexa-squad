import { createContext, useContext, useEffect, useState } from "react";

import { getProfileApi, loginApi, verifyLoginApi, sendRegisterCodeApi, verifyRegisterCodeApi, completeRegisterApi, logoutApi } from "@/core/services/api/auth.api";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const isAuthenticated = Boolean(user);

  const refreshProfile = async () => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      setUser(null);
      return null;
    }

    try {
      const result = await getProfileApi();
      const profile = result.userProfileData;

      if (!profile) {
        throw new Error("User profile was not returned by the server");
      }

      setUser(profile);
      return profile;
    } catch (error) {
      if (error?.response?.status === 401) {
        localStorage.removeItem("accessToken")
        setUser(null)
      }

      throw error
    }
  };


  const login = async (data) => {
    return await loginApi(data);
  };


  const verifyLogin = async (data) => {
    const result = await verifyLoginApi(data);

    if (!result.accessToken) {
      throw new Error("Access token was not returned by the server");
    }

    localStorage.setItem("accessToken", result.accessToken);
    await refreshProfile();

    return result;
  };

  // مرحله اول ثبت‌نام: ارسال کد تأیید
  const sendRegisterCode = async (data) => {
    return await sendRegisterCodeApi(data);
  };

  // مرحله دوم ثبت‌نام: تأیید کد پیامکی
  const verifyRegisterCode = async (data) => {
    return await verifyRegisterCodeApi(data);
  };

  // مرحله سوم ثبت‌نام: تکمیل اطلاعات و ایجاد حساب
  const completeRegister = async (data) => {
    const result = await completeRegisterApi(data);

    if (!result.accessToken) {
      throw new Error("Access token was not returned by the server");
    }

    localStorage.setItem("accessToken", result.accessToken);
    await refreshProfile();

    return result;
  };

  const logout = async () => {
    try {
      await logoutApi()
    }catch(error){
      console.error("Logout api error:" , error)
    } finally {
      localStorage.removeItem("accessToken")
      setUser(null)
    }
  }

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        await refreshProfile();
      } catch {
        // اگر توکن معتبر نباشد، refreshProfile آن را پاک می‌کند.
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAuthenticated,
        login,
        verifyLogin,
        sendRegisterCode,
        verifyRegisterCode,
        completeRegister,
        logout,
        refreshProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
};