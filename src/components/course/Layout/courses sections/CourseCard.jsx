import React from "react";
import noteIcon from "../../../../assets/images/note.svg";
import clockIcon from "../../../../assets/images/clock.svg";
import calendarIcon from "../../../../assets/images/calendar.svg";
import teacherIcon from "../../../../assets/icons/teacher.svg";
import userIcon from "../../../../assets/icons/userprofile.svg";
import LikeButton from "../../../../components/LikeButton";

const CourseCard = ({ course, layout }) => {

  const startDate = course.startDate
    ? new Date(course.startDate).toLocaleDateString("fa-IR")
    : "تاریخ نامشخص";

  return (
    <div
      className={
        layout === "list"
          ? "flex flex-row gap-5 w-full items-center cursor-pointer bg-[#ffffff] rounded-3xl shadow-md px-6 py-6 mt-4"
          : "flex flex-col w-fit bg-[#ffffff] h-fit rounded-3xl shadow-md px-3 py-4 gap-4 cursor-pointer"
      }
    >
      {/* Image */}
      <div>
        <img
          className={
            layout === "list"
              ? "w-32 h-32 object-cover rounded-2xl"
              : "w-full h-36 object-cover rounded-2xl"
          }
          src={course.thumbnail}
          alt={course.title}
        />
      </div>

      <div>
        {/* Title */}
        <h3 className="text-[18px] font-bold mb-2">
          {course.title}
        </h3>

        {layout === "list" ? (
          <div>
            {/* Description */}
            <p className="text-[#263238] w-[500px] text-sm">
              {course.shortDescription}
            </p>

            <div className="flex gap-8 items-center justify-between">
              <div className="bg-[#ECEFF1] whitespace-nowrap mt-3 flex gap-4 rounded-3xl py-3 px-4 text-sm text-[#263238]">

                <span className="flex items-center gap-1">
                  <span className="w-5 h-4 mb-1">
                    <img
                      src={teacherIcon}
                      alt="teacher icon"
                    />
                  </span>

                  <p>
                    {course.teacher?.name}
                  </p>
                </span>

                {/* Students */}
                <span className="flex items-center">
                  <span className="w-5 h-4 mb-1">
                    <img
                      src={userIcon}
                      alt="user icon"
                    />
                  </span>

                  <p>
                    {course.studentCount} دانش آموز
                  </p>
                </span>

                
                <span className="flex items-center border gap-1">
                  <span>
                    <img
                      className="w-5 h-4"
                      src={noteIcon}
                      alt="note icon"
                    />
                  </span>

                  <p>
                    {course.lessonCount} درس
                  </p>
                 
                </span>

                {/* Duration */}
                <span className="flex items-center">
                  <span className="w-5 h-4">
                    <img
                      src={clockIcon}
                      alt="clock icon"
                    />
                  </span>

                  <p>
                    {course.courseTime} ساعت
                  </p>
                </span>

                
                <span className="flex items-center">
                  <span className="w-5 h-4">
                    <img
                      src={calendarIcon}
                      alt="calendar icon"
                    />
                  </span>

                  <p>
                    {startDate}
                  </p>
                </span>
              </div>

              {/* Price */}
              <div className="flex gap-1 pt-4">
                <span className="text-[#2196F3]">
                  {course.price?.toLocaleString("fa-IR")}
                </span>

                <p className="text-[#263238]">
                  تومان
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div>

            {/* Course info */}
            <div className="flex gap-6 pt-3 pb-2 px-4 w-fit mt-3 whitespace-nowrap bg-[#ECEFF1] rounded-full text-[#263238] text-xs justify-center items-center">

              {/* Lessons */}
              <div className="flex justify-center gap-0.5">
                <img
                  className="mb-1"
                  src={noteIcon}
                  alt="note icon"
                />

                <p>{course.lessonCount}درس</p>

              </div>

              {/* Duration */}
              <div className="flex justify-center gap-0.5">
                <img
                  className="mb-1"
                  src={clockIcon}
                  alt="clock icon"
                />

                <p>
                  {course.courseTime} ساعت
                </p>
              </div>

              {/* Date */}
              <div className="flex justify-center gap-0.5">
                <img
                  className="mb-1"
                  src={calendarIcon}
                  alt="calendar icon"
                />

                <p>
                  {startDate}
                </p>
              </div>
            </div>

            {/* Teacher + Students */}
            <div className="flex justify-between pt-3 pr-1 items-center text-[#263238] text-xs">

              <p className="font-semibold">
                مدرس: {course.teacher?.name}
              </p>

              <p>
                {course.studentCount} دانشجو
              </p>
            </div>

            {/* Price + Like */}
            <div className="flex justify-between items-center pt-4">

              <LikeButton data={course} />

              <div className="flex items-center gap-2">
                <span className="text-[#2196F3] font-bold text-[18px]">
                  {course.price?.toLocaleString("fa-IR")}
                </span>

                <p>
                  تومان
                </p>
              </div>

            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseCard;