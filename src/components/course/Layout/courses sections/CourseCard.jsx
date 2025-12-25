import React from 'react';

const CourseCard = ({ course , teacherName }) => {
  return (
    <div className="w-[200px] border rounded-lg overflow-hidden shadow hover:shadow-lg transition p-4 flex flex-col">
      {/* تصویر دوره */}
      <img
        src={course.imageAddress}
        alt={course.title}
        className="w-full h-40 object-cover mb-4 rounded"
      />

      {/* نام دوره */}
      <h3 className="text-lg font-semibold mb-2">{course.title}</h3>

      {/* مدرس */}
      <p className="text-sm text-gray-500 mb-2">مدرس: {teacherName}</p>

      {/* قیمت */}
      <p className="text-base font-bold mb-4">
        {course.cost === 0 ? 'رایگان' : `${course.cost} تومان`}
      </p>

      {/* دکمه جزئیات */}
      <button className="mt-auto bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
        مشاهده جزئیات
      </button>
    </div>
  );
};

export default CourseCard;
