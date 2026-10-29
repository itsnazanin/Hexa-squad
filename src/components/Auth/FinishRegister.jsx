
function FinishRegister({ formData, onChange, error }) {
  return (
    <div className="flex flex-col gap-4 w-[356px] max-w-full mt-11">
      <input
        type="email"
        name="email"
        autoComplete="email"
        value={formData.email}
        onChange={(e) => onChange("email", e.target.value)}
        className="placeholder-[#607D8B] border border-[#CFD8DC] outline-[#2196F3] rounded-full py-4 px-5"
        placeholder="ایمیل"
      />

      <input
        type="password"
        name="password"
        autoComplete="new-password"
        value={formData.password}
        onChange={(e) => onChange("password", e.target.value)}
        className="placeholder-[#607D8B] border border-[#CFD8DC] outline-[#2196F3] rounded-full py-4 px-5"
        placeholder="رمز عبور"
        minLength={8}
        required
      />

      <input
        type="password"
        name="confirmPassword"
        autoComplete="new-password"
        value={formData.confirmPassword}
        onChange={(e) =>
          onChange("confirmPassword", e.target.value)
        }
        className="placeholder-[#607D8B] border border-[#CFD8DC] outline-[#2196F3] rounded-full py-4 px-5"
        placeholder="تکرار رمز عبور"
        minLength={8}
        required
      />

      {error && (
        <p className="text-sm text-red-500" role="alert">
          {error}
        </p>
      )}

      <div className="flex gap-2">
        <input
          type="checkbox"
          name="rememberMe"
          className="accent-[#2196F3] rounded-xl w-4 h-4"
        />
        <span className="text-[14px] text-[#455A64]">
          من را به خاطر بسپار
        </span>
      </div>
    </div>
  );
}

export default FinishRegister;
