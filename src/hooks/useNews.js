
import { useQuery } from '@tanstack/react-query';
import { getNews } from '../core/services/api/getNews';
import { BLOGS_FILTERS } from '../core/services/adapters/blogsFilters';

const fetchNews = async ({ queryKey }) => {
  const [_key, { filter, page , rows }] = queryKey;

  const filterConfig = BLOGS_FILTERS[filter];

  const response = await getNews({
    pageNumber: page,
    rows,
    sortCol: filterConfig.params.SortingCol,
    sortType: filterConfig.params.SortType,
  });

  return response.data;
};

export const useNews = ({ filter, page , rows }) => {
  return useQuery({
    queryKey: ['news', { filter, page , rows }],
    queryFn: fetchNews,
    keepPreviousData: true,
  });
};
