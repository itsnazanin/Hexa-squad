import { Routes, Route } from "react-router-dom";

import MainLayout from "@/components/layout/MainLayout";
import DashboardLayout from "@/components/user-panel/DashboardLayout";

import Landing from "@/pages/home/Landing";
import Courses from "@/pages/course/Courses";
import Blogs from "@/pages/blog/Blogs";
import CourseDetail from "@/pages/course/CourseDetail";
import BlogDetail from "@/pages/blog/BlogDetail";
import CartPage from "@/pages/shoppingCart/CartPage";
import GuestCheckoutPage from "@/pages/shoppingCart/GuestCheckoutPage";
import GuestPaymentPage from "@/pages/shoppingCart/GuestPaymentPage";
import PaymentPage from "@/pages/shoppingCart/PaymentPage";
import ContactUs from "@/pages/home/ContactUs";

import ProfilePage from "@/pages/userPannel/ProfilePage";
import MyCoursesPage from "@/pages/userPannel/MyCoursesPage";
import ChangePasswordPage from "@/pages/userPannel/ChangePasswordPage";
import DashboardPage from "@/pages/userPannel/DashboardPage";

const AppRoutes = () => {
  return (
    <Routes>

      
      <Route element={<MainLayout />}>

        <Route path="/" element={<Landing />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:blogId" element={<BlogDetail />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/guest-checkout" element={<GuestCheckoutPage />} />
        <Route path="/guest-payment" element={<GuestPaymentPage />} />
        <Route path="/payment/:orderId" element={<PaymentPage />} />
        <Route path="/contact-us" element={<ContactUs />} />

      </Route>


      
      <Route path="/dashboard" element={<DashboardLayout />}>

        <Route index element={<DashboardPage />} />

        <Route path="profile" element={<ProfilePage />} />

        <Route path="courses" element={<MyCoursesPage />} />

        <Route path="change-password" element={<ChangePasswordPage />} />

      </Route>

    </Routes>
  );
};

export default AppRoutes;