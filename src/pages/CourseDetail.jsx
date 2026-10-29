import CourseDetailsImg from '@/components/course-details/CourseDetailsImg'
import CourseDetailsInfo from '@/components/course-details/CourseDetailsInfo'
import CourseDetailsList from '@/components/course-details/CourseDetailsList'

import { useParams } from 'react-router-dom'
import { useCourseById } from '@/features/courses/hooks/useCourseById'
import CourseDetailsTabs from '@/components/course-details/CourseDetailsTabs'


const CourseDetail = () => {
    const { id } = useParams()

    const { data , isPending , isError , error } = useCourseById(id)

    if(isPending) {
      return(
        <div className='flex justify-center items-center min-h-[400px]'>
          <p>در حال دریافت اطلاعات دوره ...</p>
        </div>
      )
    }

    if(isError){
      return (
        <div className='flex justify-center items-center min-h-[400px]'>
          <p>
            {error instanceof Error
            ? error.message
            : "خطا در دریافت اطلاعات دوره"}
          </p>
        </div>
      )
    }

    const course = data.course

  return (
    <div className='max-w-[1440px] mx-auto px-20 flex gap-8 items-center justify-center'>
        {/* right part */}
       <div className='flex flex-col gap-6 w-[60%] mt-[130px] pb-40'>
        <CourseDetailsImg course={course} />
        <CourseDetailsInfo course={course} />
        <CourseDetailsTabs course={course}/>
       </div>
       {/* left part */}
       <div className='w-[33%]'>
          <CourseDetailsList course={course} />
       </div>
       {/* similar courses */}
       <div>

       </div>
    </div>
  )
}

export default CourseDetail