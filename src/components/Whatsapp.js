import React from "react";
import Link from "next/link";
import { FaWhatsappSquare } from "react-icons/fa";

const Whatsapp = () => {
  return (
    <Link
      href="https://wa.me/628131234567?"
      className="fixed bottom-5 right-5 text-center text-5xl lg:text-7xl bg-white rounded-md text-green-500 "
    >
      <FaWhatsappSquare />
    </Link>
  );
};

export default Whatsapp;
