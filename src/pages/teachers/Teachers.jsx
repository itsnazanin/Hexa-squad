import TeachersBottomSection from '@/components/teachers/TeachersBottomSection'
import TeachersTopSection from '@/components/teachers/TeachersTopSection'


function Teachers() {
  return (
    <div className='h-auto w-full bg-gradient-to-b from-[#e4f3fd] to-[#ffffff]'>
        <TeachersTopSection />
        <TeachersBottomSection />
    </div>
  )
}

export default Teachers