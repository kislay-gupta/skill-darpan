"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import homeSildes from '../../constant/homeHeroData';
import Image from 'next/image';
import { AnimatePresence,motion } from 'framer-motion';
import Button from '../ui/Button';
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
            disableOnInteraction: true,
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
    className="absolute inset-0 md:blur-sm hover:blur-0 h-96  object-cover w-full md:h-full"
    width={500}
    height={500}
  />
<div className='absolute inset-0 h-screen  bg-black/70'></div>

  <div className="mx-auto text-white max-w-screen-xl relative z-10 px-4 h-full py-16 md:py-32 lg:flex lg:h-screen lg:items-center">
    <motion.div className="mx-auto text-center"
initial={{ opacity: 0 }}
whileInView={{ opacity: 1 }}
transition={{ duration: 1,
    ease:"easeIn"
    }}

    >
      <motion.h1 className="text-2xl  font-extrabold sm:text-7xl"

      >
      LEARN. SKILL. SUCCESS.
      <br />
        <strong className="font-extrabold  text-xl sm:text-5xl text-blue-700 sm:block"> {data.subTitle} </strong>
      </motion.h1>

      <p className="mt-4  sm:px-24 text-xs/relaxed sm:text-xl/relaxed">
      {data.description}
            </p>
            <div className='my-4'>

           <Button />
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