import { useQuery } from "@tanstack/react-query";
import { getCourseByIdApi } from "@/core/services/api/courses.api";

export const useCourseById = ( courseId ) => {
    return useQuery({
        queryKey: [
            "course",
            courseId,
            localStorage.getItem("language") || "fa"
        ],

        queryFn: () => {
            if(!courseId){
                throw new Error("course id is required")
            }

            return getCourseByIdApi(courseId)
        },

        enabled: Boolean(courseId)
    })
}