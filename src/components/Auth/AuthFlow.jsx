
import { useState } from "react";

import { useAuth } from "@/components/Auth/AuthContext";
import { useAuthModal } from "@/components/Auth/AuthModalContext";
import { resendLoginApi } from "@/core/services/api/auth.api";
import { useNavigate } from "react-router-dom";

import AuthModal from "./AuthModal";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import FinishRegister from "./FinishRegister";
import Verifection from "@/features/auth/components/Verifection";

function AuthFlow() {
  const { step, switchStep, closeAuthModal } = useAuthModal();
  const navigate = useNavigate()

  const { login, verifyLogin, sendRegisterCode, verifyRegisterCode, completeRegister } = useAuth();

  const [loginData, setLoginData] = useState({
    phone: "",
    password: "",
  });

  const [registerData, setRegisterData] = useState({
    phone: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [registrationToken, setRegistrationToken] = useState("");
  const [verificationCode, setVerificationCode] = useState("");

  const [verificationData, setVerificationData] = useState({
    identifier: "",
    method: "phone",
  });

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);



  const handleCloseAuthModal = () => {
    setLoginData({
      phone: "",
      password: "",
    });

    setRegisterData({
      phone: "",
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    setRegistrationToken("");
    setVerificationCode("");

    setVerificationData({
      identifier: "",
      method: "phone",
    });

    setError("");
    closeAuthModal();
  };



  const handleLoginChange = (event) => {
    const { name, value } = event.target;

    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  const handleRegisterChange = (event) => {
    const { name, value } = event.target;

    setRegisterData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };


  const handleLogin = async () => {
    try {
      setIsLoading(true);
      setError("");

      const result = await login(loginData);

      if (result?.otpRequired) {
        setVerificationData({
          identifier: result.identifier || loginData.phone,
          method: result.method || "phone",
        });

        setVerificationCode("");
        switchStep("loginVerifyCode");
      }
    } catch (err) {
      setError(
        err?.response?.data?.message ||
          err.message ||
          "خطا در ورود"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoginVerifyCode = async () => {
    if (verificationCode.length !== 6) {
      setError("کد تأیید باید ۶ رقم باشد");
      return;
    }

    try {
      setIsLoading(true);
      setError("");

      await verifyLogin({
        identifier: verificationData.identifier,
        method: verificationData.method,
        code: verificationCode,
      });

      handleCloseAuthModal();
    } catch (err) {
      setError(
        err?.response?.data?.message ||
          err.message ||
          "کد تأیید نامعتبر است"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoginResend = async () => {
    try {
      setIsLoading(true);
      setError("");

      await resendLoginApi({
        phone: loginData.phone,
        password: loginData.password,
      });

      return true;
    } catch (err) {
      setError(
        err?.response?.data?.message ||
          err.message ||
          "ارسال مجدد کد ناموفق بود"
      );

      return false;
    } finally {
      setIsLoading(false);
    }
  };


  const handleRegister = async () => {
    if (!registerData.phone.trim()) {
      setError("شماره موبایل را وارد کنید");
      return;
    }

    try {
      setIsLoading(true);
      setError("");

      const result = await sendRegisterCode({
        phone: registerData.phone.trim(),
      });

      setVerificationData({
        identifier: result.identifier || registerData.phone.trim(),
        method: result.method || "phone",
      });

      setVerificationCode("");
      setRegistrationToken("");

      switchStep("registerVerifyCode");
    } catch (err) {
      setError(
        err?.response?.data?.message ||
          err.message ||
          "ارسال کد تأیید ناموفق بود"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegisterVerifyCode = async () => {
    if (verificationCode.length !== 6) {
      setError("کد تأیید باید ۶ رقم باشد");
      return;
    }

    try {
      setIsLoading(true);
      setError("");

      const result = await verifyRegisterCode({
        phone: verificationData.identifier,
        code: verificationCode,
      });

      if (!result?.registrationToken) {
        throw new Error("توکن ثبت‌نام دریافت نشد");
      }

      setRegistrationToken(result.registrationToken);
      setVerificationCode("");

      switchStep("finishRegister");
    } catch (err) {
      setError(
        err?.response?.data?.message ||
          err.message ||
          "کد تأیید نامعتبر است"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegisterResend = async () => {
    try {
      setIsLoading(true);
      setError("");

      await sendRegisterCode({
        phone: verificationData.identifier,
      });

      return true;
    } catch (err) {
      setError(
        err?.response?.data?.message ||
          err.message ||
          "ارسال مجدد کد ناموفق بود"
      );

      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const handleFinishRegister = async () => {
    const { name, email, password, confirmPassword } = registerData;

    if (name.trim().length < 2) {
      setError("نام باید حداقل ۲ کاراکتر باشد");
      return;
    }

    if (
      email.trim() &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    ) {
      setError("ایمیل وارد شده معتبر نیست");
      return;
    }

    if (password.length < 8) {
      setError("رمز عبور باید حداقل ۸ کاراکتر باشد");
      return;
    }

    if (password !== confirmPassword) {
      setError("تکرار رمز عبور با رمز عبور مطابقت ندارد");
      return;
    }

    if (!registrationToken) {
      setError("اعتبار ثبت‌نام منقضی شده است. دوباره اقدام کنید");
      return;
    }

    try {
      setIsLoading(true);
      setError("");

      await completeRegister({
        registrationToken,
        name: name.trim(),
        email: email.trim() || undefined,
        password,
      });

      handleCloseAuthModal();
      navigate("/dashboard")
    } catch (err) {
      setError(
        err?.response?.data?.message ||
          err.message ||
          "ثبت‌نام انجام نشد"
      );
    } finally {
      setIsLoading(false);
    }
  };

  // ---------------- RENDER ----------------

  return (
    <AuthModal
      onClose={handleCloseAuthModal}
      onSubmit={
        step === "login"
          ? handleLogin
          : step === "loginVerifyCode"
            ? handleLoginVerifyCode
            : step === "register"
              ? handleRegister
              : step === "registerVerifyCode"
                ? handleRegisterVerifyCode
                : handleFinishRegister
      }
      isLoading={isLoading}
    >
      {step === "login" && (
        <LoginForm
          formData={loginData}
          onChange={handleLoginChange}
          error={error}
        />
      )}

      {step === "loginVerifyCode" && (
        <Verifection
          phone={verificationData.identifier}
          code={verificationCode}
          onCodeChange={setVerificationCode}
          error={error}
          isLoading={isLoading}
          onResend={handleLoginResend}
          modal={() => {
            setVerificationCode("");
            setError("");
            switchStep("login");
          }}
          purpose="login"
        />
      )}

      {step === "register" && (
        <RegisterForm
          formData={registerData}
          onChange={handleRegisterChange}
          error={error}
        />
      )}

      {step === "registerVerifyCode" && (
        <Verifection
          phone={verificationData.identifier}
          code={verificationCode}
          onCodeChange={setVerificationCode}
          error={error}
          isLoading={isLoading}
          onResend={handleRegisterResend}
          modal={() => {
            setVerificationCode("");
            setError("");
            switchStep("register");
          }}
          purpose="register"
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
}

export default AuthFlow;
