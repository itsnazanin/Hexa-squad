import { useState } from 'react';
import heart from '../../src/assets/images/heart.png'
import filledHeart from '../../src/assets/images/filledheart.png';

const LikeButton = ({data}) => {

    const [isLiked,setIsLiked] = useState(data.userIsLiked);
    const [likeCount,setLikeCount] = useState(data.likeCount);

    const handleLike = () => {
      setIsLiked(!isLiked);
      setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
    }


  return (
    <div className='flex items-center gap-1.5 rounded-3xl py-1 px-2.5 bg-[#FFEBEE] text-[#F44336]'> 
      {isLiked ? <img src={filledHeart} alt="liked" onClick={handleLike} />
       : <img src={heart} alt="not liked" onClick={handleLike} />}
      <span className='font-semibold pt-1'>{likeCount}</span>
    </div>
  )
}

export default LikeButton