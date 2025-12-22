import http from "./http";

export const getNews = async (params) => {
    return await http.get('/News' , {
        params:{
            PageNumber: params.pageNumber,
            RowsOfPage: params.rows ,
            SortingCol: params.sortCol ,
            SortType: params.sortType
        }
    })
}