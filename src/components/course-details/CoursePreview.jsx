
import { useState } from "react";


const formatDuration = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  if (hours === 0) return `${minutes} mins`;
  if (remainingMinutes === 0) return `${hours} hrs`;

  return `${hours} hrs ${remainingMinutes} mins`;
};

const CoursePreview = ( sections ) => {
  const [openSectionIds, setOpenSectionIds] = useState([]);

  const toggleSection = (sectionId) => {
    setOpenSectionIds((current) =>
      current.includes(sectionId)
        ? current.filter((id) => id !== sectionId)
        : [...current, sectionId]
    );
  };

  if (sections.length === 0) {
    return (
      <p className="py-8 text-center text-sm text-[#78909C]">
        هنوز سرفصلی برای این دوره ثبت نشده است.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      {sections.map((section) => {
        const isOpen = openSectionIds.includes(section.id);

        const totalDuration = section.lessons.reduce(
          (total, lesson) => total + lesson.duration,
          0
        );

        return (
          <div key={section.id} className="flex flex-col gap-2">
            {/* Section header */}
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => toggleSection(section.id)}
              className="flex w-full items-center justify-between gap-4 rounded-xl bg-[#2196F3] px-3 py-3 text-right text-white transition-colors hover:bg-[#1688E5] sm:px-4"
            >
              <span className="flex min-w-0 items-center gap-2 text-sm">
                <span className="shrink-0 text-lg leading-none">
                  {isOpen ? "−" : "+"}
                </span>

                <span>
                  فصل {section.order}: {section.title}
                </span>
              </span>

              <span className="flex shrink-0 items-center gap-1 text-xs">
                <span>◷</span>
                {formatDuration(totalDuration)}
              </span>
            </button>

            {/* Lessons */}
            {isOpen && (
              <div className="flex flex-col gap-2">
                {section.lessons.length > 0 ? (
                  section.lessons.map((lesson) => (
                    <div
                      key={lesson.id}
                      className="flex items-center justify-between gap-3 rounded-lg bg-[#ECEFF1] px-3 py-3 text-sm text-[#455A64] sm:px-4"
                    >
                      <div className="flex min-w-0 items-center gap-2">
                        <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#2196F3] text-xs text-white">
                          {lesson.order}
                        </span>

                        <span>{lesson.title}</span>
                      </div>

                      <span className="flex shrink-0 items-center gap-1 text-xs">
                        <span>◷</span>
                        {formatDuration(lesson.duration)}
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="rounded-lg bg-[#ECEFF1] p-4 text-sm text-[#78909C]">
                    هنوز درسی برای این سرفصل ثبت نشده است.
                  </p>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CoursePreview;
