import React from 'react';
import { Search, Shirt, ShoppingBag, User } from 'lucide-react';

const Header = () => (
    <header className="bg-black text-white relative">
      <div className="">
      <img src="/Mseal-logo- 1.svg" alt="Murang'a Logo" className="h-24 absolute left-20 top-[5%]" />
      <div className="flex space-x-2 flex justify-end bg-[#131313] w-full pr-10 py-2">
              <button className="px-4 py-1 text-sm rounded hover:bg-[#F4E721] flex"><User className='p-[2px] bg-[#F4E721] rounded-full mr-1'/> Login</button>
              <button className="px-4 py-1 text-sm rounded hover:bg-[#F4E721] flex"><User className='p-[2px] bg-[#F4E721] rounded-full mr-1'/> Register</button>
        </div>
        <div className="flex items-center justify-around h-16 text-sm bg-[#000000]">
          <div className="flex items-center ">
            
            <nav className="hidden md:flex ml-8 space-x-6">
              <a href="#" className="hover:text-[#F4E721]">NEWS</a>
              <a href="#" className="hover:text-[#F4E721]">FIXTURES</a>
              <a href="#" className="hover:text-[#F4E721]">TEAM</a>
              <a href="#" className="hover:text-[#F4E721]">STATISTICS</a>
              <a href="#" className="hover:text-[#F4E721]">OUR CLUB</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="flex items-center text-[#F4E721] mr-4">
              {/* <ShoppingBag className="h-5 w-5 mr-2" /> */}
              <Shirt className='h-5 w-5 mr-2 fill-[#F4E721]'/>
              SHOP
            </a>
            <Search className="h-5 w-5" />
           
           
          </div>
        </div>
      </div>
      <div className='h-2 bg-[#F4E721]'></div>
    </header>
  );

  export default Header;