import React from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import { FiYoutube } from "react-icons/fi";

const page = () => {
  const blogs = [
    {
      title: "Class CRUD using nodejs",
      img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D",
      tags: "Nodejs",
    },
    {
      title: "Class CRUD using nodejs",
      img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D",
      tags: "Nodejs",
    },
    {
      title: "Class CRUD using nodejs",
      img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D",
      tags: "Nodejs",
    },
    {
      title: "Class CRUD using nodejs",
      img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D",
      tags: "Nodejs",
    },
  ];

  return (
    <div className="p-5 bg-third">
      <div className="">
        <h1 className=" border-b-2 border-slate-800 text-slate-900 text-2xl pb-1">
          My Blog
        </h1>

        {/* CARD 1  */}
        <div>
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="card glass mt-5 bg-slate-50 shadow overflow-hidden rounded-md "
            >
              <figure>
                <img
                  className="w-full object-cover"
                  src={blog.img}
                  alt="car!"
                />
              </figure>
              <div className="card-body gap-2 ">
                <div className="p-3">
                  <h1 className="text-slate-900 text-lg mb-2">{blog.title}</h1>
                  <h1 className="bg-slate-200 shadow hover:-translate-y-1 w-28 py-1 justify-center flex items-center text-sm gap-2 hover:text-third  text-slate-900 transition-all duration-500 ease-in-out ">
                    View Tutorial
                    <span>
                      <FiYoutube className="w-5 h-5 text-red-500" />
                    </span>
                  </h1>
                </div>
                <div className="bg-slate-200 pt-1 pb-3 px-3 flex items-center">
                  <h2 className="text-xs mt-2  ">
                    Tags : <span>{blog.tags}</span>
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
