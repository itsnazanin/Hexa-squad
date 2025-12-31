import { Routes, Route } from "react-router-dom"
import Landing from "../pages/Landing";
import Courses from "../pages/Courses";
import Blogs from "../pages/Blogs";


const AppRoutes = () => {
  return (
      <Routes>
        <Route element={<Landing />} />
        <Route path="/courses" element={<Courses />} />
        <Route index path="/blogs" element={<Blogs />}/>
      </Routes>
  );
};

export default AppRoutes;
