import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../../components/Product/Product";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllProducts();
    getAllCategories();
  }, []);

  async function getAllProducts() {
    setIsLoading(true);
    const { data } = await axios.get("https://ecommerce.routemisr.com/api/v1/products");
    setProducts(data.data);
    setIsLoading(false);
  }

  async function getAllCategories() {
    const { data } = await axios.get("https://ecommerce.routemisr.com/api/v1/categories");
    setCategories(data.data);
  }

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="container mx-auto px-4">
      
      <div className="mb-8 relative ">
        <Swiper
          pagination={{ clickable: true, el: ".custom-pagination" }}
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 3000 }}
          spaceBetween={5}
          slidesPerGroup={2}
          slidesPerView={5}
          breakpoints={{
            1024: { slidesPerView: 5 }, 
            768: { slidesPerView: 3 },  
            480: { slidesPerView: 3}, 
            0: { slidesPerView: 2 }, 
          }}
          className="relative"
        >
          {categories.map((category, index) => (
            <SwiperSlide key={index} className="flex flex-col items-center">
              <img
                src={category.image}
                alt={category.name}
                className="w-40 h-40  rounded-lg shadow-md"
              />
              <h3 className="text-center mt-2 font-bold">{category.name}</h3>
            </SwiperSlide>
          ))}
        </Swiper>
    
        <div className="custom-pagination mt-4 flex justify-center"></div>
      </div>

     
      <div className="grid xl:grid-cols-4   lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-3">
        {products.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

