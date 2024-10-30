import React from 'react';
const HeroSection = () => (
    <section className="relative h-[500px]">
      <div className="absolute inset-0">
        <img src="/api/placeholder/1200/500" alt="Hero" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
        <div className="container mx-auto px-4 h-full flex items-end pb-8">
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-2">PREVIEW | Barça v Man City</h1>
            <div className="flex items-center space-x-4">
              <span className="bg-yellow-400 px-2 py-1 text-sm">FIRST TEAM</span>
              <span className="text-sm">1 hr ago</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );