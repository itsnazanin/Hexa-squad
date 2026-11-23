
import { useEffect, useState } from "react";
import { ArrowLeft, Bell, BookOpen, Headset, MessageCircle, ShoppingBag, WalletMinimal } from "lucide-react";
import { getMyCoursesApi } from "@/core/services/api/users.api";
import logo from "@/assets/icons/logo.png";
import computerImg from "@/assets/images/computer.png";
import { Link } from "react-router-dom";
import { useAuth } from "@/components/Auth/AuthContext";
import { getDashboardApi } from "@/core/services/api/dashboard.api";

function DashboardPage() {
  const { user } = useAuth();

  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [myCourses, setMyCourses] = useState([]);
  const [coursesLoading, setCoursesLoading] = useState(true);
  const [coursesError, setCoursesError] = useState("");

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        setLoading(true);
        setError("");

        const result = await getDashboardApi();
        setDashboard(result.data);
      } catch (error) {
        console.error("Dashboard error:", error);
        setError("دریافت اطلاعات داشبورد با مشکل مواجه شد.");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  useEffect(() => {
  const fetchMyCourses = async () => {
    try {
      setCoursesLoading(true);
      setCoursesError("");

      const result = await getMyCoursesApi(1, 3);

      const coursesData = result.data;

      const courses = Array.isArray(coursesData)
        ? coursesData
        : coursesData?.courses || [];

      setMyCourses(courses);
    } catch (error) {
      console.error("My courses error:", error);
      setCoursesError("دریافت دوره‌های شما با مشکل مواجه شد.");
    } finally {
      setCoursesLoading(false);
    }
  };

  fetchMyCourses();
  }, []);

  const stats = dashboard?.stats;

  const DashboardCards = [
    {
      id: 1,
      title: "تومان اعتبار کیف پول",
      value: stats?.walletBalance?.toLocaleString("fa-IR") ?? "0",
      icon: <WalletMinimal size={22} />,
      color: "text-blue-500",
      bgColor: "bg-blue-100"
    },
    {
      id: 2,
      title: "دوره های خریداری شده",
      value: stats?.purchasedCoursesCount ?? "0",
      icon: <BookOpen size={22} />,
      color: "text-purple-500",
      bgColor: "bg-purple-100"
    },
    {
      id: 3,
      title: "نظرات ثبت شده",
      value: stats?.commentsCount ?? "0",
      icon: <MessageCircle size={22} />,
      color: "text-blue-500",
      bgColor: "bg-blue-100"
    },
    {
      id: 4,
      title: "تیکت پشتیبانی",
      value: "0",
      icon: <Headset size={22} />,
      color: "text-purple-500",
      bgColor: "bg-purple-100"
    }
  ];

  return (
    <section className="flex flex-col items-center flex-1 h-full w-full min-w-0">

      
      <header className="flex justify-between items-center w-full py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-1">
          <p className="font-semibold text-sm sm:text-base">HexaSquad</p>

          <div className="w-7 sm:w-8">
            <img src={logo} alt="main logo" className="w-full" />
          </div>
        </div>

        <div className="flex items-center gap-4 sm:gap-6">
          <ShoppingBag
            size={20}
            className="hover:text-[#6b6b6bae] cursor-pointer"
          />

          <Bell
            size={20}
            className="hover:text-[#6b6b6bae] cursor-pointer"
          />
        </div>
      </header>

      <hr className="w-full" />

      
      <div className="rounded-2xl sm:rounded-[24px] w-[94%] my-5 sm:my-8 px-5 sm:px-8 lg:px-[70px] py-6 sm:py-8 min-h-[190px] sm:min-h-[230px] lg:h-[250px] bg-gradient-to-tr flex flex-col-reverse sm:flex-row justify-between items-center gap-4 sm:gap-8 from-[#cbb4fd] to-[#e4f3fd]">

        <div className="text-center sm:text-right">
          <h1 className="font-bold text-xl sm:text-2xl lg:text-[30px]">
            سلام {user?.name || "کاربر عزیز"} !
          </h1>

          <p className="text-[#5d5c5c] pt-3 sm:pt-4 text-sm sm:text-base">
            به داشبورد کاربری هگزا اسکواد خوش آمدید
          </p>
        </div>

        <div className="w-[130px] sm:w-[170px] lg:w-[210px] shrink-0">
          <img
            src={computerImg}
            alt="Dashboard illustration"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      
      {loading ? (
        <p className="py-10 text-sm sm:text-base">
          در حال دریافت اطلاعات داشبورد...
        </p>
      ) : error ? (
        <p className="text-red-500 py-10 text-sm sm:text-base">
          {error}
        </p>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6 w-[94%]">

          {DashboardCards.map((card) => (
            <div
              key={card.id}
              className="flex flex-col-reverse sm:flex-row justify-between items-start sm:items-center gap-3 rounded-xl sm:rounded-[16px] border p-3 sm:p-4 lg:p-6 w-full min-w-0"
            >
              <div className="flex flex-col gap-2 min-w-0">
                <p className="font-bold text-base sm:text-lg lg:text-[20px] break-words">
                  {card.value}
                </p>

                <p className="text-xs sm:text-sm lg:text-base leading-6">
                  {card.title}
                </p>
              </div>

              <div
                className={`p-2.5 sm:p-3 lg:p-4 rounded-full ${card.bgColor} ${card.color}`}
              >
                {card.icon}
              </div>
            </div>
          ))}

        </div>
      )}

      
  <div className="border w-[94%] mt-5 h-fit rounded-xl sm:rounded-[16px] p-4 sm:p-6 flex flex-col mb-6 gap-5">

  {/* Header */}
  <div className="flex justify-between gap-3 items-center">
    <div className="flex gap-2 items-center">
      <BookOpen className="text-[#2096f3] shrink-0" size={20} />

      <p className="text-sm sm:text-base font-medium">
        دوره های من
      </p>
    </div>

    <Link
      to="/dashboard/courses"
      className="flex gap-1 sm:gap-2 items-center text-purple-700 text-xs sm:text-sm shrink-0"
    >
      <p>مشاهده همه</p>
      <ArrowLeft size={17} />
    </Link>
  </div>

  {/* Loading */}
  {coursesLoading ? (
    <div className="py-10 text-center text-gray-500 text-sm">
      در حال دریافت دوره‌های شما...
    </div>
  ) : coursesError ? (
    <div className="py-8 text-center text-red-500 text-sm">
      {coursesError}
    </div>
  ) : myCourses.length === 0 ? (
    /* Empty State */
    <div className="flex flex-col items-center justify-center py-10 gap-4">
      <div className="bg-purple-50 text-purple-500 p-5 rounded-full">
        <BookOpen size={35} />
      </div>

      <p className="text-gray-600 text-sm text-center">
        هنوز دوره‌ای خریداری نکرده‌اید.
      </p>

      <Link
        to="/courses"
        className="bg-[#2096f3] hover:bg-purple-700 transition text-white px-6 py-2.5 rounded-xl text-sm"
      >
        مشاهده دوره‌ها
      </Link>
    </div>
  ) : (
    /* Courses */
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">

      {myCourses.map((item) => {
        const course = item.course || item;

        const translation =
          course.translations?.find(
            (translation) => translation.language === "FA"
          ) || course.translations?.[0];

        return (
          <div
            key={item.id || course.id}
            className="border rounded-2xl overflow-hidden flex flex-col hover:shadow-md transition"
          >
            {/* Thumbnail */}
            <div className="w-full aspect-video bg-gray-100 overflow-hidden">
              {course.thumbnail ? (
                <img
                  src={course.thumbnail}
                  alt={translation?.title || "Course"}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <BookOpen size={35} />
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-1 gap-3">

              <div className="flex justify-between items-center gap-2">
                <span className="text-xs bg-green-50 text-green-600 px-3 py-1 rounded-full">
                  خریداری شده
                </span>
              </div>

              <h3 className="font-bold text-sm sm:text-base line-clamp-1">
                {translation?.title || "دوره بدون عنوان"}
              </h3>

              <p className="text-xs sm:text-sm text-gray-500 leading-6 line-clamp-2">
                {translation?.shortDescription || "برای مشاهده جزئیات و محتوای دوره وارد صفحه دوره شوید."}
              </p>

              <Link
                to={`/courses/${course.id}`}
                className="mt-auto flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 transition text-white rounded-xl py-2.5 text-sm"
              >
                مشاهده دوره
                <ArrowLeft size={16} />
              </Link>

            </div>
          </div>
        );
      })}

    </div>
  )}

</div>
    </section>
  );
}

export default DashboardPage;
