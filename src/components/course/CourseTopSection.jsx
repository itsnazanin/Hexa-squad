import React from 'react'
import CourseImg from '../../assets/images/courseImg.png'
import Dots2 from '../../assets/images/Dots2.png'
import Dots1 from '../../assets/images/Dots1.png'

const CourseTopSection = () => {
  return (
    <div className='max-w-[1440px] h-fit mx-auto flex py-28'>
        {/* right side */}
        <div className='flex flex-wrap justify-start w-[55%]'>
            <span className='relative top-[90px] right-[40px] w-[100px] h-[100px] bg-[#E7F0FC] rounded-bl-[100px]'></span>
            <p className='relative top-[130px] left-[20px] text-[#2196F3] font-bold z-30 text-2xl'>مهمه از کی یاد می گیری!!</p>
            <h1 className='text-[#263238] font-bold text-[40px] z-30 relative top-[80px] right-[80px]'>آموزش برنامه نویسی با بهترین ها</h1>
            <p className='text-[#455A64] w-[610px] relative z-50 top-[90px] right-[80px]'>آموزش برنامه نویسی یکی از دوره‌های محبوب در حوزه فناوری اطلاعات است. برنامه نویسی مهارتی است که به افراد امکان می‌دهد تا نرم‌افزارهای کامپیوتری را ایجاد و توسعه دهند. </p>
            <span className='relative right-[560px] bottom-[150px] pl-[50px]'>
              <img src={Dots2} alt="vertical dots" />
            </span>
            <span className='relative left-[210px] top-[20px]'>
              <img src={Dots1} alt=" horizontal dots " />
            </span>
        </div>
        {/* left side */}
        <div className='w-[35%]'>
          <div className='w-[500px]'>
            <img src={CourseImg} alt="Course Image" />
          </div>
            
        </div>
    </div>
  )
}

export default CourseTopSection