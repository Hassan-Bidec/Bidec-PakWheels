"use client";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

const UsedCars = () => {
  const [activeTab, setActiveTab] = useState("Category");
  const carouselRef = useRef(null);
const router = useRouter();
const handleRedirect = (item) => {
  router.push(`/motors?tab=${activeTab}&value=${encodeURIComponent(item.name)}`);
};

  const categories = [
    { name: "Automatic cars", icon: "https://img.icons8.com/ios/50/999999/car-gear-stick.png" },
    { name: "Family Cars", icon: "https://img.icons8.com/ios/50/999999/car--v1.png" },
    { name: "5 Seater", icon: "https://img.icons8.com/ios/50/999999/car-seat.png" },
    { name: "Small cars", icon: "https://img.icons8.com/ios/50/999999/hatchback.png" },
    { name: "Small cars", icon: "https://img.icons8.com/ios/50/999999/hatchback.png" },
    { name: "Small cars", icon: "https://img.icons8.com/ios/50/999999/hatchback.png" },
    { name: "Big cars", icon: "https://img.icons8.com/ios/50/999999/suv.png" },
    { name: "Old Cars", icon: "https://img.icons8.com/ios/50/999999/classic-car.png" },
    { name: "Imported cars", icon: "https://img.icons8.com/ios/50/999999/container.png" },
    { name: "5 Door", icon: "https://img.icons8.com/ios/50/999999/car-door.png" },
    { name: "4 Door", icon: "https://img.icons8.com/ios/50/999999/car-door.png" },
    { name: "1000cc cars", icon: "https://img.icons8.com/ios/50/999999/engine.png" },
    { name: "1300cc cars", icon: "https://img.icons8.com/ios/50/999999/engine.png" },
    { name: "Japanese cars", icon: "https://img.icons8.com/ios/50/999999/japan.png" },
  ];

  const brands = [
    { name: "Toyota", icon: "https://img.icons8.com/color/48/000000/toyota.png" },
    { name: "Honda", icon: "https://img.icons8.com/color/48/000000/honda.png" },
    { name: "Nissan", icon: "https://img.icons8.com/color/48/000000/nissan.png" },
    { name: "Suzuki", icon: "https://img.icons8.com/color/48/000000/suzuki.png" },
    { name: "Kia", icon: "https://img.icons8.com/color/48/000000/kia.png" },
    { name: "Hyundai", icon: "https://img.icons8.com/color/48/000000/hyundai.png" },
    { name: "Toyota", icon: "https://img.icons8.com/color/48/000000/toyota.png" },
    { name: "Honda", icon: "https://img.icons8.com/color/48/000000/honda.png" },
    { name: "Nissan", icon: "https://img.icons8.com/color/48/000000/nissan.png" },
    { name: "Suzuki", icon: "https://img.icons8.com/color/48/000000/suzuki.png" },
    { name: "Kia", icon: "https://img.icons8.com/color/48/000000/kia.png" },
    { name: "Hyundai", icon: "https://img.icons8.com/color/48/000000/hyundai.png" },
  ];

  const BodyType = [
    { name: "Sedan", icon: "https://img.icons8.com/ios/50/999999/sedan.png" },
    { name: "Hatchback", icon: "https://img.icons8.com/ios/50/999999/hatchback.png" },
    { name: "SUV", icon: "https://img.icons8.com/ios/50/999999/suv.png" },
    { name: "Coupe", icon: "https://img.icons8.com/ios/50/999999/coupe.png" },
    { name: "Convertible", icon: "https://img.icons8.com/ios/50/999999/convertible.png" },
    { name: "Minivan", icon: "https://img.icons8.com/ios/50/999999/minivan.png" },
    { name: "Pickup Truck", icon: "https://img.icons8.com/ios/50/999999/pickup-truck.png" },
    { name: "Station Wagon", icon: "https://img.icons8.com/ios/50/999999/station-wagon.png" },
    { name: "Crossover", icon: "https://img.icons8.com/ios/50/999999/crossover.png" },
    { name: "Electric", icon: "https://img.icons8.com/ios/50/999999/electric-car.png" },
    { name: "Hybrid", icon: "https://img.icons8.com/ios/50/999999/hybrid-car.png" },
    { name: "Luxury", icon: "https://img.icons8.com/ios/50/999999/luxury-car.png" },
  ];

  const Model = [
    { name: "Toyota" }, { name: "Honda" }, { name: "Suzuki" }, { name: "Kia" }, { name: "Nissan" }, { name: "Hyundai" },
    { name: "Mitsubishi" }, { name: "Mazda" }, { name: "Subaru" }, { name: "Lexus" }, { name: "Infiniti" }, { name: "Acura" },
    { name: "Chevrolet" }, { name: "Ford" }, { name: "BMW" }, { name: "Mercedes" }, { name: "Audi" }, { name: "Volkswagen" },
    { name: "Honda Civic" }, { name: "Toyota Corolla" }, { name: "Suzuki Swift" }, { name: "Kia Sportage" }, { name: "Nissan Altima" }, { name: "Hyundai Elantra" }
  ];

  const cities = [
    { name: "Karachi" }, { name: "Lahore" }, { name: "Islamabad" }, { name: "Peshawar" }, { name: "Quetta" }, { name: "Multan" },
    { name: "Faisalabad" }, { name: "Rawalpindi" }, { name: "Sialkot" }, { name: "Gujranwala" }, { name: "Bahawalpur" }, { name: "Sukkur" }
  ];

  const Budget = [
    { name: "Cars under 5 Lakhs" }, { name: "Cars under 10 Lakhs" }, { name: "Cars under 20 Lakhs" }, { name: "Cars under 30 Lakhs" },
    { name: "Cars under 40 Lakhs" }, { name: "Cars under 50 Lakhs" }, { name: "Cars under 60 Lakhs" }, { name: "Cars under 80 Lakhs" },
    { name: "Cars under 1 Crore" }, { name: "Cars under 1.5 Crore" }, { name: "Cars under 2 Crore" }, { name: "Cars above 2 Crore" }
  ];

  const tabs = ["Category", "City", "Make", "Model", "Budget", "Body Type"];

  const getItems = () => {
    if (activeTab === "Make") return brands;
    if (activeTab === "City") return cities;
    if (activeTab === "Model") return Model;
    if (activeTab === "Budget") return Budget;
    if (activeTab === "Body Type") return BodyType;
    return categories;
  };

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -carouselRef.current.offsetWidth, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: carouselRef.current.offsetWidth, behavior: "smooth" });
  };

  return (
    <div className="bg-[#f2f3f3] py-12 px-4 min-h-screen flex flex-col items-center">
      <div className="max-w-6xl w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Browse Used Cars</h2>

        {/* Tabs */}
        <div className="border-b border-gray-300 mb-8 flex flex-wrap gap-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-[17px] font-medium transition-all relative ${
                activeTab === tab
                  ? "text-gray-900 border-b-[3px] border-blue-500"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          <button
            onClick={scrollLeft}
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md border border-gray-200 text-blue-400 hover:text-blue-600 transition-all opacity-0 group-hover:opacity-100"
          >
            <span className="text-xl font-bold">‹</span>
          </button>

          {/* Wrapper for 2 Rows, 6 Columns effect */}
          <div
            ref={carouselRef}
            className="overflow-x-auto scrollbar-hide scroll-smooth"
          >
            <div className="flex flex-col flex-wrap h-[380px] w-fit gap-4 py-2">
              {getItems().map((item, index) => (
                <div 
                    key={index} 
                    className="w-[180px] h-[170px]" // Fixed width to ensure 6 columns fit well
                >
                  {activeTab === "Model" || activeTab === "Budget" || activeTab === "City" ? (
                    <div className="h-full flex items-center justify-center text-center">
                        <p onClick={() => handleRedirect(item)} className="text-sm font-medium text-gray-700 hover:text-blue-500 cursor-pointer">
                          {item.name}
                        </p>
                    </div>
                  ) : (
                    <div onClick={() => handleRedirect(item)} className="bg-white p-4 h-full rounded-md shadow-sm border border-transparent hover:border-blue-300 hover:shadow-md transition-all flex flex-col items-center justify-center cursor-pointer group/card">
                      <div className="h-14 flex items-center justify-center mb-3">
                        <img
                          src={item.icon}
                          alt={item.name}
                          className="w-12 opacity-70 group-hover/card:opacity-100 transition-opacity"
                        />
                      </div>
                      <p className="text-sm font-medium text-gray-700 text-center">
                        {item.name}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollRight}
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md border border-gray-200 text-blue-400 hover:text-blue-600 transition-all opacity-0 group-hover:opacity-100"
          >
            <span className="text-xl font-bold">›</span>
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-blue-500 cursor-pointer"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export default UsedCars;