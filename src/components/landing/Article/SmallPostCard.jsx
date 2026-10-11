import eye from '../../../assets/images/eye.png'
import calendar from '../../../assets/images/newCalendar.png'

const SmallPostCard = ({ title, image, date , viewCount , describe}) => {

  return (
    <div className="flex items-start gap-5 pt-10 pl-20 ">
        <div className=' max-w-[220px]'>
          <img className="rounded-3xl shadow-md object-cover" src={image} alt={title} />
        </div>

        <div className='flex flex-col justify-start pt-4'> 
            <h2 className='text-[#263238] text-xl'>{title}</h2>
            <p className='text-[#455A64]'>{describe}</p>
            
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
        
    </div>
  )
}

export default SmallPostCard
