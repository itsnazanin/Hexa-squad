import React from 'react'
import { BLOGS_FILTERS } from '@/core/services/adapters/blogsFilters'

const FiltersTabs = ({ value , onChange}) => {


    
  return (
    <>
      <div className="flex items-center gap-6 bg-white py-3 px-6 rounded-3xl shadow-md">
      {Object.entries(BLOGS_FILTERS).map(([key, item]) => (
        <button
          key={key}
          onClick={() => onChange(key)}
          className={`px-4 py-2 rounded-xl text-sm transition
            ${
              value === key
                ? 'bg-blue-500 text-white'
                : 'text-gray-600 hover:bg-gray-200'
            }`}
        >
          {item.label}
        </button>
      ))}
    </div>
    </>
  )
}

export default FiltersTabs