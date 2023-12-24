import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React from "react";

function CourseCard(props) {
  return (
    <>
      <>
        <div className="grid grid-cols-1 content-center ">
          <div className="m-auto hover:scale-105 hover:shadow-2xl shadow-black/30 hover:shadow-black duration-200  overflow-hidden rounded-lg shadow-lg cursor-pointer h-max w-full md:w-72 ">
            <a href="#" className="block md:p-4 bg-white  md:w-full md:h-full">
              <Image
                alt="blog photo"
                src={`https://skilldarpan.com/public/uploads/${props.data.image}`}
                className="p-1  h-24 w-full md:max-h-40"
                width={500}
                height={500}
              />
            </a>
            <div className="w-full h-max pt-4 bg-white ">
              <a href="#" className="block px-4 w-full h-full">
                <p className="md:font-medium text-indigo-500 text-sm">
                  {props.data.duration}
                </p>
                <p className="md:mb-2 text-xs py-1 md:text-lg md:font-medium  text-black">
                  {props.data.title}
                </p>
                <p className="font-light text-xs text-black md:text-base">
                  ⭐ {props.data.ratings}  | <br className="md:hidden"/> {props.data.total_students} learners
                </p>
              </a>
              <div className="flex bg-primary items-center mt-4">
                <p className="md:px-4 px-2 py-1 md:py-2 md:font-bold">
                  Know more
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default CourseCard;
