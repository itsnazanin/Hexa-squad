import { Link } from 'react-router-dom'
import eye from '@/assets/images/eye.png'
import calendar from '@/assets/images/NewCalendar.png'

const BlogCard = ({ id , image , title , description , date , viewCount}) => {
  return (
    <div className='w-[405px] flex flex-col gap-3'>
      <div className='w-full h-[280px] shrink-0 overflow-hidden relative rounded-3xl'>
        <img className='w-full h-full object-cover' src={image} alt="blog card image" />
      </div>
       
       <Link to={`/blogs/${id}`}>
              <h2 className='font-bold text-[#263238] hover:text-[#2632389d]'>{title}</h2>
       </Link>

       <p className='text-[#455A64]'>
        {description}
      </p>
               
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