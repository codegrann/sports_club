import { Clock } from 'lucide-react';
import React from 'react';

const HeroSection = () => (
    <section className="relative h-[500px]">
      <div className="absolute inset-0">
        <img src="/banner.svg" alt="Hero" className="w-full h-full object-cover" />
      </div>
      <div className='w-2 h-[40%] bg-[#F4E721] absolute top-[35%] right-0 z-1000'></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent">
        <div className="container mx-auto px-4 h-full flex items-end pb-8">
          <div className="text-white mx-auto">
            <h1 className="text-4xl font-bold mb-2">PREVIEW | Barça v Man City</h1>
            <div className="flex items-center space-x-6 flex justify-center underline">
              <span className="text-sm text-[#F4E721]"><span className='bg-[#F4E721] px-2 mr-1'></span> FIRST TEAM</span>
              <span className="text-sm flex items-center"><Clock className='w-4 mr-2'/> 1 hr ago</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  export default HeroSection;