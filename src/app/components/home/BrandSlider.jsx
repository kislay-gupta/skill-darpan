"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import homeSildes from "../../constant/homeHeroData";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
function BrandSlider() {
  return (
    <div className="mx-24 my-12">
      <AnimatePresence>
        <motion.h2
          className="font-extrabold text-center text-xl sm:text-5xl"
          initial={{ opacity: 0,
            y: 50,
            }}
          whileInView={{ opacity: 1,
            y: [50, 0 ],
          }}

          transition={{ duration: 1,
          ease:"easeIn"
          }}


        >
          Top companies trust us
        </motion.h2>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="rounded-xl w-max h-max mx-auto object-contain mt-10   ">
              <Image src="/brandLogo/bhublogo.jpg" width={200} height={200} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="rounded-xl w-max h-max mx-auto  mt-10   ">
              <Image src="/brandLogo/cimp.png" width={200} height={200} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="rounded-xl w-max h-max mx-auto  mt-10   ">
              <Image
                src="/brandLogo/make_in_india.png"
                width={200}
                height={200}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="rounded-xl w-max h-max mx-auto  mt-10   ">
              <Image
                src="/brandLogo/msme.png"
                className=""
                width={200}
                height={200}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="rounded-xl w-max h-max mx-auto  mt-10   ">
              <Image
                src="/brandLogo/startup_bihar.jpeg"
                width={200}
                height={200}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </AnimatePresence>
    </div>
  );
}

export default BrandSlider;
