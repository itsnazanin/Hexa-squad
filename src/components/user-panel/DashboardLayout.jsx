import { Outlet } from "react-router-dom"
import PannelSidebar from "./PannelSidebar"

function DashboardLayout() {
 return (
    <div className="bg-[#e4f3fd] h-dvh flex gap-5">
        <PannelSidebar />
        <main className="bg-white rounded-[16px] my-8 mx-6 w-[80%]">
            <Outlet />
        </main>
    </div>
 )
}

export default DashboardLayout