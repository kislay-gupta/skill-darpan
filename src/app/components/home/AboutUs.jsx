"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/Button";
import axios from "axios";
import Loader from "../shared/Loader";
function AboutUs() {
  const [aboutData, setAboutData] = useState([]);
  const [loaderState, setLoaderState] = useState(true);
  const getAboutData  = async ()  => {
    await  axios
      .get("https://skilldarpan.com/api/abouts")
      .then(function (response) {
        // handle success
        setAboutData(response.data.about[0]);
        setLoaderState(false)

      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setLoaderState(false)
      });
    };

  useEffect(() => {
    getAboutData();
  }, []);

  const text =aboutData.description?.split(
      " "
    );
  const img = aboutData.image
  return (
    <div>
      {loaderState && <Loader />}
      <AnimatePresence>
      {aboutData &&
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 ">
            <motion.div
              className="relative h-64 overflow-hidden rounded-lg sm:h-80  lg:h-full"
              initial={{ opacity: 0, x: [-100] }}
              whileInView={{ opacity: 1, x: [-100, 0] }}
              transition={{ duration: 1.5, ease: "easeIn" }}
            >

              <Image
                alt="Party"
                src={`https://skilldarpan.com/public/uploads/${img}`}
                className="absolute inset-0 h-max w-max   object-contain"
                width={"200"}
                height={"200"}
              />
            </motion.div>

            <motion.div
              className="lg:py-24 grid grid-cols-1 justify-items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: [50, 0] }}
              transition={{ duration: 1.5, ease: "easeIn" }}
            >
              <h2 className="text-3xl text-center font-bold sm:text-4xl">
                About US
              </h2>

              <p className="my-4 font-semibold text-center text-black">
                {text?.map((el, i) => (
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      duration: 0.25,
                      delay: i / 10,
                    }}
                    key={i}
                    viewport={{ once: true }}
                  >
                    {el}{" "}
                  </motion.span>
                ))}
              </p>

              <Button />
            </motion.div>
          </div>
        </div>
      }
      </AnimatePresence>
    </div>
  );
}

export default AboutUs;
