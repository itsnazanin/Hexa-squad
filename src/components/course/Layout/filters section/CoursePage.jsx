import { useEffect, useMemo, useState } from "react";

import FiltersSidebar from "../../../../components/course/Layout/filters section/FiltersSidebar";
import CoursePart from "../../../../components/course/Layout/courses sections/CoursesPart";

import { useCourses } from "@/features/courses/hooks/useCourses";
import { useTeachers } from "@/features/courses/hooks/useTeachers";

const CoursePage = () => {
  const rowsOfPage = 8;

  const [pageNumber, setPageNumber] = useState(1);

  const [sort, setSort] = useState({
    sortingCol: "",
    sortType: "",
  });

  const [filters, setFilters] = useState({
    price: [1500, 6000],
    type: {
      free: false,
      paid: false,
    },
    teachers: [],
    search: "",
  });

  /*
   * Convert frontend filters
   * to backend query parameters
   */
  const courseParams = useMemo(() => {
    let priceType;

    if (filters.type.free && !filters.type.paid) {
      priceType = "FREE";
    }

    if (filters.type.paid && !filters.type.free) {
      priceType = "PAID";
    }

    return {
      page: pageNumber,
      limit: rowsOfPage,

      search: filters.search.trim() || undefined,

      teacherId:
        filters.teachers.length > 0
          ? filters.teachers[0]
          : undefined,

      priceType,

      sortBy: sort.sortingCol || undefined,
      sortOrder: sort.sortType || undefined,
    };
  },[
    pageNumber,
    filters,
    sort,
  ]);

  /*
   * Courses from backend
   */
  const {
    data: coursesData,
    isLoading: coursesLoading,
    isError: coursesError,
    error: coursesErrorData,
  } = useCourses(courseParams);


console.log("COURSES DATA:", coursesData);
console.log("COURSE PARAMS:", courseParams);

  /*
   * Teachers from backend
   */
  const {
    data: teachersData,
    isLoading: teachersLoading,
  } = useTeachers()

  const courses = coursesData?.result?.courses ?? []

  const totalPages = coursesData?.result?.pagination?.totalPages ?? 1

  /*
   * Convert teacher API data
   * to the shape expected by FiltersSidebar
   */
  const teachers = useMemo(() => {
    return (
      teachersData?.teachers.map((teacher) => ({
        id: teacher.id,
        name: teacher.name,
        image: teacher.avatar,
      })) ?? []
    );
  }, [teachersData]);

  /*
   * Reset page when filters or sorting change
   */
  useEffect(() => {
    setPageNumber(1);
  }, [
    filters.search,
    filters.price,
    filters.type.free,
    filters.type.paid,
    filters.teachers,
    sort.sortingCol,
    sort.sortType,
  ]);

  /*
   * Reset filters
   */
  const resetFilters = () => {
    setFilters({
      price: [1500, 6000],
      type: {
        free: false,
        paid: false,
      },
      teachers: [],
      search: "",
    });

    setSort({
      sortingCol: "",
      sortType: "",
    });

    setPageNumber(1);
  };

  /*
   * Loading
   */
  if (coursesLoading || teachersLoading) {
    return <div>در حال بارگذاری ...</div>;
  }

  /*
   * Error
   */
  if (coursesError) {
    return (
      <div>
        {coursesErrorData?.message || "خطایی رخ داده است"}
      </div>
    );
  }

  return (
    <div className="max-w-[1440px] flex gap-8 py-6">
      <FiltersSidebar
        filters={filters}
        setFilters={setFilters}
        teachers={teachers}
        minPrice={1500}
        maxPrice={6000}
        reset={resetFilters}
      />

      <CoursePart
        courses={courses}
        filters={filters}
        setFilters={setFilters}
        sort={sort}
        setSort={setSort}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        totalPages={totalPages}
      />
    </div>
  );
};

export default CoursePage;