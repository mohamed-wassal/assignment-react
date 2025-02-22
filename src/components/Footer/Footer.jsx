import React from 'react'

export default function Footer() {
  return (

    
    <footer className="bg-gray-100 border-t border-gray-300">
      <div className="container  mx-auto px-4">
        <div className="flex flex-wrap text-left  lg:text-left">
          <div className="w-full lg:w-6/12 px-4 mb-6 lg:mb-0">
            <h4 className="text-2xl font-semibold text-gray-700">
              Let's keep in touch!
            </h4>
            <h5 className="text-md mt-2 text-gray-600">
              Find us on any of these platforms, we respond in 1-2 business days.
            </h5>
            <div className="mt-4 flex space-x-3">
              <button className="bg-white text-blue-500 p-3 rounded-full shadow-md hover:bg-blue-100 transition">
                <i className="fab fa-twitter"></i>
              </button>
              <button className="bg-white text-blue-700 p-3 rounded-full shadow-md hover:bg-blue-100 transition">
                <i className="fab fa-facebook"></i>
              </button>
              <button className="bg-white text-pink-500 p-3 rounded-full shadow-md hover:bg-pink-100 transition">
                <i className="fab fa-dribbble"></i>
              </button>
              <button className="bg-white text-gray-800 p-3 rounded-full shadow-md hover:bg-gray-200 transition">
                <i className="fab fa-github"></i>
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4 flex flex-wrap ">
            <div className="w-1/2 sm:w-1/3 px-2 mb-4">
              <h6 className="text-gray-500 text-sm font-semibold mb-2">Useful Links</h6>
              <ul className="text-gray-600 space-y-2">
                <li><a href="#" className="hover:text-gray-900">About Us</a></li>
                <li><a href="#" className="hover:text-gray-900">Blog</a></li>
                <li><a href="#" className="hover:text-gray-900">Github</a></li>
                <li><a href="#" className="hover:text-gray-900">Free Products</a></li>
              </ul>
            </div>
            <div className="w-1/2 sm:w-1/3 px-2 mb-4">
              <h6 className="text-gray-500 text-sm font-semibold mb-2">Other Resources</h6>
              <ul className="text-gray-600 space-y-2">
                <li><a href="#" className="hover:text-gray-900">MIT License</a></li>
                <li><a href="#" className="hover:text-gray-900">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gray-900">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Notus JS by Creative Tim.
        </div>
      </div>
    </footer>
  )
}
