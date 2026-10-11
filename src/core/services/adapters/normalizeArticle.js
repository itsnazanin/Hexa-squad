import { formatDate } from '@/core/utils/formatDate'
import pics from '../../../assets/images/pics.png'

const FALLBACK_IMAGE = pics
const FALLBACK_DESC =
  'برای مطالعه کامل این مقاله وارد صفحه جزئیات شوید.'

export const normalizeArticle = (article) => {
  return {
    id: article.id,
    title: article.title || 'عنوان مقاله',
    image: article.blogImage?.trim()
      ? article.blogImage
      : FALLBACK_IMAGE,
    describe: article.content?.length > 80
      ? article.content.slice(0, 50) + ' ...'
      : article.content || FALLBACK_DESC,
    date: formatDate(article.createdAt) || '---',
    viewCount: article.viewCount ?? 0
  }
}
