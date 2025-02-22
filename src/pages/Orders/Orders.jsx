import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../contexts/authContext";
import axios from "axios";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";

export default function Orders() {
  const { userId } = useContext(authContext);
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!userId) return;
    getUserOrders();
  }, [userId]);

  async function getUserOrders() {
    setIsLoading(true)
  
      const { data } = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/orders/user/${userId}`
        
      );



      setOrders(data);
      setIsLoading(false)
    
  }
if (isLoading) {
  return <LoadingScreen/>
}
if (orders.length == 0) {
  return (
    <h1 className="text-4xl font-bold text-center py-10">You have no orders yet</h1>
  )
}

  return (
    <div>
      {orders.map((order, Index) => (
        <div
          key={Index}
          className="bg-gradient-to-br from-gray-50 to-gray-100 shadow-xl rounded-2xl p-6 my-6 border border-gray-300"
        >
         <div className="flex justify-between">
         <h2 className="text-2xl  font-bold text-gray-900 mb-6">
            🛒 Order #{Index + 1}
          </h2>
         
<p className="text-lg font-bold">Total Price : <span className=" text-medium font-medium text-gray-700">${order.totalOrderPrice}</span></p>
         </div>
          {order.cartItems.map((item, Index) => (
            <div
              key={Index}
              className="flex items-center gap-6 p-4 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 mb-4"
            >
               
              <img
                src={item.product.imageCover}
                alt={item.product.name}
                className="w-40  rounded-lg object-cover border border-gray-300"
              />

              <div className="flex-1 space-y-2">
                <h3 className=" text-2xl font-bold text-gray-800">
                  {item.product.title}
                </h3>
               
                <p className="text-xl font-bold">
                  Brand:{" "}
                  <span className="font-medium text-gray-700">
                    {item.product.brand.name}
                  </span>
                </p>
                <p className="text-xl font-bold">
                  Category:{" "}
                  <span className="font-medium text-gray-700">
                    {item.product.category.name}
                  </span>
                </p>


                <div className="flex items-center gap-1 text-yellow-500">
                <i className="fa-solid fa-star"></i> {item.product.ratingsAverage} (
                  {item.product.ratingsQuantity} reviews)
                </div>

                <p className="text-gray-900 font-medium">
                  Quantity: {item.count} | Price: ${item.price * item.count}
                </p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
