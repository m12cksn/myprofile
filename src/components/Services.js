import React from "react";
import Image from "next/image";
import { FaCircle } from "react-icons/fa";

const Services = () => {
  const images = [
    {
      img: "/img/coding.png",
    },
    {
      img: "/img/math.png",
    },
    {
      img: "/img/eng.png",
    },
  ];
  return (
    <div>
      <div className="bg-textDark shadow-md max-w-sm md:max-w-sm sm:max-w-lg rounded-md mt-8 md:mt-3 xl:mt-0 hover:border-[1px] hover:border-pink-400 group  transition-all duration-500 ease-in-out">
        <div className="p-5 md:p-8 xl:p-5">
          <h1 className="  text-textBase bg-pink-300 border-[1px] border-pink-400 w-[6rem] rounded shadow text-center flex items-center justify-center gap-1">
            <span className="text-[0.5rem]">
              <FaCircle />
            </span>
            elite solution
          </h1>
        </div>
        <div className="flex px-5 gap-3 xl:h-36 bg-yellow-200 py-5 md:py-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="object-contain  rounded-full bg-contain overflow-hidden"
            >
              <Image
                className=" p-4 bg-contain object-contain  bg-yellow-200 object-center hover:scale-105 transition-all group-hover:rotate-[360deg]  duration-1000 ease-in-out"
                src={image.img}
                width={1000}
                height={1000}
                alt="Cruise"
                priority={true}
              />
            </div>
          ))}
        </div>
        <h1 className="p-5 text-xl text-textBase">SERVICES</h1>
      </div>
    </div>
  );
};

export default Services;
