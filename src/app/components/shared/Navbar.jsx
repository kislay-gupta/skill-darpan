"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import navbar from "@/app/constant/menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>

      <div className="sticky inset-0 z-50 text-blue-500">
        <nav className=" bg-white     w-full  z-50 flex max-h-96  flex-wrap items-center  px-2 justify-around pt-2 md:px-0">
          <a href="" className="flex  mb-2  ">
            <Image
              src="/logo.png"
              height={100}
              width={150}
              className="m-0 object-contain"
              alt="Health Optima"
              loading="lazy"
            />
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            onClick={() => setIsOpen(!isOpen)} //  Event handler for a click event that toggles the value of isOpen.
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-primary hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-primary dark:text-blue-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden   md:flex " id="navbar-default">
            <ul className="mt-4  my-auto flex   p-4 font-medium md:mt-0   md:p-0 ">
              {navbar.map((nav) => (
                <li key={nav.id}>
                  <Link
                    href={`/${
                      nav.link === "download" ? "download" : `${nav.link}`
                    }`}
                    className="duration-250  relative flex cursor-pointer
                    px-4
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
                    hover:before:opacity-100"
                  >
                    {nav.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        {isOpen && (
          <div
            className={`absolute ease-in-out duration-300 z-50 mt-3 flex w-full flex-col bg-blue-200 px-3 py-4 text-center text-base font-semibold md:hidden${
              isOpen ? "translate-x-0 " : "translate-x-full"
            }`}
          >
            {navbar.map((data) => (
              <Link
                href={`/${
                  data.link === "download" ? "download" : `${data.link}`
                }`}
                onClick={() => setIsOpen(false)}
                key={data.id}
                className="block py-2 pl-3 pr-4 text-gray-800 hover:rounded hover:bg-blue-300 hover:text-gray-900"
              >
                {data.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
