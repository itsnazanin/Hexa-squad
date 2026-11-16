function ProfilePage() {
  return (
    <section className="flex flex-col gap-[90px] mt-[100px] items-center">

      <h2 className="font-bold text-[20px]">ویرایش پروفایل</h2>

      <form className="grid grid-cols-2 gap-[60px] w-full px-[80px] relative">

        <div className="flex flex-col gap-2">
          <label>نام</label>
          <input className="border p-3 rounded-[16px] placeholder:text-[14px]" type="text" placeholder="نام خود را وارد کنید" />
        </div>

        <div className="flex flex-col gap-2">
          <label>نام خانوادگی</label>
          <input className="border p-3 rounded-[16px] placeholder:text-[14px]" type="text" placeholder="نام خانوادگی خود را وارد کنید" />
        </div>

        <div className="flex flex-col gap-2">
          <label>ایمیل</label>
          <input className="border p-3 rounded-[16px] placeholder:text-[14px]" type="email" placeholder="ایمیل خود را وارد کنید" />
        </div>

        <div className="flex flex-col gap-2">
          <label>شماره موبایل</label>
          <input className="border p-3 rounded-[16px] placeholder:text-[14px] placeholder:absolute placeholder:right-0 placeholder:pr-4" type="tel" placeholder="شماره موبایل خود را وارد کنید" />
        </div>

        <div className="w-full col-span-2 text-end">
            <button className=" bg-[#2096f3] hover:bg-[#2098f39b] hover:text-blue-800 w-fit px-12 py-4 text-white font-semibold rounded-[16px]" type="submit">
              ثبت اطلاعات
            </button>
        </div>
        

      </form>

    </section>
  );
}

export default ProfilePage;