function ProfilePage() {
  return (
    <section className="flex flex-col">

      <h2>ویرایش پروفایل</h2>

      <form>

        <div>
          <label>نام</label>
          <input type="text" placeholder="نام خود را وارد کنید" />
        </div>

        <div>
          <label>نام خانوادگی</label>
          <input type="text" placeholder="نام خانوادگی خود را وارد کنید" />
        </div>

        <div>
          <label>ایمیل</label>
          <input type="email" placeholder="ایمیل خود را وارد کنید" />
        </div>

        <div>
          <label>شماره موبایل</label>
          <input type="tel" placeholder="شماره موبایل خود را وارد کنید" />
        </div>

        <button type="submit">
          ثبت اطلاعات
        </button>

      </form>

    </section>
  );
}

export default ProfilePage;