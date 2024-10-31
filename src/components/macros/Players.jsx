import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Players = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const players = Array(4).fill({ image: "/player.svg" });

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % players.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [players.length]);

    const nextSlide = () => {
        setCurrentSlide(prev => (prev + 1) % players.length);
    };

    const prevSlide = () => {
        setCurrentSlide(prev => (prev - 1 + players.length) % players.length);
    };

    return (
        <section className="py-8 bg-gradient-to-r from-yellow-400 to-blue-600">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl text-white mx-auto">Players</h2>
                    <div className="flex space-x-2">
                        <button
                            onClick={prevSlide}
                            className={`p-2 rounded-full bg-white/20 text-white ${currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={currentSlide === 0}
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className={`p-2 rounded-full bg-white/20 text-white ${currentSlide === players.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={currentSlide === players.length - 1}
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>

                <div className="relative overflow-hidden w-[350px] mx-auto">
                    <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                        {players.map((player, idx) => (
                            <div key={idx} className="w-full flex-shrink-0">
                                <div className="aspect-[3/4] relative">
                                    <img 
                                        src={player.image} 
                                        alt={`Player ${idx + 1}`} 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-4 space-x-2">
                        {players.map((_, idx) => (
                            <button
                                key={idx}
                                className={`w-10 h-1 rounded-md ${
                                    idx === currentSlide ? 'bg-[#F4E721]' : 'bg-white/50'
                                }`}
                                onClick={() => setCurrentSlide(idx)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Players;
