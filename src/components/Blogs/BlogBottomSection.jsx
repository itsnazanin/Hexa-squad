import React from 'react'
import searchIcon from '../../assets/images/search.png'

const BlogBottomSection = () => {
  return (
    <div>
        {/* top section */}
        <div className='flex items-center justify-center gap-4'>
            <input type="text"
            className='w-[50%] outline-none h-14 rounded-2xl shadow-lg pr-4'
            placeholder='دنبال چی میگردی' />
            <div className='relative left-[60px]'>
              <img src={searchIcon} alt="search icon" />  
            </div>

            <div className='bg-[#FFFFFF] shadow-md h-14 flex items-center justify-around text-[#607D8B] rounded-2xl w-[37%]'>
                <p>همه</p>
                <p> محبوب ترین ها</p>
                <p>پربازدیدترین ها</p>
                <p>جدیدترین ها</p>
            </div>
            
        </div>
    </div>
  )
}

export default BlogBottomSection