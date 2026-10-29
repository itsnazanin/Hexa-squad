
function LoginForm({ phone , password , onChange}) {
  

  return (
   <>
    <div className='flex flex-col gap-6'>
        <div className='w-full flex flex-col gap-4 mt-8'>

          <input 
          type="text" 
          value={phone}
          onChange={(e) => onChange("phone",e.target.value)}
          name="phone"
          className='placeholder-[#607D8B] outline-[#2196F3] bg-[#FFFFFF] border border-[#CFD8DC] rounded-full py-4 px-5' 
          placeholder='ایمیل یا شماره موبایل'/>

          <input 
          type="password" 
          name="password" 
          value={password}
          onChange={(e) => onChange("password" , e.target.value)}
          className='placeholder-[#607D8B] outline-[#2196F3] bg-[#FFFFFF] border border-[#CFD8DC] rounded-full py-4 px-5' 
          placeholder='رمز عبور'/>

        </div>

        <div className='flex justify-between gap-[114px] w-full'>
            <label className='flex gap-1'>
                <input className='accent-[#2196F3] cursor-pointer' type="checkbox" name="remmemberMe" />
                <span className=' text-[#455A64] text-[14px]'>من را به خاطر بسپار</span>
            </label>
            <a target='/' className='text-[#2196F3] underline cursor-pointer text-[14px]'>رمز عبور را فراموش کردم</a>
        </div>
    </div>
   </>
  )
}

export default LoginForm