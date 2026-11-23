
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, ArrowLeft, GraduationCap } from "lucide-react";

import { getMyCoursesApi } from "@/core/services/api/users.api";

function MyCoursesPage() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMyCourses = async () => {
      try {
        setLoading(true);
        setError("");

        const result = await getMyCoursesApi(1, 50);

        const payload = result.data;

        const courseList = Array.isArray(payload)
          ? payload
          : payload?.courses ||
            payload?.purchasedCourses ||
            payload?.items ||
            [];

        setCourses(courseList);
      } catch (err) {
        console.error("My courses error:", err);
        setError("دریافت دوره‌های خریداری‌شده با مشکل مواجه شد.");
      } finally {
        setLoading(false);
      }
    };

    fetchMyCourses();
  }, []);

  return (
    <section className="flex flex-col items-center w-full min-w-0 px-4 sm:px-6 mt-12 sm:mt-16 lg:mt-[100px] gap-6 sm:gap-8">

      {/* Page Header */}
      <div className="flex flex-col items-center gap-3 text-center">
        <div className="flex items-center gap-2">
          <BookOpen className="text-[#2096f3]" size={23} />
          <h2 className="font-bold text-xl">دوره‌های من</h2>
        </div>

        <p className="text-[#3e3e3e] text-sm sm:text-base leading-7">
          در این قسمت می‌توانید دوره‌هایی که خریداری کرده‌اید را مشاهده کنید.
        </p>
      </div>

      {/* Loading */}
      {loading && (
        <div className="w-full py-16 flex justify-center text-gray-500">
          در حال دریافت دوره‌های شما...
        </div>
      )}

      {/* Error */}
      {!loading && error && (
        <div className="w-full py-12 flex flex-col items-center gap-4 text-center">
          <p className="text-red-500 text-sm">{error}</p>

          <button
            onClick={() => window.location.reload()}
            className="text-blue-600 hover:text-blue-800 text-sm"
          >
            تلاش مجدد
          </button>
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && courses.length === 0 && (
        <div className="w-full border rounded-2xl h-full flex flex-col items-center justify-center py-16 gap-4 text-gray-500">
          <div className="p-5 rounded-full bg-blue-50">
            <GraduationCap size={40} className="text-[#2096f3]" />
          </div>

          <p className="font-medium">
            فعلاً دوره‌ای برای مشاهده وجود ندارد.
          </p>

          <Link
            to="/courses"
            className="flex items-center gap-2 text-purple-700 hover:text-purple-900 text-sm"
          >
            مشاهده دوره‌ها
            <ArrowLeft size={17} />
          </Link>
        </div>
      )}

      {/* Courses Grid */}
      {!loading && !error && courses.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 w-full">

          {courses.map((item) => {
            const course = item.course || item;

            const translation =
              course.translations?.find(
                (translation) => translation.language === "FA"
              ) || course.translations?.[0];

            const title = translation?.title || "دوره آموزشی";
            const description =
              translation?.shortDescription ||
              "برای مشاهده جزئیات این دوره وارد صفحه آن شوید.";

            return (
              <article
                key={item.id}
                className="border border-gray-200 rounded-2xl overflow-hidden bg-white flex flex-col hover:shadow-lg transition-shadow duration-300"
              >
                {/* Course Image */}
                <div className="w-full aspect-[16/9] bg-gray-100 overflow-hidden">
                  {course.thumbnail ? (
                    <img
                      src={course.thumbnail}
                      alt={title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <BookOpen size={42} className="text-gray-400" />
                    </div>
                  )}
                </div>

                {/* Course Content */}
                <div className="p-4 sm:p-5 flex flex-col flex-1 gap-4">

                  <div className="flex-1">
                    <h3 className="font-bold text-base sm:text-lg line-clamp-1">
                      {title}
                    </h3>

                    <p className="text-sm text-gray-500 mt-3 leading-7 line-clamp-2">
                      {description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t pt-4">
                    <span className="text-xs text-green-600 bg-green-50 px-3 py-2 rounded-full">
                      خریداری شده
                    </span>

                    <Link
                      to={`/courses/${course.id}`}
                      className="flex items-center gap-2 text-[#2096f3] hover:text-purple-700 text-sm font-semibold transition-colors"
                    >
                      مشاهده دوره
                      <ArrowLeft size={17} />
                    </Link>
                  </div>

                </div>
              </article>
            );
          })}

        </div>
      )}

    </section>
  );
}

export default MyCoursesPage;
