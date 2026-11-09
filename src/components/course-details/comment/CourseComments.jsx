import { useCourseComments } from "@/features/courses/hooks/useCourseComments";
import CommentItem from "@/components/course-details/comment/CommentItem";
import CommentForm from "@/components/course-details/comment/CommentForm";

const CourseComments = ({ courseId, showCommentForm, onCloseCommentForm}) => {
  const { data, isPending, isError, error } =
    useCourseComments(courseId);

  return (
    <div className="flex flex-col gap-6">
      {showCommentForm && (
        <CommentForm
          courseId={courseId}
          onClose={onCloseCommentForm}
        />
      )}

      {isPending && (
        <div className="py-8 text-center text-sm text-[#78909C]">
          در حال دریافت نظرات ...
        </div>
      )}

      {isError && (
        <div className="py-8 text-center text-sm text-red-500">
          دریافت نظرات با خطا مواجه شد
          <p className="mt-2 text-xs">{error?.message}</p>
        </div>
      )}

      {!isPending && !isError && (
        <>
          {data?.comments?.length === 0 && (
            <div className="py-8 text-center text-sm text-[#78909C]">
              هنوز نظری برای این دوره ثبت نشده است
            </div>
          )}

          {data?.comments?.length > 0 && (
            <div className="flex flex-col">
              {data.comments.map((comment) => (
                <CommentItem
                  key={comment.id}
                  comment={comment}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CourseComments;