import React, { useEffect, useState } from "react";
import axios from "axios";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getCategories();
  }, []);

  async function getCategories() {
    setIsLoading(true)
    
      const { data } = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/categories"
      );
      setCategories(data.data);
      setIsLoading(false)
    
  }
  if (isLoading) {
   return <LoadingScreen/>
  }

  return (
    <div className="container mx-auto px-4 py-10">
   

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {categories.map((category, index) => (
        <div 
          key={index} 
          className="bg-white shadow-xl rounded-3xl p-8 flex flex-col items-center border border-gray-300 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        >
          <img 
            src={category.image} 
            alt={category.name} 
            className="w-56 h-[80%]  rounded-2xl mb-6 border border-gray-400"
          />
          <h3 className="text-2xl font-semibold text-gray-800">{category.name}</h3>
        </div>
      ))}
    </div>
  </div>
  );
}
