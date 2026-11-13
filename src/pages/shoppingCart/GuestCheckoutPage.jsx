
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { guestCheckoutApi } from "@/core/services/api/cart.api";
import { getGuestCart } from "@/features/cart/utils/guestCart";

const GuestCheckoutPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    guestName: "",
    guestPhone: "",
    guestEmail: "",
  });

  const guestCart = getGuestCart();

  const courseIds = guestCart.map((item) => item.courseId);

  const checkoutMutation = useMutation({
    mutationFn: guestCheckoutApi,

    onSuccess: (data) => {
      const { order, guestCheckoutToken } = data;

      // نگهداری موقت اطلاعات سفارش برای مرحله پرداخت
      sessionStorage.setItem(
        `guest-checkout-${order.id}`,
        guestCheckoutToken
      );

      sessionStorage.setItem(
        "guest-order-id",
        String(order.id)
      );

      // فعلاً سبد را پاک نمی‌کنیم؛ بعد از پرداخت موفق پاک خواهد شد.
      navigate("/guest-payment");
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (courseIds.length === 0) {
      return;
    }

    checkoutMutation.mutate({
      ...formData,
      guestEmail: formData.guestEmail || undefined,
      courseIds,
    });
  };

  if (guestCart.length === 0) {
    return (
      <div className="container mx-auto mt-20 py-20 text-center">
        <p>سبد خرید شما خالی است.</p>

        <button
          onClick={() => navigate("/courses")}
          className="mt-4 rounded-lg bg-primary px-6 py-3 text-white"
        >
          مشاهده دوره‌ها
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-2xl mt-20 px-4 py-16">
      <h1 className="mb-3 text-2xl font-bold">
        تکمیل اطلاعات خرید
      </h1>

      <p className="mb-8 text-gray-500">
        برای ادامه خرید، اطلاعات خود را وارد کنید.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">

        <div>
          <label className="mb-2 block">
            نام و نام خانوادگی
          </label>

          <input
            type="text"
            name="guestName"
            value={formData.guestName}
            onChange={handleChange}
            required
            minLength={2}
            maxLength={100}
            placeholder="نام و نام خانوادگی"
            className="w-full rounded-lg border p-3 outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block">
            شماره موبایل
          </label>

          <input
            type="tel"
            name="guestPhone"
            value={formData.guestPhone}
            onChange={handleChange}
            required
            pattern="09[0-9]{9}"
            placeholder="09123456789"
            className="w-full rounded-lg border p-3 outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block">
            ایمیل (اختیاری)
          </label>

          <input
            type="email"
            name="guestEmail"
            value={formData.guestEmail}
            onChange={handleChange}
            placeholder="example@gmail.com"
            className="w-full rounded-lg border p-3 outline-none"
          />
        </div>

        {checkoutMutation.isError && (
          <p className="text-sm text-red-500">
            {checkoutMutation.error?.response?.data?.message ||
              "خطایی هنگام ایجاد سفارش رخ داد."}
          </p>
        )}

        <button
          type="submit"
          disabled={checkoutMutation.isPending}
          className="w-full rounded-lg bg-primary p-3 text-white disabled:opacity-50"
        >
          {checkoutMutation.isPending
            ? "در حال ثبت سفارش..."
            : "ادامه و پرداخت"}
        </button>

      </form>
    </div>
  );
};

export default GuestCheckoutPage;
