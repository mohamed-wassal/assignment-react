import React, { useEffect, useState } from "react";
import axios from "axios";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";

export default function Brands() {
  const [brands, setBrands] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getBrands();
  }, []);

  async function getBrands() {
    setIsLoading(true)
      const { data } = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/brands"
      );
      setBrands(data.data);
      setIsLoading(false)
  }
  if (isLoading) {
   return <LoadingScreen/>
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">All Brands</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12">
        {brands.map((brand, index) => (
          <div 
            key={index} 
            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center border border-gray-300 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <img 
              src={brand.image} 
              alt={brand.name} 
              className="w-56 h-[80%] object-contain rounded-xl mb-4 border border-gray-300"
            />
            <h3 className="text-2xl font-semibold text-gray-800">{brand.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
