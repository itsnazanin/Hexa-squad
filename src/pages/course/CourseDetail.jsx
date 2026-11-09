
import CourseDetailsImg from "@/components/course-details/CourseDetailsImg";
import CourseDetailsInfo from "@/components/course-details/CourseDetailsInfo";
import CourseDetailsList from "@/components/course-details/CourseDetailsList";
import CourseDetailsTabs from "@/components/course-details/CourseDetailsTabs";

import { useParams } from "react-router-dom";
import { useCourseById } from "@/features/courses/hooks/useCourseById";
import { useState } from "react";
import { useAddToCart } from "@/features/courses/hooks/useCart";

const CourseDetail = () => {
  const { id } = useParams();

  const { data, isPending, isError, error } = useCourseById(id);

  const [activeTab, setActiveTab] = useState("description");
  const [showCommentForm, setShowCommentForm] = useState(false);
  const addToCartMutation = useAddToCart()


  const handleWriteComment = () => {
    setActiveTab("reviews");
    setShowCommentForm(true);
  };

  const handleCloseCommentForm = () => {
    setShowCommentForm(false);
  };

  if (isPending) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <p>در حال دریافت اطلاعات دوره ...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <p>
          {error instanceof Error
            ? error.message
            : "خطا در دریافت اطلاعات دوره"}
        </p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <p>اطلاعات دوره پیدا نشد.</p>
      </div>
    );
  }

  const course = data.course ?? data;


    const handleAddToCart = () => {
    addToCartMutation.mutate(course)
  }

  return (
    <div className="mx-auto flex max-w-[1440px] justify-center gap-8 px-20">
      {/* بخش سمت راست */}
      <div className="mt-[130px] flex w-[60%] flex-col gap-6 pb-40">
        <CourseDetailsImg course={course} />

        <CourseDetailsInfo
          course={course}
          onWriteComment={handleWriteComment}
        />

        <CourseDetailsTabs
          id={course.id}
          description={course.description}
          sections={course.sections}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          showCommentForm={showCommentForm}
          onCloseCommentForm={handleCloseCommentForm}
        />
      </div>

      {/* بخش سمت چپ */}
      <div className="mt-[130px] w-[33%]">
        <CourseDetailsList 
        course={course} 
        onAddToCart={handleAddToCart}
        isAddingToCart={addToCartMutation.isPending}
        isAddedToCart={addToCartMutation.isSuccess}
        addToCartError={addToCartMutation.error}
        />
      </div>

      {/* دوره‌های مشابه */}
      <div></div>
    </div>
  );
};

export default CourseDetail;
