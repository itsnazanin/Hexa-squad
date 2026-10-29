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
    price: null,
    type: {
      free: false,
      paid: false,
    },
    teachers: [],
    search: "",
  });

  /*
   * Teachers from backend
   */
  const {
    data: teachersData,
    isLoading: teachersLoading,
  } = useTeachers();

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


  const courseParams = useMemo(() => {
  
  return {
    page: pageNumber,
    limit: rowsOfPage,
    minPrice: filters.price?.[0],
    maxPrice: filters.price?.[1],
    sortBy: sort.sortingCol || undefined,
    sortOrder: sort.sortType || undefined
  };
}, [pageNumber, filters, sort]);

const {
  data: coursesData,
  isLoading: coursesLoading,
  isError: coursesError,
  error: coursesErrorData,
} = useCourses(courseParams);

console.log("courseParams:", courseParams);
console.log("coursesData:", coursesData);
console.log("coursesError:", coursesErrorData);


  /*
   * Actual price range returned by backend
   */
  const priceRangeData = coursesData?.result?.priceRange;

  const minPrice = priceRangeData?.min ?? 0;
  const maxPrice = priceRangeData?.max ?? 0;

  /*
   * Initialize price filter from backend range.
   * Do not overwrite a range already chosen by the user.
   */
useEffect(() => {
  if (!priceRangeData || filters.price !== null) return;

  setFilters((prev) => ({
    ...prev,
    price: [minPrice, maxPrice],
  }));
}, [priceRangeData, minPrice, maxPrice, filters.price]);

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
      price: [minPrice, maxPrice],
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
   * Data for rendering
   */
  const courses = coursesData?.result?.courses ?? [];

  const totalPages =
    coursesData?.result?.pagination?.totalPages ?? 1;

  /*
   * Loading
   */
  if (coursesLoading || teachersLoading || filters.price === null) {
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
        minPrice={minPrice}
        maxPrice={maxPrice}
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

export default CoursePage