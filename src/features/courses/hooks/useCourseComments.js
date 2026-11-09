import { useQuery } from "@tanstack/react-query";
import { getCourseCommentsApi } from "@/core/services/api/courses.api";

export const useCourseComments = (courseId) => {
 return useQuery({
    queryKey: ["course-comments", courseId],

    queryFn: () => getCourseCommentsApi(courseId),

    enabled: Boolean(courseId)
 })
}