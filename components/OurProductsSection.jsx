import Image from "next/image";
import React from "react";

export default function Commitments() {
  return (
    <div className="md:px-10 lg:px-10 py-10 max-w-full">
      <div className="mx-auto px-8 md:px-24 lg:px-[70px] lg:py-0 sm:max-w-xl md:max-w-full lg:max-w-7xl">
        <div className="flex flex-col items-center">
        <p className="mb-3 font-semibold text-[#00cc89]">Our Products</p>
        <h2 className="mb-10 font-bold text-3xl">Here are our star products</h2>
        </div>
        <div id="cards" className="flex lg:flex-row flex-col justify-between items-center gap-7">
    
          <div
            id="card1"
            className="flex py-10 hover:scale-[1.03] w-full lg:w-72 lg:h-[370px] flex-col lg:items-center border-[#eff0f6] bg-white shadow-[0_8px_20px_#080f340f] lg:py-0 border border-solid rounded-3xl lg:rounded-[40px] duration-300 ease-in-out"
          >
            <div className="flex justify-center lg:p-10 pb-10">
              <Image
                src="/AppleiPhoneXrNoir-A_1920x.webp"
                width={100}
                height={100}
                alt="main img"
                className="rounded-3xl lg:w-44 lg:h-44 self-start"
              />
            </div>
            <div className="lg:pr-8">
              <h3 className="px-4 mb-2 font-bold text-lg text-center lg:text-start">Apple iPhone XR</h3>
            </div>
          </div>
          
          <div
            id="card2"
            className="flex py-10 hover:scale-[1.03] lg:w-72 lg:h-[370px] flex-col lg:items-center border-[#eff0f6] bg-white shadow-[0_8px_20px_#080f340f] lg:py-0 border border-solid rounded-3xl lg:rounded-[40px] duration-300 ease-in-out"
          >
            <div className="flex justify-center lg:p-10 pb-10">
              <Image
                src="/dell-precision-t5810-workstation-1588845051_1920x.jpg"
                width={100}
                height={100}
                alt="main img"
                className="rounded-3xl lg:w-44 lg:h-44 self-start"
              />
            </div>
            <div className="lg:pr-8">
              <h3 className="px-4 mb-2 font-bold text-lg text-center lg:text-start">Dell Precision 5810 INTEL XEON E5 1620 V3</h3>
            </div>
          </div>

          <div
            id="card3"
            className="flex py-10 hover:scale-[1.03] lg:w-72 lg:h-[370px] flex-col lg:items-center border-[#eff0f6] bg-white shadow-[0_8px_20px_#080f340f] lg:py-0 border border-solid rounded-3xl lg:rounded-[40px] duration-300 ease-in-out"
          >
            <div className="flex justify-center lg:p-10 pb-10">
              <Image
                src="/1_1920x.webp"
                width={100}
                height={100}
                alt="main img"
                className="rounded-3xl lg:w-44 lg:h-44 self-start"
              />
            </div>
            <div className="lg:pr-8">
              <h3 className="px-4 mb-2 font-bold text-lg text-center lg:text-start">Dell Precision 5820 INTEL XEON W 2123</h3>
            </div>
          </div>

          <div
            id="card4"
            className="flex py-10 hover:scale-[1.03] lg:w-72 lg:h-[370px] flex-col lg:items-center border-[#eff0f6] bg-white shadow-[0_8px_20px_#080f340f] lg:py-0 border border-solid rounded-3xl lg:rounded-[40px] duration-300 ease-in-out"
          >
            <div className="flex justify-center lg:p-10 pb-10">
              <Image
                src="/DuoLenovoClavieretSourisFilaireUSB_1920x.webp"
                width={100}
                height={100}
                alt="main img"
                className="rounded-3xl lg:w-44 lg:h-44 self-start"
              />
            </div>
            <div className="lg:pr-8">
              <h3 className="px-4 mb-2 font-bold text-lg text-center lg:text-start">Duo Lenovo Clavier AZERTY et Souris Filaires USB</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
