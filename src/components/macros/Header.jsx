import React from 'react';
import { Search, ShoppingBag } from 'lucide-react';

const Header = () => (
    <header className="bg-black text-white">
      <div className="container mx-auto px-4 border border-blue-400">
      <img src="/api/placeholder/40/40" alt="Murang'a Logo" className="h-10" />
      <div className="flex space-x-2 border border-aqua-400 flex justify-end">
              <button className="px-4 py-1 text-sm rounded hover:bg-yellow-400">Login</button>
              <button className="px-4 py-1 text-sm rounded hover:bg-yellow-400">Register</button>
        </div>
        <div className="flex items-center justify-around h-16 border border-yellow-400 text-sm">
          <div className="flex items-center border border-green-400">
            
            <nav className="hidden md:flex ml-8 space-x-6">
              <a href="#" className="hover:text-yellow-400">NEWS</a>
              <a href="#" className="hover:text-yellow-400">FIXTURES</a>
              <a href="#" className="hover:text-yellow-400">TEAM</a>
              <a href="#" className="hover:text-yellow-400">STATISTICS</a>
              <a href="#" className="hover:text-yellow-400">OUR CLUB</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4 border border-white">
            <a href="#" className="flex items-center text-yellow-400 mr-4">
              <ShoppingBag className="h-5 w-5 mr-2" />
              SHOP
            </a>
            <Search className="h-5 w-5" />
           
          </div>
        </div>
      </div>
    </header>
  );

  export default Header;