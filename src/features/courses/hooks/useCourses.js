import { getCourseApi } from "@/core/services/api/courses.api";
import { useQuery } from "@tanstack/react-query";

export const useCourses = (params = {}) => {

  return useQuery({
    queryKey: ["courses",params],
    queryFn: async () =>  getCourseApi(params) 
  });
};
