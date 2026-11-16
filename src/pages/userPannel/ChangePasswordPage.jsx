function ChangePasswordPage() {
  return (
    <section className="w-full relative flex flex-col gap-5 mt-[120px] items-center">

      <h2 className="font-bold text-[20px]">تغییر رمز عبور</h2>

      <form className="w-full px-[110px] flex items-center justify-center gap-[50px] mt-[50px]">

        <div className="flex flex-col gap-3 w-full">
          <label>رمز عبور فعلی</label>
          <input className="border rounded-[16px] px-6 py-3" type="password" />
        </div>

        <div className="flex flex-col gap-3 w-full">
          <label>رمز عبور جدید</label>
          <input className="border rounded-[16px] px-6 py-3" type="password" />
        </div>

        <div className="flex flex-col gap-3 w-full">
          <label>تکرار رمز عبور جدید</label>
          <input className="border rounded-[16px] px-6 py-3" type="password" />
        </div>


      </form>

        <div className="w-[85%] text-end">
          <button className=" bg-[#2096f3] hover:bg-[#2098f39b] hover:text-blue-800 w-fit px-12 py-4 mt-[50px] text-white font-semibold rounded-[16px]" type="submit">
          تغییر رمز عبور
          </button>
        </div>
        

    </section>
  );
}

export default ChangePasswordPage;