import { useQuery } from '@tanstack/react-query'
import { getTeachersApi } from '@/core/services/api/teacher.api'

export const useTeachers = () => {
  return useQuery({
    queryKey: ['teachers'],
    queryFn: getTeachersApi
  })
}