import { Routes, Route } from "react-router-dom"
import Landing from "../pages/Landing";
import Courses from "../pages/Courses";


const AppRoutes = () => {
  return (
      <Routes>
        <Route element={<Landing />} />
        <Route index path="/courses" element={<Courses />} />
      </Routes>
  );
};

export default AppRoutes;
