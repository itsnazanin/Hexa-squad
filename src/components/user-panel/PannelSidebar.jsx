import UserInfo from "./UserInfo"
import SidebarMenu from "./SidebarMenu"
import { LogOut } from "lucide-react"

function PannelSidebar() {
  return (
    <aside className="flex flex-col justify-between w-[16%] gap-4 bg-white pl-5 py-12 pr-8 ">
      <div>
        <UserInfo />
        <SidebarMenu /> 
      </div>
      <div className="flex gap-2 mb-12 cursor-pointer mr-3">
          <LogOut className="text-red-500"/>
          <p className="text-red-500">خروج از حساب</p>
      </div>

    </aside>
  )
}

export default PannelSidebar