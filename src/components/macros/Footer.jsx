import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 px-">
      {/* Main Partners */}
      <div className="max-w-7xl mx-auto">
        <div className="text-xs flex items-center justify-between max-sm:px-2"><span className='text-[#F4E721]'>MAIN PARTNERS</span> <span className='bg-[#F4E721] py-1 px-2 rounded-sm'>VIEW PATTERNS</span></div>
        <div className="flex flex-wrap items-center justify-between mb-12  relative h-24">
          <div className='w-1 h-full bg-[#F4E721] absolute top-0 left-0'></div>
          <div className="flex space-x-6 md:space-x-32 items-center max-sm:w-[100px] md:max-w-4xl max-sm:ml-10 sm:mx-auto">
            <img src="/nike.svg" alt="Nike" className="w-16 md:w-32" />
            <img src="/spotify.svg" alt="Spotify" className="w-16 md:w-32" />
            <img src="/ambilight.svg" alt="Ambilight TV" className=" w-16 md:w-32" />
          </div>
         
        </div>

        <div className="flex items justify-around md:justify-between text-xs md:text-sm mt-4 mb-2 md:mt-0 max-w-5xl mx-auto">
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>MURANGASEALS@GMAIL.COM</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+254 790 770982</span>
            </div>
          </div>

        {/* Subscribe Section */}
        <div className="bg-[#F4E721] rounded-lg p-6 mb-12 max-w-5xl mx-auto">
          <div className="max-w-full mx-auto flex justify-around">
            <div className="text-black max-w-[300px] text-lg font-semibold mb-2">
              Register Now So You Don't Miss Our Games
            </div>
            <div className="flex bg-black p-2 rounded-md space-x-4 w-[60%]">
              <input
                type="email"
                placeholder="Enter your Email"
                className="flex-grow bg-black pl-4 text-[#F4E721] border border-[#F4E721] p-2 rounded-md focus:outline-none"
              />
              <button className="bg-[#F4E721] text-black px-6 py-2 rounded-md hover:bg-[#F4D000] transition-colors">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>

        {/* Navigation and Social Links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[#F4E721] pb-1 mb-8 border-b-[0.98px] border-[#F4E721] max-w-5xl mx-auto">
          {/* Navigation */}
          <nav className="flex space-x-6">
            <a href="/" className="hover:text-yellow-400 transition-colors">Home</a>
            <a href="/about" className="hover:text-yellow-400 transition-colors">About</a>
            <a href="/events" className="hover:text-yellow-400 transition-colors">Events</a>
            <a href="/blogs" className="hover:text-yellow-400 transition-colors">Blogs</a>
          </nav>

          {/* Social Media Icons */}
          <div className="flex space-x-4 text-[#F4E721]">
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
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
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
        <div className="flex flex-col md:flex-row justify-between items-center text-[#F4E721] text-sm max-w-5xl mx-auto">
          <div className="">
            © Muranga Seal. All rights reserved.
          </div>
          <div className='font-bold text-3xl'>Muranga Seal</div>
          <div className="flex space-x-4">
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