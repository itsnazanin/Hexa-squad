const CategoryCard = ({ image, title, offset }) => {
  return (
    <div
      className={` bg-white rounded-[32px] shadow-lg p-10 flex flex-col items-center gap-2 ${
        offset ? 'relative top-10' : ''
      }`}
    >
      <img className="w-[80px]" src={image} alt={title} />
      <p className="font-bold pt-5 text-[#263238] text-xl">{title}</p>
      <p className="w-[230px] pt-2 text-[#455A64] text-center text-sm">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
      </p>
    </div>
  )
}
export default CategoryCard