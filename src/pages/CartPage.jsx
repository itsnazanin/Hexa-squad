
import { Link, useNavigate } from "react-router-dom";
import { Trash2, ShoppingBag, ArrowLeft } from "lucide-react";

import {
  useCart,
  useRemoveFromCart,
  useCheckout,
} from "@/features/courses/hooks/useCart";

import { useAuth } from "@/components/Auth/AuthContext";

const formatPrice = (price) => {
  return new Intl.NumberFormat("fa-IR").format(price);
};

const CartPage = () => {
  const navigate = useNavigate();

  const { isAuthenticated } = useAuth();

  const { data, isLoading, isError } = useCart();
  const removeMutation = useRemoveFromCart();
  const checkoutMutation = useCheckout();

  const cart = data?.cart;
  const items = cart?.items ?? [];

  const totalPrice = items.reduce(
    (total, item) => total + item.price,
    0
  );

  const handleCheckout = () => {
  if (!isAuthenticated) {
    navigate("/guest-checkout");
    return;
  }

  checkoutMutation.mutate(undefined, {
    onSuccess: (data) => {
      const orderId = data.cart.id;

      navigate(`/payment/${orderId}`);
        },
    });
  };

  const handleRemove = (courseId) => {
    removeMutation.mutate(courseId);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        در حال دریافت سبد خرید...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        دریافت اطلاعات سبد خرید با خطا مواجه شد.
      </div>
    );
  }

  return (
    <div dir="rtl" className="min-h-screen bg-[#F7F9FC] pt-32 pb-20 px-4">
      <div className="max-w-[1100px] mx-auto">

        <div className="mb-8">
          <h1 className="text-2xl font-bold text-[#263238]">
            سبد خرید من
          </h1>

          <p className="text-sm text-gray-500 mt-2">
            دوره‌های انتخاب‌شده خود را بررسی کنید.
          </p>
        </div>

        {items.length === 0 ? (
          <div className="bg-white rounded-2xl p-10 flex flex-col items-center text-center shadow-sm">
            <div className="w-20 h-20 rounded-full bg-[#E3F2FD] flex items-center justify-center mb-5">
              <ShoppingBag size={36} className="text-[#2196F3]" />
            </div>

            <h2 className="text-xl font-bold text-[#263238]">
              سبد خرید شما خالی است
            </h2>

            <p className="text-gray-500 mt-3 mb-6">
              هنوز دوره‌ای به سبد خرید خود اضافه نکرده‌اید.
            </p>

            <Link
              to="/courses"
              className="bg-[#2196F3] text-white px-7 py-3 rounded-full no-underline"
            >
              مشاهده دوره‌ها
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            <div className="lg:col-span-2 flex flex-col gap-4">

              {items.map((item) => {
                const course = item.course;
                const translation = course.translations?.[0];

                const courseTitle =
                  translation?.title || course.title || "عنوان دوره";

                const courseDescription =
                  translation?.shortDescription ||
                  course.shortDescription ||
                  "";

                const teacherTranslation =
                  course.teacher?.translations?.[0];

                const teacherName =
                  teacherTranslation?.name ||
                  course.teacher?.name ||
                  "مدرس دوره";

                const teacherAvatar = course.teacher?.avatar;

                return (
                  <div
                    key={item.id ?? item.courseId}
                    className="bg-white rounded-2xl p-5 shadow-sm flex flex-col sm:flex-row gap-5"
                  >
                    <img
                      src={course.thumbnail}
                      alt={courseTitle}
                      className="w-full sm:w-40 h-32 object-cover rounded-xl"
                    />

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-bold text-[#263238] text-base">
                          {courseTitle}
                        </h3>

                        <p className="text-sm text-gray-500 mt-2">
                          {courseDescription}
                        </p>

                        <div className="flex items-center gap-2 mt-4">
                          {teacherAvatar ? (
                            <img
                              src={teacherAvatar}
                              alt={teacherName}
                              className="w-9 h-9 rounded-full object-cover"
                            />
                          ) : (
                            <div className="w-9 h-9 rounded-full bg-[#E3f2fd] flex items-center justify-center text-[#2196F3] text-[12px] font-bold">
                              {teacherName.charAt(0)}
                            </div>
                          )}

                          <div className="text-[12px] text-gray-400">
                            <p>مدرس دوره</p>
                            <p className="text-[12px] font-semibold text-[#263238]">
                              {teacherName}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between items-center mt-5">
                        <span className="font-bold text-[#2196F3]">
                          {formatPrice(item.price)} تومان
                        </span>

                        <button
                          onClick={() => handleRemove(course.id)}
                          disabled={removeMutation.isPending}
                          className="flex items-center gap-2 text-red-500 text-sm hover:text-red-700 disabled:opacity-50"
                        >
                          <Trash2 size={16} />
                          حذف دوره
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm h-fit">
              <h2 className="font-bold text-lg text-[#263238] mb-6">
                خلاصه سفارش
              </h2>

              <div className="flex justify-between text-sm text-gray-500 mb-4">
                <span>تعداد دوره‌ها</span>
                <span>{formatPrice(items.length)} دوره</span>
              </div>

              <div className="flex justify-between text-sm text-gray-500 mb-5">
                <span>مبلغ کل</span>
                <span>{formatPrice(totalPrice)} تومان</span>
              </div>

              <div className="border-t border-gray-100 pt-5 flex justify-between items-center">
                <span className="font-bold text-[#263238]">
                  مبلغ قابل پرداخت
                </span>

                <span className="font-bold text-[#2196F3] text-lg">
                  {formatPrice(totalPrice)} تومان
                </span>
              </div>

              <button
                onClick={handleCheckout}
                disabled={
                  (isAuthenticated && checkoutMutation.isPending) ||
                  items.length === 0
                }
                className="w-full mt-7 py-3 rounded-xl bg-[#2196F3] text-white font-bold hover:bg-[#1976D2] transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isAuthenticated && checkoutMutation.isPending
                  ? "در حال بررسی سفارش..."
                  : "بررسی و ادامه خرید"}
              </button>

              {isAuthenticated && checkoutMutation.isSuccess && (
                <p className="text-sm text-green-600 text-center mt-3">
                  سفارش و قیمت دوره‌ها با موفقیت بررسی شدند.
                </p>
              )}

              {isAuthenticated && checkoutMutation.isError && (
                <p className="text-sm text-red-500 text-center mt-3">
                  بررسی سفارش با خطا مواجه شد. لطفاً دوباره تلاش کنید.
                </p>
              )}

              <Link
                to="/courses"
                className="flex justify-center items-center gap-2 text-sm text-[#2196F3] mt-5 no-underline"
              >
                بازگشت به دوره‌ها
                <ArrowLeft size={16} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
