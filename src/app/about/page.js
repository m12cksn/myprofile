import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { GiSupersonicArrow } from "react-icons/gi";

const page = () => {
  const icons = [
    {
      icon: SiTailwindcss,
    },
    {
      icon: SiMongodb,
    },
    {
      icon: FaReact,
    },
    {
      icon: SiExpress,
    },
    {
      icon: BiLogoPostgresql,
    },
    {
      icon: FaNodeJs,
    },
    {
      icon: IoLogoJavascript,
    },
  ];
  return (
    <div className="bg-slate-100 lg:pt-32 ">
      <div className=" mx-auto max-w-md sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
        <div className="px-5 md:px-14 ">
          <div className=" mx-auto pt-5">
            <div className="lg:flex items-center xl:py-10 lg:gap-3 xl:gap-8 ">
              <div className="w-full">
                <h1 className="text-9xl xl:mb-5 tracking-normal max-w-sm sm:max-w-2xl md:max-w-4xl sm:text-[16rem] md:text-[22rem] md:text-center  mx-auto text-slate-600 lg:text-8xl xl:text-9xl lg:text-left">
                  <span className="md:text-[18rem] lg:text-8xl xl:text-9xl ">
                    hi, i'm
                  </span>{" "}
                  iwan
                </h1>
                <p className="tracking-wide xl:mb-5 pt-5 text-slate-500 sm:text-xl font-light xl:text-2xl lg:leading-snug">
                  hi, I'm Iwan Setiawan,{" "}
                  <span className="text-third font-semibold">
                    Web Developer and Digital Educator based in Cilacap -
                    Central of Java
                  </span>
                </p>
                <p className="pt-5 text-slate-800 font-light text-3xl  tracking-wide leading-snug md:text-6xl lg:text-4xl    lg:tracking-wider lg:leading-snug md:leading-normal">
                  If you wanna stand out, gotta be outstanding
                </p>
              </div>
              <div className="flex justify-center  top-5 right-5 lg:mt-0 mt-7">
                <div className=" bg-gradient-to-t from-cyan-400 to-blue-400  max-w-sm sm:max-w-2xl md:w-full lg:max-w-md  overflow-hidden hover:border-4 hover:border-yellow-300 relative lg:aspect-[3/4]  group rounded-b-[7rem] lg:rounded-b-none lg:rounded-bl-[7rem] rounded-tr-[7rem] shadow-md  ">
                  <Image
                    className="w-full h-full group-hover:scale-110 transition-all duration-500 drop-shadow-xl object-cover  bg-cover bg-center"
                    src={"/img/hero.png"}
                    width={1000}
                    height={1000}
                    alt="Cruise"
                    priority={true}
                  />
                </div>
              </div>
            </div>

            <p className="mt-12  text-primary text-lg sm:text-xl">About me</p>
            <p className="mt-5 sm:mt-3 italic text-slate-700 font-light text-3xl  sm:text-4xl tracking-wider leading-normal sm:leading-relaxed ">
              " I am someone who{" "}
              <span className="text-third font-semibold">teaches</span> children
              how to code using block-based and text-based methods. Even though
              I have a job as a{" "}
              <span className="text-third font-semibold">coding educator</span>{" "}
              , my true dream is to become a{" "}
              <span className="text-third font-semibold">
                software developer
              </span>{" "}
              , especially in{" "}
              <span className="text-third font-semibold">web development</span>{" "}
              "
            </p>
          </div>
        </div>
        <div className="my-10 py-5 bg-white mx-auto">
          <h1 className="text-center mb-10 lg:underline lg:text-3xl text-slate-800 text-2xl sm:text-3xl">
            My tools
          </h1>
          <Marquee
            pauseOnHover={true}
            gradient={true}
            gradientWidth={1000}
            gradientColor={[255, 255, 255]}
            className=""
          >
            {icons.map((icon, index) => (
              <div className="flex  px-5 lg:px-7 xl:px-12" key={index}>
                <icon.icon className="w-12 h-12 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-slate-800  " />
              </div>
            ))}
          </Marquee>
        </div>
        <div className="container mx-auto">
          <p className="text-7xl max-w-sm mx-auto text-slate-700 text-center leading-snug tracking-wider">
            Always <span className=" text-primary  "> keen</span> for a good{" "}
            <span className=" text-primary  ">collab</span>
          </p>
          <GiSupersonicArrow className="rotate-45 mx-auto my-10  h-24 w-24 text-slate-800" />
          <div className="flex justify-center group">
            <Link
              href=""
              className="mx-auto pb-10 text-blue-500 group-hover:-translate-y-3 block hover:text-slate-900 text-3xl underline transition-all duration-500 ease-in-out"
            >
              Connect with me
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default page;
