import { ArrowLeft, Bell, BookOpen, Headset, MessageCircle, ShoppingBag, WalletMinimal } from 'lucide-react'
import logo from "@/assets/icons/logo.png"
import computerImg from "@/assets/images/computer.png"
import { Link } from 'react-router-dom'

const DashboardCards = [
  {
    id:1,
    title: "تومان اعتبار کیف پول",
    value: "1,250,000",
    icon: <WalletMinimal/>,
    color:"text-blue-500",
    bgColor: "bg-blue-100"

  },
  {
    id:2,
    title: "دوره های خریداری شده",
    value: "2",
    icon: <BookOpen />,
    color:"text-purple-500",
    bgColor: "bg-purple-100"
  },
  {
    id:3,
    title: "نظرات ثبت شده",
    value: "3",
    icon: <MessageCircle />,
    color:"text-blue-500",
    bgColor: "bg-blue-100"
  },
  {
    id:4,
    title: "تیکت پشتیبانی",
    value: "0",
    icon: <Headset />,    
    color:"text-purple-500",
    bgColor: "bg-purple-100"
  }
]

function DashboardPage() {
  return (
    <section className='flex flex-col items-center flex-1'>
        <div className='flex justify-between w-full py-4 px-8'>
           <div className='flex items-center gap-1'>
            <p className='font-semibold'>HexaSquad</p>
            <div className='w-8'>
               <img src={logo} alt="main logo" />
            </div>
           </div>

           <div className='flex gap-6'>
            <ShoppingBag className='hover:text-[#6b6b6bae] cursor-pointer'/>
            <Bell className='hover:text-[#6b6b6bae] cursor-pointer'/>
           </div>

        </div>

        <hr className='w-full' />
        <div className='rounded-[24px] w-[95%] h-[250px] px-[70px] my-8 bg-gradient-to-tr flex justify-between items-center gap-10 from-[#cbb4fd] to-[#e4f3fd]'>
          <div>
            <h1 className='font-bold text-[30px]'>سلام کاربر عزیز !</h1>
            <p className='text-[#5d5c5c] pt-4'>به داشبورد کاربری هگزا اسکواد خوش آمدید</p>
          </div>
          <div className='w-[210px] pt-4'>
            <img src={computerImg} alt="" />
          </div>
        </div>


        <div className='flex gap-6 w-full px-9'>
          {DashboardCards.map((card)=> (
            <div key={card.id} className='flex justify-between items-center rounded-[16px] border p-6 w-full'>
              <div className='flex flex-col gap-2'>
                <p className='font-bold text-[20px]'>{card.value}</p>
                <p>{card.title}</p>
              </div>
              <div className={`p-4 rounded-full ${card.bgColor} ${card.color}`}>
                {card.icon}
              </div>
            </div>
          ))}
        </div>


        <div className='border w-[95%] mt-5 rounded-[16px] p-6 flex flex-col mb-6 flex-1 gap-4'>
          <div className='flex justify-between gap-5 items-center'>
            <div className='flex gap-2'>
              <BookOpen className='text-[#2096f3]'/>
              <p>دوره های من</p>
            </div>
            <div>
              <Link href="/dashboard/courses" className='flex gap-2 text-purple-700'>
                <p>مشاهده همه</p>
                <ArrowLeft />
              </Link>
            </div>
          </div>

        </div>
    </section>
  )
}

export default DashboardPage
