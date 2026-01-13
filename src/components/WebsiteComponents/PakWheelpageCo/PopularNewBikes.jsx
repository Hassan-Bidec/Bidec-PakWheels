"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const PopularNewBikes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
const router = useRouter();
  const handleBikeClick = (bike) => {
    router.push(`/motors?bike=${encodeURIComponent(bike.name)}`);
  };
  const bikes = [
    {
      name: "Honda CD 70",
      price: "PKR 157,900",
      reviews: "68",
      rating: 4,
      image: "https://cache3.pakwheels.com/system/bike_model_pictures/3531/medium/Cover.png?1756879016"
    },
    {
      name: "Honda CG 125",
      price: "PKR 234,900",
      reviews: "110",
      rating: 4,
      image: "https://cache4.pakwheels.com/system/bike_model_pictures/3533/medium/1.png?1756879361"
    },
    {
      name: "Suzuki GS 150",
      price: "PKR 399,000",
      reviews: "38",
      rating: 4,
      image: "https://cache1.pakwheels.com/system/bike_model_pictures/3447/medium/1_%2810%29.png?1753333077"
    },
    {
      name: "Honda CG 125",
      price: "PKR 234,900",
      reviews: "110",
      rating: 4,
      image: "https://cache1.pakwheels.com/system/bike_model_pictures/3447/medium/1_%2810%29.png?1753333077"
    },
    {
      name: "Yamaha YBR 125",
      price: "PKR 466,000",
      reviews: "48",
      rating: 4,
      image: "https://cache1.pakwheels.com/system/bike_model_pictures/3496/medium/1.png?1753961831"
    },
    {
      name: "Yamaha YBR 125G",
      price: "PKR 485,000",
      reviews: "113",
      rating: 4,
      image: "https://cache4.pakwheels.com/system/bike_model_pictures/3501/medium/3.png?1753961931"
    },
  ];

  const nextSlide = () => {
    if (currentIndex < bikes.length - 4) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className=" py-12 px-15 flex justify-center font-sans">
      <div className="max-w-6xl w-full">
        {/* Header Section */}
        <div className="flex justify-between items-end mb-6">
          <h2 className="text-[22px] font-semibold text-[#434343]">Popular New Bikes</h2>
          <button className="text-[#3b6598] text-[14px] hover:underline">View All New Bikes</button>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative">
          {/* Left Arrow */}
          <button 
            onClick={prevSlide}
            className={`absolute -left-5 top-1/2 -translate-y-1/2 z-10 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md border border-gray-200 text-[#3b6598] transition-opacity ${currentIndex === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100 hover:bg-gray-50'}`}
          >
            <span className="text-2xl font-light">‹</span>
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-4"
              style={{ transform: `translateX(-${currentIndex * 25}%)` }}
            >
              {bikes.map((bike, index) => (
                <div 
                  key={index} 
                  className="min-w-[calc(25%-12px)] bg-white border border-gray-200 rounded-sm overflow-hidden flex flex-col items-center hover:shadow-lg transition-shadow cursor-pointer group"
                  onClick={() => handleBikeClick(bike)}
                >
                  {/* Image Section */}
                  <div className="h-40 w-full flex items-center justify-center mb-4">
                    <img 
                      src={bike.image} 
                      alt={bike.name} 
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="text-center w-full">
                    <h3 className="text-[#3b6598] font-semibold text-[16px] mb-1 group-hover:underline">
                      {bike.name}
                    </h3>
                    <p className="text-[#3eb549] font-bold text-[15px] mb-2">
                      {bike.price}
                    </p>
                    
                    {/* Rating & Reviews */}
                    <div className="flex items-center justify-center gap-1 mt-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <span 
                            key={i} 
                            className={`text-[14px] ${i < bike.rating ? 'text-[#ff9100]' : 'text-gray-300'}`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="text-gray-500 text-[13px] ml-1">{bike.reviews} Reviews</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button 
            onClick={nextSlide}
            className={`absolute -right-5 top-1/2 -translate-y-1/2 z-10 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md border border-gray-200 text-[#3b6598] transition-opacity ${currentIndex >= bikes.length - 4 ? 'opacity-0 pointer-events-none' : 'opacity-100 hover:bg-gray-50'}`}
          >
            <span className="text-2xl font-light">›</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularNewBikes;