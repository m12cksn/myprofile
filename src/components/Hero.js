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
    <>
      <div className="md:hidden pt-5 sm:pt-7 px-5 sm:max-w-xl sm:container mx-auto  max-w-md grid place-content-center">
        <About />
        <Service />
        <Work />
        <Blog />
        <Contact />
        <Footer />
      </div>

      <div className=" hidden p-5 gap-5 md:overflow-hidden  md:grid-cols-2 lg:grid-cols-6  grid-cols-1 lg:justify-between md:px-8 md:pt-32 md:grid mx-auto  md:justify-center max-w-md sm:max-w-xl md:max-w-4xl lg:grid-flow-row lg:max-w-6xl 2xl:max-w-7xl">
        <div className="md:row-span-2 lg:row-span-2 lg:col-span-2">
          <About />
        </div>
        <div className="lg:col-span-2 ">
          <Service />
        </div>
        <div className="lg:col-span-2">
          <Blog />
        </div>
        <div className="lg:col-span-3">
          <Work />
        </div>
        <div className=" ">
          <Contact />
        </div>
        <div className="lg:col-span-6 md:col-span-2">
          <Footer />
        </div>
      </div>
    </>
  );
}
