import React from 'react'

function loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black  z-50">
    <div className="animate-spin rounded-full h-24 w-24 border-8 border-white border-opacity-25 border-t-transparent"></div>
  </div>
  )
}

export default loading
