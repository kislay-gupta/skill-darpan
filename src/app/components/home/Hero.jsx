"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import homeSildes from '../../constant/homeHeroData';
import Image from 'next/image';
import { AnimatePresence,motion } from 'framer-motion';
function Hero() {
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
          }
        }
      };
      const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      };
  return (
    <div className=''>
        <AnimatePresence>


         <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {homeSildes.map((data, id) => {
          return (
            <>
            <SwiperSlide>
            <section className=" ">
                <Image
    src={data.bg}
    className="absolute inset-0 blur-sm hover:blur-0  object-cover w-full h-full"
    width={500}
    height={500}
  />

<div className='absolute inset-0  bg-black/70'></div>
  <div className="mx-auto text-white max-w-screen-xl relative z-10 px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <motion.div className="mx-auto text-center"
initial={{ opacity: 0 }}
whileInView={{ opacity: 1 }}
transition={{ duration: 1,
    ease:"easeIn"
    }}

    >
      <motion.h1 className="text-3xl  font-extrabold sm:text-7xl"

      >
      LEARN. SKILL. SUCCESS.
      <br />
        <strong className="font-extrabold  text-xl sm:text-5xl text-blue-700 sm:block"> {data.subTitle} </strong>
      </motion.h1>

      <p className="mt-4 sm:px-24 sm:text-xl/relaxed">
      {data.description}
            </p>
            <div className="grid place-content-center  p-4">
            <button

      className="group relative shadow-md rounded-md hover:rounded-none h-max w-max mx-auto  border-white border-2 hover:border-none  px-4 py-2 font-medium text-slate-100 transition-colors duration-[400ms] hover:bg-primary hover:text-black"
    >
      <span>Know more</span>

      {/* TOP */}
      <span className="absolute left-0 rounded-full top-0 h-[2px] w-0 bg-black transition-all duration-100 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 rounded-md top-0 h-0 w-[2px] bg-black transition-all delay-100 duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 rounded-md right-0 h-[2px] w-0 bg-black transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 rounded-md left-0 h-0 w-[2px] bg-black transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
    </div>

    </motion.div>
  </div>
</section>
              </SwiperSlide>
            </>
          );
        })}



      </Swiper>
      </AnimatePresence>
    </div>
  )
}

export default Hero