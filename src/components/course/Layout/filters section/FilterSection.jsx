import React, { useState } from 'react'
import DownArrow from '../../../../assets/icons/DownArrow'
import UpArrow from '../../../../assets/icons/UpArrow'

const FilterSection = ({ title, children, defaultOpen = false }) => {

    const [ isOpen , setIsOpen ] = useState(defaultOpen)

  return (
    <div className='w-[90%] flex flex-col items-center justify-between py-2 text-[#263238]'>
        <div className='w-[98%] flex justify-between items-center px-2 py-2' onClick={() => setIsOpen(prev => !prev)}>
            <p>{title}</p>
            { isOpen? <UpArrow /> : <DownArrow /> }
        </div>
        <div className='flex gap-3 w-full'>  
          {isOpen && <div>{children}</div> }  
        </div>
         
    </div>
  )
}

export default FilterSection