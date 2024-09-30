import Image from "next/image";
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import React from "react";

export default function ProductDetail({params}) {
  
  return (
    <div>
      <Navbar />
      <div className="md:px-10 mt-40 lg:px-10 max-w-full">
        <div className="mx-auto px-8 md:px-0 lg:py-0 sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
          <div id="container" className="gap-5 row-gap-8 grid lg:grid-cols-2">
          <div id="right" className="relative flex flex-col justify-end">
              <Image src='/SamsungGalaxyA50-A.webp' width={1000} height={1000} />
              <div className="flex gap-4 flex-wrap">
                <Image src="/SamsungGalaxyA50-A.webp" width={100} height={100} className="min-w-32 min-h-24 rounded-[30px] " />
                <Image src="/SamsungGalaxyA50-A.webp" width={100} height={100} className="min-w-32 min-h-24 rounded-[30px] " />
                <Image src="/SamsungGalaxyA50-A.webp" width={100} height={100} className="min-w-32 min-h-24 rounded-[30px] " />
                <Image src="/SamsungGalaxyA50-A.webp" width={100} height={100} className="min-w-32 min-h-24 rounded-[30px] " />
                <Image src="/SamsungGalaxyA50-A.webp" width={100} height={100} className="min-w-32 min-h-24 rounded-[30px] " />
              </div>
            </div>
            <div id="left" className="flex flex-col justify-center lg:justify-start lg:pt-20 lg:px-5">
              <h2 className="mb-[10px] font-bold text-2xl sm:text-4xl md:text-4xl lg:text-4xl sm:leading-none md:leading-none lg:leading-[1.10]">
              Samsung Galaxy A50 2019
              </h2>
              <h2 className="my-4 font-bold text-2xl sm:text-2xl md:text-2xl lg:text-2xl sm:leading-none md:leading-none lg:leading-[1.10]">
              $ 109.00
              </h2>
              <fieldset className="my-4">
              <label htmlFor="memoryVariantBtn1">
                <input type="radio" name="memoryVariant" id="memoryVariantBtn1" className="w-9 peer sr-only"/>
                <div className="inline peer-checked:bg-blue-gray-600 py-4 rounded-full px-7 mr-4 shadow-lg shadow-[#080f343a]">128</div>
              </label>
              <label htmlFor="memoryVariantBtn2">
                <input type="radio" name="memoryVariant" id="memoryVariantBtn2" className="w-9 peer sr-only"/>
                <div className="inline peer-checked:bg-blue-gray-600 py-4 rounded-full px-7 mr-4 shadow-lg shadow-[#080f343a]">64</div>
              </label>
              </fieldset>
              
              <fieldset className="mt-7 mb-14">
              <label htmlFor="colorBtn1" className="peer-checked:bg-gray-400 py-4 rounded-full px-7 mr-4 shadow-lg shadow-[#080f343a]">Black
                <input type="radio" name="color" id="colorBtn1" className="w-9 peer"/>
              </label>
              <label htmlFor="colorBtn2" className="peer-checked:bg-gray-400 py-4 rounded-full px-7 mr-4 shadow-lg shadow-[#080f343a]">Gray
                <input type="radio" name="color" id="colorBtn2" className="w-9 peer"/>
              </label>
              </fieldset>
              <div className="flex gap-3 flex-col lg:flex-row">
              <button className="inline bg-[#00cc88] shadow-[#00cc894f] shadow-lg hover:shadow-xl hover:shadow-[#00cc895d] px-2 py-5 rounded-full w-full lg:w-44 text-lg text-white hover:-translate-y-1 duration-300 ease-out">
                Add to cart
              </button>
              <button className="inline text-[#00cc88] shadow-[#080f340f] shadow-lg hover:shadow-xl hover:shadow-[#080f341f] px-2 py-5 rounded-full w-full lg:w-44 text-lg bg-white hover:-translate-y-1 duration-300 ease-out">
                Buy it now
              </button>
              </div>
              <br />
              <hr className="border-gray-600 mt-6"/>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
