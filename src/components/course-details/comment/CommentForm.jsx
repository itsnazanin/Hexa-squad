import { useState } from "react";
import { useCreateComment } from "@/features/courses/hooks/useCreateComment";

const CommentForm = ({ courseId, onClose }) => {
  const [content, setContent] = useState("");

  const { mutate, isPending, isError, error, isSuccess } = useCreateComment(courseId);

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedContent = content.trim();

    if (!trimmedContent) return;

    mutate(trimmedContent, {
      onSuccess: () => {
        setContent("");
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 rounded-2xl border border-[#E2E8F0] p-4"
    >
      <label
        htmlFor="comment"
        className="text-sm font-medium text-[#263238]"
      >
        دیدگاه شما
      </label>

      <textarea
        id="comment"
        value={content}
        onChange={(event) => setContent(event.target.value)}
        placeholder="نظرت درباره این دوره رو بنویس..."
        rows={4}
        disabled={isPending}
        className="w-full resize-y rounded-xl border border-[#CFD8DC] p-3 text-sm outline-none focus:border-[#607D8B] disabled:opacity-60"
      />

      {isError && (
        <p className="text-sm text-red-500">
          {error?.response?.data?.message ||
            error?.message ||
            "ثبت دیدگاه با خطا مواجه شد"}
        </p>
      )}

      {isSuccess && (
        <p className="text-sm text-green-600">
          دیدگاه شما با موفقیت ثبت شد.
        </p>
      )}

      <div className="flex items-center justify-end gap-3">
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            disabled={isPending}
            className="rounded-xl px-4 py-2 text-sm text-[#607D8B] disabled:opacity-60"
          >
            انصراف
          </button>
        )}

        <button
          type="submit"
          disabled={isPending || !content.trim()}
          className="rounded-xl bg-[#263238] px-5 py-2 text-sm text-white disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isPending ? "در حال ثبت..." : "ثبت دیدگاه"}
        </button>
      </div>
    </form>
  );
};

export default CommentForm;