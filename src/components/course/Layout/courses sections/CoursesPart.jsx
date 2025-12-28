import React from 'react'
import { useState , useEffect } from 'react';
import gridIcon from '../../../../assets/icons/grid.svg';
import listIcon from '../../../../assets/icons/list.svg';
import CourseCard from './CourseCard';

const CoursesPart = ({ courses = [] }) => {
  const [layout, setLayout] = useState('grid');

  useEffect(() => {
  console.log('CoursesPart courses:', courses);
  console.log('length:', courses.length);
  }, [courses]);

  if (courses.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500">
        دوره‌ای یافت نشد.
      </div>
    );
  }

  return (
    <div className='w-[90%] h-fit'>
      {/* top part */}
      <div className='w-full h-14 flex gap-4'>
        <div className='flex gap-2 items-center bg-[#ECEFF1] rounded-2xl px-2'>
           <div onClick={() => setLayout('grid')} 
           variant={layout === 'grid' ? 'default' : 'outline'}
           className={`w-10 h-10 flex items-center justify-center rounded-xl cursor-pointer transition
           ${layout === 'grid' ? 'bg-white shadow' : 'hover:bg-white/60'}
           `}>
           <img src={gridIcon} alt="grid icon" /> 
          </div>
          <div onClick={() => setLayout('list')} 
          variant={layout === 'list' ? 'default' : 'outline'}
          className={`w-10 h-10 flex items-center justify-center rounded-xl cursor-pointer transition
          ${layout === 'list' ? 'bg-white shadow' : 'hover:bg-white/60'}
          `}>
            <img src={listIcon} alt="list icon" />
          </div>
        </div>
      </div>
      {/* bottom part */}
      <div className={layout === 'grid' 
       ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-5' 
       : 'flex flex-col'}>
        {courses.map((course) => (
          <CourseCard key={course.courseId} course={course} layout={layout} />
        ))}
      </div>
    </div>
  )
}

export default CoursesPart