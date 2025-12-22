import { getNews } from "../core/services/api/getNews";
import { useQuery } from "@tanstack/react-query";

export const useNews = (params) => {
    return useQuery({
        queryKey: ['news', params],
        queryFn: () => getNews(params).then(res => res.data),
        keepPreviousData: true
    })
}
