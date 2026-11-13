import { NavLink } from "react-router-dom"
import UserInfo from "./UserInfo"
import SidebarMenu from "./SidebarMenu"

function PannelSidebar() {
  return (
    <aside className="flex flex-col w-[16%] gap-4 bg-white pl-5 py-12 pr-8 ">
        <UserInfo />
        <SidebarMenu />
    </aside>
  )
}

export default PannelSidebar