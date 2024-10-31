import React from 'react';
import {Clock } from 'lucide-react'; 

function NewsCard() {
  return (
    <div>
         <div className="relative w-[] h-[330px]">
              <img src="/news.svg" alt="news" className="w-full h-48 object-cover" />
              <div className="absolute inset-0 bg-black/10 hover:bg-black/70 transition-all">
                <div className="p-4 absolute bottom-0">
                  <h3 className="text-white text-md font-semibold text-center">Spain men in basketball and football action</h3>
                  <div className="flex items-center justify-between mt-2 text-xs">
                    <span className="text-[#F4E721] "><span className='w-[] h-[] px-[2px] bg-[#F4E721]'>c</span> CLUB</span>
                    <span className='text-white flex items-center gap-2 mt-2'><Clock className='w-4'/> 3 hrs ago</span>
                  </div>
                </div>
              </div>
            </div>
    </div>
  )
}

export default NewsCard;