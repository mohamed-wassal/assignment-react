import React, {  useEffect, useState } from 'react'

import axios from 'axios'
import Product from '../../components/Product/Product';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';

export default function Home() {
const [Products, setProducts] = useState([]);
const [isLoading, setIsLoading] = useState(true)


  useEffect(()=>{
    getAllProducts()
  },[])
  
async function getAllProducts(){
  setIsLoading(true)
const{data}=await axios.get("https://ecommerce.routemisr.com/api/v1/products");
setProducts(data.data);
setIsLoading(false)

} 
if (isLoading) {
  return <LoadingScreen/>
  
}


  return (
<div>
  <div className="grid  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">

{
  Products.map((product,index)=>{
    return <Product key={index} product={product}/>

  
  })
}

</div>

</div>
    

  )
}