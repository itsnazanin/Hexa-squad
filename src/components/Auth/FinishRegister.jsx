
function FinishRegister({ formData, onChange, error }) {
  return (
    <div className="flex flex-col gap-4 w-[356px] max-w-full mt-11">
      <input
        type="text"
        name="name"
        autoComplete="name"
        value={formData.name}
        onChange={onChange}
        className="placeholder-[#607D8B] border border-[#CFD8DC] outline-[#2196F3] rounded-full py-4 px-5"
        placeholder="نام و نام خانوادگی"
        required
      />

      <input
        type="email"
        name="email"
        autoComplete="email"
        value={formData.email}
        onChange={onChange}
        className="placeholder-[#607D8B] border border-[#CFD8DC] outline-[#2196F3] rounded-full py-4 px-5"
        placeholder="ایمیل (اختیاری)"
      />

      <input
        type="password"
        name="password"
        autoComplete="new-password"
        value={formData.password}
        onChange={onChange}
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
        onChange={onChange}
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
    </div>
  );
}

export default FinishRegister;
