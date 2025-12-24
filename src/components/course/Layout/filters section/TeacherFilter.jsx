import React from 'react';

const TeacherFilter = ({
  teachers = [],        
  selected = [],        
  onChange = () => {},  
}) => {

  const handleToggle = (teacherId) => {
    if (selected.includes(teacherId)) {
      onChange(selected.filter(id => id !== teacherId));
    } else {
      onChange([...selected, teacherId]);
    }
  };

  if (!teachers.length) {
    return <p className="text-sm text-gray-500">مدرسی یافت نشد</p>;
  }

  return (
    <div className="space-y-2">
      {teachers.map((teacher) => (
        <div key={teacher.id}>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={selected.includes(teacher.id)}
              onChange={() => handleToggle(teacher.id)}
            />
            {teacher.name}
          </label>
        </div>
      ))}
    </div>
  );
};

export default TeacherFilter;
