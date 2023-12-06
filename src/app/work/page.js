import React from "react";
import Footer from "@/components/Footer";

const work = () => {
  return (
    <div className="p-5 bg-textDark">
      <div className="">
        <h1 className=" border-b-2 border-slate-800 text-slate-900 text-2xl pb-1">
          My Portfolio
        </h1>

        {/* CARD 1  */}
        <div className="card glass mt-5 bg-slate-50 shadow rounded-md ">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body gap-2 p-3 flex">
            <h1 className="underline hover:text-third  text-slate-900 transition-all duration-500 ease-in-out ">
              Preview
            </h1>
            <h1 className="underline hover:text-third  text-slate-900 transition-all duration-500 ease-in-out">
              Order
            </h1>
          </div>
        </div>

        {/* CARD 2  */}
        <div className="card glass mt-5 bg-slate-50 shadow rounded-md ">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body gap-2 p-3 flex">
            <h1 className="underline hover:text-third  text-slate-900 transition-all duration-500 ease-in-out ">
              Preview
            </h1>
            <h1 className="underline hover:text-third  text-slate-900 transition-all duration-500 ease-in-out">
              Order
            </h1>
          </div>
        </div>

        {/* CARD 3  */}
        <div className="card glass mt-5 bg-slate-50 shadow rounded-md ">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body gap-2 p-3 flex">
            <h1 className="underline hover:text-third  text-slate-900 transition-all duration-500 ease-in-out ">
              Preview
            </h1>
            <h1 className="underline hover:text-third  text-slate-900 transition-all duration-500 ease-in-out">
              Order
            </h1>
          </div>
        </div>

        {/* CARD 4  */}
        <div className="card glass mt-5 bg-slate-50 shadow rounded-md ">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body gap-2 p-3 flex">
            <h1 className="underline hover:text-third  text-slate-900 transition-all duration-500 ease-in-out ">
              Preview
            </h1>
            <h1 className="underline hover:text-third  text-slate-900 transition-all duration-500 ease-in-out">
              Order
            </h1>
          </div>
        </div>

        {/* CARD 5  */}
        <div className="card glass mt-5 bg-slate-50 shadow rounded-md ">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body gap-2 p-3 flex">
            <h1 className="underline hover:text-third  text-slate-900 transition-all duration-500 ease-in-out ">
              Preview
            </h1>
            <h1 className="underline hover:text-third  text-slate-900 transition-all duration-500 ease-in-out">
              Order
            </h1>
          </div>
        </div>

        {/* CARD 6  */}
        <div className="card glass mt-5 bg-slate-50 shadow rounded-md ">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body gap-2 p-3 flex">
            <h1 className="underline hover:text-third  text-slate-900 transition-all duration-500 ease-in-out ">
              Preview
            </h1>
            <h1 className="underline hover:text-third  text-slate-900 transition-all duration-500 ease-in-out">
              Order
            </h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default work;
