import CourseDetailsImg from '@/components/course details/CourseDetailsImg'
import CourseDetailsInfo from '@/components/course details/CourseDetailsInfo'
import CourseDetailsList from '@/components/course details/CourseDetailsList'
import React from 'react'
// import { useParams } from 'react-router-dom'


const CourseDetail = () => {
    // const { id } = useParams()
  return (
    <div className='max-w-[1440px] mx-auto px-20 flex gap-8 items-center justify-center'>
        {/* right part */}
       <div className='flex flex-col gap-6 w-[60%] mt-[130px] pb-40'>
        <CourseDetailsImg />
        <CourseDetailsInfo />
       </div>
       {/* left part */}
       <div className='w-[33%]'>
          <CourseDetailsList />
       </div>
       {/* similar courses */}
       <div></div>
    </div>
  )
}

export default CourseDetail