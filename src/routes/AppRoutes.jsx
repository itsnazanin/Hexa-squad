import { Routes, Route } from "react-router-dom"
import Landing from "../pages/Landing";
import Courses from "../pages/Courses";
import Blogs from "../pages/Blogs";
// import Login from "../pages/Auth/Login";
import CourseDetail from "../pages/CourseDetail";


const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/coursedetail" element={<CourseDetail />}/>
        <Route index path="/blogs" element={<Blogs />}/>
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
  );
};

export default AppRoutes;
