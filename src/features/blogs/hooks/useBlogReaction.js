import { useMutation, useQueryClient } from "@tanstack/react-query";
import { reactToBlogApi,removeBlogReactionApi } from "@/core/services/api/blogs.api";

export const useBlogReaction = (blogId) => {
    const queryClient = useQueryClient();

    const reactMutation = useMutation({
        mutationFn: (type) => reactToBlogApi(blogId, type),

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["blog-detail", blogId],
            });
        },
    });

    const removeMutation = useMutation({
        mutationFn: () => removeBlogReactionApi(blogId),

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["blog-detail", blogId],
            });
        },
    });

    return {
        reactMutation,
        removeMutation,
    };
};