"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const PartsAccessories = () => {
  const [activeTab, setActiveTab] = useState('Sub Category');
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleClick = (item) => {
    if (activeTab === 'Model') {
      router.push(`/motors?model=${encodeURIComponent(item)}`);
    } else {
      router.push(`/motors?part=${encodeURIComponent(item.name)}`);
    }
  };
  const tabs = ['Sub Category', 'Make', 'Model', 'Brand'];
const router = useRouter();
  const data = {
    'Sub Category': [
      { name: 'Helmets', icon: 'https://wsa3.pakwheels.com/assets/accessory-sub-categories/helmets-eb04339c73b0afb675e6d2cf7d6ae2f1db62156441ef7c489fe3f7ea6818deeb.png' },
      { name: 'Keychains', icon: 'https://wsa2.pakwheels.com/assets/accessory-sub-categories/key-chains-f1a8dee7f3b7a1b5e489e6c4d16f0d8d25c1536fde90b41bff9a08e3b06f3404.png' },
      { name: 'Car Battery', icon: 'https://wsa2.pakwheels.com/assets/accessory-sub-categories/batteries-41546a0c51334d9f8f45536e61ab4ef282e058eefc28fbe759a058e0024d5baa.png' },
      { name: 'Alloy Rims', icon: 'https://wsa3.pakwheels.com/assets/accessory-sub-categories/alloy-wheels-ede693121ab3d66645b269bc8c6bc7d87339ab372a9c4de9578f928abc96ad9e.png' },
      { name: 'Engine Oil', icon: 'https://wsa2.pakwheels.com/assets/accessory-sub-categories/engine-oil-dfb413ac5acad30f2922aa4c6423d4a49a33edd19153aadd6de71517bd47f7ce.png' },
      { name: 'Microfiber Cloth', icon: 'https://wsa4.pakwheels.com/assets/accessory-sub-categories/microfiber-clothes-f3d239caf03418cb23a5ad584e50d40f78e06b5a3963d6e39c43f19c39387d16.png' },
      { name: 'GPS Tracker', icon: 'https://wsa3.pakwheels.com/assets/accessory-sub-categories/gps-trackers-bb65acfd9e7eb85b57cd27bfe7dc06e61680e48b2a27bbb3db4a2f5e210a1320.png' },
      { name: 'Engines', icon: 'https://wsa2.pakwheels.com/assets/accessory-sub-categories/fuel-pump-db842e0fdd1c9c585c6820a5153d325a037506d2fbfbcf0e179544e2e535147c.png' },
      { name: 'Fuel Pump', icon: 'https://wsa4.pakwheels.com/assets/accessory-sub-categories/air-freshner-2b72637947d5ea01e15ed92449282310b0534d7193ff708ca3a09768905abf28.png' },
      { name: 'Air Freshener', icon: 'https://wsa1.pakwheels.com/assets/accessory-sub-categories/floor-mats-69242f20fac54d472fc1e1772c44d7b343c9e32ef4ca2d83b9012f34ce069aa7.png' },
      { name: 'Floor Mats', icon: 'https://wsa4.pakwheels.com/assets/accessory-sub-categories/car-top-covers-c4f4edd7f20df78779c425e8b828e6b88cf52f2ac15f9da0494f60bbe2c4b498.png' },
      { name: 'Car Cover', icon: 'https://wsa1.pakwheels.com/assets/accessory-sub-categories/headlights-f3e8b06eec0549c503e6f7d642a56e3d41e11ff2c6f8cef0477a057b4b8f329d.png' },
      { name: 'Brake Pads', icon: 'https://wsa2.pakwheels.com/assets/accessory-sub-categories/batteries-41546a0c51334d9f8f45536e61ab4ef282e058eefc28fbe759a058e0024d5baa.png' },
      { name: 'Headlights', icon: 'https://wsa1.pakwheels.com/assets/accessory-sub-categories/headlights-f3e8b06eec0549c503e6f7d642a56e3d41e11ff2c6f8cef0477a057b4b8f329d.png' },
    ],
    'Make': [
         { name: 'Car Battery', icon: 'https://wsa2.pakwheels.com/assets/accessory-sub-categories/batteries-41546a0c51334d9f8f45536e61ab4ef282e058eefc28fbe759a058e0024d5baa.png' },
      { name: 'Alloy Rims', icon: 'https://wsa3.pakwheels.com/assets/accessory-sub-categories/alloy-wheels-ede693121ab3d66645b269bc8c6bc7d87339ab372a9c4de9578f928abc96ad9e.png' },
      { name: 'Engine Oil', icon: 'https://wsa2.pakwheels.com/assets/accessory-sub-categories/engine-oil-dfb413ac5acad30f2922aa4c6423d4a49a33edd19153aadd6de71517bd47f7ce.png' },
      { name: 'Microfiber Cloth', icon: 'https://wsa4.pakwheels.com/assets/accessory-sub-categories/microfiber-clothes-f3d239caf03418cb23a5ad584e50d40f78e06b5a3963d6e39c43f19c39387d16.png' },
      { name: 'GPS Tracker', icon: 'https://wsa3.pakwheels.com/assets/accessory-sub-categories/gps-trackers-bb65acfd9e7eb85b57cd27bfe7dc06e61680e48b2a27bbb3db4a2f5e210a1320.png' },
      { name: 'Toyota', icon: 'https://cache4.pakwheels.com/system/assets/new-cars/toyota.png' },
      { name: 'Honda', icon: 'https://cache2.pakwheels.com/system/assets/new-cars/honda.png' },
      { name: 'Suzuki', icon: 'https://cache1.pakwheels.com/system/assets/new-cars/suzuki.png' },
      { name: 'KIA', icon: 'https://cache2.pakwheels.com/system/assets/new-cars/kia.png' },
      { name: 'Hyundai', icon: 'https://cache3.pakwheels.com/system/assets/new-cars/hyundai.png' },
      { name: 'MG', icon: 'https://cache1.pakwheels.com/system/assets/new-cars/mg.png' },
      { name: 'Toyota', icon: 'https://cache4.pakwheels.com/system/assets/new-cars/toyota.png' },
      { name: 'Changan', icon: 'https://cache2.pakwheels.com/system/assets/new-cars/changan.png' },
    ],
    'Brand': [
  { name: 'Asuki', icon: 'https://cache4.pakwheels.com/system/brands/logos/000/000/063/resized/open-uri20190207-25758-ir044w?1549505814' },
  { name: 'NGK', icon: 'https://cache1.pakwheels.com/system/brands/logos/000/000/057/resized/open-uri20190207-25758-jgf8fc?1549505811' },
  { name: 'Denso', icon: 'https://cache1.pakwheels.com/system/brands/logos/000/000/056/resized/open-uri20190207-25758-e6fgov?1549505811' },
  { name: 'SOGO', icon: 'https://cache3.pakwheels.com/system/brands/logos/000/000/055/resized/sogo_logo.png?1584442893' },
  { name: 'TYC', icon: 'https://cache2.pakwheels.com/system/brands/logos/000/000/053/resized/stringio.txt?1549505810' },
  { name: 'Bemaz', icon: 'https://cache3.pakwheels.com/assets/brands/resized/missing.png' },
  { name: 'Aroma', icon: 'https://cache3.pakwheels.com/system/brands/logos/000/000/026/resized/open-uri20190207-25758-mnw6kd?1549505796' },
  { name: 'MK', icon: 'https://cache2.pakwheels.com/system/brands/logos/000/000/064/resized/MK.png?1549513268' },
  { name: 'Flamingo', icon: 'https://cache3.pakwheels.com/system/brands/logos/000/000/040/resized/open-uri20190207-25758-g6zbed?1549505803' },
  { name: 'Tracking World', icon: 'https://cache4.pakwheels.com/system/brands/logos/000/000/045/resized/open-uri20190207-25758-12js3b6?1549505806' },
  { name: 'Steel Mate', icon: 'https://cache3.pakwheels.com/assets/brands/resized/missing.png' },
  { name: 'INGCO', icon: 'https://cache3.pakwheels.com/assets/brands/resized/missing.png' }
],
    'Model': [
      'Corolla', 'Civic', 'Mehran', 'City', 'Alto', 'Cultus', 'Vitz', 'Swift', 'Sportage', 'Tucson', 'Prado', 'Hilux',
      'Yaris', 'Passo', 'Wagon R', 'Mira', 'Bolan', 'Every', 'Dayz', 'Aqua', 'Vessel', 'BR-V', 'Fortuner', 'Oshan X7'
    ]
  };

  const currentItems = data[activeTab];

  // Carousel logic: Move by 1 column at a time
  const nextSlide = () => {
    // Total columns are half of total items (because 2 rows)
    const totalCols = Math.ceil(currentItems.length / 2);
    if (currentIndex < totalCols - 6) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className=" py-10 px-4 flex justify-center font-sans">
      <div className="max-w-6xl w-full">
        <h2 className="text-[22px] font-semibold text-[#434343] mb-6">
          Auto Store Car Parts & Accessories
        </h2>

        {/* Tabs */}
        <div className="flex gap-10 border-b border-gray-300 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => { setActiveTab(tab); setCurrentIndex(0); }}
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

        {/* Dynamic Content */}
        {activeTab === 'Model' ? (
          /* Model Tab: 6 Columns Text Grid */
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-4 gap-x-2">
            {currentItems.map((model, index) => (
 <div 
                key={index} 
                className="text-[#3b6598] hover:underline cursor-pointer text-[15px]"
                onClick={() => handleClick(model)}
              >                {model}
              </div>
            ))}
          </div>
        ) : (
          /* Other Tabs: Carousel with exactly 2 rows */
          <div className="relative group overflow-visible">
            {/* Arrows */}
            <button 
              onClick={prevSlide}
              className={`absolute -left-5 top-[50%] -translate-y-1/2 z-20 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md border border-gray-200 text-[#3b6598] transition-opacity ${currentIndex === 0 ? 'opacity-0' : 'opacity-100'}`}
            >
              <span className="text-2xl">‹</span>
            </button>

            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out gap-4"
                style={{ transform: `translateX(-${currentIndex * 196}px)` }} // 180px card + 16px gap
              >
                {/* grid-rows-2: Force only two rows
                   grid-flow-col: Fill columns first, then move right (essential for carousel)
                */}
                <div className="grid grid-rows-2 grid-flow-col gap-4">
                  {currentItems.map((item, index) => (
                    <div 
                      key={index} 
                      className="w-[180px] bg-white p-4 rounded-sm shadow-sm border border-transparent hover:border-[#3b6598]/30 transition-all flex flex-col items-center justify-center cursor-pointer h-40"
                    >
                      <div className="h-20 w-full flex items-center justify-center mb-3">
                        <img 
                          src={item.icon} 
                          alt={item.name} 
                          className="max-h-full max-w-[80%] object-contain hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <p className="text-[14px] font-medium text-[#434343] text-center leading-tight">
                        {item.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <button 
              onClick={nextSlide}
              className={`absolute -right-5 top-[50%] -translate-y-1/2 z-20 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md border border-gray-200 text-[#3b6598] transition-opacity ${currentIndex >= Math.ceil(currentItems.length / 2) - 6 ? 'opacity-0' : 'opacity-100'}`}
            >
              <span className="text-2xl">›</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PartsAccessories;