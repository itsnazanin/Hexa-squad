import React from 'react'
import clock from '../../assets/images/clock.svg'
import note from '../../assets/images/note.svg'


const CourseDetailsImg = ({ course }) => {

  if(!course) {
    return null
  }

  return (
    <div className='w-full rounded-2xl border relative overflow-hidden h-[490px]'>
        <img className='w-full h-full object-cover' src={course.thumbnail} alt={course.title} />
        <div className='flex gap-3 absolute left-8 bottom-6 text-[#263238]'>
            <span className='px-4 py-3 flex w-fit bg-white rounded-full'>
              <img className='w-5' src={note} alt="note icon" />
              <p className='pr-2 text-sm whitespace-nowrap'>202 درس </p>
            </span>
            <span className='px-4 py-3 w-fit flex bg-white rounded-full'>
              <img className='w-5' src={clock} alt="clock icon" />
              <p className='pr-2 text-sm whitespace-nowrap'> {course.courseTime}</p>
            </span>
        </div>
                
    </div>
  )
}

export default CourseDetailsImg