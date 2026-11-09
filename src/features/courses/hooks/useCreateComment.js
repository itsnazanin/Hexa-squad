import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCourseCommentApi } from "@/core/services/api/courses.api";

export const useCreateComment = (courseId) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (content) =>
      createCourseCommentApi(courseId, content),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["course-comments", courseId],
      });
    },
  });
};