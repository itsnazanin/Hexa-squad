import vector from '../../assets/images/vector.png';
import noteIcon from '../../assets/images/note.svg';
import clockIcon from '../../assets/images/clock.svg';
import calendarIcon from '../../assets/images/calendar.svg';
import { useCourses } from '../../hooks/useCourses';
import htmlpics from '../../assets/images/htmlpics.png';
import reactpics from '../../assets/images/reactpics.png';
import pythonpics from '../../assets/images/pythonpics.png';
import netpics from '../../assets/images/.netpics.png';
import LikeButton from '../LikeButton';


const CourseSection = () => {
    


    const {data , isLoading , isError} = useCourses({
         pageNumber: 1,
         rows: 10,        
         sortCol: "Active",
         sortType: "DESC",
         techCount: 0
    })

     if (isLoading) return <p>در حال بارگذاری...</p>;
     if (isError) return <p>ارور وجود دارد</p>;

     const courses = (data?.courseFilterDtos || []).slice(0,4);

    const images = [htmlpics, reactpics, pythonpics, netpics];



  return (
    <div className='w-full pb-16 pt-12 relative left-3'>
            <div className="w-full flex flex-col items-center gap-10">
    
              <div className='flex items-center flex-col'>
                <h2 className="text-[#263238] text-2xl font-extrabold">دوره های آموزشی</h2>
                <img className='pt-2' src={vector} alt="vector" />
              </div>

               <div className="w-full flex justify-center gap-6 mt-4 flex-wrap">
                 {courses.map((course, index) => (
                    <div key={course.courseId} className="w-[270px] shadow bg-white transition-transform duration-300 hover:scale-105 rounded-2xl p-3 cursor-pointer">

                        <img src={course.imageAddress || images[index]} alt={course.title} className="w-full h-[150px] rounded-xl object-cover"/>
                        <h3 className="mt-3 font-bold text-[#263238]">{course.title}</h3>

                        <div className='flex gap-5 pt-3 pb-2 px-2 mt-3 whitespace-nowrap bg-[#ECEFF1] rounded-full text-[#263238] text-xs justify-center items-center'>
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

                        <div className='flex justify-between pt-3 pr-1 items-center text-[#263238] w-[93%] text-sm'>
                         <p className='font-semibold'>{`مدرس: ${course.teacherName}`}</p>
                         <p>{`${course.capacity} دانشجو`}</p>
                        </div>

                        <div className='flex justify-between items-center pt-4 w-[95%]'>
                          <LikeButton data={course}/>
                          <div className='flex items-center gap-2 '>
                            <span className='text-[#2196F3] font-bold text-[18px]'>{course.cost}</span>
                            <p>تومان</p>
                          </div>
                        </div>
                    </div>
                    ))
               }

               </div>

               <button className='py-3 px-6 rounded-full bg-[#2196F3] text-white font-semibold cursor-pointer' >مشاهده همه</button>

            </div>
    </div>  
  )
}

export default CourseSection