import React from "react";
import Image from "next/image";
import { FaCircle } from "react-icons/fa";

const Work = () => {
  return (
    <div className="h-auto">
      <div className="bg-yellow-200 shadow-md md:max-w-md max-w-sm sm:max-w-lg rounded-md group mt-8 md:mt-0 lg:max-w-2xl hover:border-[1px] hover:border-yellow-300 hover:scale-95 transition-all duration-500 ease-in-out">
        <div className="p-5">
          <h1 className=" text-primary bg-yellow-100 border-[1px] border-yellow-400 w-[8rem] rounded shadow text-center flex items-center justify-center gap-1">
            <span className="text-[0.5rem]">
              <FaCircle />
            </span>
            inspiring selection
          </h1>
        </div>
        <Image
          className="object-contain hover:scale-105 mx-auto p-5 transition-all group-hover:rotate-[360deg] duration-1000  object-center w-52 ease-in-out"
          src={"/img/inspiration.png"}
          width={1000}
          height={1000}
          alt="Cruise"
          priority={true}
        />
        <h1 className="p-5 text-xl text-primary">WORK</h1>
      </div>
    </div>
  );
};

export default Work;
