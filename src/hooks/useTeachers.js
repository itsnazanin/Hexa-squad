import { useQuery } from '@tanstack/react-query'
import { getTeachers } from '../core/services/api/getTeachers'

export const useTeachers = () => {
  return useQuery({
    queryKey: ['teachers'],
    queryFn: getTeachers ,
    keepPreviousData: true
  })
}