import React from "react";
import Image from "next/image";
import About from "@/components/About";
import Service from "@/components/Services";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import "../app/globals.css";
import { FaCircle } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="bg-third md:pt-32 xl:h-screen flex justify-center pt-12 sm:pt-16 px-5 md:px-8 ">
      <div className="">
        <div className="md:flex gap-5  justify-between items-start ">
          <About />
          <div className="xl:flex flex-col">
            <div className="md:flex flex-col xl:flex-row xl:gap-5 justify-start items-start">
              <Blog />
              <Service />
            </div>
            <div className="hidden xl:grid md:mt-5 grid-cols-2 gap-5">
              <Work />
              <Contact />
            </div>
          </div>
        </div>
        <div className=" xl:hidden md:grid md:mt-5 grid-cols-2 gap-5">
          <Work />
          <Contact />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
