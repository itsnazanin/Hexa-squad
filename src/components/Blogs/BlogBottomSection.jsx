import React from 'react'
import SerachBox from './SerachBox'
import FiltersTabs from './FiltersTabs'
import { useState } from 'react'
import BlogsGrid from './BlogsGrid'
import BlogsPagination from './BlogsPagination'
import { useBlogs } from '@/features/courses/hooks/useBlogs'


const BlogBottomSection = () => {

    const [ pageNumber , setPageNumber ] = useState(1);
    const [filter, setFilter] = useState('all');
    const rowsOfPage = 10

    const { data, isLoading, isError , error} = useBlogs({
       page: pageNumber , 
       limit: rowsOfPage ,
    });

    const blogs = data?.result?.blogs ?? []
    
    const totalPage = data?.result?.pagination?.totalPages ?? 1;


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
        data={blogs}
        isLoading={isLoading}
        isError={isError}
        error={error}
        />

        <BlogsPagination 
         pageNumber={pageNumber}
         setPageNumber={setPageNumber}
         totalPage={totalPage}
        />
            
    </div>
  )
}

export default BlogBottomSection