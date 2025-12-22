import herobg from '../../assets/images/header-bg.png';
import react from '../../assets/images/React.png';
import angular from '../../assets/images/Angular.png';
import html from '../../assets/images/Html.png';
import css from '../../assets/images/Css.png';
import searchIcon from '../../assets/images/search.png';
import heroIcon1 from '../../assets/images/heroIcon1.png';
import heroIcon2 from '../../assets/images/heroIcon2.png';
import heroIcon3 from '../../assets/images/heroIcon3.png';
import sass from '../../assets/images/Sass.png';
import nodejs from '../../assets/images/Nodejs.png';
import vue from "../../assets/images/Vue.png";
import figma from "../../assets/images/Figma.png";


const HeroSection = () => {
  return (
    <section 
      className="w-screen h-[900px] pt-[100px] bg-no-repeat"
      style={{
        backgroundImage: `url(${herobg})`,
        backgroundPosition: 'center top',     
      }}
    >
      <div className='flex items-center justify-center max-w-[1440px] mx-center gap-6'>
            {/* tech icons 1 */}
          <div className='hidden md:flex flex-col justify-center items-center lg:flex-2 gap-16 pt-[118px] overflow-hidden'>
              
              <div className='md:w-[52px] md:h-[45px] lg:w-[74px] lg:h-[64px]'>
                <img src={react} alt="react pics" />
              </div>
              <div className='md:w-[62px] md:h-[65px] lg:w-[74px] lg:h-[64px] mr-[140px]'>
                <img src={angular} alt="angular pics" />
              </div>
              <div className='md:w-[42px] md:h-[45px] lg:w-[64px] lg:h-[64px]'>
                <img  src={html} alt="html pics" />
              </div>
              <div className='md:w-[42px] md:h-[45px] lg:w-[64px] lg:h-[64px] relative right-[58px]'>
                <img src={css} alt="css pics" />
              </div>
              
          </div>

          {/* hero section */}
          <div className='flex flex-col items-center justify-center gap-12 relative right-6 md:pl-20'>

            <div className='flex flex-col gap-4 md:gap-4 lg:gap-8 pt-12 pl-8 items-center text-[#263238]'>
              <p>پلتفرم آموزش طراحی وب</p>
              <h1 className='font-bold text-[30px] md:text-[42px] lg:text-[60px] whitespace-nowrap'>مرجع آموزش برنامه نویسی</h1>
              <p className='md:text-[96%] lg:text-[100%] text-center font-semibold'>مرجع اموزش زنده و تعاملی دسترسی به بیش از هفت هزار ویدیوی اموزشی به زبان فارسی .</p>
            </div>

            <div className='w-full flex justify-center items-center'>   
              <input className='w-[80%] h-14 rounded-2xl bg-white shadow-lg pr-10 outline-none'  type="text" placeholder='چی میخوای یاد بگیری؟' />
              <img className='relative left-10 ' src={searchIcon} alt="search icon" />
            </div> 

            <div className='flex gap-8 ml-10 w-[80%]'>
              {/* box 1 */}
               <div className=' w-[40%] py-3 border-4 rounded-2xl border-white bg-white/60 backdrop-blur-md flex flex-col items-center gap-4'>
                <img className='w-14 h-14' src={heroIcon1} alt=" hero icon 1" />
                <p className='text-2xl font-bold'>۱۴۷</p>
                <p className='text-[#455A64] text-[18px] relative bottom-3'>مدرس مجرب</p>
               </div>
               {/* box 2 */}
               <div className='w-[40%] py-3 border-4 rounded-2xl border-white bg-white/60 backdrop-blur-md flex flex-col items-center gap-4'>
                <img className='w-14 h-14' src={heroIcon2} alt="hero icon 2" />
                 <p className='text-2xl font-bold'>۴۰۸.۲۰۸</p>
                 <p className='text-[#455A64] text-[18px] relative bottom-3'> دقیقه اموزش</p>
               </div>
               {/* box 3 */}
               <div className='w-[40%] py-3 border-4 rounded-2xl border-white bg-white/60 backdrop-blur-md flex flex-col items-center gap-4'>
                <img className='w-14 h-14' src={heroIcon3} alt="hero icon 3" />
                <p className='text-2xl font-bold'>۴۶۰.۷۸۹</p>
                <p className='text-[#455A64] text-[18px] relative bottom-3'> نفر دانشجو</p>
               </div>
            </div>
            
            
          </div>

          {/* tech icons 2 */}
          <div className='hidden md:flex flex-col lg:items-center lg:flex-2 gap-16 pt-[118px] lg:pl-10'>
            <div className='md:w-[52px] md:h-[55px] lg:w-[64px] lg:h-[64px]'>
               <img  src={sass} alt="sass icon" />
            </div>
            <div className='md:w-[52px] md:h-[55px] lg:w-[64px] lg:h-[64px] relative left-[80px]' >
              <img src={nodejs} alt="nodejs icon" />
            </div>
           
           <img className='md:w-[52px] md:h-[55px] lg:w-[64px] lg:h-[64px]' src={vue} alt="vue icon" />
           <img className='md:w-[52px] md:h-[55px] lg:w-[64px] lg:h-[64px] relative left-[80px]' src={figma} alt="figma icon" />
          </div>
      </div>
     
     
    </section>
  );
};

export default HeroSection;