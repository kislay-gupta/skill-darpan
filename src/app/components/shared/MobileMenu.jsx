"use client"
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,

  } from "@/components/ui/accordion"
import Image from 'next/image';
import { resource } from '@/app/constant/megaMenu';

function MobileMenu() {
    const [nav, setNav] = useState(false);
    const fNav = () => {
      setNav(!nav);
      // console.log("true");
    };
    const [subMenu, setSubMenu] = useState(false);
    const onClick = {};
    const [showSidebar, setShowSidebar] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
      document.addEventListener('click', handleClickOutside);
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, []);

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    const handleMenuClick = (event) => {
      event.preventDefault();
      setMenuOpen(!isMenuOpen);
    };
  return (
    <div className='nav z-40 md:hidden  sticky top-0 bg-white'>
        <div className=" flex px-2 justify-end    w-full    h-16 bg-white md:hidden py-1 ">
        <div className="relative block flex-1 mx-auto    my-auto  text-xl text-blue-600 font-bold">
        <Link href="/"><Image src="/logo.png" height={100} alt='logo' width={100}/> </Link>
          </div>
          <button
              className={`relative z-50 order-10 block h-10 w-10 self-center lg:hidden
              ${
                showSidebar
                  ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                  : ""
              }
            `}
              onClick={() => setShowSidebar(!showSidebar)}
              aria-expanded={showSidebar ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
              </div>
            </button>

        </div>
        <div
          className={` top-10  right-0 w-2/3 bg-white px-4   text-black fixed h-full z-30  ease-in-out duration-300 ${showSidebar ? "translate-x-0 " : "translate-x-full"
            }`}
        >
            <Accordion type="multiple" className=" overscroll-auto my-8 mx-auto w-full shadow-none"  collapsible="true">
            <AccordionItem className="shadow-none" value="item-8">
    <AccordionTrigger className="shadow-none w-full"><Link href="/" onClick={() => setShowSidebar(!showSidebar)} >Home </Link> </AccordionTrigger>
    <AccordionContent>


    </AccordionContent>
  </AccordionItem>
  <AccordionItem className="shadow-none" value="item-9">
    <AccordionTrigger className="shadow-none w-full"> <Link href='' onClick={() => setShowSidebar(!showSidebar)}>About</Link></AccordionTrigger>
    <AccordionContent>


    </AccordionContent>
  </AccordionItem>
  <AccordionItem className="shadow-none" value="item-2">
    <AccordionTrigger className="shadow-none  w-full">
      <Link href="#test" onClick={() => setShowSidebar(!showSidebar)}>


      Categories
      </Link>
      </AccordionTrigger>
    <AccordionContent className="overflow-auto">

    </AccordionContent>
  </AccordionItem>

  <AccordionItem className="shadow-none " value="item-6">
    <AccordionTrigger className="w-full "  onClick={() => setShowSidebar(!showSidebar)} >
     <Link href="#">Courses  </Link>
      </AccordionTrigger>

  </AccordionItem>
  <AccordionItem className="shadow-none " value="item-7">
    <AccordionTrigger className="w-full "  >Resources</AccordionTrigger>
      <AccordionContent>
      <div class="text-[15px] space-y-1">
                      {resource.map((nav, id) => {
                        return (
                          <>
                            <li>
                              <Link
                                href={nav.link}

                                class="relative after:absolute hover:text-blue-500 after:bg-blue-500 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
                              >
                                {nav.title}
                              </Link>
                            </li>
                          </>
                        );
                      })}
                    </div>
      </AccordionContent>
  </AccordionItem>
  <AccordionItem className="shadow-none " value="item-8">
    <AccordionTrigger className="w-full "  onClick={() => setShowSidebar(!showSidebar)} > <Link href="#">Job</Link></AccordionTrigger>

  </AccordionItem>
  <AccordionItem className="shadow-none " value="item-9">
    <AccordionTrigger className="w-full "  onClick={() => setShowSidebar(!showSidebar)} > <Link href="#">Gallery</Link></AccordionTrigger>

  </AccordionItem>
  <div className='mt-4'>

  <a className="group [transform:translateZ(0)] font-light px-6 py-3 rounded-lg overflow-hidden bg-blue-400 relative before:absolute before:bg-sky-600 before:top-1/2 before:left-1/2 before:h-8 before:w-8 before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:scale-[0] before:opacity-0 hover:before:scale-[6] hover:before:opacity-100 before:transition before:ease-in-out before:duration-500" onClick={() => setShowSidebar(!showSidebar)}>
                <span className="relative z-0 text-white text-sm group-hover:text-gray-200 transition ease-in-out duration-500">
                  Login
                </span>
              </a>
  </div>
</Accordion>

        </div>
    </div>
  )
}

export default MobileMenu