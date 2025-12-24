import filterIcon from '../../../../assets/images/filter.svg'
import trashIcon from '../../../../assets/images/trash.svg'
import FilterSection from './FilterSection'
import PriceFilter from './PriceFilter'
import TeacherFilter from './TeacherFilter'
import TypeFilter from './TypeFilter'


const FiltersSidebar = ({
  filters,
  setFilters,
  defaultFilters,
  teachers,
  isDetect,
  onReset,
}) => {


  return (
    <div className='bg-[#FFFFFF] flex flex-col items-center rounded-3xl w-[300px] shadow-lg mr-10'>
            <div className='bg-[#ECEFF1] rounded-2xl w-[90%] flex gap-4 items-center justify-between px-3 py-2 mt-3'>
               {/* headers */}
                <div className='flex gap-1'>
                    <span>
                        <img src={filterIcon} alt="filter icon" />
                    </span>
                    <p>فیلتر ها</p>                
                </div>
                {isDetect && (
                <span 
                className='bg-[#F44336] cursor-pointer rounded-xl w-8 h-8 flex items-center justify-center'
                onClick={onReset}>
                    <img src={trashIcon} alt="trash icon" />
                </span> 
                )}
                </div>

               {/* price section */}
               <FilterSection title="قیمت">
                <PriceFilter
                value={filters?.price || { min: 0, max: 0 }}
                min={defaultFilters?.price?.min ?? 0}
                max={defaultFilters?.price?.max ?? 0}
                onChange={(newPrice) =>
                  setFilters(prev => ({
                    ...prev,
                    price: newPrice,
                  }))
                }
                />
               </FilterSection>

               {/* Type Filter */}
              <FilterSection title="نوع دوره">
                <TypeFilter
                  value={filters?.type}
                  onChange={(newType) =>
                    setFilters(prev => ({
                      ...prev,
                      type: newType,
                    }))
                  }
                />
              </FilterSection>

               {/* Teachers Filter */}
              <FilterSection title="اساتید">
                <TeacherFilter
                  teachers={teachers || []}
                  selected={filters?.teachers || []}
                  onChange={(newTeachers) =>
                    setFilters(prev => ({
                      ...prev,
                      teachers: newTeachers,
                    }))
                  }
                />
              </FilterSection>
                
    
            </div>
          
  )
}

export default FiltersSidebar