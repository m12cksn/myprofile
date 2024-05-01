import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillCustomerService, AiTwotoneMail } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import Footer from "@/components/Footer";

const Contact = () => {
  const contacts = [
    {
      icons: AiFillCustomerService,
      title: "Phone Number",
      desc: "You can contact us anytime at +62857-2632-1786 whenever you need assistance",
    },
    {
      icons: MdOutlineEmail,
      title: "Email",
      desc: "You can also send an email to imiwaniwset@gmail.com. We will respond to your email as soon as possible.",
    },
    {
      icons: IoLogoWhatsapp,
      title: "Whatsapp",
      desc: "Use the button with the WhatsApp at the bottom right of the screen to be directed to WhatsApp.",
    },
  ];
  return (
    <div className="bg-white py-5 md:pt-28">
      <div className="lg:flex md:max-w-4xl mx-auto  lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
        <div className="basis-2/3 flex justify-center   ">
          <form action="" className=" w-full pt-8 pb-10 px-5 bg-white">
            <h1 className="text-xl lg:text-2xl xl:text-3xl text-slate-900 md:text-3xl">
              Get in Touch ...
            </h1>
            <h2 className="text-slate-700 mt-3 md:text-xl tracking-wider leading-snug text-justify lg:text-lg xl:text-xl xl:leading-normal xl:tracking-wider">
              If you have a business that you want to develop or a child who
              wants to become special, let's discuss it together.
            </h2>
            <div>
              <div className="mb-3 mt-5">
                <label htmlFor="name" className="block mb-2 text-slate-900">
                  Name
                </label>
                <input
                  id="name"
                  className="bg-slate-100 w-full h-10 p-3   shadow"
                  placeholder="Enter Your Name"
                  type="text"
                  name="name"
                />
              </div>
              <div className="mb-5">
                <label htmlFor="" className="block mb-2 text-slate-900">
                  Email
                </label>
                <input
                  className="bg-slate-100 w-full h-10 p-3 shadow"
                  placeholder="Enter Your Email"
                  type="email"
                  name="email"
                />
              </div>
              <div className="mb-5">
                <label htmlFor="" className="block mb-2 text-slate-900">
                  Subject
                </label>
                <input
                  className="bg-slate-100 w-full h-10 p-3 shadow"
                  placeholder="Enter Your Subject"
                  type="text"
                  name="subject"
                />
              </div>
              <div className="mb-5">
                <label htmlFor="" className="block mb-2 text-slate-900">
                  Message
                </label>
                <textarea
                  className="bg-slate-100 w-full h-28 p-3 shadow"
                  placeholder="Enter Your Message"
                  type="text"
                  name="message"
                />
              </div>
              <button
                // onClick={onSubmit}
                type="submit"
                className="bg-blue-500 text-slate-50 font-semibold tracking-wider w-28 h-9 shadow "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="basis-1/3 mx-auto p-3 sm:max-w-5xl  ">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="bg-sky-500 mx-auto mb-5 py-3 px-8 sm:max-w-4xl sm:px-12 sm:py-7"
            >
              <contact.icons className="text-white xl:text-9xl lg:text-8xl text-8xl text-center md:text-9xl w-full" />
              <h1 className="text-2xl text-center lg:text-2xl xl:text-3xl mt-3 text-slate-100 md:text-4xl">
                {contact.title}
              </h1>
              <p className="text-center text-lg md:text-2xl md:mt-3 md:leading-relaxed text-slate-200 mt-1 tracking-wide leading-normal lg:text-base xl:text-xl ">
                {contact.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
