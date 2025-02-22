

import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import MainLayout from './Layouts/MainLayout'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import NotFound from './pages/NotFound/NotFound'
import { createHashRouter, RouterProvider } from 'react-router'
import Categories from './pages/Categories/Categories'
import Brands from './pages/Brands/Brands'
import Cart from './pages/Cart/Cart'
import CounterContextProvider from './contexts/counterContext'
import AuthContextProvider from './contexts/authContext'
import ProtectedRoute from './ProtectedRoutes/ProtectedRoute'
import ProtectedAuthRoute from './ProtectedRoutes/ProtectedAuthRoute'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import { ToastContainer } from 'react-toastify';
import Address from './pages/Address/Address'
import Orders from './pages/Orders/Orders'
import Products from './pages/Products/Products'
import Wishlist from './pages/Wishlist/Wishlist'
import ForgotPassword from './pages/ForgotPassword/ForgotPassword'
import VerifyCode from './pages/VerifyCode/VerifyCode'
import ResetPassword from './pages/ResetPassword/ResetPassword'
import ProtectedResetRoute from './ProtectedRoutes/ProtectedResetRoute'


function App(){

const router=  createHashRouter([
  {path:'',element:<MainLayout/>, children:[
    {index:true , element: <ProtectedRoute> <Home/> </ProtectedRoute>},
    {path:'/Login' , element:<ProtectedAuthRoute><Login/></ProtectedAuthRoute>},
    {path:'/Register' , element:<ProtectedAuthRoute><Register/></ProtectedAuthRoute>},
    { path: "/forgotPassword", element:<ProtectedAuthRoute><ForgotPassword/></ProtectedAuthRoute>},
    { path: "/verifyCode", element:<ProtectedResetRoute><VerifyCode /></ProtectedResetRoute> },
    {path:'/resetPassword' , element:<ProtectedResetRoute><ResetPassword/></ProtectedResetRoute>},
    {path:'/cart' , element:<ProtectedRoute><Cart/></ProtectedRoute>},
    {path:'/categories' , element:<ProtectedRoute><Categories/></ProtectedRoute>},
    {path:'/brands' , element:<ProtectedRoute><Brands/></ProtectedRoute>},
    {path:'/allorders' , element:<ProtectedRoute><Orders/></ProtectedRoute>},
    {path:'/products' , element:<ProtectedRoute><Products/></ProtectedRoute>},
    {path:'/wishlist' , element:<ProtectedRoute><Wishlist/></ProtectedRoute>},
    {path:'/address/:cartId' , element:<ProtectedRoute><Address/></ProtectedRoute>},
    {path:'/productDetails/:id' , element:<ProtectedRoute><ProductDetails/></ProtectedRoute>},
    {path:'*' , element:<NotFound/>},
  ]}
])

  return (
    <>

    <AuthContextProvider>
    <CounterContextProvider>
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer/>
    </CounterContextProvider>
   
    </AuthContextProvider>
  
    </>
  )
}

export default App
