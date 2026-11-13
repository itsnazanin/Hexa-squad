import ContactImg from "@/assets/images/contact.png"

function ContactBanner() {
  return (
    <div className='flex items-center px-10 pt-16 bg-gradient-to-r from-[#E3F2FD] to-[#FAFBFC] w-full h-[320px]'>
        <div className="w-[50%] flex gap-3 items-center flex-col">
            <h1 className="font-bold text-[40px] flex">با ما در <p className="text-[#2196F3] px-2">ارتباط</p> باشید!</h1>
            <p className="pr-7">هر سوالی دارید، ما اینجا هستیم تا به شما کمک کنیم. </p>
        </div>
        <div className="w-[50%] flex items-center justify-center">
            <img className="w-[260px]" src={ContactImg} alt="contact image" />
        </div>
    </div>
  )
}

export default ContactBanner