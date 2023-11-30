import "./globals.css";
import { Oswald } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const oswald = Oswald({ subsets: ["latin"] });

export const metadata = {
  title: "imSetiawan",
  description: "Your Digital Solution",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <main>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
