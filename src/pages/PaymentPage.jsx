
import { useParams, useNavigate } from "react-router-dom";

import { usePayOrder } from "@/features/courses/hooks/useCart";

const PaymentPage = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();

  const payMutation = usePayOrder();

  const numericOrderId = Number(orderId);

  const isValidOrderId =
    Number.isInteger(numericOrderId) && numericOrderId > 0;

  const handlePayment = () => {
    if (!isValidOrderId) return;

    payMutation.mutate(numericOrderId);
  };

  if (!isValidOrderId) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center gap-4">
        <p>شناسه سفارش معتبر نیست.</p>

        <button
          onClick={() => navigate("/cart")}
          className="rounded-lg bg-[#2196F3] px-6 py-3 text-white"
        >
          بازگشت به سبد خرید
        </button>
      </div>
    );
  }

  if (payMutation.isSuccess) {
    return (
      <div
        dir="rtl"
        className="min-h-screen flex flex-col justify-center items-center px-4 text-center"
      >
        <div className="text-5xl text-green-500 mb-5">✓</div>

        <h1 className="text-2xl font-bold text-[#263238] mb-3">
          خرید شما با موفقیت انجام شد
        </h1>

        <p className="text-gray-500 mb-3">
          دسترسی دوره‌های خریداری‌شده برای شما ثبت شد.
        </p>

        <p className="text-sm text-gray-500 mb-7">
          شماره سفارش: {numericOrderId}
        </p>

        <button
          onClick={() => navigate("/courses")}
          className="rounded-xl bg-[#2196F3] px-7 py-3 text-white"
        >
          بازگشت به دوره‌ها
        </button>
      </div>
    );
  }

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-[#F7F9FC] flex justify-center items-center px-4"
    >
      <div className="bg-white rounded-2xl shadow-sm p-7 w-full max-w-md">
        <h1 className="text-2xl font-bold text-[#263238] mb-6">
          پرداخت سفارش
        </h1>

        <div className="flex justify-between text-sm mb-6">
          <span className="text-gray-500">شماره سفارش</span>
          <span className="font-semibold">{numericOrderId}</span>
        </div>

        <p className="text-sm text-gray-500 leading-7 mb-6">
          با انتخاب دکمه زیر، پرداخت آزمایشی سفارش انجام می‌شود.
        </p>

        {payMutation.isError && (
          <p className="text-sm text-red-500 mb-4">
            {payMutation.error?.response?.data?.message ||
              "پرداخت سفارش با خطا مواجه شد."}
          </p>
        )}

        <button
          onClick={handlePayment}
          disabled={payMutation.isPending}
          className="w-full rounded-xl bg-[#2196F3] text-white py-3 font-bold disabled:opacity-50"
        >
          {payMutation.isPending
            ? "در حال پردازش..."
            : "تأیید و پرداخت"}
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
