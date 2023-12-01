import Image from "next/image";
import "../app/globals.css";
import Hero from "../components/Hero";
import Whatsapp from "@/components/Whatsapp";

export default function Home() {
  return (
    <div className="bg-third  ">
      <Hero />
      <Whatsapp />
    </div>
  );
}
