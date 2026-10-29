
import { useState } from "react";

import { useAuthModal } from "./AuthModalContext";
import AuthModal from "./AuthModal";
import LoginForm from "./LoginForm";
import Verifection from "../../features/auth/components/Verifection";
import FinishRegister from "./FinishRegister";
import RegisterForm from "./RegisterForm";

import { resendLoginApi } from "@/core/services/api/auth.api";
import { useAuth } from "./AuthContext";

const AuthFlow = () => {
  const { step, switchStep, closeAuthModal } = useAuthModal();
  const { login, verifyLogin, register } = useAuth();

  const [loginData, setLoginData] = useState({
    phone: "",
    password: "",
  });

  const [registerData, setRegisterData] = useState({
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [verificationCode, setVerificationCode] = useState("");

  const [verificationData, setVerificationData] = useState({
    identifier: "",
    method: "phone",
  });

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLoginChange = (field, value) => {
    setLoginData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleRegisterChange = (field, value) => {
    setRegisterData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // تبدیل شماره موبایل یا ایمیل به payload مورد انتظار بک‌اند
  const getLoginPayload = () => {
    const identifier = loginData.phone.trim();

    if (identifier.includes("@")) {
      return {
        email: identifier.toLowerCase(),
        password: loginData.password,
      };
    }

    return {
      phone: identifier,
      password: loginData.password,
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLoading) return;

    setError("");

    try {
      setIsLoading(true);

      // مرحله اول ورود
      if (step === "login") {
        const result = await login(getLoginPayload());

        if (result?.otpRequired) {
          setVerificationData({
            identifier: result.identifier,
            method: result.method,
          });

          setVerificationCode("");
          switchStep("loginVerifyCode");
        }
      }

      // تأیید کد ورود
      else if (step === "loginVerifyCode") {
        if (!/^\d{6}$/.test(verificationCode)) {
          setError("لطفاً کد تأیید شش‌رقمی را کامل وارد کن.");
          return;
        }

        await verifyLogin({
          identifier: verificationData.identifier,
          method: verificationData.method,
          code: verificationCode,
        });

        closeAuthModal();
      }

      // مرحله اول ثبت‌نام: دریافت شماره موبایل
      else if (step === "register") {
        if (!registerData.phone.trim()) {
          setError("لطفاً شماره موبایل خود را وارد کن.");
          return;
        }

        switchStep("finishRegister");
      }

      // مرحله دوم ثبت‌نام: ایمیل و رمز عبور
      else if (step === "finishRegister") {
        const phone = registerData.phone.trim();
        const email = registerData.email.trim();
        const { password, confirmPassword } = registerData;

        if (!phone) {
          setError("شماره موبایل وارد نشده است.");
          switchStep("register");
          return;
        }

        if (password.length < 8) {
          setError("رمز عبور باید حداقل ۸ کاراکتر باشد.");
          return;
        }

        if (password !== confirmPassword) {
          setError("رمز عبور و تکرار آن یکسان نیستند.");
          return;
        }

        const payload = {
          phone,
          password,
          ...(email ? { email: email.toLowerCase() } : {}),
        };

        await register(payload);

        closeAuthModal();
      }
    } catch (error) {
      setError(
        error?.response?.data?.message ||
          error?.message ||
          "عملیات ناموفق بود. دوباره تلاش کن."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleResend = async () => {
    if (isLoading) return;

    setError("");

    try {
      setIsLoading(true);

      const result = await resendLoginApi(getLoginPayload());

      if (result?.otpRequired) {
        setVerificationData({
          identifier: result.identifier,
          method: result.method,
        });

        setVerificationCode("");
      }
    } catch (error) {
      setError(
        error?.response?.data?.message ||
          error?.message ||
          "ارسال مجدد کد ناموفق بود."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthModal onSubmit={handleSubmit} isLoading={isLoading}>
      {step === "login" && (
        <LoginForm
          phone={loginData.phone}
          password={loginData.password}
          onChange={handleLoginChange}
        />
      )}

      {step === "loginVerifyCode" && (
        <Verifection
          phone={verificationData.identifier}
          modal={() => switchStep("login")}
          code={verificationCode}
          onCodeChange={setVerificationCode}
          error={error}
          isLoading={isLoading}
          onResend={handleResend}
        />
      )}

      {step === "register" && (
        <RegisterForm
          phone={registerData.phone}
          onPhoneChange={(value) =>
            handleRegisterChange("phone", value)
          }
          error={error}
        />
      )}

      {step === "finishRegister" && (
        <FinishRegister
          formData={registerData}
          onChange={handleRegisterChange}
          error={error}
        />
      )}
    </AuthModal>
  );
};

export default AuthFlow;
