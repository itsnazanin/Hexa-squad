import { useState , useEffect } from 'react';
import heart from '../../src/assets/images/heart.png'
import filledHeart from '../../src/assets/images/filledheart.png';
import { addFavoriteApi , removeFavoriteApi } from '@/core/services/api/courses.api';
import { useMutation, useQueryClient } from '@tanstack/react-query';



const LikeButton = ({data}) => {

    const queryClient = useQueryClient()

    const [isLiked,setIsLiked] = useState(data.userIsLiked ?? false);
    const [favoriteCount,setFavoriteCount] = useState(data.favoriteCount ?? 5);

    const [showAuthMessage, setShowAuthMessage] = useState(false)

    useEffect(() => {
      if(!showAuthMessage) return

      const timer = setTimeout(() => {
        setShowAuthMessage(false)
      } , 3000)

      return () => clearTimeout(timer)
    }, [showAuthMessage])

    const language = (
      data.language ?? localStorage.getItem("language") ?? "fa"
    ).toLowerCase()

    const isEnglish = language === "en"



    const favoriteMutation = useMutation({
      mutationFn: async (nextIsLiked) => {
        if(nextIsLiked){
          return addFavoriteApi(data.id)
        }

        return removeFavoriteApi(data.id)
      },
      onMutate: async (nextIsLiked) => {
        const previousIsLiked = isLiked
        const previousCount = favoriteCount

        setIsLiked(nextIsLiked)
        setFavoriteCount((count) => Math.max(0, count + (nextIsLiked ? 1 : -1)))

        return {previousIsLiked, previousCount}
      },

      onError: (_error , _nextIsLiked, context) => {
        if(context){
          setIsLiked(context.previousIsLiked)
          setFavoriteCount(context.previousCount)
        }
      },

      onSettled: () => {
        queryClient.invalidateQueries({
          queryKey: ["courses"]
        })

        queryClient.invalidateQueries({
          queryKey: ["favorites"]
        })
      }
    })

    const handleLike = () => {
      const token = localStorage.getItem("accessToken")

      if(!token){
        setShowAuthMessage(true)
        return
      }

      setShowAuthMessage(false)

      if(favoriteMutation.isPending) return

      favoriteMutation.mutate(!isLiked)
    }


  return (
     <div className="relative flex items-center gap-1 rounded-3xl py-1 px-2.5 bg-[#FFEBEE] text-[#F44336]">
            {showAuthMessage && (
                <div
                    role="status"
                    className="absolute bottom-full left-1/2 z-20 mb-2 w-64 -translate-x-1/2 rounded-lg bg-gray-600 px-3 py-2 text-center text-xs leading-5 text-white shadow-lg"
                >
                    {isEnglish
                        ? "Dear user, please sign up or log in to like or dislike this course."
                        : "کاربر عزیز، برای لایک یا دیسلایک این دوره لطفاً ثبت‌نام کنید یا وارد حساب کاربری‌تان شوید."}
                </div>
            )}

            <button
                type="button"
                onClick={handleLike}
                disabled={favoriteMutation.isPending}
                aria-label={
                    isLiked
                        ? "حذف از علاقه‌مندی‌ها"
                        : "افزودن به علاقه‌مندی‌ها"
                }
                aria-pressed={isLiked}
                className="disabled:opacity-50"
            >
                <img
                    src={isLiked ? filledHeart : heart}
                    alt=""
                    className="h-5 w-5"
                />
            </button>

            <span className="pt-1 font-semibold">
                {favoriteCount}
            </span>
        </div>
  )
}

export default LikeButton