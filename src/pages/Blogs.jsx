import BlogBottomSection from '@/components/Blogs/BlogBottomSection'
import BlogsTopSection from '@/components/Blogs/BlogsTopSection'
import React from 'react'

const Blogs = () => {
  return (
    <div className='max-w-[1440px] mx-auto py-20'>
      <BlogsTopSection />
      <BlogBottomSection />
    </div>
  )
}

export default Blogs