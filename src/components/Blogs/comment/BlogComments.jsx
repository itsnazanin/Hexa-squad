import { useBlogComments } from "@/features/blogs/hooks/useBlogComments";
import CommentList from "./CommentList";

function BlogComments({ blogId }) {
  const {
    data,
    isPending,
    isError,
    error,
  } = useBlogComments(blogId);


  if (isPending) {
    return (
      <div className="text-center py-8 text-[#455A64]">
        در حال دریافت نظرات...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center py-8 text-red-500">
        دریافت نظرات با خطا مواجه شد.
        <p className="text-sm mt-2">
          {error?.message}
        </p>
      </div>
    );
  }

  const comments = data?.comments ?? [];

  return (
    <section className="bg-white rounded-[24px] shadow-sm p-6 mb-[80px]">

      <h2 className="text-xl font-bold text-[#263238] text-center mb-8">
        نظرات کاربران درباره این مقاله
      </h2>

      {comments.length === 0 ? (
        <p className="text-center text-[#78909C] py-8">
          هنوز نظری برای این مقاله ثبت نشده است.
        </p>
      ) : (
        <CommentList comments={comments} />
      )}

    </section>
  );
}

export default BlogComments;