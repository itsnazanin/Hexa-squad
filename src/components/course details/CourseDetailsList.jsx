import React from 'react'
import userprofile from '../../assets/icons/userprofiles.svg'
import monitor from '../../assets/icons/monitor.svg'
import calendar from '../../assets/icons/calendar-2.svg'
import calendarTick from '../../assets/icons/calendar-tick.svg'
import teacherIcon from '../../assets/icons/education.svg'
import teacherpic from '../../assets/images/teacherpic.jpg'

const CourseDetailsList = () => {
  return (
    <>
    <div className=' bg-[#FFFFFF] drop-shadow-sm px-8 rounded-3xl flex flex-col'>
        <h2 className='text-center font-bold pt-6 text-2xl'>مشخصات دوره</h2>
        <hr className='bg-[#ECEFF1] my-6' />
        <div className='flex justify-between w-full items-center'>
          <div className='flex items-center'>
            <div className='bg-[#2196F3] w-10 h-10 rounded-full flex items-center justify-center'>
              <img src={userprofile} alt="user profile icon" />
            </div>
            <p className='text-[#455A64] pr-3'>تعداد دانشجو</p>    
          </div>

            <p className='font-semibold'>27</p>
        </div>
        <hr className='bg-[#ECEFF1] my-4' />

       <div className='flex justify-between w-full items-center'>
          <div className='flex items-center'>
            <div className='bg-[#2196F3] w-10 h-10 rounded-full flex items-center justify-center'>
              <img src={monitor} alt="monitor icon" />
            </div>
            <p className='text-[#455A64] pr-3'> وضعیت دوره</p>    
          </div>

            <p className='font-semibold'>در حال بارگزاری</p>
        </div>
        <hr className='bg-[#ECEFF1] my-4' />

        <div className='flex justify-between w-full items-center'>
          <div className='flex items-center'>
            <div className='bg-[#2196F3] w-10 h-10 rounded-full flex items-center justify-center'>
              <img src={calendar} alt="calendar icon" />
            </div>
            <p className='text-[#455A64] pr-3'> تاریخ شروع</p>    
          </div>

            <p className='font-semibold'>24 فروردین 1403 </p>
        </div>
        <hr className='bg-[#ECEFF1] my-4' />

                <div className='flex justify-between w-full items-center'>
          <div className='flex items-center'>
            <div className='bg-[#2196F3] w-10 h-10 rounded-full flex items-center justify-center'>
              <img src={calendarTick} alt="calendar icon" />
            </div>
            <p className='text-[#455A64] pr-3'> تاریخ پایان</p>    
          </div>

            <p className='font-semibold'>24 فروردین 1403 </p>
        </div>
        <hr className='bg-[#ECEFF1] my-4' />

        <div className='flex justify-between items-center py-8'>
          <button className='bg-[#2196F3] font-semibold py-4 px-6 rounded-full text-white'>شرکت در دوره</button>
          <span className='flex items-center gap-2'>
            <p className='text-[#2196F3] text-2xl font-semibold'>500,000</p>
            <p className='text-[#263238]'>تومان</p>
          </span>
        </div>

    </div>

    <div className='w-full rounded-3xl mt-8 drop-shadow-md bg-[#ffffff] flex gap-4 items-center py-6 px-6'>
            <div className='w-16 flex object-cover'>
              <img className='rounded-2xl' src={teacherpic} alt="teacher image" />
            </div>
            
          
          <div>
            <div className='flex items-center gap-2'>
              <span>
              <img src={teacherIcon} alt="teacher icon" />
              </span>
              <p className='font-semibold'>استاد بحرالعلوم</p>
           </div>
           <p className='text-[#455A64]'>برنامه نویسی تحت فرانت اند و بک اند</p>
            
          </div>
        </div>
    </>
  )
}

export default CourseDetailsList