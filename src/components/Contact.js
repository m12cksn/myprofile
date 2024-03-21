import React from "react";
import Image from "next/image";
import { FaCircle } from "react-icons/fa";
import Link from "next/link";

const Contact = () => {
  return (
    // <div className="bg-textDark group md:max-w-md max-w-sm sm:max-w-lg  rounded-md  mt-8 md:mt-0 hover:border-[1px] hover:border-yellow-300 overflow-hidden hover:scale-95 transition-all duration-500 ease-in-out">
    //   <div className="p-5">
    //     <h1 className=" text-textBase bg-pink-300 border-[1px] border-pink-500 w-[8rem] rounded shadow text-center flex items-center justify-center gap-1">
    //       <span className="text-[0.5rem]">
    //         <FaCircle />
    //       </span>
    //       inspiring selection
    //     </h1>
    //   </div>
    //   <Image
    //     className="object-contain hover:scale-105 p-10  object-center group-hover:scale-90 transition-all group-hover:-translate-y-64 w-72 mx-auto group-hover:translate-x-64 duration-1000 ease-in-out "
    //     src={"/img/contact.png"}
    //     width={1000}
    //     height={1000}
    //     alt="Cruise"
    //     priority={true}
    //   />
    //   <h1 className="p-5 text-xl text-textBase">CONTACT</h1>
    // </div>
    <Link href="/contact" className="h-auto">
      <div className="bg-textDark shadow-md md:max-w-md max-w-sm sm:max-w-lg rounded-md overflow-hidden group mt-8 md:mt-0 hover:border-[1px] hover:border-pink-300 hover:scale-95 transition-all duration-500 ease-in-out">
        <div className="p-5">
          <h1 className=" text-textBase bg-pink-100 border-[1px] border-pink-400 w-20 rounded shadow text-center flex items-center justify-center gap-1">
            <span className="text-[0.5rem]">
              <FaCircle />
            </span>
            Let's Talk
          </h1>
        </div>
        <Image
          className="object-contain hover:scale-105 mx-auto p-5 transition-all group-hover:scale-90  group-hover:-translate-y-64  group-hover:translate-x-64 duration-1000  object-center w-52 h-52 ease-in-out"
          src={"/img/contact.png"}
          width={1000}
          height={1000}
          alt="Cruise"
          priority={true}
        />
        <h1 className="p-5 text-xl text-textBase">CONTACT</h1>
      </div>
    </Link>
  );
};

export default Contact;
