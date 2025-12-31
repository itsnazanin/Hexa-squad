import React from 'react'
import CourseTopSection from '../components/course/CourseTopSection'
import CoursePage from '@/components/course/Layout/filters section/CoursePage'

const Courses = () => {
  return (
    <div className='max-w-[1440px] mx-auto pl-6'>
      <CourseTopSection />
      <CoursePage />
    </div>
  )
}

export default Courses