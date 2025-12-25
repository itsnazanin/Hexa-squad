import React from "react";
import SkeletonTeachers from "../../../skeleton/SkeltonTeachers";

const TeacherFilter = ({
  teachers = [],
  selected = [],
  teacherLoading = false,
  onChange = () => {},
}) => {

  // 1️⃣ loading → skeleton
  if (teacherLoading) {
    return <SkeletonTeachers />;
  }

  // 2️⃣ loaded but empty
  if (!teachers.length) {
    return (
      <p className="text-sm text-gray-500">
        مدرسی یافت نشد
      </p>
    );
  }

  // 3️⃣ data exists
  const handleToggle = (teacherId) => {
    if (selected.includes(teacherId)) {
      onChange(selected.filter(id => id !== teacherId));
    } else {
      onChange([...selected, teacherId]);
    }
  };

  return (
    <div className="space-y-2">
      {teachers.map((teacher) => (
        <label
          key={teacher.id}
          className="flex items-center gap-2"
        >
          <input
            type="checkbox"
            checked={selected.includes(teacher.id)}
            onChange={() => handleToggle(teacher.id)}
          />
          <span>{teacher.fullName}</span>
        </label>
      ))}
    </div>
  );
};

export default TeacherFilter;
