const formatCommentDate = (date) => {
    if(!date) return ""
    
    return new Intl.DateTimeFormat("fa-IR", {
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(new Date(date))
}

const CommentItem = ({ comment }) => {
    const { user , content , createdAt , replies = [] } = comment

    return (
        <article className="flex flex-col gap-3 border-b border-gray-100 py-4 last:border-n-0">

            <div className="flex items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-2">
                 {user?.avatar ? (
                  <img src={user.avatar} alt={user.name || "تصویر کاربر"}
                  className="size-8 shrink-0 rounded-full object-cover" 
                  />
                 ) : (
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#E3F2FD]">
                        {user?.name?.charAt(0) || "؟"}
                    </div>
                 )}

                 <span className="text-sm font-semibold text-[#263238]">
                    {user?.name || "کاربر"}
                 </span>
                </div>

                <time datetime={createdAt} className="shrink-0 text-xs text-[#90A4AE]">
                    {formatCommentDate(createdAt)}
                </time>
            </div>


            <p className="text-sm leading-7 text-[#607D8B]">{content}</p>

            <div className="flex items-center gap-4 text-xs text-[#607D8B]">
                <button className="transition-colors hover:text-[#2196F3]">
                    پاسخ
                </button>

                <button className="transition-colors hover:text-red-500">
                    ♡
                </button>
            </div>


            {replies.length > 0 && (
                <div className="mr-4 flex flex-col border-r-2 border-[#E3F2FD] pr-3">
                    {replies.map((reply) => (
                        <div key={reply.id} className="flex flex-col gap-2 py-3">
                            <div className="flex items-center justify-between gap-3">
                                <div className="flex items-center gap-2">
                                  {reply.user?.avatar ? (
                                   <img src={reply.user.avatar} alt={reply.user.name || "تصویر کاربر"} className="size-7 rounded-full object-cover" />
                                    ) : (
                                        <div className="flex size-7 items-center justify-center rounded-full bg-[#E3F2FD] text-xs text-[#2196F3]">
                                            {reply.user?.name?.charAt(0) || "؟"}
                                        </div>
                                    )}

                                    <span className="text-xs font-semibold text-[#263238]">
                                        {reply.user?.name || "کاربر"}
                                    </span>
                                </div>

                                <time datetime={reply.createdAt} className="text-xs text-[#90A4AE]">
                                    {formatCommentDate(reply.createdAt)}
                                </time>
                            </div>

                            <p className="text-xs leading-6 text-[#607D8B]">
                                {reply.content}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </article>
    )
}

export default CommentItem