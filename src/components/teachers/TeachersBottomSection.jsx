import { ArrowLeft, ArrowRight, DatabaseBackup, GitBranch, Github, Laptop, PaintBucket, Rocket, Search, Youtube } from 'lucide-react'
import nazanin from "@/assets/images/nazanin.jpeg"
import Linkedin from '@/assets/icons/Linkedin'

const categories = [
    {
        name: "فرانت اند",
        icon: <Laptop />
    },
    {
        name: "بک اند",
        icon: <DatabaseBackup />
    },
    {
        name: "فول استک",
        icon: <Rocket />
    },
    {
        name: "طراحی وب",
        icon: <PaintBucket />
    }
]


const teacherInfo = [
    {
        id:1,
        name: "سارا کریمی",
        job: "مدرس بک اند",
        info: "توسعه دهنده بک اند و متخصص Node.js با تجربه کاری گسترده",
        image: {nazanin}
    },
    {
        id:2,
        name: "مهدی رضایی",
        job: "مدرس فرانت اند",
        info: "توسعه دهنده فرانت اند با بیش از ۵ سال تجربه در آموزش برنامه نویسی",
        image: {nazanin}
    },
    {
        id:3,
        name: "نگار احمدی",
        job: "مدرس پایگاه داده",
        info: "متخصص پایگاه داده و SQL با بیش از ۴ سال تجربه",
        image: {nazanin}
    },
    {
        id:4,
        name: "علی محمدی",
        job: "مدرس فول استک",
        info: "توسعه دهنده فول استک با تمرکز بر Node.js و React",
        image: {nazanin}
    },
    {
        id:5,
        name: "مهسا نادری",
        job: "مدرس برنامه نویسی پایتون",
        info: "متخصص پایتون و هوش مصنوعی با سابقه تدریس حرفه ای",
        image: {nazanin}
    },
    {
        id:6,
        name: "رضا کاوه",
        job: "مدرس طراحی وب",
        info: "طراح و توسعه دهنده وب با تمرکز بر تجربه کاربری  ui/ux",
        image: {nazanin}
    }
]

function TeachersBottomSection() {
  return (
    <>
     <div className='flex flex-col w-full items-center gap-4'>
        <div className='w-[50%] relative flex flex-col gap-4 items-center'>
            <div className='w-full flex'>
               <input className='bg-white w-full py-3 px-6 rounded-full shadow-md outline-none' type="text" placeholder='جستجو نام استاد،تخصص یا دوره...' />
               <Search className='absolute left-4 top-3 text-[#2096f3ff]' />
            </div>

            <div className='flex gap-5 w-full'>
                <button className='bg-blue-500 rounded-full px-3 py-3 w-full text-white font-semibold whitespace-nowrap'>همه اساتید</button>
                {categories.map((category)=> (
                    <div key={category.name} className='flex gap-2 cursor-pointer transition-transform hover:scale-110 hover:bg-blue-200 hover:text-[#2096f3ff] justify-center whitespace-nowrap w-full py-2 px-2 items-center bg-white rounded-full shadow-lg'>
                        <span className='text-[#2096f3ff] '>{category.icon}</span>
                        <p>{category.name}</p>
                    </div>

                ))}
            </div>
        </div>

        <div className="w-[82%] h-[800px] grid grid-cols-2 gap-5 mt-[50px] mb-10">
            {teacherInfo.map((teacher)=> (
                <div key={teacher.id} className='bg-white pr-6 py-6 rounded-[24px] shadow-md flex gap-4'>
                    <div className='w-[150px] h-full relative'>
                        <img src={nazanin} className='w-full h-full object-cover rounded-[18px]' alt="nazanin" />
                    </div>
                    <div className='flex flex-col gap-2 w-[70%] relative'>
                        <span className='py-2 px-5 bg-blue-100 absolute left-0 w-fit rounded-[24px] font-semibold text-blue-500'>10 دوره</span>
                        <h1 className='font-bold text-[20px]'>{teacher.name}</h1>
                        <p className='text-[14px] text-[#263238]'>{teacher.job}</p>
                        <p className='w-[55%] pt-8 text-[#3f515a]'>{teacher.info}</p>

                        <div className='flex justify-between items-center'>
                            <div className='flex items-center gap-4 pt-3'>
                                <Youtube className='bg-gray-200 p-2 rounded-full h-10 w-10 cursor-pointer transition-colors hover:bg-gray-300' />
                                <Github className='bg-gray-200 p-2 rounded-full h-10 w-10 cursor-pointer transition-colors hover:bg-gray-300'/>
                                <Linkedin className='bg-gray-200 p-2 rounded-full h-10 w-10 cursor-pointer transition-colors hover:bg-gray-300'/>
                            </div>
                            <div className='border flex gap-2 py-2 px-3 rounded-[24px] text-blue-500 hover:bg-blue-100 cursor-pointer items-center '>
                               <button className=''>مشاهده پروفایل</button> 
                               <ArrowRight size={16}/>
                            </div>
                            
                        </div>
                    </div>
                </div>
            ))}
        </div>
     </div>
    </>
  )
}

export default TeachersBottomSection