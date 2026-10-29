import { Routes, Route } from "react-router-dom"
import Landing from "../pages/Landing";
import Courses from "../pages/Courses";
import Blogs from "../pages/Blogs";

import CourseDetail from "../pages/CourseDetail";


const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetail />}/>
        <Route index path="/blogs" element={<Blogs />}/>
      </Routes>
  );
};

export default AppRoutes;
