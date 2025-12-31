import React from 'react'
import blogImg from '../../assets/images/objects.png'
import dotImg from '../../assets/images/Dot.png'
import dotsImg from '../../assets/images/dots.png'
import circleImg from '../../assets/images/circle.png'

const BlogsTopSection = () => {
  return (
    <div className='flex h-[600px]'>
        {/* right section */}
        <div className='flex-1 flex-wrap'>
            <div className='w-[320px] h-[320px] rounded-tl-[150px] relative z-10 top-[110px] bg-[#E3F2FD]'></div>
            <div className='relative z-20 bottom-20 right-[80px] w-[80%] flex flex-col gap-5'>
                <h1 className='text-[#263238] text-4xl font-extrabold'>اخبار و مقالات هگزا اسکواد</h1>
                <p className='text-[#455A64]'>آموزش برنامه نویسی یکی از دوره‌های محبوب در حوزه فناوری اطلاعات است. برنامه نویسی مهارتی است که به افراد امکان می‌دهد تا نرم‌افزارهای کامپیوتری را ایجاد و توسعه دهند. </p>
            </div>
            <img className='relative bottom-[270px] right-[380px]' src={dotImg} alt="top dot image" />
            <img className='relative bottom-[230px] right-[440px]' src={dotsImg} alt="down dot image" />
            <img className='relative bottom-[350px] right-[260px]' src={circleImg} alt="pink circle image" />
        </div>
        {/* left section */}
        <div className='relative z-10 flex-1 py-16 pr-14'>
          <img src={blogImg} alt="blog hero image" />
        </div>
    </div>
  )
}

export default BlogsTopSection