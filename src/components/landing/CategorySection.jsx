import dots from '../../assets/images/dots.png'
import circle from '../../assets/images/circle.png'
import datapic from '../../assets/images/data.png'
import game from '../../assets/images/game.png'
import network from '../../assets/images/network.png'
import design from '../../assets/images/design.png'
import CategoryCard from './CategoryCard'

const CategorySection = () => {
  return (
    <section className="relative max-w-[1440px] max-h-[752px] mx-auto pt-[200px] overflow-hidden">
      
      {/* بک‌گراند شکل‌ها */}
      <div className="absolute top-0 left-0 flex gap-[190px] w-full justify-between pointer-events-none">
        <div className="w-[160px] h-[160px] rounded-tr-[100px] bg-[#FFF5DB] relative top-[260px] right-[40px]" />
        <div className="w-[800px] h-[480px] bg-[#E3F2FD] rounded-tr-[150px] mt-24 z-10" />
      </div>

      {/* دکوریشن */}
      <img
        src={dots}
        alt="dots"
        className="absolute top-[480px] left-[750px]"
      />
      <img
        src={circle}
        alt="circle"
        className="absolute top-[540px] right-[680px]"
      />

      {/* محتوا */}
      <div className="relative z-10 flex justify-between px-[90px]">
        
        {/* متن */}
        <div className="w-[420px] flex flex-col gap-4 pt-20">
          <h1 className="text-[#263238] font-bold text-[30px]">
            دسته بندی دوره ها
          </h1>
          <p className="text-[#455A64] leading-7">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
            با استفاده از طراحان گرافیک است
          </p>
        </div>

        {/* کارت‌ها */}
        <div className="w-[47%] grid grid-cols-2 gap-6 relative bottom-40 z-90">
          
          <CategoryCard
            image={datapic}
            title="تحلیل داده"
            
          />
          <CategoryCard
            image={game}
            title="بازی"
            offset={true}
          />
          <CategoryCard
            image={network}
            title="امنیت شبکه"
            
          />
          <CategoryCard
            image={design}
            title="وب دیزاین"
            offset={true}
          />

        </div>
      </div>
    </section>
  )
}

export default CategorySection
