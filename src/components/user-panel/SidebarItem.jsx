import { NavLink } from "react-router-dom";

function SidebarItem({ title, path, icon }) {
  return (
    <NavLink
      to={path}
      end={path === "/dashboard"}
      className={({ isActive }) =>
        isActive ? "bg-[#2196F3] w-full pr-3 py-2.5 rounded-[16px] flex items-center gap-2 active text-white" : "flex items-center gap-2"
      }
    >

      {icon}

      <span>{title}</span>

    </NavLink>
  );
}

export default SidebarItem;