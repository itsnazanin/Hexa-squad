import { Heart, MessageCircle } from "lucide-react";

function CommentItem({ comment }) {
  const formattedDate = new Intl.DateTimeFormat("fa-IR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(comment.createdAt));
  
  const userName = comment.user?.name || "کاربر";

  return (
    <div className="flex flex-col gap-3">

      {/* Comment information */}
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-2">

          {/* User avatar */}
          <div className="w-9 h-9 rounded-full overflow-hidden bg-[#ECEFF1] flex items-center justify-center shrink-0">

            {comment.user?.avatar ? (
              <img
                src={comment.user.avatar}
                alt={userName}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-sm font-bold text-[#455A64]">
                {userName.charAt(0)}
              </span>
            )}

          </div>

          <span className="text-sm font-bold text-[#263238]">
            {userName}
          </span>

        </div>

        <span className="text-xs text-[#90A4AE]">
          {formattedDate}
        </span>

      </div>

      {/* Comment content */}
      <p className="text-sm leading-7 text-[#455A64] pr-11">
        {comment.content}
      </p>

      {/* Comment actions */}
      <div className="flex items-center gap-4 pr-11">

        <button
          type="button"
          className="flex items-center gap-1 text-xs text-[#78909C] hover:text-red-500 transition"
        >
          <Heart size={15} />
          <span>{comment.likes?.length ?? 0}</span>
        </button>

        <button
          type="button"
          className="flex items-center gap-1 text-xs text-[#78909C] hover:text-[#2196F3] transition"
        >
          <MessageCircle size={15} />
          <span>پاسخ دادن</span>
        </button>

      </div>

      {/* Replies */}
      {comment.replies?.length > 0 && (
        <div className="mr-5 pr-4 border-r-2 border-[#ECEFF1] flex flex-col gap-5">

          {comment.replies.map((reply) => (
            <CommentItem
              key={reply.id}
              comment={reply}
              isReply
            />
          ))}

        </div>
      )}

    </div>
  );
}

export default CommentItem;