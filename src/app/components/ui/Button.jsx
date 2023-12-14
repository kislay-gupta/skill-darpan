import React from 'react'

function Button() {
  return (
    <div>
         <div className="flex justify-center">
          <button className="relative px-5 py-2.5 overflow-hidden font-medium text-blue-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-primary group-hover:w-full"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-primary group-hover:w-full"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-primary group-hover:h-full"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-primary group-hover:h-full"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-primary opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-300 delay-200 group-hover:text-black">
              Know More
            </span>
          </button>
        </div>
    </div>
  )
}

export default Button