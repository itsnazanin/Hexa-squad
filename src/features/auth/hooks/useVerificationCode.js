
import { useRef, useState } from "react";

function useVerificationCode(length = 6, onCodeChange) {
  const [digits, setDigits] = useState(() =>
    Array(length).fill("")
  );

  const inputRefs = useRef([]);

  const updateDigits = (nextDigits) => {
    setDigits(nextDigits);
    onCodeChange?.(nextDigits.join(""));
  };

  const handleChange = (value, index) => {
    const numericValue = value.replace(/\D/g, "");

    // Paste کردن کد چندرقمی
    if (numericValue.length > 1) {
      const pastedDigits = numericValue
        .slice(0, length - index)
        .split("");

      const nextDigits = [...digits];

      pastedDigits.forEach((digit, i) => {
        nextDigits[index + i] = digit;
      });

      updateDigits(nextDigits);

      const nextIndex = Math.min(
        index + pastedDigits.length,
        length - 1
      );

      inputRefs.current[nextIndex]?.focus();
      return;
    }

    // ورود یک رقم
    const digit = numericValue.slice(-1);
    const nextDigits = [...digits];

    nextDigits[index] = digit;
    updateDigits(nextDigits);

    if (digit && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (event, index) => {
    if (
      event.key === "Backspace" &&
      !digits[index] &&
      index > 0
    ) {
      inputRefs.current[index - 1]?.focus();
    }

    // حرکت با کلیدهای جهت‌دار
    if (
      event.key === "ArrowLeft" &&
      index > 0
    ) {
      inputRefs.current[index - 1]?.focus();
    }

    if (
      event.key === "ArrowRight" &&
      index < length - 1
    ) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const clearCode = () => {
    updateDigits(Array(length).fill(""));
    inputRefs.current[0]?.focus();
  };

  return {
    digits,
    inputRefs,
    code: digits.join(""),
    isComplete: digits.every((digit) => digit !== ""),
    handleChange,
    handleKeyDown,
    clearCode,
  };
}

export default useVerificationCode;
