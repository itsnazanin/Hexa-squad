import pics from '../../../assets/images/pics.png'

const FALLBACK_IMAGE = pics
const FALLBACK_DESC =
  'برای مطالعه کامل این مقاله وارد صفحه جزئیات شوید.'

export const normalizeArticle = (article) => {
  return {
    id: article.id,
    title: article.title || 'عنوان مقاله',
    image: article.currentImageAddress?.trim()
      ? article.currentImageAddress
      : FALLBACK_IMAGE,
    describe: article.describe?.length > 80
      ? article.describe.slice(0, 50) + ' ...'
      : article.describe || FALLBACK_DESC,
    date: article.insertDate || '---',
    viewCount: article.currentView ?? 0
  }
}
