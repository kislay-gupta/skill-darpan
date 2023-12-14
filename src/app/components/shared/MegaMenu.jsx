"use client";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

import {
  mostPopular,
  programming,
  coreEng,
  dataScience,
  business,
  design,
  creativeArts,
  languages,
  careerDevelopment,
  architecture,
  placement,
  resource,
} from "@/app/constant/megaMenu";
import navbar from "@/app/constant/menu";
import Image from "next/image";
function MegaMenu() {
  const [isHovering, setIsHovering] = useState("Most Popular");

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div className="nav z-50 hidden md:block sticky top-0 bg-white">
      <header class="container  mx-auto px-2 py-3 flex items-center justify-between">
        <a href="#" class=" font-bold text-black text-xl">
          <Image
            src="/logo.png"
            height={100}
            width={150}
            className="m-0 object-contain"
            alt="Health Optima"
            loading="lazy"
          />
        </a>
        <nav className="m-auto">
          <ul class="flex items-center justify-center font-semibold">
            <li class="relative group px-1 py-2">

              <button className="relative px-5 py-2.5 overflow-hidden font-medium text-white bg-black border border-gray-100 rounded-lg shadow-inner group">
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-primary group-hover:w-full"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-primary group-hover:w-full"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-primary group-hover:h-full"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-primary group-hover:h-full"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-primary opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-300 delay-200 group-hover:text-black">
            Category
            </span>
          </button>
              <div class="absolute lg:-left-4 top-9 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible rounded-b-lg group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-max h-fit bg-white transform">
                <div class="relative  top-4 p-6  shadow-xl w-fit">
                  <div class="relative  h-max z-10">
                    <div class="grid grid-cols-2 gap-6">
                    <div className=" h-[22rem] overflow-y-auto">
                        <ul className=" space-y-1">
                        {navbar.map((nav, id) => {
                            return (
                              <>
                                <li className="py-1">
                                  <a
                                    href=""
                                    className="relative after:absolute hover:text-blue-500 after:bg-blue-500 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
                                    onMouseOver={() => setIsHovering(nav.name)}
                                  >
                                    {nav.name}
                                  </a>
                                </li>
                              </>
                            );
                          })}
                        </ul>
                      </div>
                      <div className="  text-[12px] font-medium leading-loose  h-[22rem] overflow-y-auto">
                        {isHovering == "Most Popular" && (
                          <ul class="mt-3 ">
                            {mostPopular.map((data) => {
                              return (
                                <>
                                  <li className="w-52 leading-loose">
                                    <a
                                      href="#"
                                      class="relative after:absolute hover:text-blue-500 after:bg-blue-500 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
                                    >
                                      {data.title}
                                    </a>
                                  </li>
                                </>
                              );
                            })}
                          </ul>
                        )}
                        {isHovering == "Programming" && (
                          <ul class="mt-3">
                            {programming.map((data) => {
                              return (
                                <>
                                  <li className="w-max leading-loose">
                                    <a
                                      href="#"
                                      class="relative after:absolute hover:text-blue-500 after:bg-blue-500 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
                                    >
                                      {data.title}
                                    </a>
                                  </li>
                                </>
                              );
                            })}
                          </ul>
                        )}
                        {isHovering == "Business & Management" && (
                          <ul class="mt-3">
                            {business.map((data) => {
                              return (
                                <>
                                  <li className="w-max leading-loose">
                                    <a
                                      href="#"
                                      class="relative after:absolute hover:text-blue-500 after:bg-blue-500 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
                                    >
                                      {data.title}
                                    </a>
                                  </li>
                                </>
                              );
                            })}
                          </ul>
                        )}
                        {isHovering == "Core Engineering" && (
                          <ul class="mt-3">
                            {coreEng.map((data) => {
                              return (
                                <>
                                  <li className="w-max leading-loose">
                                    <a
                                      href="#"
                                      class="relative after:absolute hover:text-blue-500 after:bg-blue-500 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
                                    >
                                      {data.title}
                                      {/* <p class="text-gray-500 font-normal">
                                {data.subtitle}
                              </p> */}
                                    </a>
                                  </li>
                                </>
                              );
                            })}
                          </ul>
                        )}
                        {isHovering == "Data Science" && (
                          <ul class="mt-3">
                            {dataScience.map((data) => {
                              return (
                                <>
                                  <li className="w-max leading-loose">
                                    <a
                                      href="#"
                                      class="relative after:absolute hover:text-blue-500 after:bg-blue-500 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
                                    >
                                      {data.title}
                                    </a>
                                  </li>
                                </>
                              );
                            })}
                          </ul>
                        )}
                        {isHovering == "Design" && (
                          <ul class="mt-3">
                            {design.map((data) => {
                              return (
                                <>
                                  <li className="w-max leading-loose">
                                    <a
                                      href="#"
                                      class="relative after:absolute hover:text-blue-500 after:bg-blue-500 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
                                    >
                                      {data.title}
                                    </a>
                                  </li>
                                </>
                              );
                            })}
                          </ul>
                        )}

                        {isHovering == "Language" && (
                          <ul class="mt-3">
                            {languages.map((data) => {
                              return (
                                <>
                                  <li className="w-max leading-loose">
                                    <a
                                      href="#"
                                      class="relative after:absolute hover:text-blue-500 after:bg-blue-500 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
                                    >
                                      {data.title}
                                    </a>
                                  </li>
                                </>
                              );
                            })}
                          </ul>
                        )}
                        {isHovering == "Career Development" && (
                          <ul class="mt-3">
                            {careerDevelopment.map((data) => {
                              return (
                                <>
                                  <li className="w-max leading-loose">
                                    <a
                                      href="#"
                                      class="relative after:absolute hover:text-blue-500 after:bg-blue-500 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
                                    >
                                      {data.title}
                                    </a>
                                  </li>
                                </>
                              );
                            })}
                          </ul>
                        )}
                        {isHovering == "Architecture" && (
                          <ul class="mt-3">
                            {architecture.map((data) => {
                              return (
                                <>
                                  <li className="w-max leading-loose">
                                    <a
                                      href="#"
                                      class="relative after:absolute hover:text-blue-500 after:bg-blue-500 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
                                    >
                                      {data.title}
                                    </a>
                                  </li>
                                </>
                              );
                            })}
                          </ul>
                        )}

                        {isHovering == "Placement Guarantee Courses" && (
                          <ul class="mt-3">
                            {placement.map((data) => {
                              return (
                                <>
                                  <li className="w-max leading-loose">
                                    <a
                                      href="#"
                                      class="relative after:absolute hover:text-blue-500 after:bg-blue-500 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
                                    >
                                      {data.title}
                                    </a>
                                  </li>
                                </>
                              );
                            })}
                          </ul>
                        )}
                      </div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li class="px-1 py-2 relative group">
              <a
                href="#"
                class="duration-250  relative flex cursor-pointer
                px-2
                py-2
                transition-all
                before:absolute
                before:-bottom-0.5
                before:left-1/2
                before:h-1
                before:w-0
                before:-translate-x-1/2
                before:rounded-full
                before:bg-gradient-to-r
                before:from-blue-600
                before:via-blue-400
                before:to-blue-500
                before:opacity-0
                before:transition-all
                before:duration-500
                before:content-['']
                hover:text-primary
                hover:before:w-3/4
                hover:before:opacity-100 "
                aria-haspopup="true"
              >
                Courses
              </a>
            </li>
            <li class="px-1 py-2 relative group">
              <button
                class="duration-250  relative flex cursor-pointer
                px-2
                py-2
                transition-all
                before:absolute
                before:-bottom-0.5
                before:left-1/2
                before:h-1
                before:w-0
                before:-translate-x-1/2
                before:rounded-full
                before:bg-gradient-to-r
                before:from-blue-600
                before:via-blue-400
                before:to-blue-500
                before:opacity-0
                before:transition-all
                before:duration-500
                before:content-['']
                hover:text-primary
                hover:before:w-3/4
                hover:before:opacity-100 "
                aria-haspopup="true"
              >
                Resources
              </button>
              <div class="absolute lg:-left-2 top-3 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[220px] transform">
                <div class="relative top-6 p-6 bg-white rounded-b-xl shadow-xl w-full">
                  <div class="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm"></div>
                  <div class="relative z-10">
                    <ul class="text-[15px] space-y-1">
                      {resource.map((nav, id) => {
                        return (
                          <>
                            <li>
                              <a
                                href="#"
                                class="relative after:absolute hover:text-blue-500 after:bg-blue-500 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
                              >
                                {nav.title}
                              </a>
                            </li>
                          </>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li class="px-1 py-2 relative group">
              <a
                href="#"
                class="duration-250  relative flex cursor-pointer
                px-2
                py-2
                transition-all
                before:absolute
                before:-bottom-0.5
                before:left-1/2
                before:h-1
                before:w-0
                before:-translate-x-1/2
                before:rounded-full
                before:bg-gradient-to-r
                before:from-blue-600
                before:via-blue-400
                before:to-blue-500
                before:opacity-0
                before:transition-all
                before:duration-500
                before:content-['']
                hover:text-primary
                hover:before:w-3/4
                hover:before:opacity-100 "
                aria-haspopup="true"
              >
                Courses
              </a>
            </li>
            <li class="px-1 py-2 relative group">
              <a
                href="#"
                class="duration-250  relative flex cursor-pointer
                px-2
                py-2
                transition-all
                before:absolute
                before:-bottom-0.5
                before:left-1/2
                before:h-1
                before:w-0
                before:-translate-x-1/2
                before:rounded-full
                before:bg-gradient-to-r
                before:from-blue-600
                before:via-blue-400
                before:to-blue-500
                before:opacity-0
                before:transition-all
                before:duration-500
                before:content-['']
                hover:text-primary
                hover:before:w-3/4
                hover:before:opacity-100 "
                aria-haspopup="true"
              >
                Job
              </a>
            </li>
            <li class="px-1 py-2 relative group">
              <a
                href="#"
                class="duration-250  relative flex cursor-pointer
                px-2
                py-2
                transition-all
                before:absolute
                before:-bottom-0.5
                before:left-1/2
                before:h-1
                before:w-0
                before:-translate-x-1/2
                before:rounded-full
                before:bg-gradient-to-r
                before:from-blue-600
                before:via-blue-400
                before:to-blue-500
                before:opacity-0
                before:transition-all
                before:duration-500
                before:content-['']
                hover:text-primary
                hover:before:w-3/4
                hover:before:opacity-100 "
                aria-haspopup="true"
              >
                Gallery
              </a>
            </li>
          </ul>
        </nav>
        <nav>
          <ul className="flex gap-2">
            <li className="m-auto">
              <button className="group relative px-4 py-2 font-medium text-black transition-colors duration-[400ms]  ">
                <span>Login</span>

                {/* TOP */}
                <span className="absolute left-0 top-0 h-[2px] w-0 bg-primary transition-all duration-100 group-hover:w-full" />

                {/* RIGHT */}
                <span className="absolute right-0 top-0 h-0 w-[2px] bg-primary transition-all delay-100 duration-100 group-hover:h-full" />

                {/* BOTTOM */}
                <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-primary transition-all delay-200 duration-100 group-hover:w-full" />

                {/* LEFT */}
                <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-primary transition-all delay-300 duration-100 group-hover:h-full" />
              </button>
              </li>
              <li className="m-auto">
              <button className="group relative px-4 py-2 font-medium text-black transition-colors duration-[400ms]  ">
                <span><BsSearch />
</span>

                {/* TOP */}
                <span className="absolute left-0 top-0 h-[2px] w-0 bg-blue-600 transition-all duration-100 group-hover:w-full" />

                {/* RIGHT */}
                <span className="absolute right-0 top-0 h-0 w-[2px] bg-blue-600 transition-all delay-100 duration-100 group-hover:h-full" />

                {/* BOTTOM */}
                <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-blue-600 transition-all delay-200 duration-100 group-hover:w-full" />

                {/* LEFT */}
                <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-blue-600 transition-all delay-300 duration-100 group-hover:h-full" />
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default MegaMenu;
