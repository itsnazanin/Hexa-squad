import React from 'react'
import SerachBox from './SerachBox'
import FiltersTabs from './FiltersTabs'
import { useState , useEffect } from 'react'
import BlogsGrid from './BlogsGrid'
import { useNews } from '../../hooks/useNews'
import BlogsPagination from './BlogsPagination'


const BlogBottomSection = () => {

    const [ pageNumber , setPageNumber ] = useState(1);
    const [ rowsOfPage ] = useState(10);
    const [filter, setFilter] = useState('all');


    const { data, isLoading, isError } = useNews({
    filter,
    page: pageNumber , 
    rows: rowsOfPage ,
    });
    
    const totalPage = (data?.totalCount) ? Math.ceil(data.totalCount / rowsOfPage) : 1;
    
    useEffect(() => {
        setPageNumber(1);
    },[filter])


  return (
    <div>
      <div className='flex justify-center'>
          <SerachBox />

          <FiltersTabs 
          value={filter}
          onChange={(value) => {
          setFilter(value);
          }}/>    

      </div>

        <BlogsGrid 
        data={data}
        isLoading={isLoading}
        isError={isError}/>

        <BlogsPagination 
         pageNumber={pageNumber}
         setPageNumber={setPageNumber}
         totalPage={totalPage}
        />
            
    </div>
  )
}

export default BlogBottomSection