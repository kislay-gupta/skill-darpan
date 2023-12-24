"use client";
import React, { useEffect, useState } from "react";
import { IoIosArrowDropup } from "react-icons/io";

import CourseCard from "../ui/CourseCard";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import axios from "axios";
import Loader from "../shared/Loader";
import ComingSoon from "../shared/ComingSoon";
function Courses() {
  const [currentTab, setCurrentTab] = useState(1);
  const [filterData, setFilterData] = useState();
  const [scrollState, setScrollState] = useState(false);
  const [courseData, setCourseData] = useState();
  const [navData, setNavData] = useState();
  const [loaderState, setLoaderState] = useState(true);
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);

  const handleScrollMobile = (id) => {
    setLoaderState(true);

    setCurrentTab(id);
    dataFilter(id);
    setScrollState(true);
    setTop(1400);
    setLeft(1400);
    setLoaderState(false);
  };
  const handleScroll = (id) => {
    setLoaderState(true);

    setCurrentTab(id);
    dataFilter(id);
    setScrollState(true);
    setTop(1650);
    setLeft(1650);
    setLoaderState(false);
  };
  console.log(currentTab, filterData, "filter");
  const getNavData = async () => {
    await axios
      .get("https://skilldarpan.com/api/category")
      .then((response) => {
        // console.log(response.data.setting);
        setNavData(response.data.setting);
        setLoaderState(false);
      })
      .catch((error) => {
        console.log(error);
        setLoaderState(false);
      });
  };
  const getCourseData = () => {
    axios
      .get("https://skilldarpan.com/api/course")
      .then((response) => {
        setCourseData(response.data.setting);

        setFilterData(
          response.data.setting.filter((data) => data.category == 1)
        );
        setLoaderState(false);
      })
      .catch((error) => {
        console.log(error);
        setLoaderState(false);
      });
  };

  const dataFilter = (id) => {
    setFilterData(courseData.filter((data) => data.category == id));
  };
  useEffect(() => {
    getCourseData();
  }, []);

  useEffect(() => {
    getNavData();
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
        {loaderState && <Loader />}
        <div
           id="test"
          className="grid scroll-smooth grid-cols-1 my-4 justify-items-center md:hidden  items-center gap-2 md:mt-4 mx-12 md:mx-40"
        >
          <select
            name="currentTab"

            className="inline-flex text-bold text-xl z-10 items-center w-full mx-4 justify-center rounded px-[15px] text-[13px] leading-none border-2  h-12 gap-[5px] bg-primary text-violet11 shadow-[0_2px_10px] shadow-black/10  focus:shadow-[0_0_0_2px] focus:shadow-black text-black outline-none"
            onChange={(e) => {
              handleScrollMobile(e.target.value);
            }}
          >
            <option className="text-bold text-xl  " value="1">
              Category
            </option>
            {navData &&
              navData.map((e, i) => {
                return (
                  <>
                    <option
                      key={e.id}
                      className="text-bold  w-full text-xl"
                      value={e.id}
                    >
                      {e.category}
                    </option>
                  </>
                );
              })}
          </select>
        </div>
        <div style={{}} className="bg-[#f7d690] mx-4 border-primary border-2">
          <div>
            <div className="md:mx-24">
              <div
                className="md:flex gap-x-4 justify-between"
                style={{ width: "100%" }}
              >
                <div className="sticky top-20 bottom-0 z-40 mt-4  h-96 hidden md:block font-bold text-lg overflow-y-auto">
                  <h2 className="bg-gray-100 py-1 mx-1 rounded-md  px-2 my-2">
                    Categories
                  </h2>
                  <ul className=" space-y-0.5">
                    {navData?.map((nav, i) => {
                      return (
                        <>
                          <li
                            className="py-1 px-2 font-semibold text-base"
                            key={nav.id}
                          >
                            <button
                              className="flex cursor-pointer text-start px-4 py-1 w-fit rounded-lg   text-black hover:bg-gray-100 hover:text-gray-700"
                              onClick={() => handleScroll(nav.id)}
                            >
                              {nav.category}
                            </button>
                          </li>
                        </>
                      );
                    })}
                  </ul>
                </div>
                <div  className="" style={{ width: "100%" }}>
                  <div className="grid grid-cols-2 md:grid-cols-3   md:justify-items-center md:gap-x-8  md:gap-y-4 ">
                    {filterData &&
                      filterData.map((data, i) => {
                        return (
                          <>
                            <motion.div
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,

                              }}
                            className="mx-4 my-2"
                            >
                              <CourseCard data={data} />
                            </motion.div>
                          </>
                        );
                      })}

                    {filterData?.length === 0 && (
                      <div className="col-span-full mx-auto">
                        <ComingSoon />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end ">
              <Link
                href="#test"
                className="text-3xl text-primary   px-4 py-2 md:hidden"
              >
                <IoIosArrowDropup />
              </Link>
            </div>
          </div>
        </div>
      </AnimatePresence>
    </>
  );
}

export default Courses;
