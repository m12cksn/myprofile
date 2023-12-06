import React from "react";
import { SiTaichigraphics } from "react-icons/si";

const page = () => {
  const services = [
    {
      icon: SiTaichigraphics,
      title: "Graphic Design",
    },
    {
      icon: SiTaichigraphics,
      title: "Web App",
    },
    {
      icon: SiTaichigraphics,
      title: "Landing Page",
    },
    {
      icon: SiTaichigraphics,
      title: "Wedding Website",
    },
    {
      icon: SiTaichigraphics,
      title: "Coding Educator",
    },
    {
      icon: SiTaichigraphics,
      title: "Math Lesson",
    },
  ];
  return (
    <div className=" w-full bg-contain ">
      <div className=" container mx-auto w-full bg-blue-200">
        <h1>Service</h1>
        <div className="md:flex gap-5 ">
          {services.map((service, index) => (
            <div className="bg-slate-50 shadow max-w-md">
              <service.icon />
              {service.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
