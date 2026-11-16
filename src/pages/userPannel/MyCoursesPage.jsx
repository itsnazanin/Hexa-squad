function MyCoursesPage() {
  return (
    <section className="flex flex-col items-center mt-[120px] gap-8 h-full">

      <h2 className="font-bold text-[20px]">دوره‌های من</h2>

      <p className="text-[#3e3e3e]">
        در این قسمت می‌توانید دوره‌هایی که خریداری کرده‌اید را مشاهده کنید.
      </p>
      <div className="w-full flex items-center justify-center h-full text-gray-500">
        فعلا دوره ای برای مشاهده وجود ندارد.
      </div>

    </section>
  );
}

export default MyCoursesPage;