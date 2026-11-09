import { Routes, Route } from "react-router-dom"
import Landing from "@/pages/home/Landing";
import Courses from "@/pages/course/Courses";
import Blogs from "@/pages/blog/Blogs";
import CourseDetail from "@/pages/course/CourseDetail";
import BlogDetail from "@/pages/blog/BlogDetail";
import CartPage from "@/pages/CartPage";
import GuestCheckoutPage from "@/pages/GuestCheckoutPage";
import GuestPaymentPage from "@/pages/GuestPaymentPage";
import PaymentPage from "@/pages/PaymentPage";


const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetail />}/>
        <Route index path="/blogs" element={<Blogs />}/>
        <Route path="/blogs/:blogId" element={<BlogDetail />}/>
        <Route path="/cart" element={<CartPage />} />
        <Route path="/guest-checkout" element={<GuestCheckoutPage />} />
        <Route path="/guest-payment" element={<GuestPaymentPage />} />
        <Route path="/payment/:orderId" element={<PaymentPage />} />
      </Routes>
  );
};

export default AppRoutes;
