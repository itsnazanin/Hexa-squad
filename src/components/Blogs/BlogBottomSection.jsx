import React from 'react'
import SerachBox from './SerachBox'
import FiltersTabs from './FiltersTabs'
import { useState } from 'react'
import BlogsGrid from './BlogsGrid'
import { useNews } from '../../hooks/useNews'


const BlogBottomSection = () => {
    const [filter, setFilter] = useState('all');
      const { data, isLoading, isError } = useNews({
      filter
    });

    console.log(data);


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
            
    </div>
  )
}

export default BlogBottomSection