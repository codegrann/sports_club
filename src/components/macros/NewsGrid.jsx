import React from 'react';
import { Play, Clock } from 'lucide-react';  // Import Play icon from Lucide React

const NewsGrid = () => (
  <section className="py-8 bg-black">
    <div className="container mx-auto px-4">
      <div className="flex justify-center">
        {[
          {
            title: "INSIDE VIEW: First workouts in Orlando",
            duration: "08:55",
            // category: "CLUB",
            image: "/news1.svg",
          },
          {
            title: "Welcome Event in Orlando",
            category: "CLUB",
            image: "/news2.svg",
            period: "7 hrs ago"
          },
          {
            title: "Chimezie Metu joins the team",
            category: "BASKETBALL",
            image: "/news3.svg",
            period: "3 hrs ago"
          },
        ].map((item, index) => (
          <div key={index} className="w-[] h-[330px] relative group bg-black rounded-lg overflow-hidden shadow-lg">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-all group-hover:bg-black/70">
              <div className="p-4 absolute bottom-0 w-full">
                <h3 className="text-white text-center text-lg font-semibold mb-2">{item.title}</h3>
                <div className="flex items-center space-x-2">
                  {item.duration && (
                    <div className="flex items-center text-white space-x-1 mx-auto">
                      <Play size={16} className="text-white" /> {/* Play Icon */}
                      <span className="text-sm">{item.duration}</span>
                    </div>
                  )}
                  <span className="text-[#F4E721] text-sm mx-auto">{item.category} <span className='text-white flex items-center gap-2 mt-2'>{item.period && <Clock className='w-4'/>} {item.period}</span></span>
                 
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default NewsGrid;
