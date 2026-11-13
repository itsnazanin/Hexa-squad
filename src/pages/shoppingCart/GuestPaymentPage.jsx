
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { guestPayOrderApi } from "@/core/services/api/cart.api";
import { clearGuestCart } from "@/features/cart/utils/guestCart";

const GuestPaymentPage = () => {
  const navigate = useNavigate();

  const [orderId] = useState(() =>
    sessionStorage.getItem("guest-order-id")
  );

  const [guestCheckoutToken] = useState(() =>
    orderId
      ? sessionStorage.getItem(`guest-checkout-${orderId}`)
      : null
  );

  const paymentMutation = useMutation({
    mutationFn: () =>
      guestPayOrderApi({
        orderId: Number(orderId),
        guestCheckoutToken,
      }),

    onSuccess: () => {
      
      clearGuestCart();

      
      sessionStorage.removeItem("guest-order-id");
      sessionStorage.removeItem(`guest-checkout-${orderId}`);
    },
  });


  if (paymentMutation.isSuccess) {
    return (
      <div
        dir="rtl"
        className="mb-20 mt-[200px] bg-[#F7F9FC] flex items-center justify-center px-4"
      >
        <div className="bg-white rounded-2xl shadow-sm p-8 max-w-md w-full text-center">

          <div className="w-20 h-20 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">✓</span>
          </div>

          <h1 className="text-2xl font-bold text-[#263238] mb-4">
            پرداخت شما با موفقیت انجام شد
          </h1>

          <p className="text-gray-500 mb-6 leading-7">
            سفارش شما با موفقیت ثبت شد و خریدتان تکمیل گردید.
          </p>

          <div className="bg-[#F7F9FC] rounded-xl p-4 mb-7">
            <p className="text-sm text-gray-500 mb-2">
              شماره سفارش شما
            </p>

            <p className="text-xl font-bold text-[#2196F3]">
              {orderId}
            </p>
          </div>

          <button
            onClick={() => navigate("/")}
            className="w-full bg-[#2196F3] hover:bg-[#1976D2] text-white font-bold py-3 rounded-xl transition"
          >
            بازگشت به صفحه اصلی
          </button>

        </div>
      </div>
    );
  }

  if (!orderId || !guestCheckoutToken) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center gap-4">
        <p>اطلاعات سفارش پیدا نشد.</p>

        <button
          onClick={() => navigate("/cart")}
          className="rounded-lg bg-[#2196F3] px-6 py-3 text-white"
        >
          بازگشت به سبد خرید
        </button>
      </div>
    );
  }

  return (
    <div
      dir="rtl"
      className="mb-20 mt-[200px] bg-[#F7F9FC] flex justify-center items-center px-4"
    >
      <div className="bg-white rounded-2xl shadow-sm p-7 w-full max-w-md">

        <h1 className="text-2xl font-bold text-[#263238] mb-6">
          پرداخت سفارش
        </h1>

        <div className="flex justify-between text-sm mb-6">
          <span className="text-gray-500">شماره سفارش</span>
          <span className="font-semibold">{orderId}</span>
        </div>

        <p className="text-sm text-gray-500 leading-7 mb-6">
          با تأیید دکمه زیر، فرایند پرداخت آزمایشی انجام می‌شود.
        </p>

        {paymentMutation.isError && (
          <p className="text-sm text-red-500 mb-4">
            {paymentMutation.error?.response?.data?.message ||
              "خطا در پرداخت سفارش. دوباره تلاش کنید."}
          </p>
        )}

        <button
          onClick={() => paymentMutation.mutate()}
          disabled={paymentMutation.isPending}
          className="w-full rounded-xl bg-[#2196F3] p-3 text-white disabled:opacity-50"
        >
          {paymentMutation.isPending
            ? "در حال پردازش..."
            : "تأیید و پرداخت"}
        </button>

      </div>
    </div>
  );
};

export default GuestPaymentPage;
