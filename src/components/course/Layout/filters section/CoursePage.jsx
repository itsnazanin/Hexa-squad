import { useMemo, useState } from "react";
import { useCourses } from "../../../../hooks/useCourses"
import { useTeachers } from "../../../../hooks/useTeachers";
import FiltersSidebar from "../../Layout/filters section/FiltersSidebar";

const CoursePage = () => {
 
 //   fetch real data from api

  const {data: courses = [] , isLoading: courseLoading } = useCourses();
  const { data: teachers = [], isLoading: teacherLoading} = useTeachers(); 

  const course = (courses.data?.courseFilterDtos || [])

 //   Calculate price range from data
  const prices = course.map( courseItem => courseItem.cost);
  const minPrice = prices.length? Math.min(...prices) : 0 ;
  const maxPrice = prices.length? Math.max(...prices) : 0 ;

 //    Default filters ( main sourse of this component )
  const defaultFilters = {
    price: {
        min: minPrice,
        max: maxPrice,
    },
    type: {
        free:false,
        paid:false,
    },
    teachers: [],
  }

 //   Filters state
    const [filters, setFilters] = useState(defaultFilters);

 // Detect if filters changed
    const isFilterChanged = 

    filters.price.min !== defaultFilters.price.min ||
    filters.price.max !== defaultFilters.price.max ||
    filters.type.free !== defaultFilters.type.free ||
    filters.type.paid !== defaultFilters.type.paid ||
    filters.teachers.length !== defaultFilters.teachers.length;

 // reset filters
    const resetFilters = () => {
        setFilters(defaultFilters);
    }
    

 // Filter courses (central logic)
    const FilteredCourses = useMemo (() => {
        return (
            courses.filter(course => {

             const priceMatch =
             course.cost >= filters.price.min &&
             course.cost <= filters.price.max;

             const typeMatch =
             (filters.type.free && course.cost === 0 ) ||
             (filters.type.paid && course.cost > 0) ||
             (!filters.type.free && !filters.type.paid);

             const teacherMatch =
              filters.teachers.length == 0 ||
              filters.teachers.includes(course.teacherId);

              return priceMatch && typeMatch && teacherMatch;
            })
        )
    }, [courses,filters]);

    // Loadings
    if (courseLoading) return <p>در حال بارگذاری...</p>;
    if (teacherLoading) return <p>در حال بارگذاری...</p>;

    const safeFilters = {
    ...filters,
    price: filters.price || { min: 0, max: 0 }
    };
    //render ui
     return (
        <div>
           <FiltersSidebar
            filters={safeFilters}
            setFilters={setFilters}
            defaultFilters={defaultFilters}
            teachers={teachers}
            isDetect={isFilterChanged}
            onReset={resetFilters}
           /> 
        </div>
     )
}

export default CoursePage;