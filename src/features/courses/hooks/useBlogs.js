import { useQuery } from "@tanstack/react-query";
import { getBlogsApi } from "@/core/services/api/blogs.api";

export const useBlogs = (params = {}) => {
    return useQuery({
        queryKey:["blogs", params],
        queryFn: () => getBlogsApi(params)
    })
}