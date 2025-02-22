import axios from "axios";
import { Bounce, toast } from "react-toastify";

export   async function addProductToWishlist(productId , setWishlistLoading) {
    setWishlistLoading(true)
    const { data } = await axios.post("https://ecommerce.routemisr.com/api/v1/wishlist",{
      productId
    },{
      headers:{
        token: localStorage.getItem("token")
      }
    })

    setWishlistLoading(false)
    if (data.status == "success"){
      toast.success(data.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        style: {
          maxWidth: "300px", 
          width: "90%", 
          marginTop: "5%", 
        },
        });
    }
    
  }
