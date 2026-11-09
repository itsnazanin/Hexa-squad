import { useQuery } from "@tanstack/react-query";
import { getBlogCommentsApi } from "@/core/services/api/blogs.api";

export const useBlogComments = (blogId) => {
  return useQuery({
    queryKey: ["blog-comments", blogId],

    queryFn: () => getBlogCommentsApi(blogId),

    enabled: Boolean(blogId),
  });
};