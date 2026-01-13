"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const CarsforSaleView = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
const router = useRouter();

  const handleRedirect = (car) => {
    router.push(`/motors?car=${encodeURIComponent(car.name)}`);
  };
  const featuredCars = [
    {
      name: "Suzuki Mehran 2019",
      price: "PKR 1,550,000",
      city: "Sargodha",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAQm0Ci7I9Q5RmVsgLBsiXprK9Pqhiq8qRkg&s" // Example image
    },
    {
      name: "Hyundai Santro 2006",
      price: "PKR 1,250,000",
      city: "Islamabad",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwXOMtn6aAiGxk3qeUON2yE-myRYhwJ9tZ7Q&s"
    },
    {
      name: "Toyota Corolla 2019",
      price: "PKR 5,580,000",
      city: "Bahawalnagar",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBG8C8ak_bzGT1fZwTm4ZECsBtJFUXd5SiDg&s"
    },
    {
      name: "Toyota Raize 2020",
      price: "PKR 6,650,000",
      city: "Karachi",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs20_Q7MVjgTz4Ye8WZVbp6xgeyQ2UtP123Q&s"
    },
    {
      name: "Honda Civic 2021",
      price: "PKR 7,200,000",
      city: "Lahore",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXoCpbvmHwyhoZayg8CLKP_6k0k8fCVtMQQg&s"
    }
  ];

  const nextSlide = () => {
    if (currentIndex < featuredCars.length - 4) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className=" py-10 px-4 flex justify-center">
      <div className="max-w-6xl w-full">
        {/* Header Section */}
        <div className="flex justify-between items-end mb-5">
          <h2 className="text-[22px] font-semibold text-[#434343]">
            Featured Used Cars for Sale
          </h2>
          <a href="#" className="text-[#3b6598] text-sm hover:underline">
            View All Featured Used Cars
          </a>
        </div>

        {/* Carousel Container */}
        <div className="relative group overflow-hidden">
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg border border-gray-200 transition-all ${currentIndex === 0 ? 'opacity-0' : 'opacity-100'}`}
          >
            <span className="text-blue-500 text-2xl">‹</span>
          </button>

          <div 
            className="flex transition-transform duration-500 ease-in-out gap-4"
            style={{ transform: `translateX(-${currentIndex * 280}px)` }}
          >
            {featuredCars.map((car, index) => (
              <div 
                key={index} 
                onClick={() => handleRedirect(car)} // ← redirect on click
                className="min-w-[270px] bg-white rounded-sm overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                {/* Image Section with Featured Tag */}
                <div className="relative h-48 w-full bg-gray-100">
                  <img 
                    src={car.img} 
                    alt={car.name} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute top-0 left-0 bg-[#b73439] text-white text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider">
                    Featured
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-4 bg-white">
                  <h3 className="text-[#3b6598] font-bold text-[15px] mb-1 hover:underline truncate">
                    {car.name}
                  </h3>
                  <p className="text-[#3eb549] font-bold text-[15px]">
                    {car.price}
                  </p>
                  <p className="text-gray-400 text-[13px] mt-1">
                    {car.city}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={nextSlide}
            disabled={currentIndex >= featuredCars.length - 4}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg border border-gray-200 transition-all ${currentIndex >= featuredCars.length - 4 ? 'opacity-0' : 'opacity-100'}`}
          >
            <span className="text-blue-500 text-2xl">›</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarsforSaleView;