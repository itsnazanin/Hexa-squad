import BlogBottomSection from '@/components/Blogs/items/BlogBottomSection'
import BlogsTopSection from '@/components/Blogs/items/BlogsTopSection'

const Blogs = () => {
  return (
    <div className='max-w-[1440px] mx-auto py-20'>
      <BlogsTopSection />
      <BlogBottomSection />
    </div>
  )
}

export default Blogs