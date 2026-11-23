
function LoginForm({ formData, onChange, error }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="w-full flex flex-col gap-4 mt-8">
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={onChange}
          autoComplete="username"
          required
          className="placeholder-[#607D8B] outline-[#2196F3] bg-white border border-[#CFD8DC] rounded-full py-4 px-5"
          placeholder="شماره موبایل"
        />

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={onChange}
          autoComplete="current-password"
          required
          className="placeholder-[#607D8B] outline-[#2196F3] bg-white border border-[#CFD8DC] rounded-full py-4 px-5"
          placeholder="رمز عبور"
        />
      </div>

      {error && (
        <p className="text-sm text-red-500" role="alert">
          {error}
        </p>
      )}

      <div className="flex justify-between gap-4 w-full">
        <label className="flex gap-1">
          <input
            className="accent-[#2196F3] cursor-pointer"
            type="checkbox"
            name="rememberMe"
          />
          <span className="text-[#455A64] text-[14px]">
            من را به خاطر بسپار
          </span>
        </label>

        <button
          type="button"
          className="text-[#2196F3] underline cursor-pointer text-[14px]"
        >
          رمز عبور را فراموش کردم
        </button>
      </div>
    </div>
  );
}

export default LoginForm;
