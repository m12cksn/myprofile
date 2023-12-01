import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <Link href="/about">
      <div className="bg-textDark md:block hidden max-w-sm sm:max-w-lg md:max-w-md overflow-hidden hover:border-4 hover:border-yellow-300 relative md:h-full group shadow-md rounded-lg ">
        <Image
          className="w-full h-full group-hover:scale-110 transition-all duration-500 drop-shadow-xl object-cover  bg-cover bg-center"
          src={"/img/hero.png"}
          width={1000}
          height={1000}
          alt="Cruise"
          priority={true}
        />
        <div className="absolute bottom-5 left-5 text-slate-50 ">
          <h1 className="text-3xl text-shadow">About</h1>
          <h2>Biography and Abilities</h2>
        </div>
      </div>

      <div className="bg-textDark aspect-[3/4]  max-w-sm sm:max-w-lg md:max-w-md overflow-hidden hover:border-4 hover:border-yellow-300 relative md:hidden group shadow-md rounded-lg ">
        <Image
          className="w-full h-full group-hover:scale-110 transition-all duration-500 drop-shadow-xl object-cover  bg-cover bg-center"
          src={"/img/hero.png"}
          width={1000}
          height={1000}
          alt="Cruise"
          priority={true}
        />
        <div className="absolute bottom-5 left-5 text-slate-50 ">
          <h1 className="text-3xl text-shadow">About</h1>
          <h2>Biography and Abilities</h2>
        </div>
      </div>
    </Link>
  );
};

export default About;
