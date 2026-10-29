import { useState } from "react";
import CoursePreview from "./CoursePreview";

const tabs = [
    { id: "description" , label: "توضیحات" },
    { id: "preview" , label: "پیش نمایش ها"},
    { id: "reviews" , label: "نظرات کاربران"}
]

const CourseDetailsTabs = (course) => {
    const [activeTab, setActiveTab] = useState("description")

    return (
        <section dir="rtl" className="w-full rounded-2xl bg-white p-5 shadow-sm md:p-6">
            <div className="flex items-center gap-6 border-b border-gray-100">
                {tabs.map((tab)=> {
                    const isActive = activeTab === tab.id
                    return(
                        <button key={tab.id} onClick={()=> setActiveTab(tab.id)} className={`relative -mb-px whitespace-nowrappb-4 text-sm transition-colors
                         ${isActive ? "font-semibold text-[#2196F3]" : "text-[#607D8B] hover:text-[#263238]"}`}>
                            {tab.label}

                            {isActive && (
                                <span className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-[#2196F3]"/>
                            )}
                        </button>
                    )
                })}
            </div>

            {/* tab content */}
            <div className="pt-6">
                {activeTab === "description" && (
                        <div className="space-y-6 text-sm leading-7 text-[#546E7A]"> 
                            <h3 className="mb-3 text-base font-bold text-[#263238]">توضیحات دوره</h3>

                            <p>{course.Description}</p>
                        </div>
                )}

                {activeTab === "preview" && (
                   <CoursePreview sections={course.sections} />
                )}

                {activeTab === "reviews" && (
                    <div>

                    </div>
                )}
            </div>
        </section>
    )
}

export default CourseDetailsTabs