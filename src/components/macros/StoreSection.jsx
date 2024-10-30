import React from 'react';
const StoreSection = () => (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Murang'a seal Store</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              title: "NEW KIT",
              description: "Get the new 2024-25 kit and be the first to wear it.",
            },
            {
              title: "TRAINING",
              description: "Get the new training collection and dress like your favorite players.",
            },
            {
              title: "BARÇITY",
              description: "Discover Barçity collection, inspired by the college style.",
            },
            {
              title: "MEMORABILIA",
              description: "Take a piece of history home. The most exclusive products.",
            }
          ].map((item, index) => (
            <div key={index} className="group">
              <div className="relative h-48 mb-4">
                <img src="/api/placeholder/300/200" alt={item.title} className="w-full h-full object-cover" />
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