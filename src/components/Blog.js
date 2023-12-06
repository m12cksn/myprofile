import React from "react";
import Image from "next/image";
import { FaCircle } from "react-icons/fa";
import { FaBook } from "react-icons/fa";

const Blog = () => {
  return (
    // <div>
    //   <div className="bg-yellow-200 hover:border-yellow-300 md:max-w-md max-w-sm  sm:max-w-lg rounded-md mt-8 md:mt-0 hover:border-[1px] shadow-md  hover:scale-95 transition-all duration-500 ease-in-out">
    //     <div className="p-5 md:p-8 xl:p-5">
    //       <h1 className="  text-primary bg-yellow-100 border-[1px] border-yellow-400  w-[6rem] rounded shadow text-center flex items-center justify-center gap-1">
    //         <span className="text-[0.5rem]">
    //           <FaCircle />
    //         </span>
    //         burst burst
    //       </h1>
    //     </div>
    //     <div className="flex gap-3 xl:h-36 bg-yellow-200 py-5 md:py-0">
    //       <Image
    //         className="object-cover xl:object-top hover:border-yellow-300 hover:border-[1px] md:h-[10.8rem] xl:h-36 object-center hover:scale-105 transition-all duration-500 ease-in-out"
    //         src={"/img/blog.jpg"}
    //         width={1000}
    //         height={1000}
    //         alt="Cruise"
    //         priority={true}
    //       />
    //     </div>
    //     <h1 className="p-5 text-xl text-primary">BLOG</h1>
    //   </div>
    // </div>
    <div className="h-auto">
      <div className="bg-yellow-200 shadow-md md:max-w-6xl max-w-sm sm:max-w-lg rounded-md overflow-hidden group mt-8 md:mt-0 hover:border-[1px] hover:border-pink-300 hover:scale-95 transition-all duration-500 ease-in-out">
        <div className="p-5">
          <h1 className=" text-primary bg-yellow-100 border-[1px] border-yellow-400 w-24 rounded shadow text-center flex items-center justify-center gap-1">
            <span className="text-[0.5rem]">
              <FaCircle />
            </span>
            burst burst
          </h1>
        </div>
        <Image
          className="object-contain hover:scale-105 mx-auto p-5 transition-all group-hover:scale-90  group-hover:animate-pulse   duration-1000  object-center w-52 h-52 ease-in-out"
          src={"/img/blogging.png"}
          width={1000}
          height={1000}
          alt="Cruise"
          priority={true}
        />
        <h1 className="p-5 text-xl lg:text-left md:text-center text-textBase">
          BLOG
        </h1>
      </div>
    </div>
  );
};

export default Blog;
