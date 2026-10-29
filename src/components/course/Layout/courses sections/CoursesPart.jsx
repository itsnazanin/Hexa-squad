import React from 'react'
import { useState , useEffect } from 'react';
import gridIcon from '../../../../assets/icons/grid.svg';
import listIcon from '../../../../assets/icons/list.svg';
import CourseCard from './CourseCard';
import searchIcon from '../../../../assets/images/search.png';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import CoursePagination from '../CoursePagination';

const CoursesPart = ({ 
  courses = [] , 
  filters, 
  setFilters, 
  sort, 
  setSort, 
  pageNumber, 
  totalPages, 
  setPageNumber 
  }) => {
    
  const [layout, setLayout] = useState('grid');

  useEffect(() => {
  console.log('CoursesPart courses:', courses);
  console.log('length:', courses.length);
  }, [courses]);

  if (courses.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500">
        دوره‌ای یافت نشد.
      </div>
    );
  }

    const handleSortChange = (value) => {
    if (value === 'all') {
      setSort({
        sortingCol: '',
        sortType: '',
      });
      return
    }

    const sortOrders = {
      popular: "desc",
      newest: "desc",
      cheapest: "asc",
      expensive: "desc",
    }

    setSort({
      sortingCol: value,
      sortType: sortOrders[value]
    })
  };


  return (
    <div className='max-w-[1440px] h-fit mx-2'>
      {/* top part */}
      <div className='w-full h-14 flex gap-3'>
        <div className='flex gap-2 items-center bg-[#ECEFF1] rounded-2xl px-2'>
           <div onClick={() => setLayout('grid')} 
            variant={layout === 'grid' ? 'default' : 'outline'}
            className={`w-10 h-10 flex items-center justify-center rounded-xl cursor-pointer transition
            ${layout === 'grid' ? 'bg-white shadow' : 'hover:bg-white/60'}
            `}>
           <img src={gridIcon} alt="grid icon" /> 
          </div>
          <div onClick={() => setLayout('list')} 
            variant={layout === 'list' ? 'default' : 'outline'}
            className={`w-10 h-10 flex items-center justify-center rounded-xl cursor-pointer transition
            ${layout === 'list' ? 'bg-white shadow' : 'hover:bg-white/60'}
            `}>
            <img src={listIcon} alt="list icon" />
          </div>
        </div>
        
        <div className='flex items-center w-[63%]'>
            <input type="text"
            className='w-full h-full pr-5 border-2 rounded-2xl outline-[#2196F3]'
            value={filters.search} 
            onChange={(e) => setFilters({...filters, search: e.target.value})} 
            placeholder='جستجو کنید ...'/>
            
            <div className='relative left-11'>
              <img src={searchIcon} alt="search icon" />
            </div>
        </div>

        <div className='w-[25%]'>
            <Select onValueChange={handleSortChange} value={sort.sortingCol || 'all'}>
              <SelectTrigger>
                <SelectValue placeholder="مرتب‌سازی" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="all">نمایش همه</SelectItem>
                <SelectItem value="popular">محبوب‌ترین</SelectItem>
                <SelectItem value="newest">جدیدترین</SelectItem>
                <SelectItem value="cheapest">ارزان ترین</SelectItem>
                <SelectItem value="expensive">گران ترین</SelectItem>
              </SelectContent>
            </Select>
        </div>
        

            
      </div>

      {/* bottom part */}
      <div className={layout === 'grid' 
       ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-[1005px] pt-5' 
       : 'flex flex-col'}>
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} layout={layout} />
        ))}
      </div>
      <CoursePagination pageNumber={pageNumber} totalPages={totalPages} setPageNumber={setPageNumber} />
    </div>
  )
}

export default CoursesPart