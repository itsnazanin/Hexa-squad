import { formatDate } from '@/core/utils/formatDate';
import BlogCard from './BlogCard'

const BlogsGrid = ({ data = [] , isError, isLoading }) => {

    if (isLoading) {
        return <p className="text-sm text-gray-500 text-center py-10">در حال بارگذاری...</p>;
    }

    if (isError) {
        return <p className="text-sm text-red-500 text-center">خطا در دریافت اطلاعات</p>;
    }

    if (!data.length) {
        return <p className="text-sm text-gray-500">مقاله ای یافت نشد</p>;
    }
  return (
    <div className="max-w-[90%] mx-auto pr-14 pt-8 space-y-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map(item => (
        <BlogCard
          key={item.id}
          image={item.coverImage}
          title={item.title}
          description={item.shortDescription}
          date={formatDate(item.createdAt)}
          viewCount={item.viewCount}
        />
      ))}
    </div>
  )
}

export default BlogsGrid