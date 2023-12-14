"use client";
import navbar from "@/app/constant/menu";
import React, { useEffect, useState } from "react";
import { IoIosArrowDropup } from "react-icons/io";

import CourseCard from "../ui/CourseCard";
import {
  business,
  coreEng,
  dataScience,
  mostPopular,
  programming,
} from "@/app/constant/megaMenu";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
function Courses() {
  const [currentTab, setCurrentTab] = useState("Most Popular");
  const [scrollState, setScrollState] = useState(false);
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const handleScroll = (name) => {
    setCurrentTab(name);
    setScrollState(true);
    setTop(1650);
    setLeft(1650);
  };
  useEffect(() => {
    if (scrollState) {
      window.scrollTo({
        top: top,
        left: left,
        behavior: "smooth",
      }); // Reset scroll position on state change
      setScrollState(false);
      setTop(0);
      setLeft(0);
    }
  }, [scrollState]);
  return (
    <>
      <AnimatePresence>
        <div id="test" className="grid scroll-smooth grid-cols-1 my-4 justify-items-center md:hidden  items-center gap-2 md:mt-4 mx-16 md:mx-40">
          <select
            name="HeadlineAct"
            id="HeadlineAct"
            className="inline-flex text-bold text-xl items-center w-full justify-center rounded px-[15px] text-[13px] leading-none border-2  h-12 gap-[5px] bg-primary text-violet11 shadow-[0_2px_10px] shadow-black/10  focus:shadow-[0_0_0_2px] focus:shadow-black text-black outline-none"
            onChange={(e) => {
              setCurrentTab(e.target.value);
            }}
          >
            <option className="text-bold text-xl  " value="">
              Category
            </option>
            {navbar &&
              navbar.map((e, i) => {
                return (
                  <>
                    <option
                      key={e._id}
                      className="text-bold  w-full text-xl"
                      value={e.name}
                    >
                      {e.name}
                    </option>
                  </>
                );
              })}
          </select>
        </div>
        <div style={{}} className="bg-[#fef8ec] mx-4 border-primary border-2">
          <div>
            <div className="md:mx-24">
              <div
                className="md:flex gap-x-4 justify-between"
                style={{ width: "100%" }}
              >
                <div className="sticky top-20 bottom-0 z-40 mt-4  h-96 hidden md:block font-bold text-lg overflow-y-auto">
                  <h2 className="bg-gray-100 py-1 px-2 my-2">Categories</h2>
                  <ul className=" space-y-0.5">
                    {navbar.map((nav, id) => {
                      return (
                        <>
                          <li className="py-1 px-2 font-semibold text-base">
                            <a
                              className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-black hover:bg-gray-100 hover:text-gray-700"
                              onClick={() => handleScroll(nav.name)}
                            >
                              {nav.name}
                            </a>
                          </li>
                        </>
                      );
                    })}
                  </ul>
                </div>
                <div className="" style={{ width: "100%" }}>
                  <div className="grid grid-cols-2 md:grid-cols-3  md:justify-items-center md:gap-x-8  md:gap-y-4 ">
                    {currentTab === "Most Popular" &&
                      mostPopular.map((data, id) => {
                        return (
                          <motion.div
                          key={id}
                            className="my-2 md:my-4 mx-2"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: [50, 0] }}
                            transition={{ duration: 1.5, ease: "easeIn" }}
                            viewport={{ once: true }}
                          >
                            <CourseCard data={data} />

                          </motion.div>
                        );
                      })}

                    {currentTab === "Programming" &&
                      programming.map((data, id) => {
                        return (
                          <>
                          <motion.div key={id}
                            className="my-2 md:my-4 mx-2"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: [50, 0] }}
                            transition={{ duration: 1.5, ease: "easeIn" }}
                            viewport={{ once: true }}
                            >
                            <CourseCard data={data} />

                          </motion.div>

                            </>
                        );
                      })}
                    {currentTab === "Business & Management" &&
                      business.map((data, id) => {
                        return (
                          <motion.div
                          key={id}
                            className="my-2 md:my-4 mx-2"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: [50, 0] }}
                            transition={{ duration: 1.5, ease: "easeIn" }}
                            viewport={{ once: true }}
                          >
                            <CourseCard data={data} />
                          </motion.div>
                        );
                      })}
                    {currentTab === "Core Engineering" &&
                      coreEng.map((data, id) => {
                        return (
                          <motion.div
                          key={id}
                            className="my-2 md:my-4 mx-2"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: [50, 0] }}
                            transition={{ duration: 1.5, ease: "easeIn" }}
                            viewport={{ once: true }}
                          >
                            <CourseCard data={data} />
                          </motion.div>
                        );
                      })}

                    {currentTab === "Data Science" &&
                      dataScience.map((data, id) => {
                        return (
                          <motion.div
                          key={id}
                            className="my-2 md:my-4 mx-2"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: [50, 0] }}
                            transition={{ duration: 1.5, ease: "easeIn" }}
                            viewport={{ once: true }}
                          >
                            <CourseCard data={data} />
                          </motion.div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          <div className="flex justify-end ">

          <Link href="#test" className="text-3xl text-primary   px-4 py-2 md:hidden"><IoIosArrowDropup/></Link>
          </div>
          </div>
        </div>
      </AnimatePresence>
    </>
  );
}

export default Courses;
