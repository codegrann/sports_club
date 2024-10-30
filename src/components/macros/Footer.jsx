import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      {/* Partner Logos Section */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        <div className="flex space-x-8 items-center justify-center">
          <img src="/nike-logo.svg" alt="Nike" className="h-8" />
          <img src="/spotify-logo.svg" alt="Spotify" className="h-8" />
          <img src="/ambilight-logo.svg" alt="Ambilight TV" className="h-8" />
        </div>
        <div className="text-center md:text-right">
          <p>murangaseals@gmail.com</p>
          <p>+254 790 770982</p>
        </div>
      </div>

      {/* Subscription Section */}
      <div className="container mx-auto px-4 mt-8 text-center">
        <h3 className="text-lg font-bold">Register Now So You Don't Miss Our Games</h3>
        <div className="mt-4 flex justify-center">
          <input
            type="email"
            placeholder="Enter your Email"
            className="p-2 rounded-l-md w-full max-w-xs md:max-w-md"
          />
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-r-md">
            Subscribe Now
          </button>
        </div>
      </div>

      {/* Footer Links and Social Icons */}
      <div className="container mx-auto px-4 mt-8 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        {/* Navigation Links */}
        <div className="space-x-4">
          <a href="/" className="hover:underline">Home</a>
          <a href="/about" className="hover:underline">About</a>
          <a href="/events" className="hover:underline">Events</a>
          <a href="/blogs" className="hover:underline">Blogs</a>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/facebook-icon.svg" alt="Facebook" className="h-6" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <img src="/youtube-icon.svg" alt="YouTube" className="h-6" />
          </a>
          <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
            <img src="/whatsapp-icon.svg" alt="WhatsApp" className="h-6" />
          </a>
        </div>

        {/* Legal Links */}
        <div className="text-center md:text-right">
          <a href="/terms" className="hover:underline">Terms of Service</a> | <a href="/privacy" className="hover:underline">Privacy Policy</a>
        </div>
      </div>

      <div className="text-center mt-8">
        <p>© Muranga Seal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
