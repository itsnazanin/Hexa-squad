import { getCourses } from "../core/services/api/courses";
import { useQuery } from "@tanstack/react-query";

export const useCourses = (params = {}) => {
  return useQuery({
    queryKey: ['courses', params],
    queryFn: async () => {
      const res = await getCourses({
        pageNumber: params.pageNumber ?? 1,
        rows: params.rows ?? 10,
        sortCol: params.sortCol ?? null,
        sortType: params.sortType ?? null,
        techCount: params.techCount ?? null,
      });

      return res.data;
    },
    keepPreviousData: true,
  });
};
