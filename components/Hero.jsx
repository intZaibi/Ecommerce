import Image from "next/image";
import React from "react";
import mainImage from '../public/main.webp';


export default function Hero() {
  return (
    <div className="md:px-10 lg:px-10 max-w-full">
      <div className="mx-auto px-8 md:px-0 lg:py-0 sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        <div id="container" className="gap-5 row-gap-8 grid lg:grid-cols-2">
          <div id="left" className="flex flex-col justify-center px-1">
            <h2 className="mb-[10px] font-bold text-3xl sm:text-4xl md:text-[53px] sm:leading-none md:leading-none lg:leading-[1.10]">
              What if second-hand computing became fashionable?
            </h2>
            <p className="mb-10 max-w-md text-gray-600 sm:text-lg md:text-xl lg:text-[17px] md:leading-7 lg:leading-8 sm:leading-6">
              Buy these models that were "revolutionary" only 4 years ago... but
              much, much cheaper 😉
            </p>
            <button className="inline bg-[#00cc88] shadow-[#00cc894f] shadow-lg hover:shadow-xl hover:shadow-[#00cc895d] px-2 py-6 rounded-full w-full lg:w-64 text-lg text-white hover:-translate-y-1 duration-300 ease-out">
              Discover our catalog
            </button>
          </div>
          <div id="right" className="relative flex justify-end">
            <Image
              src={mainImage}
              width={500}
              height={500}
              alt="main img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
