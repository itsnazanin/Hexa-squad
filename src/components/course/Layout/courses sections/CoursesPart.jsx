import React from 'react';
import CourseGrid from './CourseGrid';
import Pagination from './Pagination';

const CoursePart = ({ courses, teacherMap, title = "دوره‌ها", currentPage, totalPages, onPageChange }) => {
  return (
    <section>
      {/* عنوان و تعداد */}
      <div>
        <h2 className="text-2xl font-bold">{title}</h2>
        <p>{courses.length} دوره یافت شد</p>
      </div>

      {/* گرید دوره‌ها */}
      <CourseGrid 
      courses={courses} 
      teacherMap={teacherMap}/>

      {/* صفحه‌بندی */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      )}
    </section>
  );
};

export default CoursePart;