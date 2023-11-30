import Image from "next/image";
import "../app/globals.css";
import Hero from "../components/Hero";
import Whatsapp from "@/components/Whatsapp";

export default function Home() {
  return (
    <div className="bg-third md:h-screen lg:h-auto">
      <Hero />
      <Whatsapp />
    </div>
  );
}
