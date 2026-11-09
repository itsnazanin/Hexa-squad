import userprofile from '@/assets/icons/userprofiles.svg'
import monitor from '@/assets/icons/monitor.svg'
import calendar from '@/assets/icons/calendar-2.svg'
import calendarTick from '@/assets/icons/calendar-tick.svg'
import teacherIcon from '@/assets/icons/education.svg'


const CourseDetailsList = ({ course , onAddToCart, isAddingToCart , isAddedToCart , addToCartError }) => {

  const teacherInfo = course?.teacher

  const startDate = course?.startDate
  ? new Date(course.startDate).toLocaleDateString("fa-IR")
  : "تاریخ نامشخص"

  const endDate = course?.endDate
  ? new Date(course.endDate).toLocaleDateString("fa-IR")
  : "تاریخ نامشخص"

  return (
    <>
    <div className=' bg-[#FFFFFF] drop-shadow-sm px-8 rounded-3xl flex flex-col'>
        <h2 className='text-center font-bold pt-6 text-xl'>مشخصات دوره</h2>
        <hr className='bg-[#ECEFF1] my-6' />
        <div className='flex justify-between w-full items-center'>
          <div className='flex items-center'>
            <div className='bg-[#2196F3] w-10 h-10 rounded-full flex items-center justify-center'>
              <img className='w-5 h-5' src={userprofile} alt="user profile icon" />
            </div>
            <p className='text-[#455A64] pr-3 text-[14px]'>تعداد دانشجو</p>    
          </div>

            <p className='font-semibold text-[14px]'>{course?.studentCount ?? 0}</p>
        </div>
        <hr className='bg-[#ECEFF1] my-4' />

       <div className='flex justify-between w-full items-center'>
          <div className='flex items-center'>
            <div className='bg-[#2196F3] w-10 h-10 rounded-full flex items-center justify-center'>
              <img className='w-5 h-5' src={monitor} alt="monitor icon" />
            </div>
            <p className='text-[#455A64] pr-3 text-[14px]'> وضعیت دوره</p>    
          </div>

            <p className='font-semibold text-[14px]'>{course?.status ?? "نامشخص"}</p>
        </div>
        <hr className='bg-[#ECEFF1] my-4' />

        <div className='flex justify-between w-full items-center'>
          <div className='flex items-center'>
            <div className='bg-[#2196F3] w-10 h-10 rounded-full flex items-center justify-center'>
              <img className='w-5 h-5' src={calendar} alt="calendar icon" />
            </div>
            <p className='text-[#455A64] pr-3 text-[14px]'> تاریخ شروع</p>    
          </div>

            <p className='font-semibold text-[14px]'>{startDate}</p>
        </div>
        <hr className='bg-[#ECEFF1] my-4' />

                <div className='flex justify-between w-full items-center'>
          <div className='flex items-center'>
            <div className='bg-[#2196F3] w-10 h-10 rounded-full flex items-center justify-center'>
              <img className='w-5 h-5' src={calendarTick} alt="calendar icon" />
            </div>
            <p className='text-[#455A64] pr-3 text-[14px]'> تاریخ پایان</p>    
          </div>

            <p className='font-semibold text-[14px]'>{endDate}</p>
        </div>
        <hr className='bg-[#ECEFF1] my-4' />

        <div className='flex justify-between items-center py-8'>
          <button
            onClick={onAddToCart}
            disabled={isAddingToCart}
            className="bg-[#2196F3] font-semibold py-4 px-6 rounded-full text-white disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isAddingToCart
              ? "در حال افزودن..."
              : isAddedToCart
                ? "افزوده شد"
                : "افزودن به سبد خرید"}
          </button>
          <span className='flex items-center gap-2'>
            <p className='text-[#2196F3] text-2xl font-semibold'>{course?.price?.toLocaleString("fa-IR")}</p>
            <p className='text-[#263238]'>تومان</p>
          </span>
        </div>

        {isAddedToCart && (
          <p className="text-green-600 text-sm">
            دوره با موفقیت به سبد خرید اضافه شد.
          </p>
        )}


        {addToCartError && (
          <p className="text-red-500 text-sm">
            {addToCartError.response?.data?.message ||
              addToCartError.message ||
              "افزودن دوره به سبد خرید با خطا مواجه شد."}
          </p>
        )}

    </div>

    <div className='w-full rounded-3xl mt-8 drop-shadow-md bg-[#ffffff] flex gap-4 items-center py-6 px-6'>
            <div className='w-16 h-16 flex relative'>
              <img className='rounded-2xl object-cover' src={teacherInfo?.avatar || userprofile} alt="teacher image" />
            </div>
            
          
          <div>
            <div className='flex items-center gap-2'>
              <span>
              <img src={teacherIcon} alt="teacher icon" />
              </span>
              <p className='font-semibold'>{teacherInfo?.name || "مدرس نامشخص"}</p>
           </div>
           <p className='text-[#455A64] pt-2 text-[14px]'>{teacherInfo?.bio ?? ""}</p>
            
          </div>
        </div>
    </>
  )
}

export default CourseDetailsList