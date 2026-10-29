import React from 'react'
import rating from '../../assets/images/Stars.png'
import like from '../../assets/icons/like.svg'
import dislike from '../../assets/icons/dislike.svg'

const CourseDetailsInfo = ({ course }) => {
  return (
    <div className='flex flex-col gap-4'>

        <h1 className='text-[#263238] font-bold text-3xl'>{course.title}</h1>

        <p className='text-[#455A64]'>{course.shortDescription}</p>

        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
              <img className='w-[110px]' src={rating} alt="rating" />
              <p className='text-[#263238]'>امتیاز 20 نفر</p> 
              <button className='bg-[#2196F3] py-2.5 px-4 text-sm rounded-full text-white'>ثبت دیدگاه</button>      
            </div>

            <div className='w-fit flex items-center gap-3'>
                <p className='text-[#455A64] text-sm cursor-pointer'>آیا از این دوره راضی بودید؟</p>
                <span className='flex gap-2 py-3 px-3 rounded-full text-[#263238] bg-[#ECEFF1]'>
                    <img className='w-5' src={like} alt="like hands" />
                    <p>22</p>
                </span>
                <span className='flex gap-2 py-3 px-3 rounded-full text-[#263238] bg-[#ECEFF1]'>
                    <img className='w-5' src={dislike} alt="like hands" />
                    <p>0</p>
                </span>
            </div>

        </div>
        
    </div>
  )
}

export default CourseDetailsInfo