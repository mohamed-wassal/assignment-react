 import { Button } from '@heroui/react';
import React, { useState } from 'react'
import { addProductToCart } from '../../Services/cartServices';

export default function WishlistProduct({product , removeSpecificWishlistItem}) {
    const [isLoading, setIsLoading] = useState(false)
    const [addLoading, setAddLoading] = useState(false)
    
  return (
    <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
    <img src={product.imageCover} alt={product.title} className="w-full rounded-lg sm:w-40" />
    <div className="ml-4 flex w-full justify-between">
      <div className="mt-5 sm:mt-0 sm:pt-10  sm:flex sm:flex-col gap-3  ">
        <h2 className="text-lg font-bold text-gray-900">{product.title}</h2>
        <p className="mt-1 text-xl text-green-700 font-bold">${product.price}</p>
        <Button isLoading={isLoading} onPress={() => removeSpecificWishlistItem(product._id , setIsLoading)}  className={"w-fit"} color='danger'>Remove
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-3 w-3 cursor-pointer duration-150 hover:text-red-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />

          </svg>
      
       </Button>
      </div>
  
    
        <div className="flex items-center gap-1  space-x-4">
      <Button
                onPress={() => addProductToCart(product._id, setAddLoading)}
                isLoading={addLoading}
                className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Add to cart
              </Button>
      </div>
    </div>
  </div>
  )
}