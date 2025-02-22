import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white text-center px-4">
    <h1 className="text-9xl font-bold text-red-500 animate-bounce">404</h1>
    <h2 className="text-3xl font-semibold mt-4">Oops! Page Not Found</h2>
    <p className="text-gray-400 mt-2">The page you're looking for doesn't exist.</p>
    <Link
      to="/"
      className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition transform hover:scale-105"
    >
      Back to Home
    </Link>
  </div>
  )
}
