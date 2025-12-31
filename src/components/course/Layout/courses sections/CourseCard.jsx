import React from 'react'
import noteIcon from '../../../../assets/images/note.svg';
import clockIcon from '../../../../assets/images/clock.svg';
import calendarIcon from '../../../../assets/images/calendar.svg';
import teacherIcon from '../../../../assets/icons/teacher.svg';
import userIcon from '../../../../assets/icons/userprofile.svg'
import LikeButton from '../../../../components/LikeButton';

const CourseCard = ({ course, layout }) => {

  return (
    <div className={layout === 'list' ? 'flex flex-row gap-5 w-full items-center cursor-pointer bg-[#ffffff] rounded-3xl shadow-md px-6 py-6 mt-4'
     : 'flex flex-col bg-[#ffffff] rounded-3xl shadow-md px-3 py-4 gap-4 cursor-pointer'}>
      <div>
        <img className={layout === 'list' 
        ? 'w-32 h-32 object-cover rounded-2xl' 
        : 'w-full h-36 object-cover rounded-2xl'} 
        src={course.imageAddress} alt={course.title} />
      </div>
      <div>
          <h3 className="text-xl font-bold mb-2">{course.title}</h3>

          {layout === "list" ? ( 
            <div>
                <p className='text-[#263238] w-[500px] text-sm'>{course.describe}</p>
                <div className='flex gap-8 items-center justify-between'>
                  <div className='bg-[#ECEFF1] whitespace-nowrap mt-3 flex gap-4 rounded-3xl py-3 px-4 text-sm text-[#263238]'>
                    <span className='flex items-center gap-1'>
                      <span className='w-5 h-4 mb-1'>
                        <img src={teacherIcon} alt="teacher icon" />
                      </span>
                      <p>{course.teacherName}</p>
                    </span>

                    <span className='flex items-center '>
                      <span className='w-5 h-4 mb-1'>
                        <img src={userIcon} alt="user icon" />
                      </span>
                      <p>{`${course.capacity} دانش آموز`}</p>
                    </span>

                    <span className='flex items-center gap-1'>
                      <span>
                        <img className='w-5 h-4' src={noteIcon} alt="note icon" />
                      </span>
                      <p>{`${course.capacity} درس`}</p>
                    </span>

                    <span className='flex items-center'>
                      <span className='w-5 h-4'>
                        <img src={clockIcon} alt="clock icon" />
                      </span>
                      <p>{`${course.capacity} ساعت`}</p>
                    </span>

                    <span className='flex items-center'>
                       <span className='w-5 h-4'>
                         <img src={calendarIcon} alt="calendar icon" />
                       </span>
                       <p>{course.startTime && course.startTime.length >= 5 ? course.startTime : '۱ آذر ۱۴۰۴'}</p>
                    </span>

                  </div>

                  <div className='flex gap-1 pt-4'>
                    <span className='text-[#2196F3]'>{course.cost}</span>
                    <p className='text-[#263238]'>تومان</p>
                  </div>
                </div>
            </div>
            
          ) : (
            <div>
                <div className='flex gap-5 pt-3 pb-2 px-4 w-[220px] relative left-1.5 mt-3 whitespace-nowrap bg-[#ECEFF1] rounded-full text-[#263238] text-xs justify-center items-center'>
                  <div className='flex justify-center gap-1'>
                    <img className='mb-1' src={noteIcon} alt="note icon" />
                    <p>{`${course.capacity} درس`}</p>
                  </div>
                  <div className='flex justify-center gap-1'> 
                    <img className='mb-1' src={clockIcon} alt="clock icon" />
                    <p>{`${course.likeCount} ساعت`}</p>
                  </div>
                  <div className='flex justify-center gap-1'>
                    <img className='mb-1' src={calendarIcon} alt="calendar icon" />
                    {course.startTime?.length < 5 || <p>1 اذر 1404</p>}
                  </div>

                </div>

                <div className='flex justify-between pt-3 pr-1 items-center text-[#263238] text-xs'>
                    <p className='font-semibold'>{`مدرس: ${course.teacherName}`}</p>
                    <p>{`${course.capacity} دانشجو`}</p>
                </div>

                  <div className='flex justify-between items-center pt-4'>
                    <LikeButton data={course}/>
                    <div className='flex items-center gap-2 '>
                    <span className='text-[#2196F3] font-bold text-[18px]'>{course.cost}</span>
                    <p>تومان</p>
                    </div>
                 </div>
            </div>
            
          )
          }
      </div>
    </div>
  )
}

export default CourseCard