import React from 'react'

const NewsGridAll = () => (
    <section className="py-8 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: "INSIDE VIEW: First workouts in Orlando",
              duration: "08:55",
              category: "CLUB",
              image: "/news1.svg",
            },
            {
              title: "Welcome Event in Orlando",
              category: "CLUB",
              image: "/news1.svg",
            },
            {
              title: "Chimezie Metu joins the team",
              category: "BASKETBALL",
              image: "/news1.svg",
            }
          ].map((item, index) => (
            <div key={index} className="relative group">
              <img src="/api/placeholder/400/250" alt={item.title} className="w-full h-48 object-cover" />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-all">
                <div className="p-4 absolute bottom-0">
                  <h3 className="text-white text-lg font-semibold">{item.title}</h3>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className="text-yellow-400 text-sm">{item.category}</span>
                    {item.duration && <span className="text-white text-sm">{item.duration}</span>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  export default NewsGridAll;