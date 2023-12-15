import Link from 'next/link'
import React from 'react'

function Page() {
  return (
    <div>
        <>
  {/* Section Blog */}
  <section>
    {/* Blog Container */}
    <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
      {/* Blog Component */}
      <div className="flex flex-col items-center">
        {/* Blog Title */}
        <h2 className="max-w-3xl text-center text-3xl font-bold md:text-5xl">
          The latest and greatest news with Flowspark
        </h2>
        <p className="mb-12 mt-4 text-[#636262]">
          Lorem ipsum dolor sit amet elit ut aliquam
        </p>
        {/* Blog Content */}
        <div className="mb-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {/* Blog Item */}
          <a
            href="#"
            className="flex w-full flex-col gap-4 rounded-md border border-solid border-[#dfdfdf] px-4 py-8 text-black md:max-w-xs md:px-0 md:py-0"
          >
            <img
              src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635b3e73014d2b281b443989_Rectangle%2024.png"
              alt=""
              className="inline-block h-60 w-full object-cover"
            />
            <div className="px-6 py-4">
              <p className="mb-4 text-xs font-semibold uppercase text-[#636262]">
                lifestyle
              </p>
              <p className="mb-4 text-xl font-semibold">
                The latest news with Flowspark
              </p>
              <p className="mb-6 text-[#636262]">
                Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit
                amet luctus venenatis elit ut aliquam, purus sit amet luctus
                venenatis
              </p>
              <div className="mx-auto flex max-w-lg flex-row items-start">
              <Link href="/blog/The-latest-news-with-Flowspark" className="relative px-4 py-2 overflow-hidden font-medium text-white bg-black border border-gray-100 rounded-lg shadow-inner group">
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-primary group-hover:w-full"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-primary group-hover:w-full"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-primary group-hover:h-full"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-primary group-hover:h-full"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-primary opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-300 delay-200 group-hover:text-black">
            Read
            </span>
          </Link>

              </div>
            </div>
          </a>
          {/* Blog Item */}
          <a
            href="#"
            className="flex w-full flex-col gap-4 rounded-md border border-solid border-[#dfdfdf] px-4 py-8 text-black md:max-w-xs md:px-0 md:py-0"
          >
            <img
              src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635b3e74b505e1c72d8ec615_Rectangle%2024-2.png"
              alt=""
              className="inline-block h-60 w-full object-cover"
            />
            <div className="px-6 py-4">
              <p className="mb-4 text-xs font-semibold uppercase text-[#636262]">
                lifestyle
              </p>
              <p className="mb-4 text-xl font-semibold">
                The latest news with Flowspark
              </p>
              <p className="mb-6 text-[#636262]">
                Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit
                amet luctus venenatis elit ut aliquam, purus sit amet luctus
                venenatis
              </p>
              <div className="mx-auto flex max-w-lg flex-row items-start">

              <button className="relative px-4 py-2 overflow-hidden font-medium text-white bg-black border border-gray-100 rounded-lg shadow-inner group">
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-primary group-hover:w-full"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-primary group-hover:w-full"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-primary group-hover:h-full"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-primary group-hover:h-full"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-primary opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-300 delay-200 group-hover:text-black">
            Read
            </span>
          </button>
              </div>
            </div>
          </a>
          {/* Blog Item */}
          <a
            href="#"
            className="flex w-full flex-col gap-4 rounded-md border border-solid border-[#dfdfdf] px-4 py-8 text-black md:max-w-xs md:px-0 md:py-0"
          >
            <img
              src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635b3e771d90b7a0fab56547_Rectangle%2024-1.png"
              alt=""
              className="inline-block h-60 w-full object-cover"
            />
            <div className="px-6 py-4">
              <p className="mb-4 text-xs font-semibold uppercase text-[#636262]">
                lifestyle
              </p>
              <p className="mb-4 text-xl font-semibold">
                The latest news with Flowspark
              </p>
              <p className="mb-6 text-[#636262]">
                Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit
                amet luctus venenatis elit ut aliquam, purus sit amet luctus
                venenatis
              </p>
              <div className="mx-auto flex max-w-lg flex-row items-start">

              <button className="relative px-4 py-2 overflow-hidden font-medium text-white bg-black border border-gray-100 rounded-lg shadow-inner group">
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-primary group-hover:w-full"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-primary group-hover:w-full"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-primary group-hover:h-full"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-primary group-hover:h-full"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-primary opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-300 delay-200 group-hover:text-black">
            Read
            </span>
          </button>

              </div>

            </div>
          </a>
        </div>
        {/* Blog Button */}

      </div>
    </div>
  </section>
</>

    </div>
  )
}

export default Page