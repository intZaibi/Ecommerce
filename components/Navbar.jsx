"use client";

import { useState, useRef } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Cart from "./Cart";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [itemsInCart, setItemsInCart] = useState(0);

  const openDropdown = (e) => {
    const dropdown = document.querySelector("#dropdown");
    // console.log(dropdown);
    if (dropdown.classList.contains("hidden"))
      dropdown.classList.remove("hidden");
    dropdown.classList.add("flex");
  };

  const closeDropdown = () => {
    const dropdown = document.querySelector("#dropdown");
    if (!dropdown.classList.contains("hidden"))
      dropdown.classList.remove("flex");
    dropdown.classList.add("hidden");
  };

  return (
    <>
    <header className="top-5 lg:top-8 z-10 fixed px-2 lg:px-auto w-full">
      <nav className="flex justify-between items-center bg-white shadow-[0_8px_20px_#080f340f] mx-auto px-7 lg:px-8 py-3 rounded-full max-w-6xl">
        <div id="logo" className="px-4 flex">
          <Link href="/" className="-m-1.5 p-1.5">
            <span id="arrow" className="sr-only">Your Company</span>
            <img alt="" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" className="w-auto h-10" />
          </Link>
        </div>

        <div
          id="menuList"
          className="reletive md:flex lg:flex justify-between gap-x-16 hidden ml-24 text-black text-lg"
        >
          <Link href="/about">About</Link>
          <Link
            href='/products'
            id="Products"
            className="flex cursor-pointer"
            onMouseOver={openDropdown}
            onMouseLeave={closeDropdown}
          >
            Product
            <ChevronDownIcon id="dropdownarrow" className="mt-0.5 text-black size-5" />
            <div
              id="dropdown"
              className="pl-7 py-10 w-96 top-[3.2rem] flex-col gap-8 rounded-[0_16px_16px_16px] bg-white shadow-[0_40px_20px_#080f341a] absolute hidden z-10"
            >
              <h1 className="font-semibold text-lg">Discover our categories</h1>
              <div id="dropdownMenuItem" className="flex items-center">
                <div className="w-16 h-16 rounded-xl mr-4 bg-[#FEE0E1]">
                <img
                  src="/accessoires-removebg-preview.png"
                  />
                  </div>
                <div className="flex flex-col justify-center mb-[2px]">
                  <h1 className="font-semibold text-[16px]">Accessories</h1>
                  <p className=" flex text-sm">
                    Explore
                    <img src="/arrowIcon.svg" id="arrow" className="ml-[2px] mt-[5px] size-3"/>
                  </p>
                </div>
              </div>

              <div id="dropdownMenuItem" className="flex items-center">
                <div className="w-16 h-16 rounded-xl mr-4 bg-[#DEEBFD]">
                <img
                  src="/computers-removebg-preview.png"
                  />
                  </div>
                <div className="flex flex-col justify-center mb-[2px]">
                  <h1 className="font-semibold text-[16px]">Computers</h1>
                  <p className=" flex text-sm">
                    Explore
                    <img src="/arrowIcon.svg" id="arrow" className="ml-[2px] mt-[5px] size-3"/>
                  </p>
                </div>
              </div>

              <div id="dropdownMenuItem" className="flex items-center">
                <div className="w-16 h-16 rounded-xl mr-4 bg-[#FFF4E8]">
                <img
                  src="/smartphones-removebg-preview.png"
                  />
                  </div>
                <div className="flex flex-col justify-center mb-[2px]">
                  <h1 className="font-semibold text-[16px]">Smartphones</h1>
                  <p className=" flex text-sm">
                    Explore
                    <img src="/arrowIcon.svg" id="arrow" className="ml-[2px] mt-[5px] size-3"/>
                  </p>
                </div>
              </div>

              <div id="dropdownMenuItem" className="flex items-center">
                <div className="w-16 h-16 rounded-xl mr-4 bg-[#DAFEE4]">
                <img
                  src="/tablets-removebg-preview.png"
                  />
                  </div>
                <div className="flex flex-col justify-center mb-[2px]">
                  <h1 className="font-semibold text-[16px]">Tablets</h1>
                  <p className=" flex text-sm">
                    Explore
                    <img src="/arrowIcon.svg" id="arrow" className="ml-[2px] mt-[5px] size-3"/>
                  </p>
                </div>
              </div>

              <div id="dropdownMenuItem" className="flex items-center">
                <div className="w-16 h-16 rounded-xl mr-4 bg-[#D5C7F5]">
                <img
                  src="/screens-removebg-preview.png"
                  />
                  </div>
                <div className="flex flex-col justify-center mb-[2px]">
                  <h1 className="font-semibold text-[16px]">Screens</h1>
                  <p className=" flex text-sm">
                    Explore
                    <img src="/arrowIcon.svg" id="arrow" className="ml-[2px] mt-[5px] size-3"/>
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div
          id="loginBtn"
          className="flex justify-center items-center hover:bg-[#00cc89] shadow-[0_8px_18px_#080f340f] ml-20 lg:ml-0 p-2.5 rounded-xl w-14 h-14 text-black hover:text-white duration-200"
        >
          <Link href="/userAccount/login/signIn">
            <FontAwesomeIcon icon={faUser} className="w-7 h-7" />
          </Link>
        </div>

        <div
          id="cart"
          className="relative cursor-pointer flex justify-center items-center hover:bg-[#00cc89] shadow-[0_8px_18px_#080f340f] pt-1 rounded-xl w-14 h-14 text-[#00cc89] hover:text-white duration-200"
        >
            <FontAwesomeIcon icon={faCartShopping} className="w-7 h-7" />
          <div
            id="itemsInCart"
            className="top-[-6px] right-[-4px] absolute bg-[#00cc89] rounded-full w-4 h-4 font-semibold text-center text-white text-xs"
          >
            {itemsInCart}
          </div>
        </div>

        <div
          id="menuBarIcon"
          className="flex justify-center lg:hidden bg-[#00cc89] shadow-[0_8px_18px_#00cc897a] rounded-full w-10 h-10 text-white cursor-pointer"
        >
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex justify-center items-center -m-2.5 p-2.5 rounded-md"
          >
            <Bars3Icon aria-hidden="true" className="w-6 h-6" />
          </button>
        </div>
      </nav>
    </header>
    <Cart />
    </>
  );
}
