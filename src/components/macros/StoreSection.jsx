import React from 'react';
import "./ticket.css";

const StoreSection = () => (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4 relative">
        <h2 className="text-2xl font-bold mb-6 textGradient mx-auto max-w-[250px]">Murang'a seal Store</h2>
        <div className='w-[234.44px] h-[32px] rounded-[3px] cursor-pointer bg-black text-white text-xs flex gap-2 justify-center items-center ml-auto mb-2'>OFFICIAL STORE MURANGA SEAL <img src="/arrow.svg" alt="" className='w-4'/></div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              title: "NEW KIT",
              description: "We already have it here! Get the new 2024-25 kit and be the first to wear it.",
              image: "/store1.svg",
              thumbnail:"/store11.svg"
            },
            {
              title: "TRAINING",
              description: "Get the new training collection and dress like your favorite players.",
              image: "/store2.svg",
              thumbnail:"/store22.svg"
            },
            {
              title: "BARÇITY",
              description: "Discover Barçity collection, inspired by the college style.",
              image: "/store3.svg",
              thumbnail:"/store33.svg"
            },
            {
              title: "MEMORABILIA",
              description: "Take a piece of history home. The most exclusive products.",
              image: "/store4.svg",
              thumbnail:"/store44.svg"
            }
          ].map((item, index) => (
            <div key={index} className="group shadow-lg">
              <div className="relative h-48 mb-4">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover rounded-t-lg transition-transform duration-300 hover:scale-110" />
              </div>
              <div className='flex gap-4'>
              <div className="relative h-48 mb-4">
                <img src={item.thumbnail} alt={item.title} className="h-[150px] w-[200px]" />
              </div>
              <div>
              <h3 className="text-[16.7px] mb-2">{item.title}</h3>
              <p className="text-[10.7px] text-gray-600 mb-4">{item.description}</p>
              <button className="text-[14px] italic hover:text-yellow-600">
                SHOP NOW →
              </button>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  export default StoreSection;