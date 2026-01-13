"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const FeaturedNewCars = () => {
  const [activeTab, setActiveTab] = useState('Newly Launched');
  const [currentIndex, setCurrentIndex] = useState(0);
const router = useRouter();
  const handleRedirect = (car) => {
    router.push(`/motors?car=${encodeURIComponent(car.name)}`);
  };

  const carData = {
    'Popular': [
      { name: "Toyota Corolla", price: "PKR 75.0 - 80.0 lacs", date: "Launched June 2025", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtZ3uBuRWl08jDnjO0E4tB1DX_oRci2B03tw&s" },
      // Add more popular cars here
    ],
    'Upcoming': [
      { name: "Honda Civic 2026", price: "Coming Soon", date: "Expected March 2026", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOePLjHBRGb_UtBWQJh_i70V1dafUMyMAclA&s" },
    ],
    'Newly Launched': [
      { name: "Jaecoo J5", price: "PKR 67.0 - 77.0 lacs", date: "Launched January 2026", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOePLjHBRGb_UtBWQJh_i70V1dafUMyMAclA&s" },
      { name: "MG Binguo", price: "PKR 60.0 lacs", date: "Launched December 2025", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ5GttHr3mWDG5joExjvHktst6hKq8RUIVBQ&s" },
      { name: "MG U9", price: "PKR 2.28 crore", date: "Launched December 2025", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOePLjHBRGb_UtBWQJh_i70V1dafUMyMAclA&s" },
      { name: "Elektra Metro", price: "PKR 10.5 - 13.5 lacs", date: "Launched November 2025", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOePLjHBRGb_UtBWQJh_i70V1dafUMyMAclA&s" },
      { name: "Suzuki Swift", price: "PKR 45.0 lacs", date: "Launched Oct 2025", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ5GttHr3mWDG5joExjvHktst6hKq8RUIVBQ&s" },
    ]
  };

  const currentCars = carData[activeTab];

  const nextSlide = () => {
    if (currentIndex < currentCars.length - 4) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Reset carousel position when tab changes
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentIndex(0);
  };

  return (
    <div className="bg-[#f2f3f3] py-10 px-4 flex justify-center">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-[22px] font-semibold text-[#434343]">
            Featured New Cars
          </h2>
          <a href="#" className="text-[#3b6598] text-sm hover:underline">
            View All New Cars
          </a>
        </div>

        {/* Tabs */}
        <div className="flex gap-10 border-b border-gray-300 mb-8">
          {['Popular', 'Upcoming', 'Newly Launched'].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`pb-3 text-[17px] font-medium transition-all relative ${
                activeTab === tab 
                ? 'text-[#232954] border-b-[3px] border-[#3b6598]' 
                : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden group">
          {/* Arrows */}
          <button 
            onClick={prevSlide}
            className={`absolute left-0 top-[40%] -translate-y-1/2 z-10 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md border border-gray-200 transition-opacity ${currentIndex === 0 ? 'opacity-0' : 'opacity-100'}`}
          >
            <span className="text-blue-500 text-2xl">‹</span>
          </button>

          <div 
            className="flex transition-transform duration-500 ease-in-out gap-4"
            style={{ transform: `translateX(-${currentIndex * 280}px)` }}
          >
            {currentCars.map((car, index) => (
              <div 
                key={index} 
                onClick={() => handleRedirect(car)} // ← redirect on click
                className="min-w-[270px] bg-white rounded-sm overflow-hidden border border-gray-50 shadow-sm flex flex-col items-center p-4 cursor-pointer"
              >
                {/* Car Image */}
                <div className="h-40 w-full flex items-center justify-center mb-4">
                  <img 
                    src={car.img} 
                    alt={car.name} 
                    className="max-w-full max-h-full object-contain hover:scale-105 transition-transform" 
                  />
                </div>

                {/* Info */}
                <div className="text-center">
                  <h3 className="text-[#3b6598] font-bold text-[16px] mb-2 hover:underline cursor-pointer">
                    {car.name}
                  </h3>
                  <p className="text-[#3eb549] font-medium text-[14px]">
                    {car.price}
                  </p>
                  <p className="text-gray-400 text-[13px] mt-2">
                    {car.date}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={nextSlide}
            className={`absolute right-0 top-[40%] -translate-y-1/2 z-10 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md border border-gray-200 transition-opacity ${currentIndex >= currentCars.length - 4 ? 'opacity-0' : 'opacity-100'}`}
          >
            <span className="text-blue-500 text-2xl">›</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedNewCars;