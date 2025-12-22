import React from 'react'
import vector from '../../../assets/images/vector.png'
import { useNews } from '../../../hooks/useNews'
import { normalizeArticle } from '../../../core/services/adapters/normalizeArticle'
import SmallPostCard from '../Article/SmallPostCard'
import FeaturedPostCard from './FeaturedPostCard'

const ArticlesSection = () => {
  const { data, error, isLoading } = useNews({
    pageNumber: 1,
    rows: 4,
    sortCol: 'Date',
    sortType: 'desc'
  })

  if (isLoading) return <p>در حال بارگذاری...</p>
  if (error) return <p>ارور وجود دارد</p>

  const articles = data?.news || []

  const featuredArticle = articles[0]
  const listArticles = articles.slice(1, 4)

  // ✅ نرمال‌سازی استاندارد
  const mappedFeatured = featuredArticle
    ? normalizeArticle(featuredArticle)
    : null

  const mappedList = listArticles.map(normalizeArticle)

  return (
    <div className='flex flex-col items-center pb-40'>
      {/* تیتر */}
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-center flex-col">
          <h2 className="text-[#263238] text-2xl font-extrabold">
            اخبار و مقالات
          </h2>
          <img className="pt-2" src={vector} alt="vector" />
        </div>
      </div>

      {/* محتوا */}
      <div className="max-w-[1440px] mx-10 grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* فیچرد */}
        <div>
          {mappedFeatured && (
            <FeaturedPostCard {...mappedFeatured} />
          )}
        </div>

        {/* لیست */}
        <div className="flex flex-col pl- ">
          {mappedList.map(item => (
            <SmallPostCard key={item.id} {...item} />
          ))}
        </div>

      </div>

      <button className='py-3 px-6 relative top-10 rounded-full bg-[#2196F3] text-white font-semibold'>
        مشاهده همه
      </button>
    </div>
  )
}

export default ArticlesSection
