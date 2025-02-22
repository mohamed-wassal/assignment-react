import React, { useContext } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@heroui/react";
import { NavLink, useNavigate } from 'react-router-dom';
import { counterContext } from '../../contexts/counterContext';
import { authContext } from '../../contexts/authContext';





export default function NavbarComponent() {
  
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
   const {counter}=useContext(counterContext)
  const {isLoggedIn,setIsLoggedIn}= useContext(authContext)
const navigate =useNavigate()

const menuItems = [
  { path: "/", label: "Home" },
  { path: "/categories", label: "Categories" },
  { path: "/brands", label: "Brands" },
  { path: "/products", label: "Products" },
  { path: "/cart", label: "Cart" },
  { path: "/wishlist", label: "Wishlist" },
  { path: "/allorders", label: "Your Orders" },
];
function logOut(){
  setIsLoggedIn(false);
  localStorage.removeItem("token");
  navigate("/login")
}
  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} isBordered shouldHideOnScroll>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden"
        />
        <NavbarBrand>
    
          <p className="font-bold text-inherit text-3xl "><i className="fa-solid fa-cart-shopping"></i> FreshCart </p>
        </NavbarBrand>
      </NavbarContent>


      {
        isLoggedIn &&
        <NavbarContent className="hidden lg:flex gap-2 " justify="center">
      {menuItems.map((item, index) => (
  <NavbarItem key={index}>
    <NavLink
      className="transition-colors rounded-xl p-2 bg-gray-700 text-white hover:bg-white hover:text-black"
      color="foreground"
      to={item.path}
    >
      {item.label}
    </NavLink>
  </NavbarItem>
))}
       
      </NavbarContent>
      }


      <NavbarContent justify="end">
        {
          isLoggedIn ?
<NavbarItem>
          <Button   onPress={logOut} href="#" variant="flat" className='bg-danger-400 text-white'><i className="fa-solid fa-right-from-bracket"></i>
          Log Out
          </Button>
        </NavbarItem>
        :
<>
<NavbarItem className="flex">
          <NavLink to={"/Login"} className={"transition-colors rounded-xl p-2 bg-gray-700 text-white hover:bg-white hover:text-black"}>Login</NavLink>
        </NavbarItem>
        <NavbarItem>
      
          <Button as={NavLink} to="/register" color="primary" variant="flat">
  Sign Up
</Button>
        </NavbarItem>
</>
        }
      



       
       
      </NavbarContent>
      {
        isLoggedIn &&
        <NavbarMenu>
       {menuItems.map((item, index) => (
  <NavbarMenuItem onClick={() => setIsMenuOpen(false)} key={`${item.path}-${index}`}>
    <NavLink className="w-full font-bold" color={"foreground"} to={item.path} size="lg">
      {item.label}
    </NavLink>
  </NavbarMenuItem>
))}
      </NavbarMenu>}
    </Navbar>
  )
}
