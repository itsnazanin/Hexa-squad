
function RegisterForm({ formData, onChange, error }) {
  return (
    <div className="flex flex-col gap-3 mt-8">
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={onChange}
        placeholder="شماره موبایل"
        autoComplete="tel"
        required
        className="border border-[#CFD8DC] w-full rounded-full py-4 px-5 placeholder-[#607D8B]"
      />

      {error && (
        <p className="text-sm text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export default RegisterForm;
