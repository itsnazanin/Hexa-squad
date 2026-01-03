import logo from '../../assets/icons/logo.png'
import { Link, NavLink } from 'react-router-dom'
import shoppingBag from '../../assets/icons/shopping-bag.png'

const Navbar = () => {
  return (
    <div className='max-w-[1200px] mx-auto'> 
      <div className="w-full absolute top-0 flex justify-around items-center pt-8 px-4 bg-transparent max-w-[1200px]">
        
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 text-sm md:text-base font-bold text-[#263238]">
          <img className=' md:w-[35px] lg:w-[40px] w-[28px]' src={logo} alt="logo" />
          <p>هگزا اسکواد</p>
        </NavLink>

        {/* Nav Links */}
        <nav>
          <ul className="flex gap-6 md:gap-10 text-[#263238] list-none px-4 font-[Yekan] lg:text-base md:text-sm text-[14px]">
            <li>
              <NavLink to="/courses" className={({ isActive }) => isActive ? "text-[#2196F3] border-b-2 border-b-[#2196F3] border-b-spacing-y-3 no-underline hover:no-underline" : "text-inherit"}>دوره ها</NavLink>
            </li>
            <li>
              <Link to="" className="no-underline hover:no-underline text-inherit">اساتید</Link>
            </li>
            <li>
              <Link to="" className="no-underline hover:no-underline text-inherit">ارتباط با ما</Link>
            </li>
            <li>
              <NavLink to="/blogs" className={({ isActive }) => isActive ? "text-[#2196F3] border-b-2 border-b-[#2196F3] border-b-spacing-y-3 no-underline hover:no-underline" : "text-inherit"}>اخبار و مقالات</NavLink>
            </li>
          </ul>
        </nav>

        {/* Cart + Login */}
        <div className="flex items-center gap-3 md:gap-4">

          {/* Cart */}
          <div className="w-9 h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-white flex justify-center items-center shadow-sm relative">
            <span className="w-5 h-5 rounded-full bg-[#2196F3] text-white text-[10px] flex justify-center items-center border-2 border-[#E3F2FD] absolute -top-1 -right-2">۲</span>
            <img src={shoppingBag} className="w-6 h-6" alt="shopping bag" />
          </div>

          {/* Login */}
          <p className="px-4 py-3  md:px-6 md:py-3 md:text-sm sm:text-xs whitespace-nowrap lg:text-base rounded-full bg-[#2196F3] text-white shadow-sm font-bold">ورود به حساب</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
