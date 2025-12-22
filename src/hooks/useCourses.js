import { getCourses } from "../core/services/api/courses";
import { useQuery } from "@tanstack/react-query";

export const useCourses = (params) => {
    return useQuery({
        queryKey: ['courses', params],
        queryFn: () => getCourses(params).then(res => res.data),
        keepPreviousData: true
    })
}