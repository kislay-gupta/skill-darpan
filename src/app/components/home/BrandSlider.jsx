"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import homeSildes from "../../constant/homeHeroData";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";
function BrandSlider() {
  const [brandLogo, setBrandLogo] = useState();
  const [loaderState, setLoaderState] = useState(true)
  const getBrandLogo = async () => {
    axios
      .get("https://skilldarpan.com/api/endorsed")
      .then((response) => {
        setBrandLogo(response.data.endorsed);
        setLoaderState(false)
      })
      .catch((error) => {
        console.log(error);
        setLoaderState(false)
      });
  };
  useEffect(() => {
    getBrandLogo();
  }, []);

  return (
    <div className="mx-4 md:mx-24 my-4 md:my-12">
      <AnimatePresence>
        <motion.h2
          className="font-extrabold text-center text-xl sm:text-5xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: [50, 0] }}
          transition={{ duration: 1, ease: "easeIn" }}
        >
          ENDORSED BY
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
          {brandLogo?.map((data, i) => {
            return (
              <>
                <SwiperSlide>
                  <div className="rounded-xl w-fit md:w-max h-max mx-auto object-contain mt-10   ">
                    <Image
                      src={`https://skilldarpan.com/public/uploads/${data.image}`}
                      alt={data.title}
                      width={200}
                      height={200}
                    />
                  </div>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </AnimatePresence>
    </div>
  );
}

export default BrandSlider;
