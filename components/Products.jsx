"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Products(props) {
  const [filterCategory, setFilterCategory] = useState(null);

  useEffect(() => {
    const filterFunc = () => {
      switch (props.filterValue) {
        case "Accessories":
          setFilterCategory(2);
          break;
        case "Computers":
          setFilterCategory(3);
          break;
        case "Smartphones":
          setFilterCategory(4);
          break;
        case "Tablets":
          setFilterCategory(5);
          break;
        case "Screens":
          setFilterCategory(6);
          break;
        default:
          setFilterCategory(null);
      }
    };
    filterFunc();
  }, [props.filterValue]);

  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/api/Allproducts/client"
        );
        setAllProducts(res.data.result);
      } catch (err) {
        console.log("Error:", err.response);
      }
    };

    fetchProducts();
  }, []);
  
  return (
    <>
      {allProducts
        .filter((item) => {
          return filterCategory ? item.CategoryID === filterCategory : true;
        }).length > 0 ? allProducts
        .filter((item) => {
          return filterCategory ? item.CategoryID === filterCategory : true;
        })
        .map((product, idx) => (
          <div key={idx} className="lg:w-[225px] lg:max-h-[350px]">
            <Link
              href="/products/productDetail"
              id="arrow-anime"
              className="flex py-5 px-5 w-[85vw] lg:w-auto lg:h-[100%] overflow-hidden lg:px-3 hover:scale-[1.03] flex-col lg:items-center border-[#eff0f6] bg-white shadow-[0_8px_20px_#080f340f] lg:py-0 border border-solid rounded-3xl duration-300 ease-in-out"
            >
              {product.ImageURLs.map((element, i) => {
                if (
                  element.includes("_1.") ||
                  element.includes("_A.") ||
                  element.includes("_a.") ||
                  element.includes("-1.") ||
                  element.includes("_main.") ||
                  element.includes("-main.")
                )
                  return (
                    <div className="flex justify-center lg:p-5 pb-5" key={i}>
                      <Image
                        src={`${element}`}
                        width={100}
                        height={70}
                        alt="main img"
                        className="rounded-3xl lg:w-auto mb-6 lg:h-auto "
                      />
                    </div>
                  );
              })}
              <div className="mt-auto mb-0">
                <p>Price: ${product.Price}</p>
                <h3 className=" mb-2 font-bold text-lg lg:text-start">
                  {product.ProductName}
                </h3>
                <div className="text-[#00cc89] mb-4 cursor-pointer flex">
                  Discover
                  <img
                    alt=""
                    src="/arrowIcongreen.svg"
                    id="arrow"
                    className="ml-[3px] mt-[6px] text-[#00cc89] size-3"
                  />
                </div>
              </div>
            </Link>
          </div>
        )): <p className=" self-center">No Product Available Yet</p>}
    </>
  );
}
