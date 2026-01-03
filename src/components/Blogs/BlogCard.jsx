import React from 'react'
import eye from '../../assets/images/eye.png'
import calendar from '../../assets/images/NewCalendar.png'

const BlogCard = ({ image , title , description , date , viewCount}) => {
  return (
    <div className='w-[300px] h-[350px] flex flex-col gap-3'>
       <img className='w-full object-cover rounded-3xl' src={image} alt="blog card image" />
       <h2 className='font-bold text-[#263238]'>{title}</h2>
       <p className='text-[#455A64]'>
        {description?.length > 50 ? (<p>این یک متن برای توضیحات است</p>) : (description)}</p>
               
       <div className='flex gap-4 text-sm relative left-3 text-[#2196F3] whitespace-nowrap'>
          <span className='flex items-center gap-2  py-2 px-3'>
            <img className='w-[30%]' src={eye} alt="view count" />
            <p>{viewCount} بازدید</p>
          </span>
          <span className='flex items-center gap-2 py-2 px-3'>
             <img src={calendar} alt="calendar" />
             <p>{date}</p>
          </span>
        </div>
    </div>
  )
}

export default BlogCard