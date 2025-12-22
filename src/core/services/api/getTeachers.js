
import http from "./http";

export const getTeachers = async () => {
  const res = await http.get("/Home/GetTeachers");
  return res.data;
};
