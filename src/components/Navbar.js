"use client";
import React, { useState, useEffect } from "react";
import { MdOutlineCloseFullscreen } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState(false);

  const menus = [
    {
      link: "/about",
      title: "About",
    },
    {
      link: "/blog",
      title: "Blog",
    },
    {
      link: "/work",
      title: "Portfolio",
    },
    {
      link: "/contact",
      title: "Contact",
    },
  ];

  const handleSmallerScreenNavigation = () => {
    setMenuIcon(!menuIcon);
  };

  return (
    <div className=" 2xl:max-w-7xl md:max-w-4xl lg:max-w-6xl shadow md:shadow-none  md:-translate-x-1/2 md:left-1/2 md:fixed top-5 md:px-5 md:rounded-lg z-40 w-full">
      <header className="md:rounded-lg  top-5 bg-sky-500 border-b-2 shadow-md w-full ease-in-out duration-500  z-50">
        <nav className="max-w-[1366px]  md:rounded-lg container flex justify-between items-center py-5 md:py-6 lg:py-6 px-4 md:px-8 lg:px-10">
          <Link href="/" className="flex items-center gap-2">
            <h1 className="sm:text-2xl  text-slate-100 text-xl font-semibold">
              im
              <span className="text-white font-semibold tracking-wider">
                Setiawan
              </span>
            </h1>
          </Link>
          {/* ==== Menu Desktop ====  */}
          <div className="md:flex gap-10 hidden items-center">
            {menus.map((menu, index) => (
              <Link
                key={index}
                className="font-semibold text-slate-50 hover:text-slate-900 ease-in-out duration-150 transition-all text-xl md:text-[1.1rem]"
                href={menu.link}
              >
                <h1>{menu.title}</h1>
              </Link>
            ))}
          </div>

          {/* ==== Menu Mobile ====  */}
          <div
            className="flex md:hidden"
            onClick={handleSmallerScreenNavigation}
          >
            {/* {openIndexes.includes(index) ? <AiOutlineMinus /> : <AiOutlinePlus />} */}
            {menuIcon ? (
              <MdOutlineCloseFullscreen
                size={28}
                className="text-white  transition-all duration-500 ease-in-out"
              />
            ) : (
              <GiHamburgerMenu
                size={28}
                className="text-white  transition-all duration-500 ease-in-out"
              />
            )}
          </div>
          <div
            className={
              menuIcon
                ? "md:hidden absolute top-[67px] right-0 bottom-0 z-50 left-0 flex justify-center items-start pt-14 w-full h-screen bg-white text-sky-500 ease-in-out duration-500"
                : "md:hidden absolute top-[67px] right-0 z-50  -left-[65rem] flex justify-center items-start pt-14 w-full h-screen  bg-white text-sky-500 ease-in-out duration-500"
            }
          >
            <div className="w-full">
              <ul className="uppercase font-bold text-lg flex flex-col justify-center ml-10 gap-7">
                {menus.map((menu, index) => (
                  <li
                    key={index}
                    onClick={handleSmallerScreenNavigation}
                    className="font-semibold  ease-in-out duration-150 transition-all"
                  >
                    <Link
                      className="border-b-4 border-sky-400 hover:border-b-sky-500  hover:text-sky-400 transition-all duration-300 ease-in-out "
                      href={menu.link}
                    >
                      {menu.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className=" ml-10 mt-8">
                <Link
                  className="bg-sky-500 transition-all duration-300 ease-in-out hover:text-slate-100 hover:bg-sky-400 px-4 py-3 font-semibold  text-secondary inline-flex items-center gap-1 tracking-wider uppercase rounded shadow"
                  href="#"
                >
                  More Info{" "}
                  <span>
                    <PiPhoneCallFill />
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <Link
              className=" bg-slate-600 px-4 py-2 font-semibold  text-secondary  inline-flex items-center gap-1 tracking-wider uppercase rounded shadow"
              href="#"
            >
              More Info{" "}
              <span>
                <PiPhoneCallFill className="text-white" />
              </span>
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
