import React from "react";

const ComingSoon = () => {
  return (
    <div>
      <div className=" h-96 w-max flex items-center justify-center bg-cover bg-center text-center ">
        <div className=" " />
        <div className=" flex flex-col justify-center text-black w-max h-screen">
          <h1 className="text-3xl md:text-5xl">Coming Soon !!!</h1>
          <p>Stay tuned for something amazing!!!</p>
          <div className=" mb-5">
            <div className="shadow w-full bg-white mt-2 max-w-2xl mx-auto rounded-full">
              <div
                className="rounded-full bg-blue-600 text-xs leading-none text-center text-white py-1"
                style={{ width: "75%" }}
              >
                75%
              </div>
            </div>
          </div>
          <div className="mt-6 flex text-white mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
