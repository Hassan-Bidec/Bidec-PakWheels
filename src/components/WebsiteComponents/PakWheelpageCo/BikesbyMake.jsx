"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const BikesbyMake = () => {
      const router = useRouter();
       const handleRedirect = (make) => {
    router.push(`/motors?bikeMake=${encodeURIComponent(make.name)}`);
  };
  const bikeMakes = [
    { name: 'Honda', logo: 'https://cache3.pakwheels.com/system/assets/bike-makes/honda.png' },
    { name: 'Yamaha', logo: 'https://cache2.pakwheels.com/system/assets/bike-makes/yamaha.png' },
    { name: 'Suzuki', logo: 'https://cache4.pakwheels.com/system/assets/bike-makes/suzuki.png' },
    { name: 'United', logo: 'https://cache1.pakwheels.com/system/assets/bike-makes/united.png' },
    { name: 'Road Prince', logo: 'https://cache1.pakwheels.com/system/assets/bike-makes/road-prince.png' },
    { name: 'Unique', logo: 'https://cache1.pakwheels.com/system/assets/bike-makes/unique.png' },
    { name: 'Hi Speed', logo: 'https://cache2.pakwheels.com/system/assets/bike-makes/hi-speed.png' },
    { name: 'Metro', logo: 'https://cache4.pakwheels.com/system/assets/bike-makes/metro.png' },
    { name: 'Jolta Electric', logo: 'https://cache1.pakwheels.com/system/assets/bike-makes/jolta.png' },
    { name: 'Benelli', logo: 'https://cache3.pakwheels.com/system/assets/bike-makes/benelli.png' },
    { name: 'Evee', logo: 'https://cache2.pakwheels.com/system/assets/bike-makes/evee.png' },
    { name: 'Union Star', logo: 'https://cache4.pakwheels.com/system/assets/bike-makes/union-star.png' },
    { name: 'KEEWAY', logo: 'https://cache1.pakwheels.com/system/assets/bike-makes/keeway.png' },
    { name: 'Super Power', logo: 'https://cache1.pakwheels.com/system/assets/bike-makes/super-power.png' },
    { name: 'Kawasaki', logo: 'https://cache3.pakwheels.com/system/assets/bike-makes/kawasaki.png' },
  ];

  return (
    <section className="bg-[#f2f3f3] py-10 px-4 mt-10 flex justify-center">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <h2 className="text-[22px] font-semibold text-[#434343] mb-8">
          New Bikes by Make
        </h2>

        {/* Grid Container - 5 items per row on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-10 gap-x-4">
          {bikeMakes.map((make, index) => (
            <div 
              key={index} 
              onClick={() => handleRedirect(make)} // ← redirect on click
              className="flex flex-col items-center group cursor-pointer"
            >
              {/* Circular Logo Container */}
              <div className="w-[100px] h-[100px] bg-white rounded-full flex items-center justify-center border border-gray-200 shadow-sm group-hover:shadow-md transition-shadow duration-300 overflow-hidden p-4">
                <img 
                  src={make.logo} 
                  alt={make.name} 
                  className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              {/* Brand Name */}
              <p className="mt-3 text-[15px] font-medium text-[#434343] group-hover:text-[#3b6598] transition-colors">
                {make.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BikesbyMake;