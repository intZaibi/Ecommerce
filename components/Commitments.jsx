import Image from "next/image";
import React from "react";

export default function Commitments() {
  return (
    <div className="md:px-10 lg:px-10 py-10 max-w-7xl">
      <div className="mx-auto px-8 md:px-24 lg:px-8 lg:py-0 sm:max-w-xl md:max-w-full lg:max-w-7xl">
        <div className="flex flex-col items-center">
        <p className="mb-3 font-semibold text-[#00cc89]">Our Commitments</p>
        <h2 className="mb-10 font-bold text-3xl">Why buy from us?</h2>
        </div>
        <div id="cards" className="flex lg:flex-row flex-col justify-between items-center gap-7">
          <div
            id="card1"
            className="flex lg:flex-row py-10 hover:scale-[1.03] flex-col justify-center lg:items-center border-[#eff0f6] bg-white shadow-[0_8px_20px_#080f340f] lg:py-px border border-solid rounded-3xl lg:rounded-[40px] duration-300 ease-in-out"
          >
            <div className="flex justify-center lg:p-10 pb-10 lg:w-[50%] h-[50%] lg:h-[auto]">
              <Image
                src="/icon-1-values-marketing-template.svg"
                width={180}
                height={180}
                alt="main img"
                className="rounded-3xl lg:w-44 max-w-24 self-start"
              />
            </div>
            <div className="lg:pr-8 lg:w-[50%]">
              <h3 className="mb-2 font-bold text-2xl text-center lg:text-start">Quality</h3>
              <p className="px-6 lg:px-0 font-light">All the materials have passed through our hands.</p>
            </div>
          </div>

          <div
            id="card2"
            className="flex lg:flex-row py-10 hover:scale-[1.03] flex-col justify-center lg:items-center border-[#eff0f6] bg-white shadow-[0_8px_20px_#080f340f] lg:py-0 border border-solid rounded-3xl lg:rounded-[40px] duration-300 ease-in-out"
          >
            <div className="flex justify-center lg:p-10 pb-10 lg:h-[auto] lg:w-[47%] h-[50%]">
              <Image
                src="/icon-2-values-marketing-template.svg"
                width={180}
                height={180}
                alt="main img"
                className="rounded-3xl lg:w-44 max-w-24 self-start"
              />
            </div>
            <div className="lg:pr-8 lg:w-[53%]">
              <h3 className="mb-2 font-bold text-2xl text-center lg:text-start">Satisfaction</h3>
              <p className="px-6 lg:px-0 font-light">Good and very good, we don't have the bad in stock!</p>
            </div>
          </div>

          <div
            id="card3"
            className="flex lg:flex-row py-10 hover:scale-[1.03] flex-col justify-center lg:items-center border-[#eff0f6] bg-white shadow-[0_8px_20px_#080f340f] lg:py-0 border border-solid rounded-3xl lg:rounded-[40px] duration-300 ease-in-out"
          >
            <div className="flex justify-center lg:p-10 pb-10 lg:w-[50%] h-[50%] lg:h-[auto]">
              <Image
                src="/icon-3-values-marketing-template.svg"
                width={180}
                height={180}
                alt="main img"
                className="rounded-3xl lg:w-44 max-w-24 self-start"
              />
            </div>
            <div className="lg:pr-8 lg:w-[50%]">
              <h3 className="mb-2 font-bold text-2xl text-center lg:text-start">Security</h3>
              <p className="px-6 lg:px-0 font-light">Google Pay, Apple pay, Shopify payment, Paypal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
