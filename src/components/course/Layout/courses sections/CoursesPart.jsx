const CoursePart = ({ courses }) => {
  if (!courses.length) return <p>دوره‌ای یافت نشد</p>;

  return (
    <div className="grid grid-cols-3 gap-4">
      {courses.map(course => (
        <div key={course.id} className="border p-4 rounded">
          <h3>{course.title}</h3>
          <p>{course.cost} تومان</p>
        </div>
      ))}
    </div>
  );
};

export default CoursePart;