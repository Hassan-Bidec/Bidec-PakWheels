"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const CarsbyMake = () => {
      const router = useRouter();
        const handleRedirect = (brand) => {
    router.push(`/motors?carMake=${encodeURIComponent(brand.name)}`);
  };

 const brands = [
  { name: "Suzuki", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR45cnS_ND9FjGIMhyZG82GJz72k8Ud6LQY_w&s" },
  { name: "Toyota", icon: "https://cache2.pakwheels.com/system/car_manufacturers/manufacturers/000/000/014/resized/Honda.png" },
  { name: "Honda", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvBzV_EHkVUhJRiDa8NYT-I6FU07DwNtpAhA&s" },
  { name: "KIA", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz13XNZHaSuBigu85OhDXd5vftXwnNwMbkOw&s" },
  { name: "Hyundai", icon: "https://cache3.pakwheels.com/system/car_manufacturers/manufacturers/000/000/016/resized/hyundai.png" },
  { name: "MG", icon: "https://cache1.pakwheels.com/system/car_manufacturers/manufacturers/000/000/060/resized/580b57fcd9996e24bc43c498.png" },
  { name: "BYD", icon: "https://cache2.pakwheels.com/system/car_manufacturers/manufacturers/000/000/136/resized/BYD.png" },
  { name: "Changan", icon: "https://cache2.pakwheels.com/system/assets/new-cars/changan.png" },
  { name: "BMW", icon: "https://cache1.pakwheels.com/system/assets/new-cars/bmw.png" },
  { name: "Audi", icon: "https://cache4.pakwheels.com/system/assets/new-cars/audi.png" },
  { name: "Porsche", icon: "https://cache4.pakwheels.com/system/assets/new-cars/porsche.png" },
  { name: "Mercedes Benz", icon: "https://cache3.pakwheels.com/system/assets/new-cars/mercedes.png" },
  { name: "Prince", icon: "https://cache1.pakwheels.com/system/assets/new-cars/prince.png" },
  { name: "DFSK", icon: "https://cache3.pakwheels.com/system/assets/new-cars/dfsk.png" },
  { name: "Isuzu", icon: "https://cache1.pakwheels.com/system/assets/new-cars/isuzu.png" },
  { name: "Haval", icon: "https://cache4.pakwheels.com/system/assets/new-cars/haval.png" },
  { name: "BAIC", icon: "https://cache1.pakwheels.com/system/assets/new-cars/baic.png" },
  { name: "JAC", icon: "https://cache1.pakwheels.com/system/assets/new-cars/jac.png" },
  { name: "Peugeot", icon: "https://cache1.pakwheels.com/system/assets/new-cars/peugeot.png" },
  { name: "ORA", icon: "https://cache1.pakwheels.com/system/assets/new-cars/ora.png" },
  { name: "Tank", icon: "https://cache1.pakwheels.com/system/assets/new-cars/tank.png" },
  { name: "JW Forland", icon: "https://cache1.pakwheels.com/system/assets/new-cars/forland.png" },
  { name: "Chery", icon: "https://cache1.pakwheels.com/system/assets/new-cars/chery.png" },
  { name: "JMC", icon: "https://cache1.pakwheels.com/system/assets/new-cars/jmc.png" }
];


  return (
    <section className=" py-12 px-10 md:px-0">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-[22px] font-semibold text-[#434343] mb-8">
          New Cars by Make
        </h2>

        {/* Grid Container */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-10 gap-x-4">
          {brands.map((make, index) => (
           <div 
              key={index} 
              onClick={() => handleRedirect(make)} // ← redirect on click
              className="flex flex-col items-center group cursor-pointer"
            >
             
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 group-hover:shadow-md transition-shadow duration-300 overflow-hidden mb-3">
                <img 
                  src={make.icon} 
                  alt={make.name} 
                  className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/50?text=' + make.name }}
                />
              </div>
              
              {/* Brand Name */}
              <p className="text-[#3b6598] text-[15px] font-medium group-hover:underline">
                {make.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarsbyMake;