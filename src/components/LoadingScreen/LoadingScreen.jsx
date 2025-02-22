
import React from 'react'

export default function LoadingScreen() {
  return (
    <div className="flex items-center justify-center h-screen">
  <div className="relative">
    <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200" />
    <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-600 animate-spin">
    </div>
  </div>
</div>

  )
}
