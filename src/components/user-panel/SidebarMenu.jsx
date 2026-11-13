import {
  LayoutDashboard,
  UserRound,
  BookOpen,
  KeyRound,
  MessageCircle,
} from "lucide-react";

import SidebarItem from "./SidebarItem";

function SidebarMenu() {

  const menuItems = [
    {
      id: 1,
      title: "داشبورد",
      path: "/dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      id: 2,
      title: "ویرایش پروفایل",
      path: "/dashboard/profile",
      icon: <UserRound size={20} />,
    },
    {
      id: 3,
      title: "دوره‌های من",
      path: "/dashboard/courses",
      icon: <BookOpen size={20} />,
    },
    {
      id: 4,
      title: "تغییر رمز عبور",
      path: "/dashboard/change-password",
      icon: <KeyRound size={20} />,
    },
  ];

  return (
    <nav className="flex flex-col gap-5">

      {menuItems.map((item) => (
        <SidebarItem
          key={item.id}
          title={item.title}
          path={item.path}
          icon={item.icon}
        />
      ))}

    </nav>
  );
}

export default SidebarMenu;