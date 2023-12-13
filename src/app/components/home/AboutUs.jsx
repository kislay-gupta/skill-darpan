"use client"
import Image from 'next/image'
import React from 'react'
import {motion ,AnimatePresence} from "framer-motion"
function AboutUs() {
  const text =`Skill Darshan is a fully-featured Skill Development platform that
  helps student to learn skills from published video courses,
  live classes, and text courses , and helps students to learn in the easiest way.
  Skill Darshan is a fully-featured Skill Development platform that
  helps student to learn skills from published video courses,
  live classes, and text courses , and helps students to learn in the easiest way.
  Skill Darshan is a fully-featured Skill Development platform that
  helps student to learn skills from published video courses,
  live classes, and text courses , and helps students to learn in the easiest way.`.split(" ")
  return (
    <div>
    <AnimatePresence>


  <div
    className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"

  >

    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 ">
      <motion.div
        className="relative h-64 overflow-hidden rounded-lg sm:h-80  lg:h-full"
        initial={{ opacity: 0,
            x: [ -100 ],
            }}
          whileInView={{ opacity: 1,
            x: [-100, 0 ],
          }}

          transition={{ duration: 1.5,
          ease:"easeIn"
          }}
      >
        <Image
          alt="Party"
          src="https://camo.githubusercontent.com/cae12fddd9d6982901d82580bdf321d81fb299141098ca1c2d4891870827bf17/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313336302f302a37513379765349765f7430696f4a2d5a2e676966"
          className="absolute inset-0 h-max w-max   object-contain"
          width={"200"}
          height={"200"}

        />
      </motion.div>

      <motion.div className="lg:py-24 grid grid-cols-1 justify-items-center"
        initial={{ opacity: 0,
            y: 50,
            }}
          whileInView={{ opacity: 1,
            y: [50, 0 ],
          }}

          transition={{ duration: 1.5,
          ease:"easeIn"
          }}
      >

        <h2 className="text-3xl text-center font-bold sm:text-4xl">About US</h2>

        <p className="my-4 font-semibold text-center text-black">
        {text.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: i / 10
          }}
          key={i}
          viewport={{ once: true }}
        >

          {el}{" "}
        </motion.span>
      ))}

        </p>

        <a
  className="inline-flex items-center bg-primary  gap-2 rounded-lg border border-black hover:border-indigo-600 px-8 py-2 text-black hover:bg-primary-600 hover:text-black focus:outline-none focus:ring active:bg-indigo-500"
  href="#"
>
  <span className="text-sm font-medium"> Know More </span>

  <svg
    className="h-5 w-5 rtl:rotate-180"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
</a>
      </motion.div>
    </div>
    </div>
    </AnimatePresence>
    </div>
  )
}

export default AboutUs