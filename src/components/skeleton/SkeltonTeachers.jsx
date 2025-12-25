import React from "react";

const SkeletonTeachers = ({ count = 4 }) => {
  return (
    <div className="space-y-4 pr-3 py-2">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="flex items-center gap-3 animate-pulse"
        >
          {/* checkbox */}
          <div className="w-4 h-4 rounded bg-gray-300" />

          {/* text */}
          <div className="h-4 w-32 rounded bg-gray-300" />
        </div>
      ))}
    </div>
  );
};

export default SkeletonTeachers;
