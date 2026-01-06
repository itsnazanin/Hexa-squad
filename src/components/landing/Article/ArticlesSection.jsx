import React from 'react'
import vector from '../../../assets/images/vector.png'
import { useNews } from '../../../hooks/useNews'
import { normalizeArticle } from '../../../core/services/adapters/normalizeArticle'
import SmallPostCard from '../Article/SmallPostCard'
import FeaturedPostCard from './FeaturedPostCard'
import { Link } from 'react-router-dom'

const ArticlesSection = () => {
const { data, error, isLoading } = useNews({
  filter: 'landing',
  page: 1
})

  console.log('NEWS DATA:', data);


  if (isLoading) return <p className='text-center py-10'>در حال بارگذاری...</p>
  if (error) return <p className='text-center py-10'>ارور وجود دارد</p>

  const articles = data?.news || []

  const featuredArticle = articles[0]
  const listArticles = articles.slice(1, 4)

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
      
      <Link to="/blogs">
        <button className='py-3 px-6 relative top-10 rounded-full bg-[#2196F3] text-white font-semibold'>
          مشاهده همه
        </button>
      </Link>
      
    </div>
  )
}

export default ArticlesSection
