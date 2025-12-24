import React from 'react';
import CourseGrid from './CourseGrid';
import Pagination from './Pagination';

const CoursePart = ({ courses, title = "دوره‌ها", currentPage, totalPages, onPageChange }) => {
  return (
    <section className="course-section p-4">
      {/* عنوان و تعداد */}
      <div className="section-header mb-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p>{courses.length} دوره یافت شد</p>
      </div>

      {/* گرید دوره‌ها */}
      <CourseGrid courses={courses} />

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