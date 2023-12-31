import React from "react";

const components = () => {
  return (
    <div>
      <div className="bg-textDark max-w-sm sm:max-w-lg md:max-w-sm overflow-hidden hover:border-4 hover:border-yellow-300 relative aspect-[4/6] group shadow-md rounded-xl ">
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
    </div>
  );
};

export default components;
