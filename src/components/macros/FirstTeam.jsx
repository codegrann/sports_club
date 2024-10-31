import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import "./ticket.css";

const FirstTeamSection = () => {
    const [currentMatch, setCurrentMatch] = useState(0);
    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const matches = [
        {
            date: "31 JULY",
            day: "WEDNESDAY",
            teamA: { name: "FC Barcelona", logo: "/barca.svg" },
            teamB: { name: "Man City", logo: "/city.svg" },
            time: "01:00",
            venue: "Camping World Stadium",
        },
        {
            date: "04 AUGUST",
            day: "SUNDAY",
            teamA: { name: "FC Barcelona", logo: "/barca.svg" },
            teamB: { name: "R. Madrid", logo: "/realm.svg" },
            time: "01:00",
            venue: "MetLife Stadium",
        },
    ];

    // Sample countdown logic (static for example, adjust to dynamic based on match dates)
    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown({
                days: 0,
                hours: 11,
                minutes: 46,
                seconds: 21,
            });
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="bg-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-semibold textGradient">
                        <span>Murang'a </span>
                        <span className="">First Team</span>
                    </h2>

                    {/* Countdown Timer */}
                    <div className="text-center mb-8 text-sm flex items-center gap-2">
                        <span className="text-gray-700">NEXT MATCH</span>
                        <span className="text-4xl font-bold text-yellow-600">
                            {`${countdown.days} : ${countdown.hours} : ${countdown.minutes} : ${countdown.seconds}`}
                        </span>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button className="flex items-center text-sm text-blue-600 space-x-1">
                            <Calendar className="h-5 w-5" />
                            <span>Sync Schedules to Calendar</span>
                        </button>
                        <div className="flex space-x-2">
                            <button
                                className="p-1 rounded-full bg-gray-100"
                                onClick={() => setCurrentMatch(prev => Math.max(0, prev - 1))}
                            >
                                <ChevronLeft className="h-5 w-5" />
                            </button>
                            <button
                                className="p-1 rounded-full bg-gray-100"
                                onClick={() => setCurrentMatch(prev => Math.min(matches.length - 1, prev + 1))}
                            >
                                <ChevronRight className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </div>

                

                {/* Matches Display */}
                <div className='flex'>
                    <img src="/results.svg" alt="" className='w-80'/>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                    {matches.map((match, idx) => (
                        <div
                            key={idx}
                            className={`bg-white rounded-lg p-6 shadow-lg ${idx === currentMatch ? '' : 'hidden sm:block'}`}
                        >
                            <div className="flex justify-between items-center mb-4">
                                <div>
                                    <span className="text-2xl font-bold">{match.date.split(' ')[0]}</span>
                                    <span className="ml-2 text-gray-600">{match.day}</span>
                                </div>
                                <span className="text-xl font-semibold">{match.time}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <img src={match.teamA.logo} alt={match.teamA.name} className="w-12 h-12" />
                                    <span className="font-medium">{match.teamA.name}</span>
                                </div>
                                <span className="font-semibold text-gray-700">vs</span>
                                <div className="flex items-center space-x-4">
                                    <span className="font-medium">{match.teamB.name}</span>
                                    <img src={match.teamB.logo} alt={match.teamB.name} className="w-12 h-12" />
                                </div>
                            </div>
                            <div className="mt-4 text-center text-sm text-gray-600">
                                {match.venue}
                            </div>
                            <div className="mt-4 text-center">
                                <button className="px-4 py-1 bg-yellow-500 text-white rounded-lg">
                                    Tickets
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                </div>
            </div>
        </section>
    );
};

export default FirstTeamSection;
