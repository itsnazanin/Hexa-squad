import { useEffect, useState } from "react";
import { useAuth } from "@/components/Auth/AuthContext";
import { getMyProfileApi, updateMyProfileApi } from "@/core/services/api/users.api";

function ProfilePage() {
  const { refreshProfile } = useAuth();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        setError("");

        const result = await getMyProfileApi();
        const profile = result.data;

        const nameParts = (profile.name || "").trim().split(/\s+/);

        setFormData({
          firstName: nameParts[0] || "",
          lastName: nameParts.slice(1).join(" "),
          email: profile.email || "",
          phone: profile.phone || ""
        });
      } catch (err) {
        console.error("Profile error:", err);
        setError("دریافت اطلاعات پروفایل با مشکل مواجه شد.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);
      setError("");
      setSuccess("");

      const fullName = `${formData.firstName.trim()} ${formData.lastName.trim()}`.trim();

      await updateMyProfileApi({
        name: fullName,
        email: formData.email.trim(),
        phone: formData.phone.trim()
      });

      await refreshProfile();

      setSuccess("اطلاعات پروفایل با موفقیت ذخیره شد.");
    } catch (err) {
      console.error("Update profile error:", err);

      setError(
        err.response?.data?.message ||
        "ذخیره اطلاعات با مشکل مواجه شد."
      );
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <section className="w-full flex justify-center py-16">
        <p>در حال دریافت اطلاعات پروفایل...</p>
      </section>
    );
  }

  return (
    <section className="flex flex-col gap-10 sm:gap-14 lg:gap-[90px] mt-10 sm:mt-16 lg:mt-[100px] items-center w-full px-4 sm:px-6">

      <h2 className="font-bold text-xl">
        ویرایش پروفایل
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-[60px] w-full max-w-5xl relative"
      >

        <div className="flex flex-col gap-2">
          <label htmlFor="firstName">نام</label>

          <input
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="border p-3 rounded-[16px] outline-none focus:border-blue-400 transition-colors placeholder:text-[14px]"
            type="text"
            placeholder="نام خود را وارد کنید"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="lastName">نام خانوادگی</label>

          <input
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="border p-3 rounded-[16px] outline-none focus:border-blue-400 transition-colors placeholder:text-[14px]"
            type="text"
            placeholder="نام خانوادگی خود را وارد کنید"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email">ایمیل</label>

          <input
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border p-3 rounded-[16px] outline-none focus:border-blue-400 transition-colors placeholder:text-[14px]"
            type="email"
            placeholder="ایمیل خود را وارد کنید"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="phone">شماره موبایل</label>

          <input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="border p-3 rounded-[16px] outline-none focus:border-blue-400 transition-colors placeholder:text-[14px]"
            type="tel"
            placeholder="شماره موبایل خود را وارد کنید"
          />
        </div>

        {error && (
          <p className="col-span-1 sm:col-span-2 text-red-500 text-sm">
            {error}
          </p>
        )}

        {success && (
          <p className="col-span-1 sm:col-span-2 text-green-600 text-sm">
            {success}
          </p>
        )}

        <div className="w-full col-span-1 sm:col-span-2 text-left">
          <button
            disabled={saving}
            className="bg-[#2096f3] hover:bg-[#1685dc] disabled:opacity-60 disabled:cursor-not-allowed w-full sm:w-fit px-10 sm:px-12 py-3 sm:py-4 text-white font-semibold rounded-[16px] transition-colors"
            type="submit"
          >
            {saving ? "در حال ذخیره..." : "ثبت اطلاعات"}
          </button>
        </div>

      </form>
    </section>
  );
}

export default ProfilePage;
