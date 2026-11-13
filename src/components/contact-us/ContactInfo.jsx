import { Headphones, Mail, MapPin, Phone, Send } from "lucide-react"
import supportImg from "@/assets/images/supportImg.png"


function ContactInfo() {

  const Carditems = [
    {
        id:1,
        title: "شماره تماس",
        icon: <Phone color="#2196F3" />,
        description: "09117184359"
    },
    {
        id:2,
        title: "آدرس ما",
        icon: <MapPin color="#2196F3" />,
        description: "تهران، خیابان آزادی، پلاک 63"
    },
    {
        id:3,
        title: "ایمیل ما",
        icon: <Mail color="#2196F3" />,
        description: "support@hexasquad.ir",
    },
    {
        id:4,
        title: "پشتیبانی",
        icon: <Headphones color="#2196F3" />,
        description: "پاسخگویی در همه روز های هفته"
    }
  ]


  return (
    <>
     <div className='w-full flex flex-col gap-6'>
        {/* cards */}
        <div className="flex items-center justify-center gap-4 py-8">
            {Carditems.map((item) => (
              <div key={item.id} className="flex justify-between items-center rounded-[16px] cursor-pointer border bg-[#f5f9fc] w-[330px] p-4  h-[100px]"> 
                <div className="flex flex-col gap-2">
                  <h1 className="font-semibold">{item.title}</h1>
                  <p className="text-[#263238] text-[14px]">{item.description}</p>
                </div>
                <span className="mb-6">
                    {item.icon}
                </span>
              </div>
            ))}

        </div>
        {/* message form */}
        <div className="flex mx-12 mb-10 gap-4 h-[600px]">
            {/* image */}
            <div className="w-1/3 flex flex-col items-end">
              <div className="w-[400px]">
                <img src={supportImg} alt="support image" />
              </div>
              <div className="flex items-center flex-col relative right-[80px] bottom-9">
                 <h2 className="flex text-[24px] font-semibold">بیاید با هم <p className="text-[#2196F3] pr-1">بسازیم!</p></h2>
                 <p className="text-[#263238] text-[14px] w-[77%] mt-2 text-center">ما در هگزا اسکواد به رشد شما در دنیای برنامه نویسی اهمیت می دهیم و همیشه آماده ایم تا در مسیر یادگیری و پیشرفت همراهتان باشیم.</p>
              </div>

              
            </div>
            {/* form */}
            <div className="w-2/3 flex justify-center">
               <div className="border w-[85%] rounded-[16px] h-fit bg-[#f5f9fc] p-6 flex flex-col mt-[70px]">
                 <div className="flex gap-2">
                   <Send />
                   <p className="text-[] font-bold text-[18px]">ارسال پیام</p>
                 </div>
                 <p className="text-[14px] mt-2 mb-7">پیام خود را برای ما بنویسید، ما در سریع ترین زمان ممکن پاسخ می دهیم.</p>

                 <form className="grid grid-cols-2 gap-5">

                  <input type="text" placeholder="نام شما" className="w-full rounded-xl border p-4"/>
                  <input type="email" placeholder="ایمیل شما" className="w-full rounded-xl border p-4" />

                  <select className="col-span-2 w-full rounded-xl border p-4">
                    <option>موضوع پیام</option>
                    <option>پشتیبانی</option>
                    <option>همکاری</option>
                  </select>

                  <textarea placeholder="پیام شما..." className="col-span-2 w-full rounded-xl border p-4" />
                  <div className="mt-4 w-full col-span-2 flex justify-end">
                    <button className="w-fit text-white rounded-2xl bg-[#2196F3] px-6 py-4">ارسال پیام</button>
                  </div>
                  

                 </form>

               </div>
            </div>
        </div>
     </div>
    </>
  )
}

export default ContactInfo