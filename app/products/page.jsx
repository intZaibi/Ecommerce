"use client"
import Products from "@/components/Products";
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import React, { useState } from "react";

export default function ProductPage() {

  const [filterValue, setFilterValue] = useState("");

  const filter = (e) =>{
    setFilterValue(e.target.innerText)
    // console.log(filterValue)
  }

  return (
    <>
    <Navbar/>
    <div className="max-w-full mt-40">
      <div className="mx-auto px-8 md:px-0 lg:py-0 lg:px-[72px] sm:max-w-xl md:max-w-full lg:max-w-7xl">
        <div
          id="banner"
          className="w-full bg-[url('/Accessories.webp')] mb-10 bg-cover bg-no-repeat flex justify-center items-center lg:h-64 h-36 rounded-[32px]"
        >
          <h1 className="text-center text-3xl lg:text-5xl font-bold text-shadow text-white">
            Accessories
          </h1>
        </div>

      </div>
        <div className="lg:px-48 px-7 bg-white min-h-[60vh] w-full pt-10 pb-20">
      <div className="mx-auto px-8 md:px-0 lg:py-0 sm:max-w-xl md:max-w-full lg:max-w-7xl flex">
          <div id="categories" className="hidden  lg:w-[250px] lg:flex lg:h-max lg:py-12 bg-white px-6 mr-10 rounded-3xl py-6 shadow-[0_8px_20px_#080f340f] flex-col">
            <h1 className="text-xl font-bold">Sort by</h1>
            <hr />
            <br />
            <h1 className="text-xl font-bold mb-4 mr-20">Categories</h1>
            <p onClick={filter} id="productID" className=" mb-3 cursor-pointer flex">
              Accessories
              <img
                src="/arrowIcon.svg"
                id="arrow"
                className="ml-[2px] mt-[5px] size-3"
              />
            </p>
            <p onClick={filter} id="productID" className=" mb-3 cursor-pointer flex">
              Computers
              <img
                src="/arrowIcon.svg"
                id="arrow"
                className="ml-[2px] mt-[5px] size-3"
              />
            </p>
            <p onClick={filter} id="productID" className=" mb-3 cursor-pointer flex">
              Smartphones
              <img
                src="/arrowIcon.svg"
                id="arrow"
                className="ml-[2px] mt-[5px] size-3"
              />
            </p>
            <p onClick={filter} id="productID" className=" mb-3 cursor-pointer flex">
              Tablets
              <img
                src="/arrowIcon.svg"
                id="arrow"
                className="ml-[2px] mt-[5px] size-3"
              />
            </p>
            <p onClick={filter} id="productID" className=" mb-3 cursor-pointer flex">
              Screens
              <img
                src="/arrowIcon.svg"
                id="arrow"
                className="ml-[2px] mt-[5px] size-3"
              />
            </p>
            <p onClick={filter} id="productID" className="font-medium text-red-500 mb-3 cursor-pointer flex">
              Reset Filter
            </p>
          </div>
          <div className="flex gap-5 flex-wrap">
          <Products filterValue={filterValue}/>
          </div>
        </div>
        </div>
    </div>
    <Footer/>
    </>
  );
}
