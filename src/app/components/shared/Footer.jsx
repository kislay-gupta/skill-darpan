import { architecture, business, careerDevelopment, coreEng,  dataScience, design, languages, placement, programming } from '@/app/constant/megaMenu'
import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <footer class="text-black bg-primary/70 body-font">
  <div class="container px-5 py-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <Image
            src="/logo.png"
            height={100}
            width={150}
            className="m-0 object-contain"
            alt="Health Optima"
            loading="lazy"
          />
      </a>
      <p class="mt-2 text-sm text-gray-500">Learn. Skill. Success</p>
    </div>
    <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Programming</h2>
        <nav class="list-none mb-10">
          {programming.map((data,id)=>{
            return(
              <>
               <li>
            <a class="relative after:absolute  after:bg-blue-500 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">{data.title}</a>
          </li>
              </>
            )
          })}


        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Business & Management</h2>
        <nav class="list-none mb-10">
        {business.map((data,id)=>{
            return(
              <>
               <li>
            <a class="relative after:absolute  after:bg-blue-500 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">{data.title}</a>
          </li>
              </>
            )
          })}

        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Core Engineering</h2>
        <nav class="list-none mb-10">
        {coreEng.map((data,id)=>{
            return(
              <>
               <li>
            <a class="relative after:absolute  after:bg-blue-500 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">{data.title}</a>
          </li>
              </>
            )
          })}

        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Data Science</h2>
        <nav class="list-none mb-10">
        {dataScience.map((data,id)=>{
            return(
              <>
               <li>
            <a class="relative after:absolute  after:bg-blue-500 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">{data.title}</a>
          </li>
              </>
            )
          })}

        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Design</h2>
        <nav class="list-none mb-10">
        {design.map((data,id)=>{
            return(
              <>
               <li>
            <a class="relative after:absolute  after:bg-blue-500 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">{data.title}</a>
          </li>
              </>
            )
          })}

        </nav>
      </div>

      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Language</h2>
        <nav class="list-none mb-10">
        {languages.map((data,id)=>{
            return(
              <>
               <li>
            <a class="relative after:absolute  after:bg-blue-500 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">{data.title}</a>
          </li>
              </>
            )
          })}

        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Career Development</h2>
        <nav class="list-none mb-10">
        {careerDevelopment.map((data,id)=>{
            return(
              <>
               <li>
            <a class="relative after:absolute  after:bg-blue-500 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">{data.title}</a>
          </li>
              </>
            )
          })}

        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Architecture</h2>
        <nav class="list-none mb-10">
        {architecture.map((data,id)=>{
            return(
              <>
               <li>
            <a class="relative after:absolute  after:bg-blue-500 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">{data.title}</a>
          </li>
              </>
            )
          })}

        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Placement Guarantee courses</h2>
        <nav class="list-none mb-10">
        {placement.map((data,id)=>{
            return(
              <>
               <li>
            <a class="relative after:absolute  after:bg-blue-500 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">{data.title}</a>
          </li>
              </>
            )
          })}

        </nav>
      </div>
    </div>
  </div>
  <div class=" mt-0 w-full [border-bottom:1.7px_solid_rgb(0,_0,_0)]"></div>
    <div class="flex mb-4 flex-row justify-center ">
      <div class="text-center mx-auto font-semibold max-[991px]:ml-0 max-[991px]:mr-0 max-[991px]:py-1 max-[479px]:mb-4 sm:text-center">
        <a href="#" class="relative  px-4  after:absolute  after:bg-blue-500 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">About</a>
        <a href="#" class="relative px-4  after:absolute  after:bg-blue-500 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">Features</a>
        <a href="#" class="relative px-4  after:absolute  after:bg-blue-500 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">Became an Instructor</a>
        <a href="#" class="relative  px-4 after:absolute  after:bg-blue-500 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">Career</a>
        <a href="#" class="relative  px-4 after:absolute  after:bg-blue-500 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">Help</a>
      </div>

    </div>
  <div class="bg-gray-100">
    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p class="text-gray-500 text-sm text-center sm:text-left">© 2023 Skill Darpan —
        <a href="" rel="noopener noreferrer" class="text-black ml-1" target="_blank">@Diptech techonologies pvt ltd</a>
      </p>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a class="text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>

  )
}

export default Footer