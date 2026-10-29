import React from 'react'

function RegisterForm({ phone , onPhoneChange , error}) {
  return (
    <>
     <input 
     type="text" 
     name="phone" 
     value={phone}
     onChange={(e) => onPhoneChange(e.target.value)}
     placeholder='شماره موبایل' 
     required
     className='border border-[#CFD8DC] w-full rounded-full py-4 px-5 placeholder-[#607D8B]' 
     />

     {
      error && (
        <p className='text-sm text-red-500'>{error}</p>
      )
     }
    </>
  )
}

export default RegisterForm