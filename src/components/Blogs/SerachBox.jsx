import React from 'react'
import searchIcon from '../../assets/images/search.png'

const SerachBox = () => {
  return (
    <>
        <input type="text"
         className='w-[50%] outline-none h-14 rounded-2xl shadow-lg pr-4'
         placeholder='دنبال چی میگردی' />

        <div className='relative left-12 top-4'>
         <img src={searchIcon} alt="search icon" />  
       </div>
    </>
  )
}

export default SerachBox