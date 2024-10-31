import React from 'react';
import "./ticket.css";

const StoreSection = () => (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 textGradient">Murang'a seal Store</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              title: "NEW KIT",
              description: "Get the new 2024-25 kit and be the first to wear it.",
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
            <div key={index} className="group">
              <div className="relative h-48 mb-4">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover rounded-t-lg transition-transform duration-300 hover:scale-110" />
              </div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{item.description}</p>
              <button className="text-sm font-semibold hover:text-yellow-600">
                SHOP NOW →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  export default StoreSection;