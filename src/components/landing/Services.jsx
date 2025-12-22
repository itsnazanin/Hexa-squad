import vector from '../../assets/images/vector.png'
import favoriteChart from '../../assets/images/favorite-chart.png'
import briefcase from '../../assets/images/briefcase.png'

const Services = () => {
  return (
    <div className='max-w-[1200px] mx-auto pb-16 pt-16'>
        <div className="w-full flex flex-col items-center gap-10">

          <div className='flex items-center flex-col'>
            <h2 className="text-[#263238] text-2xl font-extrabold">خدمات ما</h2>
            <img className='pt-2' src={vector} alt="vector" />
          </div>

          <div className='w-full flex gap-8 '>
             {/* service 1 */}
            <div className='flex flex-col items-center justify-center px-8 py-10 rounded-3xl bg-[#FAFBFC] border border-[#ECEFF1] transition duration-300 cursor-pointer hover:shadow-lg hover:bg-white hover:border-none'>
             <img src={favoriteChart} alt="favorite chart" />
             <p className='font-bold pt-4 text-[20px] text-[#263238]'>سادگی خدمات</p>
             <p className='text-[12px] pt-2'>سهولت دسترسی و دریافت  خدمات از همه ی نقاط کشور با کمترین تعرفه و بدون نیاز  مراجعه حضوری در کل فرایند ثبت </p>
            </div>
            {/* service 2 */}
            <div className='flex flex-col items-center justify-center px-8 py-10 rounded-3xl bg-[#FAFBFC] border border-[#ECEFF1] transition duration-300 cursor-pointer hover:shadow-lg hover:bg-white hover:border-none'>
              <img src={briefcase} alt="briefcase icon" />
              <p className='font-bold pt-4 text-[20px] text-[#263238]'>فرصت شغلی</p> 
              <p className='text-[12px] pt-2'>سهولت دسترسی و دریافت  خدمات از همه ی نقاط کشور با کمترین تعرفه و بدون نیاز  مراجعه حضوری در کل فرایند ثبت </p>     
            </div>
            {/* service 3 */}
             <div className='flex flex-col items-center justify-center px-8 py-10 rounded-3xl bg-[#FAFBFC] border border-[#ECEFF1] transition duration-300 cursor-pointer hover:shadow-lg hover:bg-white hover:border-none'>
              <img src={briefcase} alt="briefcase icon" />
               <p className='font-bold pt-4 text-[20px] text-[#263238]'>مدرک معتبر</p>
               <p className='text-[12px] pt-2'>سهولت دسترسی و دریافت  خدمات از همه ی نقاط کشور با کمترین تعرفه و بدون نیاز  مراجعه حضوری در کل فرایند ثبت </p> 
             </div>
          </div>
        
        </div>
    </div>
    
  )
}

export default Services