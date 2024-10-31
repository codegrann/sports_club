import React from 'react';

const Tickets = () => {
    const tickets = [
      { category: "", image: "/ticket1.svg" },
      { category: "", image: "/ticket1.svg" },
      { category: "", image: "/ticket2.svg" },
      { category: "", image: "/ticket1.svg" }
    ];
  
    return (
      <section className="py-8 border border-red-400">
        <div className="container mx-auto px-4 w-[75%]">
          <h2 className="text-2xl mb-6 text-center">
            <span className="text-yellow-400">Murang'a Seal Tickets</span> 
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {tickets.map((ticket, idx) => (
                <div key={idx} className="relative group overflow-hidden rounded-lg w-full sm:w-[300px]">
                    <img 
                        src={ticket.image} 
                        alt={ticket.category} 
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                        <h3 className="text-white text-xl font-bold">{ticket.category}</h3>
                    </div>
                </div>
            ))}
        </div>


        </div>
      </section>
    );
  };
  
  export default Tickets;