import { Inter } from "next/font/google";
import "./globals.css";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Weith",
  description: "Connect your ethereum wallet with weith, and interact with our web based ethereum wallet.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased h-screen w-full bg-slate-950 overflow-hidden`}>
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]" />
        {children}

        <Link className="fixed bottom-4 right-4 text-4xl text-white hover:scale-105 transition-all duration-200" href={"https://github.com/iAryanK/Weith"} target="_blank"><BsGithub /></Link>
      </body>
    </html>
  );
}
