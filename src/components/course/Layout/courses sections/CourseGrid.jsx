import CourseCard from "./CourseCard";

const CourseGrid = ({ courses, teacherMap }) => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {courses.map(course => (
        <CourseCard
          key={course.id}
          course={course}
          teacherName={teacherMap[course.teacherId]}
        />
      ))}
    </div>
  );
};

export default CourseGrid;
