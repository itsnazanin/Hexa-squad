import http from "./http";

export const getCourses = (params) => {
  return http.get('/Home/GetCoursesWithPagination', {
    params: {
      PageNumber: params.pageNumber,
      RowsOfPage: params.rows,

      ...(params.sortingCol && { SortingCol: params.sortingCol }),
      ...(params.sortType && { SortType: params.sortType }),
    }
  });
};
