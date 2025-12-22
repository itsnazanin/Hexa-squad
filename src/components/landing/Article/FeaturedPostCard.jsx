import React from 'react'
import eye from '../../../assets/images/eye.png'
import calendar from '../../../assets/images/newCalendar.png'

const FeaturedPostCard = ({ title, image, date, viewCount, describe }) => {
  return (
    <div className='flex flex-col w-fit relative right-[130px] gap-6 pt-10'>
        <div>
            <img className='rounded-3xl' src={image} alt={title} />
        </div>
        <div className='text-[#2196F3] flex gap-4'>
            <span className='flex items-center gap-2 bg-[#DAEEFF] rounded-full py-2 px-3'>
                <img src={eye} alt="view count" />
                <p>{viewCount} بازدید</p>
            </span>
            <span className='flex items-center gap-2 bg-[#DAEEFF] rounded-full py-2 px-3'>
                <img src={calendar} alt="calendar" />
                <p>{date}</p>
            </span>
        </div>
        <div>
            <h2 className='text-[#263238] font-bold text-2xl '>{title}</h2>
            <span className='text-[#455A64]'>
              {describe.length < 50 ?
              <p className='w-[420px]'>لورم  ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ  و با استفاده از  طراحان گرافیک است   چاپگرها و متون 
              بلکه روزنامه و مجله در ستون و  سطرآنچنان که
               لازم است   و برای شرایط فعلی تکنولوژی مورد.</p>
              : describe}
            </span>
        </div>
        
    </div>
  )
}

export default FeaturedPostCard