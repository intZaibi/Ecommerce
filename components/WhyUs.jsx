import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="md:px-10 lg:px-10 max-w-full">
      <div className="mx-auto px-8 md:px-0 lg:py-0 lg:px-[72px] sm:max-w-xl md:max-w-full lg:max-w-7xl">
        <div id="container" className="gap-5 row-gap-8 grid lg:grid-cols-2">
          <div id="left" className="flex flex-col justify-center px-1">
            <p id="WhyUs" className="mb-4 relative text-[#00cc88] pl-9 text-xl font-semibold">Why us?</p>
            <h2 className="mb-[10px] font-bold text-4xl text-gray sm:leading-none md:leading-none lg:leading-[1.10] 800 lg">
            This was created for you: You?
            </h2>
            <p className="mb-2 max-w-full text-gray-600 sm:text-lg md:text-xl lg:text-[17px] lg:text-xl md:leading-7 lg:leading-8 sm:leading-6 ">
            Yes, you, our customers, so that you can benefit from high-quality reconditioned equipment at reduced prices.
            </p>
            <div className="flex flex-col gap-5 mb-12">
            <div className="flex items-center">
            <Image
              src='/greentickicon.svg'
              width={30}
              height={30}
              alt="main img"
            />  
            <p className="ml-3 font-semibold">Products guaranteed for you, our customers!</p>
            </div>
            <div className="flex items-center">
            <Image
              src='/greentickicon.svg'
              width={30}
              height={30}
              alt="main img"
            />  
            <p className="ml-3 font-semibold">Because we are not a Marketplace.</p>
            </div>
            <div className="flex items-center">
            <Image
              src='/greentickicon.svg'
              width={30}
              height={30}
              alt="main img"
            />  
            <p className="ml-3 font-semibold">Because we are nice and our teams are great!</p>
            </div>
            </div>
            <button className="inline bg-[#00cc88] shadow-[#00cc894f] shadow-lg hover:shadow-xl hover:shadow-[#00cc895d] px-2 py-4 lg:py-6 rounded-full w-full lg:w-64 text-lg text-white hover:-translate-y-1 duration-300 ease-out font-semibold">
              Contact us <span></span>
            </button>
          </div>
          <div id="right" className="hidden relative lg:flex md:flex justify-end rounded-[2.5rem] bg-[#00cc88]">
            <Image
              src='/WhyUsImage.webp'
              width={550}
              height={550}
              alt="main img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
