import http from "./http";

export const getCourses = (params) => {
    return http.get('/Home/GetCoursesWithPagination', {
        params: {
            PageNumber: params.pageNumber,
            RowsOfPage: params.rows,
            SortingCol: params.sortCol,
            SortType: params.sortType,
            TechCount: params.techCount
        }
    })
}