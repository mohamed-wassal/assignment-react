import { Button, Input  } from '@heroui/react'
import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import * as Yup from "yup"

export default function Address() {

const [isLoding, setisLoding] = useState(false)


const {cartId}=useParams()

const initialValues={
    details: "",
    city :"",
phone: "",
 
}
async function checkOut() {


    setisLoding(true)
    const { data } = await axios.post(
      "https://ecommerce.routemisr.com/api/v1/orders/checkout-session/"+ cartId, {
        
          shippingAddress : values
      },{
        headers:{
          token: localStorage.getItem("token")
        }, params:{
          url:"http://localhost:5173"
        }
       
      })
      setisLoding(false)
      location.href= data.session.url ;
      

  }




 const  validationSchema = Yup.object({

    details:Yup.string().required(" Details is required"),
   city:Yup.string().required(" city is required"),
 
  phone:Yup.string().required("phone is required").matches(/^01[0-9]{9}$/,"invalid phone number"),
  
})


 const {values,handleChange ,handleSubmit , errors, touched,handleBlur}=  useFormik({
  initialValues,
  onSubmit :checkOut,
  validationSchema,
})






  return (
    <div className='sm:w-2/3 mx-auto'>
   <h1 className='text-3xl font-bold'>Enter Your Address</h1>

 <form onSubmit={handleSubmit} >
 <div className='py-5 grid md:grid-cols-2 gap-4'>
   <Input isInvalid={touched.details && errors.details} errorMessage={errors.details}   name='details' value={values.details} onChange={handleChange} onBlur={handleBlur} className='md:col-span-2' label="Details" type="text" variant='bordered' />

   <Input  isInvalid={touched.city && errors.city} errorMessage={errors.city} name='city' value={values.city} onChange={handleChange} onBlur={handleBlur} className='md:col-span-2'  label="City" type="text" variant='bordered' />
   <Input  isInvalid={touched.phone && errors.phone} errorMessage={errors.phone} name='phone' value={values.phone} onChange={handleChange} onBlur={handleBlur} className='md:col-span-2'  label="Phone" type="tel" variant='bordered' />
   
 
   <Button disabled={isLoding} type='submit' className='md:col-span-2' isLoading={isLoding} color="primary">
Place Order
    </Button>
   
   </div>
   </form>

    </div>
  )
}
