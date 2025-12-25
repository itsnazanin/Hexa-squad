import { useMemo, useState } from "react";
import { useCourses } from "../../../../hooks/useCourses";
import { useTeachers } from "../../../../hooks/useTeachers";
import FiltersSidebar from "../../Layout/filters section/FiltersSidebar";
import CoursePart from "../courses sections/CoursesPart";

const CoursePage = () => {

  // fetch data
  const { data: coursesData, isLoading: courseLoading } = useCourses();
  const { data: teachersData, isLoading: teacherLoading } = useTeachers();

  // normalize data
  const courses = useMemo(
    () => coursesData?.data?.courseFilterDtos || [],
    [coursesData]
  );
  const teachers = teachersData?.data || [];

  const teacherMap = useMemo(() => {
  const map = {};
  teachers.forEach(teacher => {
    map[teacher.id] = teacher.fullName;
  });
  return map;
}, [teachers]);


  // calculate price range
  const prices = courses.map(c => c.cost);
  const minPrice = prices.length ? Math.min(...prices) : 0;
  const maxPrice = prices.length ? Math.max(...prices) : 0;

  // default filters
  const defaultFilters = {
    price: {
      min: minPrice,
      max: maxPrice,
    },
    type: {
      free: false,
      paid: false,
    },
    teachers: [],
  };

  // filters state
  const [filters, setFilters] = useState(defaultFilters);

  // detect filter change
  const isFilterChanged =
    filters.price.min !== defaultFilters.price.min ||
    filters.price.max !== defaultFilters.price.max ||
    filters.type.free !== defaultFilters.type.free ||
    filters.type.paid !== defaultFilters.type.paid ||
    filters.teachers.length !== defaultFilters.teachers.length;

  // reset filters
  const resetFilters = () => {
    setFilters(defaultFilters);
  };

  // filter courses
  const filteredCourses = useMemo(() => {
    return courses.filter(course => {

      const priceMatch =
        course.cost >= filters.price.min &&
        course.cost <= filters.price.max;

      const typeMatch =
        (filters.type.free && course.cost === 0) ||
        (filters.type.paid && course.cost > 0) ||
        (!filters.type.free && !filters.type.paid);

      const teacherMatch =
        filters.teachers.length === 0 ||
        filters.teachers.includes(course.teacherId);

      return priceMatch && typeMatch && teacherMatch;
    });
  }, [courses, filters]);

  // loading
  if (courseLoading || teacherLoading) {
    return <p>در حال بارگذاری...</p>;
  }

  // render
  return (
    <div className="flex gap-6">
      <FiltersSidebar
        filters={filters}
        setFilters={setFilters}
        defaultFilters={defaultFilters}
        teachers={teachers}
        teacherLoading={teacherLoading}
        isDetect={isFilterChanged}
        onReset={resetFilters}
      />

      {/* بعداً */}
      <CoursePart 
      courses={filteredCourses} 
      teacherMap={teacherMap}/>
    </div>
  );
};

export default CoursePage;
