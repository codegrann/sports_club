import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4">
      {/* Main Partners */}
      <div className="max-w-6xl mx-auto">
        <div className="text-xs text-gray-400 mb-4">MAIN PARTNERS</div>
        <div className="flex flex-wrap items-center justify-between mb-12">
          <div className="flex space-x-12 items-center">
            <img src="/api/placeholder/100/40" alt="Nike" className="h-8" />
            <img src="/api/placeholder/100/40" alt="Spotify" className="h-8" />
            <img src="/api/placeholder/100/40" alt="Ambilight TV" className="h-8" />
          </div>
          <div className="flex flex-col items-end text-sm mt-4 md:mt-0">
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>murangaseals@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+254 790 770982</span>
            </div>
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="bg-yellow-400 rounded-lg p-4 mb-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-black font-semibold mb-2">
              Register Now So You Don't Miss Our Games
            </div>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your Email"
                className="flex-grow bg-black text-white p-2 rounded-l focus:outline-none"
              />
              <button className="bg-purple-600 text-white px-6 py-2 rounded-r hover:bg-purple-700 transition-colors">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>

        {/* Navigation and Social Links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          {/* Navigation */}
          <nav className="flex space-x-6">
            <a href="/" className="hover:text-yellow-400 transition-colors">Home</a>
            <a href="/about" className="hover:text-yellow-400 transition-colors">About</a>
            <a href="/events" className="hover:text-yellow-400 transition-colors">Events</a>
            <a href="/blogs" className="hover:text-yellow-400 transition-colors">Blogs</a>
          </nav>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-yellow-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-yellow-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-yellow-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="text-gray-400">
            © Muranga Seal. All rights reserved.
          </div>
          <div className="flex space-x-4 text-gray-400">
            <a href="/terms" className="hover:text-white">Terms of Service</a>
            <span>|</span>
            <a href="/privacy" className="hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;