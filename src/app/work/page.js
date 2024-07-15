import React from "react";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import Whatsapp from "@/components/Whatsapp";

const work = () => {
  const portfolios = [
    {
      src: "/img/orderyuuks.png",
      link: "https://vercel.com/m12cksn/dentist",
      wa: "",
    },
    {
      src: "/img/msw.png",
      link: "https://www.mitrasolusiwicaksana.com/",
      wa: "",
    },
    {
      src: "/img/travel.png",
      link: "https://travelsite-five.vercel.app/",
      wa: "",
    },

    {
      src: "/img/rent.png",
      link: "https://rentcar-theta.vercel.app/",
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
  ];
  return (
    <div className=" md:pt-32 bg-textDark lg:h-screen ">
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
                  href={portfolio.link}
                  className="underline hover:text-third  text-slate-900 transition-all duration-500 ease-in-out "
                >
                  Preview
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative bottom-0 mt-11">
        <Footer />
        <Whatsapp />
      </div>
    </div>
  );
};

export default work;
