import hexa from '../../assets/images/hexa.png'
import copyRight from '../../assets/images/copyright.svg'
import Linkedin from '../../assets/icons/Linkedin'
import Whatsapp from '../../assets/icons/Whatsapp'
import Twitter from '../../assets/icons/Twitter'
import Facebook from '../../assets/icons/Facebook'
import Instagram from '../../assets/icons/Instagram'


const Footer = () => {
  return (
    <div className='max-w-[1440px] mx-auto bg-[#252641] h-[553px] flex flex-col items-center'>
       <div className='flex flex-col justify-center gap-10'>
          <div className='flex flex-col items-center gap-4 text-white'>
            <span className='flex items-center justify-center gap-2'>
              <img className='pt-12' src={hexa} alt="footer logo" />
              <h2 className='pt-14 font-bold text-2xl'>هگزا اسکواد</h2>
            </span>
            <p className='text-xl w-[58%] text-center font-light'>هدف ما سهولت دسترسی و دریافت  خدمات از همه ی نقاط کشور با کمترین تعرفه و بدون نیاز  مراجعه حضوری در کل فرایند ثبت </p> 
          </div>

          <div className='flex flex-col items-center gap-4 text-white'>
            <p className='font-light text-base'>برای دریافت اخبار از طریق ایمیل ثبت نام  کنید</p>
            <div className='flex items-center justify-center'>
              <button className='py-2 px-4 bg-[#2196F3] rounded-full relative right-12 z-10 cursor-pointer'>خبرم کن!</button>
              <input className='bg-white w-[400px] h-[56px] rounded-full border-none relative left-14 shadow-md outline-none pr-[230px] font-[Yekan]' type="text" placeholder='Example@gmail.com'/>
            </div>
          </div>

          <div className='font-light pt-2 text-[#FFFFFF] opacity-60 flex items-center justify-center gap-10'> 
            <p className='border-l pl-8 cursor-pointer'>دوره های آموزشی</p>
            <p className='cursor-pointer'>درباره ما</p>
            <p className='border-r pr-8 cursor-pointer'>قوانین و مقررات</p>
          </div>
       </div>

       <div className='bg-[#00000033] flex items-center justify-between px-12 rounded-2xl py-5 mt-16 w-[90%]'>
          <div className='text-white flex gap-3'>
            <img src={copyRight} alt="copyRight" />
            <p>تمام حقوق مادی و معنوی این مجموعه متعلق به HexaSquad.ir میباشد</p>
          </div>

          <div className='flex gap-4'>

            <div className='flex items-center justify-center cursor-pointer w-8 h-8 bg-[#263238] rounded-full'>
              <Linkedin className="text-white hover:text-[#2196F3]" />
            </div>

            <div className='flex items-center justify-center cursor-pointer w-8 h-8 bg-[#263238] rounded-full'>
              <Whatsapp className="text-white hover:text-[#2196F3]" />
            </div>

            <div className='flex items-center justify-center cursor-pointer w-8 h-8 bg-[#263238] rounded-full'>
              <Twitter className="text-white hover:text-[#2196F3]" />
            </div>

            <div className='flex items-center justify-center cursor-pointer w-8 h-8 bg-[#263238] rounded-full'>
             <Facebook className='text-white hover:text-[#2196F3]' />
            </div>

            <div className='flex items-center justify-center cursor-pointer w-8 h-8 bg-[#263238] rounded-full'>
             <Instagram className="text-white hover:text-[#2196F3]" />
            </div>

          </div>
       </div>
    </div>
  )
}

export default Footer