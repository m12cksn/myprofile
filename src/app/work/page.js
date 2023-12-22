import React from "react";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const work = () => {
  const portfolios = [
    {
      src: "/img/travelsite.png",
      link: "https://travelsite-five.vercel.app/",
      wa: "",
    },
    {
      src: "/img/rent.png",
      link: "https://rentcar-theta.vercel.app/",
      wa: "",
    },
    {
      src: "/img/dental.png",
      link: "https://vercel.com/m12cksn/dentist",
      wa: "",
    },
    {
      src: "/img/eli.png",
      link: "https://www.elicrew.net/",
      wa: "",
    },
    {
      src: "/img/vo.png",
      link: "https://smartofficevo.com/",
      wa: "",
    },
    {
      src: "/img/mitra.png",
      link: "https://www.mitrasolusiwicaksana.com/",
      wa: "",
    },
  ];
  return (
    <div className="p-5 md:pt-32 bg-textDark">
      <div className="2xl:max-w-7xl md:max-w-4xl lg:max-w-6xl shadow md:shadow-none  mx-auto md:px-5 md:rounded-lg z-40 w-full">
        <h1 className=" border-b-2 border-slate-800 text-slate-900 text-2xl pb-1">
          My Portfolio
        </h1>
        <div className="grid sm:grid-cols-2 sm:gap-5 sm:mt-8 lg:grid-cols-3">
          {/* CARD 1  */}
          {portfolios.map((portfolio, index) => (
            <div
              key={index}
              className="card glass overflow-hidden mt-5 sm:mt-0 bg-white shadow rounded-md "
            >
              <figure>
                <Image
                  className="mt-10 sm:mt-1 top-36 left-64 group-hover:animate-pulse pb-10  w-full "
                  src={portfolio.src}
                  width={1000}
                  height={1000}
                  alt="Cruise"
                  priority={true}
                />
              </figure>
              <div className="card-body gap-2 p-3 flex">
                <Link
                  href="#"
                  className="underline hover:text-third  text-slate-900 transition-all duration-500 ease-in-out "
                >
                  Preview
                </Link>
                <Link
                  href="#"
                  className="underline hover:text-third  text-slate-900 transition-all duration-500 ease-in-out"
                >
                  Order
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default work;
