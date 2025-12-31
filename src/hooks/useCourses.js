import { getCourses } from "../core/services/api/courses";
import { useQuery } from "@tanstack/react-query";

export const useCourses = ({
  pageNumber = 1,
  rows = 10,
  sortingCol = null,
  sortType = null,
} = {}) => {

  return useQuery({
    queryKey: [
      "courses",
      pageNumber,
      rows,
      sortingCol,
      sortType,
    ],

    queryFn: async () => {

      // 🔥 لاگ خیلی مهم
      console.log("FETCH COURSES:", {
        pageNumber,
        rows,
        sortingCol,
        sortType,
      });

      const res = await getCourses({
        pageNumber,
        rows,
        sortingCol,
        sortType,
      });

      console.log(
        "RESPONSE IDS:",
        res.data.courseFilterDtos?.map(c => c.courseId)
      );

      return res.data;
    },

    keepPreviousData: true,
  });
};
