import { useQuery } from "@tanstack/react-query";
import { getBlogByIdApi } from "@/core/services/api/blogs.api";

export const useBlogDetail = (blogId) => {
    return useQuery({
        queryKey: ["blog-detail", blogId],
        queryFn: async () => {
            const data = await getBlogByIdApi(blogId);
            return data.blog;
        },
        enabled: Boolean(blogId),
    });
};