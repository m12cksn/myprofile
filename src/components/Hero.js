import React from "react";
import Image from "next/image";
import About from "@/components/About";
import Service from "@/components/Services";
import Work from "@/components/Work";
import Footer from "@/components/Footer";
import "../app/globals.css";
import { FaCircle } from "react-icons/fa";
import AboutMe from "./AboutMe";

export default function Hero() {
  return (
    <>
      <AboutMe />
    </>
  );
}
