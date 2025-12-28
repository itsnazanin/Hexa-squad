import { useMemo , useState , useEffect } from "react";
import FiltersSidebar from "../../../../components/course/Layout/filters section/FiltersSidebar";
import CoursePart from "../../../../components/course/Layout/courses sections/CoursesPart";
import { useCourses } from "../../../../hooks/useCourses";
import { useTeachers } from "../../../../hooks/useTeachers";

const CoursePage = () => {

  const { data: coursesData } = useCourses();
  const { data: teachersData } = useTeachers();


  const courses = useMemo(
    () => coursesData?.courseFilterDtos ?? [],
    [coursesData]
  );

  console.log("courses length:", courses.length);


const teachers = useMemo(
  () =>
    teachersData?.map(t => ({
      id: t.teacherId,
      name: t.fullName,
      image: t.pictureAddress,
      link: t.linkdinProfileLink,
    })) ?? [],
  [teachersData]
);


  const prices = courses.map(c => c.cost ?? 0);

  const minPrice = prices.length ? Math.min(...prices) : 1500;
  const maxPrice = prices.length ? Math.max(...prices) : 6000;

    const [filters, setFilters] = useState({
    price: [1500, 6000],
    type: { free: false, paid: false },
    teachers: [],
  });

    useEffect(() => {
    if (courses.length) {
      setFilters(prev => ({
        ...prev,
        price: [minPrice, maxPrice],
      }));
    }
  }, [minPrice, maxPrice, courses.length]);




    const activePriceRange = useMemo(() => {
    return filters.price ?? [minPrice, maxPrice];
     }, [filters.price, minPrice, maxPrice]);


  const filteredCourses = useMemo(() => {
  return courses.filter(course => {
    const priceMatch =
      course.cost >= activePriceRange[0] &&
      course.cost <= activePriceRange[1];

    const typeMatch =
      (!filters.type.free && !filters.type.paid) ||
      (filters.type.free && course.cost === 0) ||
      (filters.type.paid && course.cost > 0);

    const teacherMatch =
      filters.teachers.length === 0 ||
      filters.teachers.includes(course.teacherId);

    return priceMatch && typeMatch && teacherMatch;
    
  });
}, [courses, filters, activePriceRange]);

  console.log({
  courses,
  activePriceRange,
  filteredCourses,
});

   const resetFilters = () => {
    setFilters({
    price: [minPrice, maxPrice],
    type: { free: false, paid: false },
    teachers: [],
  });
};


  // if (courseLoading || teacherLoading) {
  //   return <p className="text-center mt-10">در حال بارگذاری...</p>;
  // }

  return (
    <div className="max-w-[1440px] flex gap-6 px-6 py-6">

    <FiltersSidebar
      filters={{
        ...filters,
        price: activePriceRange,
      }}
      setFilters={setFilters}
      teachers={teachers}
      minPrice={minPrice}
      maxPrice={maxPrice}
      reset={resetFilters}
    />

      {/* Courses */}
      <CoursePart courses={filteredCourses ?? [] } />
    </div>
  );
};

export default CoursePage;
