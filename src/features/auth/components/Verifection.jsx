
import { useTranslation } from "react-i18next";

import useCountDown from "@/features/auth/hooks/useCountDown";
import useVerificationCode from "@/features/auth/hooks/useVerificationCode";

function Verifection({
  phone,
  modal,
  onCodeChange,
  error,
  isLoading,
  onResend,
  purpose = "login",
}) {
  const { t } = useTranslation("auth");

  const { formattedTime, isFinished, resetTimer } = useCountDown(60);

  const {
    digits,
    inputRefs,
    handleChange,
    handleKeyDown,
    clearCode,
  } = useVerificationCode(6, onCodeChange);

  const isRegister = purpose === "register";

const handleResend = async () => {
  if (!isFinished || isLoading) return;

  try {
    const success = await onResend();

    if (!success) return;

    clearCode();
    onCodeChange("");
    resetTimer();
  } catch (error) {
    console.error("Failed to resend verification code:", error);
  }
};

  return (
    <div>
      <div>
        <p className="text-[14px] text-[#455A64]">
          {isRegister
            ? `کد تأیید برای ثبت‌نام به شماره ${phone} ارسال شد.`
            : t("loginVerifyCode.message", { phone })}
        </p>

        <button
          type="button"
          className="text-[#2196F3] text-[14px] underline"
          onClick={modal}
        >
          {t("loginVerifyCode.change")}
        </button>
      </div>

      <div className="mt-6 flex justify-center gap-2" dir="ltr">
        {digits.map((digit, index) => (
          <input
            key={index}
            disabled={isLoading}
            ref={(element) => {
              inputRefs.current[index] = element;
            }}
            type="text"
            inputMode="numeric"
            autoComplete={index === 0 ? "one-time-code" : "off"}
            maxLength={index === 0 ? 6 : 1}
            value={digit}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className="h-12 w-10 rounded-md border border-[#CFD8DC] text-center text-lg outline-none focus:border-[#2196F3]"
          />
        ))}
      </div>

      {error && (
        <p className="mt-3 text-sm text-red-500" role="alert">
          {error}
        </p>
      )}

      <div className="mt-5 text-center text-sm">
        {isFinished ? (
          <button
            type="button"
            disabled={isLoading}
            onClick={handleResend}
            className="text-[#2196F3] underline disabled:opacity-50"
          >
            ارسال مجدد کد
          </button>
        ) : (
          <span dir="ltr">{formattedTime}</span>
        )}
      </div>
    </div>
  );
}

export default Verifection;