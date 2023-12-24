"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import parse from "html-react-parser";
import Loader from "@/app/components/shared/Loader";

export default function Page({ params }) {
  const [blogData, setBlogData] = useState([]);
  const [loaderState, setLoaderState] = useState(true);
  console.log(blogData);
  const getAllBlog = () => {
    axios
      .get(`https://skilldarpan.com/api/blogs?url=${params.id}`)
      .then((response) => {
        setBlogData(response.data.blog);
        setLoaderState(false);
      })
      .catch((error) => {
        console.log(error);
        setLoaderState(false);
      });
  };
  console.log(blogData[0]?.article);
  useEffect(() => {
    getAllBlog();
  }, []);

  const newTitle = params.id.replace(/[-]/g, " ");
  return (
    <div>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        {loaderState && <Loader />}
        <div
          className="bg-contain bg-center text-center overflow-hidden"
          style={{
            minHeight: 500,
            backgroundImage:
              `url(https://skilldarpan.com/public/uploads/${blogData[0]?.image})`,
          }}
          title="Woman holding a mug"
        ></div>
        <div className="">
          <div className="mt-3 p bg-white rounded-b lg:rounded-b-none lg:rounded-r  justify-between leading-normal">
            <div className="bg-white relative top-0 -mt-32 p-5 sm:p-10">
              <h1 href="#" className="text-gray-900 font-bold text-3xl mb-2">
                {blogData[0]?.title}
              </h1>
              <p className="text-gray-700 text-xs mt-2">
                Written By:
                <a
                  href="#"
                  className="text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                >
                  Ahmad Sultani
                </a>{" "}
                In
                <a
                  href="#"
                  className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                >
                  Election
                </a>
                ,
                <a
                  href="#"
                  className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                >
                  Politics
                </a>
              </p>
              <div className="">
                <div className="">{parse(blogData[0]?.article)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
