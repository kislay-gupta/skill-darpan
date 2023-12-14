import React from 'react'

function CourseCard(props) {
  return (
    <div className='grid grid-cols-1 content-center '>
    <div className="m-auto hover:scale-105 hover:shadow-2xl shadow-black/30 hover:shadow-black duration-200  overflow-hidden rounded-lg shadow-lg cursor-pointer h-max w-fit md:w-72 ">
  <a href="#" className="block w-full h-full">
    <img
      alt="blog photo"
      src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg"
      className="object-cover w-full max-h-40"
    />
  </a>
  <div className="w-full h-max pt-4 bg-white ">
    <a href="#" className="block px-4 w-full h-full">
      <p className="font-medium text-indigo-500 text-sm">8 weeks</p>
      <p className="md:mb-2 text-xs md:text-lg md:font-medium  text-black">

{props.data.title}
      </p>
      <p className="font-light text-xs text-black md:text-base">
      ⭐ 4.2 |
80,433 learners
      </p>
    </a>
    <div className="flex bg-primary items-center mt-4">
      <p className='px-4 py-2'>know more</p>

      </div>
    </div>
  </div>
</div>




  )
}

export default CourseCard