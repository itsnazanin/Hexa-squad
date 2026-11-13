function ChangePasswordPage() {
  return (
    <section className="">

      <h2>تغییر رمز عبور</h2>

      <form>

        <div>
          <label>رمز عبور فعلی</label>
          <input type="password" />
        </div>

        <div>
          <label>رمز عبور جدید</label>
          <input type="password" />
        </div>

        <div>
          <label>تکرار رمز عبور جدید</label>
          <input type="password" />
        </div>

        <button type="submit">
          تغییر رمز عبور
        </button>

      </form>

    </section>
  );
}

export default ChangePasswordPage;