import filterIcon from '../../../../assets/images/filter.svg'
import trashIcon from '../../../../assets/images/trash.svg'
import { Accordion,AccordionContent, AccordionItem, AccordionTrigger} from "../../../ui/accordion";
import PriceRange from "../../../../components/course/Layout/filters section/PriceRange";
import CourseType from "../../../../components/course/Layout/filters section/CourseType";
import TeacherSelect from "../../../../components/course/Layout/filters section/TeacherSelect";


const FiltersSidebar = ({ 
  filters,
  setFilters,
  teachers,
  minPrice,
  maxPrice,
  reset,
}) => {


console.log('setFilters:', setFilters);

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
                
                <span onClick={reset} className='bg-[#F44336] cursor-pointer rounded-xl w-8 h-8 flex items-center justify-center'>
                    <img src={trashIcon} alt="trash icon" />
                </span> 
                
                </div>

                 <div className="w-[300px] bg-white rounded-2xl shadow p-4">
                  <Accordion type="multiple" defaultValue={["price", "type", "teachers"]}>

                    <AccordionItem value="price">
                      <AccordionTrigger>قیمت</AccordionTrigger>
                      <AccordionContent>
                        <PriceRange
                          value={filters?.price ?? [minPrice, maxPrice]}
                          min={minPrice}
                          max={maxPrice}
                          onChange={(val) =>
                            setFilters(prev => ({ ...prev, price: val }))
                          }
                        />
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="type">
                      <AccordionTrigger>نوع دوره</AccordionTrigger>
                      <AccordionContent>
                        <CourseType
                          value={filters?.type ?? { free: false, paid: false }}
                          onChange={(val) =>
                            setFilters(prev => ({ ...prev, type: val }))
                          }
                        />
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="teachers">
                      <AccordionTrigger>اساتید</AccordionTrigger>
                      <AccordionContent>
                        <TeacherSelect
                          teachers={teachers}
                          selected={filters?.teachers ?? []}
                          onChange={(val) =>
                            setFilters(prev => ({ ...prev, teachers: val }))
                          }
                        />
                      </AccordionContent>
                    </AccordionItem>

                  </Accordion>
                </div>

            </div>
          
  )
}

export default FiltersSidebar