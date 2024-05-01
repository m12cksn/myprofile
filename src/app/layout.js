import "./globals.css";
import { Quicksand } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata = {
  title: "imSetiawan",
  description: "Your Digital Solution",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${quicksand.className} bg-third`}>
        <main className="">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
