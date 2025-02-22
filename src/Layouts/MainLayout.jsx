import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'

export default function MainLayout() {
  return (
    <div>
      <Navbar/>
   <div className="container py-10">
   <Outlet/>
   </div>
      <Footer/>
    </div>
  )
}
