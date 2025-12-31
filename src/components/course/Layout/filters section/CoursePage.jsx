import { useMemo, useState, useEffect } from "react";
import FiltersSidebar from "../../../../components/course/Layout/filters section/FiltersSidebar";
import CoursePart from "../../../../components/course/Layout/courses sections/CoursesPart";
import { useCourses } from "../../../../hooks/useCourses";
import { useTeachers } from "../../../../hooks/useTeachers";

const CoursePage = () => {
  /* =======================
     states
  ======================= */
  const [sort, setSort] = useState({
    sortingCol: "",
    sortType: "",
  });

  const [pageNumber, setPageNumber] = useState(1);
  const rowsOfPage = 8;

  const [filters, setFilters] = useState({
    price: [1500, 6000],
    type: { free: false, paid: false },
    teachers: [],
    search: "",
  });

  /* =======================
     api
  ======================= */
  const { data: coursesData } = useCourses({
    pageNumber,
    rows: rowsOfPage,
    sortingCol: sort.sortingCol,
    sortType: sort.sortType,
  });

  const { data: teachersData } = useTeachers();

  /* =======================
     derived data
  ======================= */
  const courses = useMemo(
    () => coursesData?.courseFilterDtos ?? [],
    [coursesData]
  );

  const totalPages = useMemo(() => {
    if (!coursesData) return 1;
    const totalCount = coursesData.totalCount ?? courses.length;
    return Math.max(1, Math.ceil(totalCount / rowsOfPage));
  }, [coursesData, courses.length, rowsOfPage]);

  const teachers = useMemo(
    () =>
      teachersData?.map((t) => ({
        id: t.teacherId,
        name: t.fullName,
        image: t.pictureAddress,
      })) ?? [],
    [teachersData]
  );

  /* =======================
     price range
  ======================= */
  const prices = courses.map((c) => c.cost ?? 0);
  const minPrice = prices.length ? Math.min(...prices) : 1500;
  const maxPrice = prices.length ? Math.max(...prices) : 6000;

  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      price: [minPrice, maxPrice],
    }));
  }, [minPrice, maxPrice]);

  /* =======================
     reset page when filters or sort change
  ======================= */
  useEffect(() => {
  setPageNumber(1);
}, [
  filters.search,
  filters.type.free,
  filters.type.paid,
  filters.teachers.join(','),
  sort.sortingCol,
  sort.sortType
]);


  /* =======================
     client filters (search, price, teacher)
  ======================= */
  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const priceMatch =
        course.cost >= filters.price[0] &&
        course.cost <= filters.price[1];

      const typeMatch =
        (!filters.type.free && !filters.type.paid) ||
        (filters.type.free && course.cost === 0) ||
        (filters.type.paid && course.cost > 0);

      const teacherMatch =
        filters.teachers.length === 0 ||
        filters.teachers.includes(course.teacherId);

      const searchMatch =
        filters.search.trim() === "" ||
        course.title
          .toLowerCase()
          .includes(filters.search.trim().toLowerCase());

      return priceMatch && typeMatch && teacherMatch && searchMatch;
    });
  }, [courses, filters]);

  /* =======================
     safety: empty page
  ======================= */
  useEffect(() => {
    if (filteredCourses.length === 0 && pageNumber > 1) {
      setPageNumber(1);
    }
  }, [filteredCourses.length, pageNumber]);

  /* =======================
     reset filters
  ======================= */
  const resetFilters = () => {
    setFilters({
      price: [minPrice, maxPrice],
      type: { free: false, paid: false },
      teachers: [],
      search: "",
    });
  };

  /* =======================
     render
  ======================= */
  return (
    <div className="max-w-[1440px] flex gap-8 px-6 py-6">
      <FiltersSidebar
        filters={filters}
        setFilters={setFilters}
        teachers={teachers}
        minPrice={minPrice}
        maxPrice={maxPrice}
        reset={resetFilters}
      />

      <CoursePart
        courses={filteredCourses}
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
