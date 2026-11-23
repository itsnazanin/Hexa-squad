
import { useState } from "react";
import { Eye, EyeOff, LockKeyhole } from "lucide-react";
import { changePasswordApi } from "@/core/services/api/users.api";

function ChangePasswordPage() {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const [showPasswords, setShowPasswords] = useState({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const togglePassword = (field) => {
    setShowPasswords((prev) => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (formData.newPassword.length < 8) {
      setError("رمز عبور جدید باید حداقل ۸ کاراکتر باشد.");
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      setError("رمز عبور جدید با تکرار آن مطابقت ندارد.");
      return;
    }

    try {
      setLoading(true);

      const result = await changePasswordApi(formData);

      setSuccess(
        result.message || "رمز عبور با موفقیت تغییر کرد."
      );

      setFormData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
      });
    } catch (err) {
      console.error("Change password error:", err);

      setError(
        err.response?.data?.message ||
        "تغییر رمز عبور با مشکل مواجه شد."
      );
    } finally {
      setLoading(false);
    }
  };

  const passwordFields = [
    {
      name: "currentPassword",
      label: "رمز عبور فعلی",
      placeholder: "رمز عبور فعلی خود را وارد کنید"
    },
    {
      name: "newPassword",
      label: "رمز عبور جدید",
      placeholder: "رمز عبور جدید را وارد کنید"
    },
    {
      name: "confirmPassword",
      label: "تکرار رمز عبور جدید",
      placeholder: "رمز عبور جدید را مجدداً وارد کنید"
    }
  ];

  return (
    <section className="w-full flex flex-col items-center px-4 sm:px-6 mt-12 sm:mt-16 lg:mt-[120px] gap-6 sm:gap-8">

      <div className="flex items-center gap-2">
        <LockKeyhole className="text-[#2096f3]" size={22} />
        <h2 className="font-bold text-xl">تغییر رمز عبور</h2>
      </div>

      <p className="text-gray-500 text-sm text-center leading-7">
        برای حفظ امنیت حساب کاربری خود، رمز عبورتان را به‌روزرسانی کنید.
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-6xl flex flex-col gap-7 mt-4"
      >

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-7">
          {passwordFields.map((field) => (
            <div
              key={field.name}
              className="flex flex-col gap-3 w-full"
            >
              <label
                htmlFor={field.name}
                className="font-medium text-sm sm:text-base"
              >
                {field.label}
              </label>

              <div className="relative w-full">
                <input
                  id={field.name}
                  name={field.name}
                  type={showPasswords[field.name] ? "text" : "password"}
                  value={formData[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  autoComplete={
                    field.name === "currentPassword"
                      ? "current-password"
                      : "new-password"
                  }
                  required
                  className="border rounded-[16px] px-4 sm:px-6 py-3 w-full outline-none focus:border-[#2096f3] transition-colors text-sm sm:text-base pl-12"
                />

                <button
                  type="button"
                  onClick={() => togglePassword(field.name)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#2096f3]"
                  aria-label={
                    showPasswords[field.name]
                      ? "مخفی کردن رمز عبور"
                      : "نمایش رمز عبور"
                  }
                >
                  {showPasswords[field.name] ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {error && (
          <p className="text-red-500 text-sm text-right">
            {error}
          </p>
        )}

        {success && (
          <p className="text-green-600 text-sm text-right">
            {success}
          </p>
        )}

        <div className="w-full flex justify-end mt-3">
          <button
            disabled={loading}
            className="bg-[#2096f3] hover:bg-[#1685dc] disabled:opacity-60 disabled:cursor-not-allowed w-full sm:w-fit px-10 sm:px-12 py-3 sm:py-4 text-white font-semibold rounded-[16px] transition-colors"
            type="submit"
          >
            {loading ? "در حال تغییر رمز..." : "تغییر رمز عبور"}
          </button>
        </div>

      </form>
    </section>
  );
}

export default ChangePasswordPage;
