import logo from '../../assets/icons/logo.png'
import { Link } from 'react-router-dom'
import shoppingBag from '../../assets/icons/shopping-bag.png'

const Navbar = () => {
  return (
    <div className='max-w-[1200px] mx-auto'> 
      <div className="w-full absolute top-0 flex justify-around items-center pt-8 bg-transparent max-w-[1200px]">
        
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-[#263238]">
          <img src={logo} alt="logo" />
          <p>هگزا اسکواد</p>
        </div>

        {/* Nav Links */}
        <nav>
          <ul className=" flex gap-10 text-[#263238] list-none px-4">
            <li>
              <Link to="/courses" className="no-underline hover:no-underline text-inherit font-[Yekan]">دوره ها</Link>
            </li>
            <li>
              <Link to="" className="no-underline hover:no-underline text-inherit">اساتید</Link>
            </li>
            <li>
              <Link to="" className="no-underline hover:no-underline text-inherit">ارتباط با ما</Link>
            </li>
            <li>
              <Link to="" className="no-underline hover:no-underline text-inherit">اخبار و مقالات</Link>
            </li>
          </ul>
        </nav>

        {/* Cart + Login */}
        <div className="flex items-center gap-4">

          {/* Cart */}
          <div className="w-12 h-12 rounded-full bg-white flex justify-center items-center shadow-sm relative">
            <span className="w-5 h-5 rounded-full bg-[#2196F3] text-white text-[10px] flex justify-center items-center border-2 border-[#E3F2FD] absolute -top-1 -right-2">۲</span>
            <img src={shoppingBag} className="w-6 h-6" alt="shopping bag" />
          </div>

          {/* Login */}
          <p className="px-6 py-3 rounded-full bg-[#2196F3] text-white shadow-sm font-bold">ورود به حساب</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
