import React from 'react'
import vector from '../../assets/images/vector.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { useTeachers } from '../../hooks/useTeachers';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const SliderSection = () => {
    const { data, isLoading, error } = useTeachers()

    if (isLoading) return <p className='text-center py-10'>در حال بارگذاری...</p>;
    if (error) return <p className='text-center py-10'>ارور وجود دارد</p>;

    const teachers = data || [];

  return (
    <div className='max-w-[1440px] mx-auto max-h-[660px]'>
        <div className='h-[600px] bg-[#E3F2FD]'>
           <div className='flex items-center flex-col pt-16'>
             <h2 className="text-[#263238] text-2xl font-extrabold">اساتید برتر</h2>
             <img className='pt-2' src={vector} alt="vector" />
           </div>
        </div>

         <div className="max-w-6xl mx-auto relative bottom-[420px]">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={32}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 }
          }}
        >
          {teachers.map((teacher, index) => (
            <SwiperSlide key={teacher.teacherId}>
              <div className={` p-4 text-center
                ${index % 2 === 0 ? 'mt-0' : 'mt-[60px]'}`}>
                <img
                  src={teacher.pictureAddress}
                  alt={teacher.pictureAddress}
                  className="w-full h-56 object-cover rounded-3xl mb-4"
                />
                <h3 className="font-bold text-[#263238]">{teacher.fullName}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default SliderSection