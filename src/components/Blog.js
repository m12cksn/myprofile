import React from "react";
import Image from "next/image";
import { FaCircle } from "react-icons/fa";

const Blog = () => {
  return (
    <div>
      <div className="bg-yellow-200 md:max-w-sm max-w-sm sm:max-w-lg rounded-md mt-8 md:mt-0 hover:border-[1px] shadow-md hover:border-yellow-300 hover:scale-95 transition-all duration-500 ease-in-out">
        <div className="p-5">
          <h1 className="  text-primary bg-yellow-100 border-[1px] border-yellow-400 w-24 rounded shadow text-center flex items-center justify-center gap-1">
            <span className="text-[0.5rem]">
              <FaCircle />
            </span>
            burst burst
          </h1>
        </div>
        <Image
          className="object-cover xl:object-top hover:border-yellow-300 hover:border-[1px] md:h-52 xl:h-36 object-center hover:scale-105 transition-all duration-500 ease-in-out"
          src={"/img/blog.jpg"}
          width={1000}
          height={1000}
          alt="Cruise"
          priority={true}
        />
        <h1 className="p-5 text-xl text-primary">BLOG</h1>
      </div>
    </div>
  );
};

export default Blog;
