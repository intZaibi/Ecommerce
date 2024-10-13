import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <>
      <div className="pt-10 pb-5 w-full">
        <hr className="mt-16 mb-10" />
        <div className="mx-auto px-8 md:px-24 lg:px-[70px] lg:py-0 sm:max-w-xl md:max-w-full lg:max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 lg:justify-between items-center lg:items-start">
            <div id="left" className="flex lg:justify-center self-start lg:self-auto lg:items-center flex-col">
              <Link href="/" className="-m-1.5 p-1.5 flex lg:justify-center">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                  className="w-16 h-16"
                />
              </Link>
              <div className="flex mt-5">
                <Image
                  src="/paypalIcon.svg"
                  width={50}
                  height={50}
                  alt="paypal logo"
                  className="w-auto h-auto"
                />
                <Image
                  src="/master-card-badge-shop-x-webflow-template.svg"
                  width={50}
                  height={50}
                  alt="master card logo"
                  className="w-auto h-auto"
                />
                <div className="w-12">
                  <Image
                    src="/payment-shop-pay.svg"
                    width={10}
                    height={50}
                    alt="payment-shop-pay logo"
                    className="h-auto w-auto"
                  />
                </div>
              </div>
            </div>
            <div id="mid">
              <h1 className="ml-5 lg:ml-0 pr-14 lg:p-0 text-2xl font-semibold">Menu</h1>
              <div className="flex pl-5 lg:p-0 lg:gap-0 gap-5 my-3">
                <a href="/about" className="w-40">
                  About
                </a>
                <a href="/" className="w-40">
                  Guarantee
                </a>
              </div>
              <div className="flex pl-5 lg:p-0 lg:gap-0 gap-5 my-3">
                <a href="/products" className="w-40">
                  Products
                </a>
                <a href="/" className="w-40">
                  Refurbished Loopix
                </a>
              </div>
              <div className="flex pl-5 lg:p-0 lg:gap-0 gap-5 my-3">
                <a href="/contact" className="w-40">
                  Contact
                </a>
                <a href="/" className="w-40">
                  FAQ
                </a>
              </div>
            </div>
            <div id="right">
              <h1 className="ml-4 mb-5 text-2xl font-semibold">
                Subscribe to our newsletter
              </h1>
              <div className="relative flex items-center justify-center w-full max-w-[24rem]">
                <input
                  type="email"
                  minLength="11"
                  maxLength="30"
                  className="pl-5 pr-36 w-[350px] h-[67px] focus:outline-[#0a0a0a7a] hover:border-[#0a0a0a7a] duration-300 border border-[#0a0a0a1a] flex justify-between items-center shadow-[0_1px_18px_#0a0a0a1d] rounded-full"
                  placeholder="Email Address"
                />
                <button
                  size="sm"
                  className="!absolute right-3 inline bg-[#00cc88] hover:bg-[#00cc88c1] px-6 py-3 rounded-full text-white hover:-translate-y-[2px] duration-200 font-semibold ease-out"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="lg:pl-7 lg:py-10 pt-10 flex flex-col">
            <h1 className="font-semibold text-xl mb-6">
              Explore our categories
            </h1>
            <div className="lg:w-7xl flex-wrap gap-8 flex lg:justify-between">
              <Link href="/products" id="dropdownMenuItem" className="flex items-center">
                <div className="w-16 h-16 rounded-xl mr-4 bg-[#FEE0E1]">
                  <img src="/accessoires-removebg-preview.png" />
                </div>
                <div className="flex flex-col justify-center mb-[2px]">
                  <h1 className="font-semibold text-[16px]">Accessories</h1>
                  <p className=" flex text-sm">
                    Explore
                    <img
                      src="/arrowIcon.svg"
                      id="arrow"
                      className="ml-[2px] mt-[5px] size-3"
                    />
                  </p>
                </div>
              </Link>

              <Link href="/products" id="dropdownMenuItem" className="flex items-center">
                <div className="w-16 h-16 rounded-xl mr-4 bg-[#DEEBFD]">
                  <img src="/computers-removebg-preview.png" />
                </div>
                <div className="flex flex-col justify-center mb-[2px]">
                  <h1 className="font-semibold text-[16px]">Computers</h1>
                  <p className=" flex text-sm">
                    Explore
                    <img
                      src="/arrowIcon.svg"
                      id="arrow"
                      className="ml-[2px] mt-[5px] size-3"
                    />
                  </p>
                </div>
              </Link>

              <Link href="/products" id="dropdownMenuItem" className="flex items-center">
                <div className="w-16 h-16 rounded-xl mr-4 bg-[#FFF4E8]">
                  <img src="/smartphones-removebg-preview.png" />
                </div>
                <div className="flex flex-col justify-center mb-[2px]">
                  <h1 className="font-semibold text-[16px]">Smartphones</h1>
                  <p className=" flex text-sm">
                    Explore
                    <img
                      src="/arrowIcon.svg"
                      id="arrow"
                      className="ml-[2px] mt-[5px] size-3"
                    />
                  </p>
                </div>
              </Link>

              <Link href="/products" id="dropdownMenuItem" className="flex items-center">
                <div className="w-16 h-16 rounded-xl mr-4 bg-[#DAFEE4]">
                  <img src="/tablets-removebg-preview.png" />
                </div>
                <div className="flex flex-col justify-center mb-[2px]">
                  <h1 className="font-semibold text-[16px]">Tablets</h1>
                  <p className=" flex text-sm">
                    Explore
                    <img
                      src="/arrowIcon.svg"
                      id="arrow"
                      className="ml-[2px] mt-[5px] size-3"
                    />
                  </p>
                </div>
              </Link>

              <Link href="/products" id="dropdownMenuItem" className="flex items-center">
                <div className="w-16 h-16 rounded-xl mr-4 bg-[#D5C7F5]">
                  <img src="/screens-removebg-preview.png" />
                </div>
                <div className="flex flex-col justify-center mb-[2px]">
                  <h1 className="font-semibold text-[16px]">Screens</h1>
                  <p className=" flex text-sm">
                    Explore
                    <img
                      src="/arrowIcon.svg"
                      id="arrow"
                      className="ml-[2px] mt-[5px] size-3"
                    />
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <hr className="mt-10 mb-6" />
          <p className="w-full text-center">© Copyright 2022</p>
        </div>
      </div>
    </>
  );
}
