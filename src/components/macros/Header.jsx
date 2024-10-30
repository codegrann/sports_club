import React from 'react';
import { Search, ShoppingBag } from 'lucide-react';

const Header = () => (
    <header className="bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src="/api/placeholder/40/40" alt="Murang'a Logo" className="h-10" />
            <nav className="hidden md:flex ml-8 space-x-6">
              <a href="#" className="hover:text-yellow-400">NEWS</a>
              <a href="#" className="hover:text-yellow-400">FIXTURES</a>
              <a href="#" className="hover:text-yellow-400">TEAM</a>
              <a href="#" className="hover:text-yellow-400">STATISTICS</a>
              <a href="#" className="hover:text-yellow-400">OUR CLUB</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="flex items-center text-yellow-400">
              <ShoppingBag className="h-5 w-5 mr-1" />
              SHOP
            </a>
            <Search className="h-5 w-5" />
            <div className="flex space-x-2">
              <button className="px-4 py-1 text-sm rounded hover:bg-yellow-400">Login</button>
              <button className="px-4 py-1 text-sm rounded hover:bg-yellow-400">Register</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );