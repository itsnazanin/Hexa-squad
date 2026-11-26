import BookIcon from "@/assets/images/teachersPng.png"
import { GraduationCap } from "lucide-react"


function TeachersTopSection() {
  return (
    <div className="flex items-center justify-center gap-[40px] pt-[120px]">
        <div className="w-[290px] relative top-5">
            <img src={BookIcon} alt="book icon" />
        </div>
        <div className="flex flex-col gap-3 items-center">
            <div className="py-2 px-4 rounded-full bg-white/70 border flex items-center gap-1.5">
                <GraduationCap color="#2096f3" />
                <p className="font-bold text-[12px] text-[#263238]">اساتید ما</p>
            </div>
            <span className="flex gap-2">
                  <h1 className="font-bold text-[45px]">اساتید حرفه ای </h1>
                  <p className="text-[#2096f3] font-bold text-[45px]">هگزا اسکواد</p>
            </span>
            <p className="text-[#263238] font-semibold">یادگیری در کنار بهترین اساتید و متخصصین حوزه برنامه نویسی</p>
        </div>

    </div>
  )
}

export default TeachersTopSection