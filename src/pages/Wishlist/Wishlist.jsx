import axios from 'axios'
import React, { useEffect, useState } from 'react'
import WishlistProduct from '../../components/WishlistProduct/WishlistProduct'
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen'
import { Bounce, toast } from 'react-toastify'

export default function Wishlist() {
    const [wishlistData, setWishlistData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        getUserWishlist()
    },[])
async function getUserWishlist() {
    setIsLoading(true)
    const { data } = await axios.get("https://ecommerce.routemisr.com/api/v1/wishlist",{
        headers: {
            token: localStorage.getItem("token")
        }
    })



    setWishlistData(data)
    setIsLoading(false)
}

async function removeSpecificWishlistItem(productId , setIsLoading) {
    setIsLoading(true)
    const { data } = await axios.delete("https://ecommerce.routemisr.com/api/v1/wishlist/" + productId,{
        headers: {
         token: localStorage.getItem("token")   
        }
        
    })
    if (data.status == "success"){
        toast.success(data.message, {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
      }

    setWishlistData(data)
  
    getUserWishlist()
    setIsLoading(false)
    
    }



if (isLoading) {
    return <LoadingScreen/>
    
}

  if (wishlistData.count == 0) {
    return <h1 className='text-5xl text-center font-bold py-10'>Your wish list is empty</h1>
  }
  return (
    <>
  <h1 className="mb-10 text-center text-4xl font-bold">My Wish List</h1>
  <div className="justify-center px-6 md:flex md:space-x-6 xl:px-0">
    <div className="rounded-lg md:w-3/4">
      
    {
        wishlistData?.data.map((product,index)=>{
        return(
<WishlistProduct key={index} product={product} removeSpecificWishlistItem={removeSpecificWishlistItem}/>
        ) 
        })
        
      }
    </div>

  
  </div>
</>

  )
}
