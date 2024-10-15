import Link from "next/link";
import React from "react";

export default function MenuBar({ mobileMenuOpen }) {
  return (
    <div
      className={`fixed h-[100vh] ${mobileMenuOpen ? "translate-x-[0]" : "translate-x-[550px]"} lg:hidden md:hidden overflow-hidden duration-500 ease-out scrollbar overflow-y-scroll z-10 min-w-[100vw] top-0 right-0 min-h-screen`}
    >
      <div className="w-[60%] h-[100vh] ml-[40vw] py-14 px-2 shadow-[0_8px_20px_#080f342f] bg-[#fcfcfc]">
        <div className="flex flex-col gap-12 py-20">
        <Link
          href="/about"
          className="text-center bg-[#00cc88] shadow-[#00cc894f] shadow-lg hover:shadow-xl hover:shadow-[#00cc895d] px-2 py-4 rounded-full w-full lg:w-64 text-lg text-white hover:-translate-y-1 duration-300 ease-out"
        >
          About
        </Link>
        <Link
          href="/about"
          className="text-center bg-[#00cc88] shadow-[#00cc894f] shadow-lg hover:shadow-xl hover:shadow-[#00cc895d] px-2 py-4 rounded-full w-full lg:w-64 text-lg text-white hover:-translate-y-1 duration-300 ease-out"
        >
          Products
        </Link>
        <Link
          href="/about"
          className="text-center bg-[#00cc88] shadow-[#00cc894f] shadow-lg hover:shadow-xl hover:shadow-[#00cc895d] px-2 py-4 rounded-full w-full lg:w-64 text-lg text-white hover:-translate-y-1 duration-300 ease-out"
        >
          Contact
        </Link>
        </div>
      </div>
    </div>
  );
}
